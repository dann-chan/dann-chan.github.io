// frontend/src/pages/Profile/Certifications.jsx
import React from 'react';

const CertificationsTab = () => {
  return (
    <div className="profile-container">
      
      {/* Recognitions **************************************************************************************/}
      <div className="profile-section">
        <h3>Recognitions</h3>      
        <div className="education-card-block">
          <div className="edu-logo-wrapper">
            <img src="https://1drv.ms/i/c/3bb4dc98896970fa/IQSCokXo4y_mR7YpTraa3HOPAWRclPLHWxpDKvGCiqjRtV8" alt="Company Logo" className="edu-logo-img" />
          </div>
          <div className="education-row">
            <h4 className="edu-degree">Mirko Bibic - CEO of Bell Canada</h4>
            <span className="edu-year">Apr 2025</span>
          </div>
          <div className="education-row">
            <h5 className="edu-school">Bell Canada</h5>
          </div>
          <p className="edu-description">
            Awarded for demonstrating exceptional leadership, core architectural foresight, and driving milestone product deliverable goals ahead of initial timeline projections.
          </p>
        </div>
      </div>
      
     {/* Degrees & Academic Credentials **********************************************************************/}
      <div className="profile-section">
        <h3>Degrees & Academic Credentials</h3>
        <div className="education-card-block">
          <div className="edu-logo-wrapper">
            <img src="https://1drv.ms/i/c/3bb4dc98896970fa/IQQ2hU-U9W3TQo4xcdaV_gBQASbOI9s-lQpb6bMEb2ivV1E" alt="University Logo" className="edu-logo-img" />
          </div>
          <div className="education-row">
            <h4 className="edu-degree">Bachelor of Science in Computer Science</h4>
            <span className="edu-year">2020 - 2024</span>
          </div>
          <div className="education-row">
            <h5 className="edu-school">University of Engineering and Tech</h5>
            <span className="edu-location">Toronto, ON</span>
          </div>
          <p className="edu-description">
            Specialized in Software Engineering and Distributed Systems. Graduated with Honours, participating in advanced algorithms and system architectures development tracks.
          </p>
        </div>
      </div>

      {/* Professional Certifications **************************************************************************/}
      <div className="profile-section">
        <h3>Professional Certifications</h3>
        <div className="education-card-block">
          <div className="edu-logo-wrapper">
            <img src="https://1drv.ms/i/c/3bb4dc98896970fa/IQQ2hU-U9W3TQo4xcdaV_gBQASbOI9s-lQpb6bMEb2ivV1E" alt="AWS Cloud Logo" className="edu-logo-img" />
          </div>
          <div className="education-row">
            <h4 className="edu-degree">AWS Certified Solutions Architect – Associate</h4>
            <span className="edu-year">Issued Nov 2025</span>
          </div>
          <div className="education-row">
            <h5 className="edu-school">Amazon Web Services (AWS)</h5>
            <span className="edu-location">ID: AWS-123456</span>
          </div>
          <p className="edu-description">
            Validated expertise in cloud computing design architectures, infrastructure optimization, high-availability deployments, and cost-efficient cloud resource provisioning.
          </p>
        </div>

        <div className="education-card-block credential-divider">
          <div className="edu-logo-wrapper">
            <img src="https://1drv.ms/i/c/3bb4dc98896970fa/IQQ2hU-U9W3TQo4xcdaV_gBQASbOI9s-lQpb6bMEb2ivV1E" alt="Meta Logo" className="edu-logo-img" />
          </div>
          <div className="education-row">
            <h4 className="edu-degree">Meta Front-End Developer Professional Certificate</h4>
            <span className="edu-year">Issued Aug 2024</span>
          </div>
          <div className="education-row">
            <h5 className="edu-school">Coursera / Meta</h5>
            <span className="edu-location">Verified Credential</span>
          </div>
          <p className="edu-description">
            Comprehensive professional training track covering responsive user interfaces, React state management, web development frameworks, version control protocols, and component architectures.
          </p>
        </div>
        {/* Tickle Inc. **************/}
        <div className="education-card-block credential-divider">
            <div className="edu-logo-wrapper">
              <img src="https://1drv.ms/i/c/3bb4dc98896970fa/IQS0vkA0Lhx-ToNJK1nUeo-eASvk75RVcKxmB7rXbN63Pps" alt="Meta Logo" className="edu-logo-img" />
            </div>
            <div className="education-row">
              <h4 className="edu-degree">Certificate of Intellectual Achievement</h4>
              <span className="edu-year">Dec 2006</span>
            </div>
            <div className="education-row">
              <h5 className="edu-school">Tickle Inc. (Intelligence Measurement Program)</h5>
            </div>
            <p className="edu-description">
              Earned distinction with a measured intellectual capacity IQ score of 136 (national average is 90). Officially attested and countersigned via the PhD Certified verification program.
            </p>
        </div>
      </div>
    </div>
  );
};

export default CertificationsTab;
