import React from 'react'
import { Link } from 'react-router-dom'
import { UseAuth } from '../contexts/AuthContext'
import { Radius } from 'lucide-react';

const GeneratePDF = () => {
  const { user } = UseAuth();
  return user ? (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        <Link to="/dashboard" className="text-decoration-none text-muted mb-4 mt-4 d-inline-flex align-items-center">
          <i className="fas fa-arrow-left me-2"></i>
          Back to Dashboard
        </Link>
      </div>
      <div className="container pdf-container">
        <div class="header">
          <div class="header-content">
            <div>
              <h1>Health Report</h1>
              <p>Generated on {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
              </p>
              <p style={{ fontSize: '1.1rem', margin: "5px 0 0 0", opacity: "0.8" }}>
                Patient: {user.FirstName}
              </p>
            </div>
            <div>
              <div class="header-icon">📊</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <>
      <p style={{ paddingTop: '100px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>Fething data</p>;
    </>
  )
}

export default GeneratePDF
