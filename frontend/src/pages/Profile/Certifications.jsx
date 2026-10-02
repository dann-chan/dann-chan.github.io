// frontend/src/pages/Profile/Certifications.jsx
import React, { useState } from 'react';

const CertificationsTab = () => {

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleImageToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="profile-container">
      
      {/* Recognitions **************************************************************************************/}
      <div className="profile-section">
        <h3>Recognitions</h3>      
        <div className={`education-card-block cert-split-container ${expandedIndex === 0 ? 'expanded' : ''}`}>
          <div className="edu-logo-wrapper" onClick={() => handleImageToggle(0)} title="Click to resize image">
            <img src="https://1drv.ms/i/c/3bb4dc98896970fa/IQSCokXo4y_mR7YpTraa3HOPAWRclPLHWxpDKvGCiqjRtV8" alt="Company Logo" className="edu-logo-img" />
          </div>
          <div className="cert-text-block">
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
      </div>
      
     {/* Degrees & Academic Credentials **********************************************************************/}
      <div className="profile-section">
        <h3>Degrees & Academic Credentials</h3>

         {/* MEng *************************/}
        <div className={`education-card-block cert-split-container ${expandedIndex === 1 ? 'expanded' : ''}`}>
          <div className="edu-logo-wrapper" onClick={() => handleImageToggle(1)} title="Click to resize image">
            <img src="https://1drv.ms/i/c/3bb4dc98896970fa/IQSJZfz_PKsbQryI3Ih68S2dAZNEnqTo5COkmYBdOX4kvec" alt="University Logo" className="edu-logo-img" />
          </div>
          <div className="cert-text-block">
            <div className="education-row">
              <h4 className="edu-degree">Master of Engineering in Electronic Engineering</h4>
              <span className="edu-year">2013 - 2015</span>
            </div>
            <div className="education-row">
              <h5 className="edu-school">Sun Moon University</h5>
              <span className="edu-location">Asan, South Korea</span>
            </div>
            <p className="edu-description">
              Specialized in Software Automation & Control Theory on Distributed Systems. Graduated with Honours GPA of 4.36, participating in advanced algorithms and system architectures development.
            </p>
          </div>
        </div>

        {/* BSc *************************/}
        <div className={`education-card-block credential-divider cert-split-container ${expandedIndex === 2 ? 'expanded' : ''}`}>
          <div className="edu-logo-wrapper" onClick={() => handleImageToggle(2)} title="Click to resize image">
            <img src="https://1drv.ms/i/c/3bb4dc98896970fa/IQT3R6vUx_EVRKrteRwpMa4qAXilcT-qoMphwj-0zvnbeaA" alt="University Logo" className="edu-logo-img" />
          </div>
          <div className="cert-text-block">
            <div className="education-row">
              <h4 className="edu-degree">Bachelor of Science in Earth & Space Engineering</h4>
              <span className="edu-year">2003 - 2007</span>
            </div>
            <div className="education-row">
              <h5 className="edu-school">York University</h5>
              <span className="edu-location">Toronto, Canada</span>
          </div>
            <p className="edu-description">
              Specialized in Satellite Imagery and Computer Science. Solely developed a proprietary software system from scratch that dynamically stitches sequential satellite photographs and converts them into accurate 3D city topography models, pioneering this spatial reconstruction framework years prior to the commercial launch of Google Earth 3D.
            </p>
          </div>
        </div>
      </div>

      {/* Professional Certifications **************************************************************************/}
      <div className="profile-section">
        <h3>Professional Certifications</h3>
        
        {/* AWS *************************/}
        <div className={`education-card-block cert-split-container ${expandedIndex === 3 ? 'expanded' : ''}`}>
          <div className="edu-logo-wrapper" onClick={() => handleImageToggle(3)} title="Click to resize image">
            <img src="https://1drv.ms/i/c/3bb4dc98896970fa/IQQ2hU-U9W3TQo4xcdaV_gBQASbOI9s-lQpb6bMEb2ivV1E" alt="AWS Cloud Logo" className="edu-logo-img" />
          </div>
          <div className="cert-text-block">
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
        </div>

        {/* Meta *************************/}
        <div className={`education-card-block credential-divider cert-split-container ${expandedIndex === 4 ? 'expanded' : ''}`}>
          <div className="edu-logo-wrapper" onClick={() => handleImageToggle(4)} title="Click to resize image">
            <img src="https://1drv.ms/i/c/3bb4dc98896970fa/IQQ2hU-U9W3TQo4xcdaV_gBQASbOI9s-lQpb6bMEb2ivV1E" alt="Meta Logo" className="edu-logo-img" />
          </div>
          <div className="cert-text-block">
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
        </div>

        {/* Tickle Inc. **************/}
        <div className={`education-card-block credential-divider cert-split-container ${expandedIndex === 5 ? 'expanded' : ''}`}>
            <div className="edu-logo-wrapper" onClick={() => handleImageToggle(5)} title="Click to resize image">
              <img src="https://1drv.ms/i/c/3bb4dc98896970fa/IQS0vkA0Lhx-ToNJK1nUeo-eASvk75RVcKxmB7rXbN63Pps" alt="Tickle Logo" className="edu-logo-img" />
            </div>
            <div className="cert-text-block">
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
    </div>
  );
};

export default CertificationsTab;
