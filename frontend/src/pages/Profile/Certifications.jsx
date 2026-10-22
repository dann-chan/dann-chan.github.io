// frontend/src/pages/Profile/Certifications.jsx
import React, { useState } from 'react';
import './Certifications.css';

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
      
      
        {/* Highschool *************************/}
        <div className={`education-card-block credential-divider cert-split-container ${expandedIndex === 3 ? 'expanded' : ''}`}>
          <div className="edu-logo-wrapper" onClick={() => handleImageToggle(3)} title="Click to resize image">
            <img src="https://1drv.ms/i/c/3bb4dc98896970fa/IQRM4YCmk7koRYoMfAO3heFVAfYOgOG1qQPxuVXrnK492gk" alt="University Logo" className="edu-logo-img" />
          </div>
          <div className="cert-text-block">
            <div className="education-row">
              <h4 className="edu-degree">Ontario Secondary School Diploma</h4>
              <span className="edu-year">1997 - 2002</span>
            </div>
            <div className="education-row">
              <h5 className="edu-school">Milliken Mills High School</h5>
              <span className="edu-location">Markham, Canada</span>
            </div>
              <p className="edu-description">
                Graduated as a high achiever during Ontario's historic <strong>double-cohort year</strong>, successfully securing competitive admissions into three top-tier institutions: York University, the University of Toronto, and Queen's University.
              </p>
            </div>
          </div>
        </div>


      {/* Professional Certifications **************************************************************************/}
      <div className="profile-section">
        <h3>Professional Certifications</h3>

         {/* PgPM Training  *************************/}
        <div className={`education-card-block cert-split-container ${expandedIndex === 4 ? 'expanded' : ''}`}>
          <div className="edu-logo-wrapper" onClick={() => handleImageToggle(4)} title="Click to resize image">
            <img src="https://1drv.ms/i/c/3bb4dc98896970fa/IQRnZkMbnVIpSKHX1xgXUJNZARtorNCsOKEwXBGaVDG3nl4" alt="AWS Cloud Logo" className="edu-logo-img" />
          </div>
          <div className="cert-text-block">
            <div className="education-row">
              <h4 className="edu-degree">Certificate of Training - Program Management Professional (PgMP)</h4>
              <span className="edu-year">Issued Jan 2026</span>
            </div>
            <div className="education-row">
              <h5 className="edu-school">Project Management Institute</h5>
              <span className="edu-location">PMI Code: 39620R8DJH</span>
            </div>
            <p className="edu-description">
               A globally recognized certification offered by the Project Management Institute (PMI) for senior-level managers. Unlike the PMP®, which focuses on single projects, this credential validates your ability to oversee multiple, interconnected projects to achieve strategic business goals. To qualify, candidates typically need a mix of a four-year degree alongside four years of project management and four years of program management experience.
            </p>
          </div>
        </div>
        
        {/* YorkRegion Tech  *************************/}
        <div className={`education-card-block cert-split-container ${expandedIndex === 5 ? 'expanded' : ''}`}>
          <div className="edu-logo-wrapper" onClick={() => handleImageToggle(5)} title="Click to resize image">
            <img src="https://1drv.ms/i/c/3bb4dc98896970fa/IQRNlNsDJiH-SZ6kvT595WY2AcOkXXaV2JeHa5Vzd1kIgKg" alt="AWS Cloud Logo" className="edu-logo-img" />
          </div>
          <div className="cert-text-block">
            <div className="education-row">
              <h4 className="edu-degree">Certificate of Endorsement - Communications Technologies, Computer Interfacing & Robotics</h4>
              <span className="edu-year">Issued June 2002</span>
            </div>
            <div className="education-row">
              <h5 className="edu-school">York Region Board of Education</h5>
              <span className="edu-location">Milliken Mills High School</span>
            </div>
            <p className="edu-description">
              Successfully completed more than 8 courses in Technological Studies.
            </p>
          </div>
        </div>

        {/* YorkRegion Coop *************************/}
        <div className={`education-card-block credential-divider cert-split-container ${expandedIndex === 6 ? 'expanded' : ''}`}>
          <div className="edu-logo-wrapper" onClick={() => handleImageToggle(6)} title="Click to resize image">
            <img src="https://1drv.ms/i/c/3bb4dc98896970fa/IQRLvoROPN0eTLL1Vl4dWzRGAaK0O8dCU67zEAxG7iNrvoI" alt="Meta Logo" className="edu-logo-img" />
          </div>
          <div className="cert-text-block">
            <div className="education-row">
              <h4 className="edu-degree">Co-op Education Certificate</h4>
              <span className="edu-year">Issued June 2002</span>
            </div>
            <div className="education-row">
              <h5 className="edu-school">York Region Board of Education</h5>
              <span className="edu-location">DMTI Spatial Inc.</span>
            </div>
            <p className="edu-description">
              Precise acquisition, processing, translation, and validation of aerial, satellite imagery datasets. This role focuses on the lifecycle of mapping municipal infrastructure, establishing topological network integrity, and executing advanced raster-to-vector spatial alignment workflows to support municipal planning.
            </p>
          </div>
        </div>

        {/* Tickle Inc. **************/}
        <div className={`education-card-block credential-divider cert-split-container ${expandedIndex === 7 ? 'expanded' : ''}`}>
            <div className="edu-logo-wrapper" onClick={() => handleImageToggle(7)} title="Click to resize image">
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
