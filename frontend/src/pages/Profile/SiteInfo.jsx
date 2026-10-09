// frontend/src/pages/Profile/SiteInfo.jsx
import React from 'react';
import './SiteInfo.css';

const SiteInfoTab = () => {
  return (
    <div className="profile-container">
      {/* Header *****************************************************************/}
      <div className="tab-placeholder-view site-info-header">
        <h2>Site Info</h2>
        <p>This site was 100% created by me with the assistance of AI and is hosted completely free on GitHub. The backend and database are also hosted for free.</p>
      </div>

      {/* Hosting Section **********************************************************/}
       <div className="profile-section site-info-block">
        <h3>☁️ Hosting & Cloud Infrastructure</h3>
        <p className="site-info-text">
          <span className="site-info-label">Frontend Web Platform:</span> Hosted as a static application deployed through <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="site-info-link">GitHub Pages</a>.
        </p>
        <p className="site-info-text">
          <span className="site-info-label">Backend API Engine:</span> Deployed as an isolated Node.js container instance running continuously on <strong>Render.com</strong>.
        </p>
        <p className="site-info-text">
          <span className="site-info-label">Database Core:</span> Powered by a secure, remote <strong>MongoDB Atlas</strong> cloud cluster engine, cataloging live structural interactions and private visitor IP data logs.
        </p>
      </div>

      {/* Code Section ***************************************************************/}
      <div className="profile-section site-info-block">
        <h3>💻 Code Architecture & Engineering Stack</h3>
        <p className="site-info-text">
          <span className="site-info-label">User Interface Layers:</span> Designed in pure, responsive <strong>React (JSX)</strong> with isolated state hooks management variables.
        </p>
        <p className="site-info-text">
          <span className="site-info-label">Server & Middleware Frameworks:</span> Microservices backend compiled via <strong>Express.js</strong> layers, utilizing stateless JSON Web Tokens (JWT) routing verifications as security protection barriers. Hosting the backend separately on Render can prevent the Environment Variables from being exposed on Github while allowing users to view my source code. 
        </p>
        <p className="site-info-text">
          <span className="site-info-label">Database Drivers:</span> MongoDB instances using optimized <strong>Mongoose</strong> layers with automated `.lean()` memory scaling as a workaround for the processing limit on free service. (Render will return error 500 if .lean is not used)
        </p>
      </div>

      {/* Design Section ***************************************************************/}
     <div className="profile-section site-info-block">
        <h3>🎨 Design Systems</h3>
        <p className="site-info-text">
          <span className="site-info-label">Design Architecture:</span> .
        </p>
      </div>
    </div>
  );
};

export default SiteInfoTab;
