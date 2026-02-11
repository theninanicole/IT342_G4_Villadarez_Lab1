import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); 

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleConfirmLogout = async () => {
    await logout(); 
    navigate('/login');
  };

  if (!user) {
    return (
      <div className="profile-container">
        <div className="loading">Loading profile...</div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            {user.first_name?.charAt(0)}
            {user.last_name?.charAt(0)}
          </div>
          <h2>
            {user.first_name} {user.last_name}
          </h2>
          <p className="profile-username">@{user.username}</p>
        </div>

        <div className="profile-details">
          <div className="profile-detail-item">
            <label>Email</label>
            <p>{user.email}</p>
          </div>

          <div className="profile-detail-item">
            <label>Username</label>
            <p>{user.username}</p>
          </div>

          <div className="profile-detail-item">
            <label>First Name</label>
            <p>{user.first_name}</p>
          </div>

          <div className="profile-detail-item">
            <label>Last Name</label>
            <p>{user.last_name}</p>
          </div>

          <div className="profile-detail-item">
            <label>Member Since</label>
            <p>{new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="profile-actions">
          <button
            onClick={() => setShowLogoutModal(true)}
            className="btn-logout"
          >
            Logout
          </button>
        </div>
      </div>

      {showLogoutModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Confirm Logout</h3>
            <p>Are you sure you want to logout?</p>
            <div className="modal-actions">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmLogout}
                className="btn-primary"
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;