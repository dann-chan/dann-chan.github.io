// frontend/src/pages/Profile/Profile.jsx
import React from 'react';
import './Profile.css';

const ProfilePage = ({ secretData, onLogout }) => {
  
  const profileData = {
    name: "Danny Chan",
    title: "Senior Technical Product Manager & Solutions Architect",
    location: "Toronto, Canada",
    avatar: "https://1drv.ms/i/c/3bb4dc98896970fa/IQQ2hU-U9W3TQo4xcdaV_gBQASbOI9s-lQpb6bMEb2ivV1E",
    bio: secretData?.bio || "5 years of specialized experience strategizing enterprise AI initiatives, securing major fundings, and gaining high-level executive recognition. Historically notable for designing and deploying the premier AI forecasting infrastructure for Bell's CCaaS. Proven adept at managing capital budgets and leading cross-functional engineering teams to deliver complex, multi-million dollar software projects.",
    
    skills: [ 
      "Technical Product Management", "Cross-functional Leadership", "Sprint Planning & Roadmapping", 
      "Crisis Mitigation & Risk Management", "Agile & Scrum Methodologies", "Full Stack Development", 
      "Frontend (React & Next.js)", "Backend (Node.js & Python)", "Databases (SQL, MongoDB)", 
      "Cloud & DevOps (AWS, Docker, Git)", "System Architecture", "API Design & Integration"
    ],
    
    experience: [
      {
        role: "Senior Solutions Architect & Program Manager",
        company: "Enterprise AI Infrastructure Group (Bell CCaaS Project)",
        period: "2021 - Present",
        description: "Designed, tested, and deployed premier predictive artificial intelligence forecasting systems. Championed technical roadmaps and coordinated cross-functional engineering teams to complete multi-million dollar software rollouts."
      },
      {
        role: "Technical Product Manager",
        company: "Solutions Contracting & Software Management",
        period: "2019 - 2021",
        description: "Managed full lifecycle development structures, maintained capital budgets, coordinated scrum ceremonies, and acted as an executive bridge for business requirements."
      }
    ],
    
    education: [
      {
        degree: "Bachelor of Science / Technical Specialization",
        school: "University Ecosystem",
        year: "Graduated"
      }
    ]
  };

  return (
    <div className="profile-container">
      {/* Top Header Section */}
      <header className="profile-header">
        <div className="avatar-layout-group">
          <div className="avatar-wrapper">
            <img src={profileData.avatar} alt={profileData.name} className="profile-avatar" />
          </div>
          <div className="header-info">
            <h1>{profileData.name}</h1>
            <h2>{profileData.title}</h2>
            <p className="location">📍 {profileData.location}</p>
          </div>
        </div>
        
        {/* 🚪 Secure Logout Action Trigger */}
        <button className="profile-logout-btn" onClick={onLogout}>
          Secure Sign Out
        </button>
      </header>

      {/* Center-Aligned Contact Bar Section */}
      <section className="profile-contact">
        <span className="contact-item"><strong>Email:</strong> chan.danny@hotmail.com</span>
        <span className="contact-divider">•</span>
        <span className="contact-item"><strong>Phone:</strong> 647-239-1036</span>
        <span className="contact-divider">•</span>
        <span className="contact-item">
          <strong>Web:</strong> <a href="https://dann-chan.github.io" target="_blank" rel="noreferrer">dann-chan.github.io</a>
        </span>
      </section>

      {/* Main Content Layout */}
      <div className="profile-body">
        {/* Left Side: About & Experience */}
        <main className="profile-main">
          <section className="profile-section">
            <h3>About</h3>
            <p className="bio-text">{profileData.bio}</p>
          </section>

          <section className="profile-section">
            <h3>Experience</h3>
            {profileData.experience.map((job, index) => (
              <div key={index} className="experience-item">
                <div className="item-header">
                  <h4>{job.role}</h4>
                  <span className="item-date">{job.period}</span>
                </div>
                <h5>{job.company}</h5>
                <p>{job.description}</p>
              </div>
            ))}
          </section>

          <section className="profile-section">
            <h3>Education</h3>
            {profileData.education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="item-header">
                  <h4>{edu.degree}</h4>
                  <span className="item-date">{edu.year}</span>
                </div>
                <h5>{edu.school}</h5>
              </div>
            ))}
          </section>
        </main>

        {/* Right Side: Skills Sidebar */}
        <aside className="profile-sidebar">
          <section className="profile-section">
            <h3>Skills</h3>
            <div className="skills-tags">
              {profileData.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default ProfilePage;
