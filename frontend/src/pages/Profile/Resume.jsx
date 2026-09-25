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
        roles: [
          {
            role: "Senior Solutions Architect", 
            period: "2023 - 2026", 
            description: "Dynamic Process Engineer and Program Manager specializing in systems integration, operational workflow design, and strategic AI initiatives from budget to deployment. Expert in translating complex requirements into seamless CMO/FMO roadmaps while architecting robust network and security solutions, including SD-WAN, DDoS mitigation, and firewall infrastructure."
          },
          {
            role: "Senior Developer, Full Stack", 
            period: "2017 - 2023", 
            description: "Versatile SQL Developer, Database Administrator, and Automation Expert specializing in MSSQL, Oracle, and PostgreSQL management, with specialized expertise integrating AI LLMs into SQL environments via Python. Proven track record leveraging RPA tools like Blue Prism and Automation Anywhere to automate complex Business Process Automation (BPA) workflows and driving data-led decisions through advanced AI-powered forecast reporting."
          }
        ]
      }, 
      { 
        company: "IBM Canada", 
        roles: [
          {
            role: "Application Specialist", 
            period: "2017", 
            description: "Technical Support Engineer and Network Administrator specializing in web application infrastructure, backend systems, and network administration. Proficient in managing SQL Server environments with a focus on designing and maintaining automated stored procedures to optimize database reliability, system performance, and operational support." 
          }
        ]
      }, 
      { 
        company: "Fujixerox Korea", 
        roles: [
          {
            role: "Software / Solution Engineer", 
            period: "2015-2016", 
            description: "Systems Engineer and Developer specializing in low-level C/C++ printer driver development and enterprise network administration. Experienced in conducting rigorous driver and connectivity testing across wireless and wired protocols, including Wi-Fi, Bluetooth, and LAN, to ensure seamless hardware-to-software integration and reliable device performance." 
          }
        ]
      } 
    ], 
      
    education: [ 
      { 
        degree: "Electronics & Computer Engineering, Master of Engineering", 
        school: "Sun Moon University", 
        year: "2015" ,
        location: "Asan, South Korea"
      }, 
      { 
        degree: "Earth & Space Engineering, Bachelor of Science", 
        school: "York University", 
        year: "2007",
        location: "Toronto, Canada"
      },
      { 
        degree: "DevOps Cloud Expert Program, Certificate", 
        school: "University of Ottawa", 
        year: "2023",
        location: "Cloud Campus"  
      }, 
      { 
        degree: "Program Management Professional (PgMP), Certificate", 
        school: "PMTraining", 
        year: "2026",
        location: "Online"
      } 
    ],
    
    references: [
      {
        name: "John Doe, P.Eng.",
        title: "Senior Systems Engineer",
        company: "Aerospace Dynamics Corp.",
        location: "Toronto, ON",
        phone: "(416) 555-0199",
        email: "j.doe@aerospacedynamics.com",
        relationship: "Former direct supervisor."
      },
      {
        name: "Jane Doe, P.Eng.",
        title: "Systems Engineer",
        company: "Aerospace Dynamics Corp.",
        location: "Toronto, ON",
        phone: "(416) 111-1111",
        email: "jane.doe@aerospacedynamics.com",
        relationship: "Coworker"
      }
    ]
  };

  return (
    <div className="profile-container">
      
      {/*Header Section ******************************************************************************/}
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
      
      {/*Contact Section *****************************************************************************/}
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
          {/* About Section ***************************************************************************/}
          <section className="profile-section">
            <h3>About</h3>
            <p className="bio-text">{profileData.bio}</p>
          </section>
          {/* Experience Section ***********************************************************************/}
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
          {/*Education Section **************************************************************************/}
          <section className="profile-section">
            <h3>Education</h3>
            {profileData.education.map((edu, index) => (
              <div key={index} className="education-card-block">
                <div className="education-row">
                  <h4 className="edu-degree">{edu.degree}</h4>
                  <span className="edu-year">{edu.year}</span>
                </div>
                <div className="education-row">
                  <h5 className="edu-school">{edu.school}</h5>
                  {edu.location && <span className="edu-location">{edu.location}</span>}
                </div>
              </div>
            ))}
          </section>
        </main>

        <aside className="profile-sidebar">
          {/* Skills Section *****************************************************************************/}
          <section className="profile-section">
            <h3>Skills</h3>
            <div className="skills-tags">
              {profileData.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </section>
          {/* References Section **************************************************************************/}
          <section className="profile-section">
            <h3>References</h3>
            <div className="references-list">
              {profileData.references && profileData.references.map((ref, index) => (
                <div key={index} className="reference-item-card">
                  <h4 className="ref-name">{ref.name}</h4>
                  <p className="ref-title">{ref.title}</p>
                  <p className="ref-company">{ref.company}</p>
                  <p className="ref-location">{ref.location}</p>
                  <div className="ref-contact-info">
                    <span> {ref.phone}</span>
                    <span> <a href={`mailto:${ref.email}`}>{ref.email}</a></span>
                  </div>
                  <p className="ref-relation"><strong>Relationship:</strong> {ref.relationship}</p>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default ResumeTab;


