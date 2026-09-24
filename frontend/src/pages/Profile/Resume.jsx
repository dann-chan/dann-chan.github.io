// frontend/src/pages/Profile/resume.jsx
import React from 'react';

const ResumeTab = ({ secretData }) => {
  const profileData = {
    name: "Danny Chan",
    title: "Senior Solutions Architect & Program Manager",
    location: "Toronto, Canada",
    avatar: "https://1drv.ms/i/c/3bb4dc98896970fa/IQQ2hU-U9W3TQo4xcdaV_gBQASbOI9s-lQpb6bMEb2ivV1E",
    bio: "5 years of specialized experience strategizing enterprise AI initiatives, securing major fundings, and gaining high-level executive recognition. Historically notable for designing and deploying the premier AI forecasting infrastructure for Bell's CCaaS. Proven adept at managing capital budgets and leading cross-functional engineering teams to deliver complex, multi-million dollar software projects.",
    
    skills: [ 
      "Technical Product Management", "Cross-functional Leadership", "Sprint Planning & Roadmapping", 
      "Crisis Mitigation & Risk Management", "Agile & Scrum Methodologies", "Full Stack Development", 
      "Frontend (React & Next.js)", "Backend (Node.js & Python)", "Databases (SQL, MongoDB)", 
      "Cloud & DevOps (AWS, Docker, Git)", "System Architecture", "API Design & Integration"
    ],
    
    experience: [ 
      { 
        company: "Bell Canada",
        // Array of roles allows multiple job histories under the same company heading
        roles: [
          {
            role: "Senior Solutions Architect", 
            period: "2023 - 2026", 
            description: "• Process Engineer – System Integration & Design, CMO & FMO mapping, Operation Workflows\n• Program Manager – Budget & Funding Management, AI Strategic Initiative Planning\n• Network & Security Architecture – SDWAN, DDoS & Firewall Solutioning"
          },
          {
            role: "Senior Developer, Full Stack", 
            period: "2017 - 2023", 
            description: "• SQL Developer– MSSQL, Oracle, PostgreSQL\n• SQL Server Administrator –MSSQL Server MLS integrated AI LLM (via Python)\n• RPA - Automate BPA, Blue Prism, Automation Anywhere\n• Data Analyst – AI Forecast Reporting"
          }
        ]
      }, 
      { 
        company: "The Beasharps (Barbershop Quartet)", 
        roles: [
          {
            role: "Lead Singer & Songwriter", 
            period: "1993", 
            description: "Achieved global musical fame, won a Grammy Award, and spearheaded a chart-topping album before retiring back to the nuclear industry." 
          }
        ]
      }, 
      { 
        company: "NASA", 
        roles: [
          {
            role: "Astronaut", 
            period: "1994", 
            description: "Selected for the civilian space flight program. Successfully orbited Earth, introduced an experimental space-ant colony, and secured an inanimate carbon rod." 
          }
        ]
      } 
    ], 
      
    education: [ 
      { 
        degree: "Nuclear Physics Crash Course", 
        school: "Springfield University", 
        year: "1993" 
      }, 
      { 
        degree: "High School Diploma", 
        school: "Springfield High School", 
        year: "1974" 
      } 
    ]
  };

  return (
    <div className="profile-container">
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
      </header>

      <section className="profile-contact">
        <span className="contact-item"><strong>Email:</strong> chan.danny@hotmail.com</span>
        <span className="contact-divider">•</span>
        <span className="contact-item"><strong>Phone:</strong> 647-239-1036</span>
        <span className="contact-divider">•</span>
        <span className="contact-item">
          <strong>Web:</strong> <a href="https://dann-chan.github.io" target="_blank" rel="noreferrer">dann-chan.github.io</a>
        </span>
      </section>

      <div className="profile-body">
        <main className="profile-main">
          <section className="profile-section">
            <h3>About</h3>
            <p className="bio-text">{profileData.bio}</p>
          </section>

          <section className="profile-section">
            <h3>Experience</h3>
            {profileData.experience.map((item, compIndex) => (
              <div key={compIndex} className="company-group-block">
                <h5 className="company-main-title">{item.company}</h5>
                
                {item.roles.map((job, roleIndex) => (
                  <div key={roleIndex} className="experience-item multi-role-item">
                    <div className="item-header">
                      <h4>{job.role}</h4>
                      <span className="item-date">{job.period}</span>
                    </div>
                    <p style={{ whiteSpace: 'pre-line' }}>{job.description}</p>
                  </div>
                ))}
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

export default ResumeTab;


