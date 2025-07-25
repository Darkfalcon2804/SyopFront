////before runing it pls run command npm install lucide-react

import React, { useState } from 'react';
import { User, Edit3, Shield, Phone, Mail, Camera, Save, Eye, EyeOff } from 'lucide-react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('personal');
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    age: '38'
  });

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const containerStyle = {
    background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%)',
    minHeight: '100vh',
    paddingTop: '100px'
  };

  const wrapperStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  };

  const headerCardStyle = {
    background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
    borderRadius: '20px',
    marginBottom: '32px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(14, 165, 233, 0.3)'
  };

  const headerContentStyle = {
    padding: '48px 32px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '24px'
  };

  const profileSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '24px'
  };

  const avatarStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backdropFilter: 'blur(10px)'
  };

  const cameraButtonStyle = {
    position: 'absolute',
    bottom: '-8px',
    right: '-8px',
    width: '32px',
    height: '32px',
    backgroundColor: '#0ea5e9',
    border: 'none',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
    transition: 'all 0.3s ease'
  };

  const editButtonStyle = {
    backgroundColor: 'rgba(255,255,255,0.2)',
    border: 'none',
    borderRadius: '12px',
    padding: '12px 24px',
    color: 'white',
    backdropFilter: 'blur(10px)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'all 0.3s ease'
  };

  const mainCardStyle = {
    backgroundColor: 'white',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
    overflow: 'hidden'
  };

  const tabsContainerStyle = {
    display: 'flex',
    borderBottom: '1px solid #e5e7eb',
    backgroundColor: '#f9fafb'
  };

  const tabStyle = {
    flex: 1,
    padding: '20px 24px',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#6b7280',
    transition: 'all 0.3s ease',
    borderBottom: '3px solid transparent'
  };

  const activeTabStyle = {
    ...tabStyle,
    color: '#0ea5e9',
    backgroundColor: 'white',
    borderBottomColor: '#0ea5e9'
  };

  const contentStyle = {
    padding: '48px 32px'
  };

  const sectionTitleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '32px'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginBottom: '24px'
  };

  const formGroupStyle = {
    marginBottom: '24px'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '16px',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '8px'
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    border: '2px solid #e5e7eb',
    borderRadius: '12px',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    backgroundColor: 'white'
  };

  const inputWithIconStyle = {
    ...inputStyle,
    paddingLeft: '48px'
  };

  const iconContainerStyle = {
    position: 'relative'
  };

  const iconStyle = {
    position: 'absolute',
    left: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#9ca3af',
    zIndex: 2
  };

  const sectionCardStyle = {
    backgroundColor: '#f8fafc',
    padding: '32px',
    borderRadius: '16px',
    marginBottom: '24px',
    border: '1px solid #e2e8f0'
  };

  const saveButtonStyle = {
    backgroundColor: '#0ea5e9',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    padding: '16px 32px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)'
  };

  const passwordInputContainerStyle = {
    position: 'relative'
  };

  const passwordToggleStyle = {
    position: 'absolute',
    right: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    color: '#9ca3af',
    cursor: 'pointer',
    padding: '4px'
  };

  const comingSoonStyle = {
    textAlign: 'center',
    padding: '60px 20px',
    color: '#6b7280',
    fontSize: '18px',
    fontStyle: 'italic'
  };

  return (
    <div style={containerStyle}>
      <div style={wrapperStyle}>
        {/* Header Section */}
        <div style={headerCardStyle}>
          <div style={headerContentStyle}>
            <div style={profileSectionStyle}>
              <div style={avatarStyle}>
                <User size={48} color="white" />
                <button style={cameraButtonStyle}>
                  <Camera size={16} color="white" />
                </button>
              </div>
              <div>
                <h1 style={{ fontSize: '32px', fontWeight: 'bold', margin: '0 0 8px 0' }}>
                  {profileData.firstName} {profileData.lastName}
                </h1>
                <p style={{ fontSize: '18px', margin: '0 0 4px 0', opacity: 0.9 }}>
                  {profileData.email}
                </p>
                <p style={{ fontSize: '16px', margin: '0', opacity: 0.8 }}>
                  Age: {profileData.age} years
                </p>
              </div>
            </div>
            <button
              style={editButtonStyle}
              onClick={() => setIsEditing(!isEditing)}
            >
              <Edit3 size={20} />
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>
        </div>

        {/* Main Content Card */}
        <div style={mainCardStyle}>
          {/* Navigation Tabs */}
          <div style={tabsContainerStyle}>
            <button
              style={activeTab === 'personal' ? activeTabStyle : tabStyle}
              onClick={() => setActiveTab('personal')}
            >
              <User size={20} />
              Personal Info
            </button>
            <button
              style={activeTab === 'privacy' ? activeTabStyle : tabStyle}
              onClick={() => setActiveTab('privacy')}
            >
              <Shield size={20} />
              Privacy & Security (Coming Soon)
            </button>
          </div>

          <div style={contentStyle}>
            {/* Personal Information Tab */}
            {activeTab === 'personal' && (
              <div>
                <h3 style={sectionTitleStyle}>Personal Information</h3>
                <div style={gridStyle}>
                  <div style={formGroupStyle}>
                    <label style={labelStyle}>First Name</label>
                    <input
                      type="text"
                      value={profileData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      disabled={!isEditing}
                      style={{
                        ...inputStyle,
                        backgroundColor: !isEditing ? '#f9fafb' : 'white',
                        color: !isEditing ? '#6b7280' : '#1f2937'
                      }}
                    />
                  </div>
                  <div style={formGroupStyle}>
                    <label style={labelStyle}>Last Name</label>
                    <input
                      type="text"
                      value={profileData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      disabled={!isEditing}
                      style={{
                        ...inputStyle,
                        backgroundColor: !isEditing ? '#f9fafb' : 'white',
                        color: !isEditing ? '#6b7280' : '#1f2937'
                      }}
                    />
                  </div>
                  <div style={formGroupStyle}>
                    <label style={labelStyle}>Email Address</label>
                    <div style={iconContainerStyle}>
                      <Mail size={20} style={iconStyle} />
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        disabled={!isEditing}
                        style={{
                          ...inputWithIconStyle,
                          backgroundColor: !isEditing ? '#f9fafb' : 'white',
                          color: !isEditing ? '#6b7280' : '#1f2937'
                        }}
                      />
                    </div>
                  </div>
                  <div style={formGroupStyle}>
                    <label style={labelStyle}>Phone Number</label>
                    <div style={iconContainerStyle}>
                      <Phone size={20} style={iconStyle} />
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        disabled={!isEditing}
                        style={{
                          ...inputWithIconStyle,
                          backgroundColor: !isEditing ? '#f9fafb' : 'white',
                          color: !isEditing ? '#6b7280' : '#1f2937'
                        }}
                      />
                    </div>
                  </div>
                  <div style={formGroupStyle}>
                    <label style={labelStyle}>Age</label>
                    <input
                      type="number"
                      value={profileData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      disabled={!isEditing}
                      min="1"
                      max="120"
                      style={{
                        ...inputStyle,
                        backgroundColor: !isEditing ? '#f9fafb' : 'white',
                        color: !isEditing ? '#6b7280' : '#1f2937'
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Privacy & Security Tab */}
            {activeTab === 'privacy' && (
              <div>
                <h3 style={sectionTitleStyle}>Privacy & Security (Coming Soon)</h3>
                
                <div style={sectionCardStyle}>
                  <h4 style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937', marginBottom: '24px' }}>
                    Change Password
                  </h4>
                  <div style={gridStyle}>
                    <div style={formGroupStyle}>
                      <label style={labelStyle}>Current Password</label>
                      <div style={passwordInputContainerStyle}>
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter current password"
                          style={{
                            ...inputStyle,
                            paddingRight: '48px'
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          style={passwordToggleStyle}
                        >
                          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                    </div>
                    <div></div>
                    <div style={formGroupStyle}>
                      <label style={labelStyle}>New Password</label>
                      <input
                        type="password"
                        placeholder="Enter new password"
                        style={inputStyle}
                      />
                    </div>
                    <div style={formGroupStyle}>
                      <label style={labelStyle}>Confirm New Password</label>
                      <input
                        type="password"
                        placeholder="Confirm new password"
                        style={inputStyle}
                      />
                    </div>
                  </div>
                  <button style={{
                    backgroundColor: '#0ea5e9',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '12px 24px',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}>
                    Update Password
                  </button>
                </div>

                <div style={sectionCardStyle}>
                  <h4 style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937', marginBottom: '24px' }}>
                    Data Privacy
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <span style={{ color: '#1f2937', fontSize: '16px' }}>Share data for research purposes</span>
                      <div style={{
                        width: '48px',
                        height: '28px',
                        backgroundColor: '#d1d5db',
                        borderRadius: '14px',
                        position: 'relative',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}>
                        <div style={{
                          width: '24px',
                          height: '24px',
                          backgroundColor: 'white',
                          borderRadius: '50%',
                          position: 'absolute',
                          top: '2px',
                          left: '2px',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                        }}></div>
                      </div>
                    </div>
                    <div style={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <span style={{ color: '#1f2937', fontSize: '16px' }}>Allow third-party integrations</span>
                      <div style={{
                        width: '48px',
                        height: '28px',
                        backgroundColor: '#0ea5e9',
                        borderRadius: '14px',
                        position: 'relative',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}>
                        <div style={{
                          width: '24px',
                          height: '24px',
                          backgroundColor: 'white',
                          borderRadius: '50%',
                          position: 'absolute',
                          top: '2px',
                          left: '2px',
                          transform: 'translateX(20px)',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                        }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            {isEditing && (
              <div style={{ 
                display: 'flex', 
                justifyContent: 'flex-end', 
                marginTop: '32px', 
                paddingTop: '32px',
                borderTop: '1px solid #e5e7eb'
              }}>
                <button
                  onClick={() => setIsEditing(false)}
                  style={saveButtonStyle}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#0284c7'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#0ea5e9'}
                >
                  <Save size={20} />
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}