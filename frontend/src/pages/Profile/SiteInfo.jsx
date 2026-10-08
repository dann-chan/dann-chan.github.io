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
          <strong>Frontend Web Platform:</strong> Hosted as a static application deployed through <a href="https://github.com/dann-chan/dann-chan.github.io" target="_blank" rel="noopener noreferrer" className="site-info-link">GitHub Pages</a> edge servers, utilizing global CDN caching models for instantaneous load deliveries.
        </p>
        <p className="site-info-text">
          <strong>Backend API Engine:</strong> Deployed as an isolated Node.js container instance running continuously on <strong>Render.com</strong> endpoints.
        </p>
        <p className="site-info-text">
          <strong>Persistent Database Core:</strong> Powered by a secure, remote <strong>MongoDB Atlas</strong> cloud cluster engine, dynamically cataloging live structural interaction pipelines and secure, private visitor IP data logs.
        </p>
      </div>

      {/* Code Section ***************************************************************/}
      <div className="profile-section site-info-block">
        <h3>💻 Code Architecture & Engineering Stack</h3>
        <p className="site-info-text">
          <strong>User Interface Layers:</strong> Component-driven structural views engineered in pure, responsive <strong>React (JSX)</strong> with isolated state hooks management variables.
        </p>
        <p className="site-info-text">
          <strong>Server & Middleware Frameworks:</strong> Microservices backend compiled via <strong>Express.js</strong> layers, utilizing stateless JSON Web Tokens (JWT) routing verifications and multi-tier network rate-limit security protection barriers.
        </p>
        <p className="site-info-text">
          <strong>Database Drivers:</strong> Managed object documentation schemas bound directly to MongoDB instances using optimized <strong>Mongoose</strong> modeling layers with automated `.lean()` memory stream scaling.
        </p>
      </div>

      {/* Design Section ***************************************************************/}
      <div className="profile-section site-info-block">
        <h3>🎨 Design Systems & Visual Identity</h3>
        <p className="site-info-text">
          <strong>Style Methodologies:</strong> Rendered using custom, un-compiled <strong>Semantic CSS Variables</strong> to establish a pristine dark-mode environment matching elite GitHub developer presentation layouts.
        </p>
        <p className="site-info-text">
          <strong>Interactive Experience Protocols:</strong> Features completely isolated interface layouts including responsive side-by-side flex layouts for data structures, zero-truncation scaling, custom font-family stack selections, and automated vector path image expansion animations.
        </p>
      </div>
    </div>
  );
};

export default SiteInfoTab;
