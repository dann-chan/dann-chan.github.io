// frontend/src/pages/Profile/Certifications.jsx
import React from 'react';

const CertificationsTab = () => {
  return (
    <div className="profile-container">
      <div className="profile-section">
        <h3>Degrees & Academic Credentials</h3>
        <div className="education-card-block">
          <div className="education-row">
            <h4 className="edu-degree">Bachelor of Science in Computer Science</h4>
            <span className="edu-year">2020 - 2024</span>
          </div>
          <h5 className="edu-school">University Name</h5>
        </div>
      </div>

      <div className="profile-section">
        <h3>Professional Certifications</h3>
        <div className="education-card-block">
          <div className="education-row">
            <h4 className="edu-degree">AWS Certified Solutions Architect</h4>
            <span className="edu-year">Issued: 2025</span>
          </div>
          <h5 className="edu-school">Amazon Web Services</h5>
        </div>
      </div>
    </div>
  );
};

export default CertificationsTab;
