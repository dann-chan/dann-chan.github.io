// frontend/src/pages/Profile/Profile.jsx
import React, { useState } from 'react';
import BiographyTab from './Biography';
import ResumeTab from './Resume';
import ProjectsTab from './Projects';
import './Profile.css';

const ProfilePage = ({ secretData, onLogout }) => {
  const [activeTab, setActiveTab] = useState('Resume');

  const renderMainContent = () => {
    switch (activeTab) {
      case 'biography':
        return <BiographyTab />;
      case 'projects':
        return <ProjectsTab />;
      case 'resume':
      default:
        return <ResumeTab secretData={secretData} />;
    }
  };

  return (
    <div className="app-workspace-layout">
      <nav className="app-navigation-sidebar">
        <div className="sidebar-brand-title">
          <h3>Danny's Profile</h3>
        </div>
        
        <div className="sidebar-links-group">
          <button 
            className={`sidebar-nav-btn ${activeTab === 'resume' ? 'active' : ''}`}
            onClick={() => setActiveTab('resume')}
          >
            📄 Resume
          </button>
          <button 
            className={`sidebar-nav-btn ${activeTab === 'biography' ? 'active' : ''}`}
            onClick={() => setActiveTab('biography')}
          >
            📋 Biography
          </button>
          <button 
            className={`sidebar-nav-btn ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            💻 Projects
          </button>
        </div>

        <button className="sidebar-logout-btn" onClick={onLogout}>
          Secure Sign Out
        </button>
      </nav>

      <div className="app-content-viewframe">
        {renderMainContent()}
      </div>
    </div>
  );
};

export default ProfilePage;
