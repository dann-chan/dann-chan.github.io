// frontend/src/pages/Profile/Projects.jsx
import React, { useState } from 'react';
import './Projects.css';

const ProjectsTab = ({ privateURLs }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleImageToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="profile-container">
      
      {/* Strategy & Architecture **************************************************************************/}
      <div className="profile-section">
        <h3>Program Management & Infrastructure</h3>
        
        {/* Program Management *************************************/}
        <div className={`project-card-block project-split-container ${expandedIndex === 0 ? 'expanded' : ''}`}>
          <div className="project-logo-wrapper" onClick={() => handleImageToggle(0)} title="Click to resize image">
            <img src={privateURLs?.projectOneLogoUrl || 'https://placeholder.com'} alt="Project Logo" className="project-logo-img" />
          </div>
          <div className="project-text-block">
            <div className="project-row">
              <h4 className="project-title">Enterprise Project or Architecture Title</h4>
              <span className="project-year">2025 - 2026</span>
            </div>
            <div className="project-row">
              <h5 className="project-subtitle">Company / Client Instance</h5>
              <span className="project-team">Core Architecture Team</span>
            </div>
            <div className="project-row">
              <span className="project-type">Infrastructure Strategy</span>
              <span className="project-budget">$1,200,000</span>
            </div>
            <p className="project-description">
              ...program milestones, funding metrics, cross-functional leadership achievements, or core cloud infrastructure design deployments.
            </p>
          </div>
        </div>
      </div>
      
      {/* Technical Implementations **************************************************************************/}
      <div className="profile-section">
        <h3>Full-Stack & Automation</h3>
        
        {/* Full-Stack  *********************************************/}
        <div className={`project-card-block project-split-container ${expandedIndex === 1 ? 'expanded' : ''}`}>
          <div className="project-logo-wrapper" onClick={() => handleImageToggle(1)} title="Click to resize image">
            <img src={privateURLs?.projectTwoLogoUrl || 'https://placeholder.com'} alt="Project Logo" className="project-logo-img" />
          </div>
          <div className="project-text-block">
            <div className="project-row">
              <h4 className="project-title">Software Application or System Name</h4>
              <span className="project-year">2024</span>
            </div>
            <div className="project-row">
              <h5 className="project-subtitle">Tech Stack: C/C++, Python, React, Node.js, MongoDB, Automation Anywhere, Blueprism, Automate BPA</h5>
              <span className="project-team">Automation Engineering Squad</span>
            </div>
            <div className="project-row">
              <span className="project-type">Full-Stack Development</span>
              <span className="project-budget">$450,000</span>
            </div>
            <p className="project-description">
              ...software algorithms, automated pipelines, proprietary tools built from scratch, or database architecture configurations.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProjectsTab;
