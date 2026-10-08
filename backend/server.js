// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose'); 

const app = express();

app.set('trust proxy', true);
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const loginAttempts = {};
const MAX_ATTEMPTS = 3;
const LOCKOUT_TIME = 5 * 60 * 1000;

// Connect mongodb
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected securely to Free MongoDB Cloud Database'))
.catch(err => console.error('MongoDB database connection error:', err));

// Data schema layout
const GlobalStatsSchema = new mongoose.Schema({
    metricName: {
        type: String,
    default:
        'pageViews'
    },
    count: {
        type: Number,
    default:
        0
    }
});
const GlobalStat = mongoose.model('GlobalStat', GlobalStatsSchema);

const VisitorIpSchema = new mongoose.Schema({
    ipAddress: {
        type: String,
        unique: true,
        required: true
    },
    visitCount: {
        type: Number,
    default:
        0
    },
    firstVisit: {
        type: Date,
    default:
        Date.now
    },
    lastVisit: {
        type: Date,
    default:
        Date.now
    }
});
const Visitor = mongoose.model('Visitor', VisitorIpSchema);

// Verify the JWT token before serving data
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Access denied. No token provided.'
        });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({
                success: false,
                message: 'Invalid or expired token.'
            });
        }
        req.user = user;
        next();
    });
};

// Log into mongodb
app.post('/api/log-view', async(req, res) => {
    try {
        const clientIp = req.ip || req.headers['x-forwarded-for'] || 'unknown';

        // Increment raw overall hit metrics counter
        await GlobalStat.findOneAndUpdate({
            metricName: 'pageViews'
        }, {
             \ $inc: {
                count: 1
            }
        }, {
            upsert: true,
            new: true
        });

        // Create or update this specific user IP profile
        await Visitor.findOneAndUpdate({
            ipAddress: clientIp
        }, {
             \ $inc: {
                visitCount: 1
            },
             \ (set: {
                lastVisit: new Date()
            },  \ )setOnInsert: {
                firstVisit: new Date()
            }
        }, {
            upsert: true,
            new: true
        });

        return res.json({
            success: true
        });
    } catch (error) {
        console.error("Database view logging failed:", error);
        return res.status(500).json({
            success: false,
            message: "Logging failed internally"
        });
    }
});

// Private analytical profiles
app.get('/api/protected-data', authenticateToken, async(req, res) => {
    try {
        // Query stats from cloud database endpoints
        const rawHitMetric = await GlobalStat.findOne({
            metricName: 'pageViews'
        });
        const fullIpLogs = await Visitor.find({}).sort({
            lastVisit: -1
        });

        const totalViews = rawHitMetric ? rawHitMetric.count : 0;
        const totalUnique = fullIpLogs.length;

        return res.json({
            success: true,
            secretContent: {
                bio: "Male",
                email: "danny.chan@hotmail.com",
                privateNote: "This data is securely pulled from the backend using a valid JWT.",

                // Exposes raw calculations strictly behind the dashboard encryption barrier
                totalPageViews: totalViews,
                totalUniqueVisitors: totalUnique,
                ipLogRegistry: fullIpLogs
            }
        });
    } catch (error) {
        console.error("Database log retrieval failed:", error);
        return res.status(500).json({
            success: false,
            message: "Data extraction error"
        });
    }
});

// Verify passcode route
app.post('/api/verify-passcode', (req, res) => {
    const { passcode } = req.body;
    const ip = req.ip || 'unknown';

    if (!loginAttempts[ip]) {
        loginAttempts[ip] = {
            attempts: 0,
            lockoutUntil: null
        };
    }

    const record = loginAttempts[ip];
    const currentTime = Date.now();

    if (record.lockoutUntil && currentTime < record.lockoutUntil) {
        const timeLeft = Math.ceil((record.lockoutUntil - currentTime) / 1000);
        return res.status(429).json({
            success: false,
            message: `Too many failed attempts. You are locked out. Try again in ${timeLeft} seconds.`,
            isLockedOut: true
        });
    }

    if (record.lockoutUntil && currentTime >= record.lockoutUntil) {
        record.attempts = 0;
        record.lockoutUntil = null;
    }

    if (passcode === process.env.CORRECT_PASSCODE) {
        delete loginAttempts[ip];
        const token = jwt.sign({
            unlocked: true
        }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });
        return res.json({
            success: true,
            token
        });
    }

    record.attempts += 1;

    if (record.attempts >= MAX_ATTEMPTS) {
        record.lockoutUntil = currentTime + LOCKOUT_TIME;
        return res.status(429).json({
            success: false,
            message: `Too many failed attempts. You have been locked out for 5 minutes.`,
            isLockedOut: true
        });
    }

    const attemptsLeft = MAX_ATTEMPTS - record.attempts;
    return res.status(401).json({
        success: false,
        message: `Incorrect passcode. You have ${attemptsLeft} ${attemptsLeft === 1 ? 'attempt' : 'attempts'} left.`,
        isLockedOut: false,
        attemptsLeft
    });
});

// Healthcheck for backend wake up
app.get('/api/health', (req, res) => {
    return res.status(200).json({
        status: 'awake',
        timestamp: new Date()
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
