import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';
import { UseAuth } from '../contexts/AuthContext';

const App = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const { backendUrl, token } = UseAuth();

  const handleStarClick = (clickedRating) => {
    setRating(clickedRating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0 || feedback.trim() === '') {
      setStatusMessage('Please select a star rating and write a message.');
      return;
    }

    try {
      const feedbackData = {
        rating,
        message: feedback,
      };

      // Replace with your backend server URL
      
      const response = await axios.post(`${backendUrl}/api/feedback`, feedbackData,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (response.status === 201) {
        setStatusMessage('Feedback submitted successfully!');
        setRating(0);
        setFeedback('');
      } else {
        setStatusMessage('Failed to submit feedback. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setStatusMessage('Failed to submit feedback. Please try again.');
    }
  };

  return (
    <>
      <div className="bg-primary d-flex align-items-center justify-content-center p-4">
        <div className="medical-card p-4 shadow-lg w-100" style={{ maxWidth: '500px' }}>
          <div className="card-body">
            <h2 className="card-title text-center mb-4">Give Us Your Feedback</h2>
            
            <div className="d-flex justify-content-center mb-4">
              {[1, 2, 3, 4, 5].map((starValue) => (
                <svg
                  key={starValue}
                  onClick={() => handleStarClick(starValue)}
                  className={`bi bi-star-fill me-1`}
                  style={{ width: '40px', height: '40px', cursor: 'pointer', transition: 'color 0.2s', color: starValue <= rating ? '#ffc107' : '#e9ecef' }}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.89-.696L7.538.792c.189-.398.704-.398.892 0l2.256 4.675 4.89.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
              ))}
            </div>
            
            <div className="mb-3">
              <label htmlFor="feedbackMessage" className="form-label">Your Message</label>
              <textarea
                id="feedbackMessage"
                rows="5"
                className="form-control white-placeholder"
                placeholder="Write your feedback here..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </div>
            
            <button
              onClick={handleSubmit}
              className="btn btn-warning w-100 rounded-pill"
            >
              Submit Feedback
            </button>

            <div className={`mt-3 text-center small ${statusMessage.includes('Error') || statusMessage.includes('Please') ? 'text-danger' : 'text-success'}`}>
              {statusMessage}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
