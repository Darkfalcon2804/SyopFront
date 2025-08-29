import React, { useState } from "react";
import diseasesData from "../components/Diseases.js";
import axios from "axios";
import { UseAuth } from "../contexts/AuthContext.jsx";
export default function HealthJournal() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    symptoms: "",
    medicalHistory: "",
    medications: "",
    allergies: "",
    lifestyle: "",
    familyHistory: "",
    bloodPressure: "",
    heartRate: "",
    temperature: "",
    weight: "",
    height: ""
  });
  const { token,backendUrl } = UseAuth();
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const recommendDisease = (symptoms) => {
    const symptomKeywords = symptoms.toLowerCase().split(/\s*,\s*|\s+/).filter(Boolean); // Split by comma or space, remove empty strings

    // --- Simple Recommendation Logic ---
    // This is a highly simplified logic for demonstration.
    // In a real application, this would involve complex NLP, ML models,
    // and a vast, structured medical knowledge base.

    let matchedDisease = null;
    let highestMatchCount = 0;

    for (const disease of diseasesData) {
      let currentMatchCount = 0;
      const primaryConditionLower = disease.primaryCondition.toLowerCase();
      const diseaseSymptomsLower = disease.symptoms ? disease.symptoms.map(s => s.toLowerCase()) : [];

      if (symptoms.toLowerCase().trim() === primaryConditionLower) {
        return disease; // Found an exact primary condition match, return immediately
      }

      for (const keyword of symptomKeywords) {
        if (diseaseSymptomsLower.includes(keyword)) {
          currentMatchCount += 2; // Give higher weight to direct symptom matches
        } else if (primaryConditionLower.includes(keyword)) {
          currentMatchCount++;
        }
        // Also check if recommendations contain keywords for a slightly better match
        if (disease.recommendations.some(rec => rec.toLowerCase().includes(keyword))) {
          currentMatchCount++;
        }
      }

      // Prioritize exact or near matches on primary condition
      // if (primaryConditionLower.includes(symptoms.toLowerCase())) {
      //   matchedDisease = disease;
      //   break; // Found a strong match, use this one

      // If no strong match, find the one with most keyword overlaps
      if (currentMatchCount > highestMatchCount) {
        highestMatchCount = currentMatchCount;
        matchedDisease = disease;
      }
    }
    if (!matchedDisease || highestMatchCount < 1) { // If less than 1 keyword matched, consider it no match
      // A generic or "no specific recommendation" placeholder
      return {
        id: 0,
        primaryCondition: "Symptoms unclear / No specific match",
        confidence: "Low",
        riskAssessment: "N/A",
        riskDetails: "Please provide more specific symptoms or consult a doctor directly.",
        recommendations: [
          "Consult a healthcare professional for a proper diagnosis.",
          "Do not self-diagnose based on limited information.",
          "If symptoms are severe, seek urgent medical attention."
        ]
      };
    }

    return matchedDisease;
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const response = await axios.post(`${backendUrl}/api/journal`, formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const recommended = recommendDisease(formData.symptoms);
    setPrediction(recommended);
    setIsLoading(false);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      age: "",
      gender: "",
      symptoms: "",
      medicalHistory: "",
      medications: "",
      allergies: "",
      lifestyle: "",
      familyHistory: "",
      bloodPressure: "",
      heartRate: "",
      temperature: "",
      weight: "",
      height: ""
    });
    setPrediction(null);
  };
  const getRiskColor = (riskAssessment) => {
    switch (riskAssessment) {
      case 'Low Risk':
        return formStyles.riskLow;
      case 'Moderate Risk':
        return formStyles.riskModerate;
      case 'High Risk':
        return formStyles.riskHigh;
      case 'Critical Risk':
        return formStyles.riskCritical;
      default:
        return {};
    }
  }

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-vh-100" style={{

      fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
      paddingTop: '9rem',
      paddingBottom: '2rem'
    }}>
      <div className="container">
        {/* Journal Header */}
        {/* <div className="row justify-content-center mb-4">
          <div className="col-lg-10">
            <div className="text-center mb-4">
              <div className="d-inline-block p-4 rounded-circle mb-3" style={{
                background: 'linear-gradient(45deg, #0ea5e9 0%, #0284c7 100%)',
                boxShadow: '0 10px 30px rgba(14, 165, 233, 0.3)'
              }}>
                <i className="fas fa-book-medical text-white" style={{ fontSize: '2.2rem' }}></i>
              </div>
              <h1 className="display-5 text-dark mb-2" style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: '400',
                letterSpacing: '-0.5px',
                color: '#0284c7'
              }}>
                Health Journal
              </h1>
              <p className="lead text-muted" style={{
                fontSize: '1.1rem',
                fontWeight: '300'
              }}>
                Your daily companion for health insights and wellness tracking
              </p>
              <div className="border-bottom mx-auto mt-3" style={{
                width: '80px',
                height: '2px',
                background: 'linear-gradient(45deg, #0ea5e9 0%, #0284c7 100%)'
              }}></div>
            </div>
          </div>
        </div> */}

        {/* Journal Entry Card */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card border-0 position-relative" style={{
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.08), 0 10px 20px rgba(0, 0, 0, 0.04)',
              borderRadius: '24px',
              overflow: 'hidden'
            }}>
              {/* Decorative Header */}
              <div className="position-relative" style={{
                background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                padding: '2.5rem 0 4rem 0'
              }}>
                <div className="text-center text-white">
                  <h2 className="mb-1" style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: '300',
                    fontSize: '1.8rem'
                  }}>
                    Health Journal
                  </h2>
                  <p className="mb-0 opacity-80" style={{ fontSize: '0.95rem' }}>
                    {getCurrentDate()}
                  </p>
                </div>
                {/* Decorative Wave */}
                <div className="position-absolute bottom-0 start-0 w-100">
                  <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ height: '40px', width: '100%' }}>
                    <path d="M0,60 C150,90 350,30 600,60 C850,90 1050,30 1200,60 L1200,120 L0,120 Z" fill="#ffffff"></path>
                  </svg>
                </div>
              </div>

              <div className="px-4 px-md-5 pb-5 medical-card" style={{ marginTop: '-2rem' }}>
                <div>
                  {/* Personal Details Section */}
                  <div className="mb-5" style={{ marginTop: '40px' }}>
                    <div className="d-flex align-items-center mb-4">
                      <div className="rounded-circle p-2 me-3" style={{
                        backgroundColor: '#0ea5e9',
                        opacity: '0.9'
                      }}>
                        <i className="fas fa-user text-white" style={{ fontSize: '0.9rem' }}></i>
                      </div>
                      <h4 className="mb-0 text-blue" style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '1.4rem',
                        fontWeight: '400'
                      }}>
                        Personal Information
                      </h4>
                    </div>

                    <div className="row g-3">
                      <div className="col-md-8">
                        <label className="form-label text-dark" style={{
                          fontSize: '0.9rem',
                          color: '#495057',
                          marginBottom: '0.5rem'
                        }}>Full Name</label>
                        <input
                          type="text"
                          className="form-control white-placeholder form-control-lg border-0"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          style={{
                            backgroundColor: '#f8fafc',
                            borderRadius: '12px',
                            fontSize: '0.95rem',
                            padding: '0.8rem 1rem',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                            border: '1px solid #e2e8f0'
                          }}
                        />
                      </div>
                      <div className="col-md-2">
                        <label className="form-label text-dark" style={{
                          fontSize: '0.9rem',
                          color: '#495057'
                        }}>Age</label>
                        <input
                          type="number"
                          className="white-placeholder form-control form-control-lg border-0"
                          name="age"
                          value={formData.age}
                          onChange={handleInputChange}
                          placeholder="Age"
                          style={{
                            backgroundColor: '#f8fafc',
                            borderRadius: '12px',
                            fontSize: '0.95rem',
                            padding: '0.8rem 1rem',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                            border: '1px solid #e2e8f0'
                          }}
                        />
                      </div>
                      <div className="col-md-2">
                        <label className="form-label text-dark" style={{
                          fontSize: '0.9rem',
                          color: '#495057'
                        }}>Gender</label>
                        <select
                          className="form-select form-select-lg border-0"
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          style={{
                            backgroundColor: '#f8fafc',
                            borderRadius: '12px',
                            fontSize: '0.95rem',
                            padding: '0.8rem 1rem',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                            border: '1px solid #e2e8f0'
                          }}
                        >
                          <option value="">Select</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Vital Signs Section */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-4">
                      <div className="rounded-circle p-2 me-3" style={{
                        backgroundColor: '#0ea5e9',
                        opacity: '0.9'
                      }}>
                        <i className="fas fa-heartbeat text-white" style={{ fontSize: '0.9rem' }}></i>
                      </div>
                      <h4 className="mb-0" style={{
                        fontFamily: "'Playfair Display', serif",
                        color: '#0284c7',
                        fontSize: '1.4rem',
                        fontWeight: '400'
                      }}>
                        Vital Signs
                      </h4>
                    </div>

                    <div className="row g-3">
                      <div className="col-md-3">
                        <label className="form-label text-dark" style={{
                          fontSize: '0.9rem',
                          color: '#495057'
                        }}>Blood Pressure</label>
                        <input
                          type="text"
                          className="white-placeholder form-control form-control-lg border-0"
                          name="bloodPressure"
                          value={formData.bloodPressure}
                          onChange={handleInputChange}
                          placeholder="120/80"
                          style={{
                            backgroundColor: '#e0f2fe',
                            borderRadius: '12px',
                            fontSize: '0.95rem',
                            padding: '0.8rem 1rem',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                            border: '1px solid #e2e8f0'
                          }}
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label text-dark" style={{
                          fontSize: '0.9rem',
                          color: '#495057'
                        }}>Heart Rate</label>
                        <input
                          type="number"
                          className="white-placeholder form-control form-control-lg border-0"
                          name="heartRate"
                          value={formData.heartRate}
                          onChange={handleInputChange}
                          placeholder="BPM"
                          style={{
                            backgroundColor: '#e0f2fe',
                            borderRadius: '12px',
                            fontSize: '0.95rem',
                            padding: '0.8rem 1rem',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                            border: '1px solid #e2e8f0'
                          }}
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label text-dark" style={{
                          fontSize: '0.9rem',
                          color: '#495057'
                        }}>Temperature</label>
                        <input
                          type="number"
                          step="0.1"
                          className="white-placeholder form-control form-control-lg border-0"
                          name="temperature"
                          value={formData.temperature}
                          onChange={handleInputChange}
                          placeholder="°F"
                          style={{
                            backgroundColor: '#e0f2fe',
                            borderRadius: '12px',
                            fontSize: '0.95rem',
                            padding: '0.8rem 1rem',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                            border: '1px solid #e2e8f0'
                          }}
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label text-dark" style={{
                          fontSize: '0.9rem',
                          color: '#495057'
                        }}>Weight</label>
                        <input
                          type="number"
                          className="white-placeholder form-control form-control-lg border-0"
                          name="weight"
                          value={formData.weight}
                          onChange={handleInputChange}
                          placeholder="kg"
                          style={{
                            backgroundColor: '#e0f2fe',
                            borderRadius: '12px',
                            fontSize: '0.95rem',
                            padding: '0.8rem 1rem',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                            border: '1px solid #e2e8f0'
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Symptoms Section */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-4">
                      <div className="rounded-circle p-2 me-3" style={{
                        backgroundColor: '#0ea5e9',
                        opacity: '0.9'
                      }}>
                        <i className="fas fa-stethoscope text-white" style={{ fontSize: '0.9rem' }}></i>
                      </div>
                      <h4 className="mb-0" style={{
                        fontFamily: "'Playfair Display', serif",
                        color: '#0284c7',
                        fontSize: '1.4rem',
                        fontWeight: '400'
                      }}>
                        Current Symptoms
                      </h4>
                    </div>

                    <div className="mb-4">
                      <label className="form-label text-dark" style={{
                        fontSize: '0.9rem',
                        color: '#495057'
                      }}>How are you feeling today?</label>
                      <textarea
                        className="white-placeholder form-control form-control-lg border-0"
                        name="symptoms"
                        value={formData.symptoms}
                        onChange={handleInputChange}
                        rows="4"
                        placeholder="Describe your symptoms in detail... fever, headache, fatigue, etc."
                        style={{
                          backgroundColor: '#f0f9ff',
                          borderRadius: '12px',
                          fontSize: '0.95rem',
                          lineHeight: '1.6',
                          padding: '1rem',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                          border: '1px solid #e2e8f0'
                        }}
                      />
                    </div>

                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label text-dark" style={{
                          fontSize: '0.9rem',
                          color: '#495057'
                        }}>Current Medications</label>
                        <textarea
                          className="white-placeholder form-control border-0"
                          name="medications"
                          value={formData.medications}
                          onChange={handleInputChange}
                          rows="3"
                          placeholder="List medications you're currently taking..."
                          style={{
                            backgroundColor: '#f0f9ff',
                            borderRadius: '12px',
                            fontSize: '0.95rem',
                            padding: '1rem',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                            border: '1px solid #e2e8f0'
                          }}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label text-dark" style={{
                          fontSize: '0.9rem',
                          color: '#495057'
                        }}>Known Allergies</label>
                        <textarea
                          className="white-placeholder form-control border-0"
                          name="allergies"
                          value={formData.allergies}
                          onChange={handleInputChange}
                          rows="3"
                          placeholder="Any allergies to medications, foods, etc..."
                          style={{
                            backgroundColor: '#f0f9ff',
                            borderRadius: '12px',
                            fontSize: '0.95rem',
                            padding: '1rem',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                            border: '1px solid #e2e8f0'
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Medical History Section */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-4">
                      <div className="rounded-circle p-2 me-3" style={{
                        backgroundColor: '#0ea5e9',
                        opacity: '0.9'
                      }}>
                        <i className="fas fa-clipboard-list text-white" style={{ fontSize: '0.9rem' }}></i>
                      </div>
                      <h4 className="mb-0" style={{
                        fontFamily: "'Playfair Display', serif",
                        color: '#0284c7',
                        fontSize: '1.4rem',
                        fontWeight: '400'
                      }}>
                        Medical Background
                      </h4>
                    </div>

                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label className="form-label text-dark" style={{
                          fontSize: '0.9rem',
                          color: '#495057'
                        }}>Past Medical History</label>
                        <textarea
                          className="white-placeholder form-control border-0"
                          name="medicalHistory"
                          value={formData.medicalHistory}
                          onChange={handleInputChange}
                          rows="4"
                          placeholder="Previous conditions, surgeries, hospitalizations..."
                          style={{
                            backgroundColor: '#bae6fd',
                            borderRadius: '12px',
                            fontSize: '0.95rem',
                            padding: '1rem',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                            border: '1px solid #e2e8f0'
                          }}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label text-dark" style={{
                          fontSize: '0.9rem',
                          color: '#495057'
                        }}>Family History</label>
                        <textarea
                          className="white-placeholder form-control border-0"
                          name="familyHistory"
                          value={formData.familyHistory}
                          onChange={handleInputChange}
                          rows="4"
                          placeholder="Family history of diabetes, heart disease, cancer..."
                          style={{
                            backgroundColor: '#bae6fd',
                            borderRadius: '12px',
                            fontSize: '0.95rem',
                            padding: '1rem',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                            border: '1px solid #e2e8f0'
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="form-label text-dark" style={{
                        fontSize: '0.9rem',
                        color: '#495057'
                      }}>Lifestyle Factors</label>
                      <textarea
                        className="white-placeholder form-control border-0"
                        name="lifestyle"
                        value={formData.lifestyle}
                        onChange={handleInputChange}
                        rows="3"
                        placeholder="Exercise routine, diet, sleep patterns, stress levels..."
                        style={{
                          backgroundColor: '#bae6fd',
                          borderRadius: '12px',
                          fontSize: '0.95rem',
                          padding: '1rem',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                          border: '1px solid #e2e8f0'
                        }}
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="text-center mt-5">
                    <button
                      type="button"
                      className="btn btn-lg me-3 px-5 py-3 border-0"
                      onClick={handleSubmit}
                      disabled={isLoading}
                      style={{
                        background: 'linear-gradient(45deg, #0ea5e9 0%, #0284c7 100%)',
                        color: 'white',
                        borderRadius: '50px',
                        fontSize: '1rem',
                        fontWeight: '400',
                        transform: isLoading ? 'scale(0.95)' : 'scale(1)',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 8px 25px rgba(14, 165, 233, 0.3)'
                      }}
                    >
                      {isLoading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2"></span>
                          Analyzing Your Health...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-brain me-2"></i>
                          Get AI Health Insights
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-lg px-5 py-3"
                      onClick={resetForm}
                      style={{
                        borderRadius: '50px',
                        fontSize: '1rem',
                        fontWeight: '400',
                        borderColor: '#6c757d',
                        color: '#6c757d'
                      }}
                    >
                      <i className="fas fa-redo me-2"></i>
                      Clear Form
                    </button>
                  </div>
                </div>

                {/* Prediction Results */}
                {prediction && (
                  <div className="mt-5 pt-5">
                    <div className="card ai-card border-0" style={{
                      borderRadius: '20px',
                      boxShadow: '0 15px 35px rgba(0,0,0,0.08)'
                    }}>
                      <div className="card-body p-4 p-md-5">
                        <div className="text-center mb-4">
                          <div className="d-inline-block p-3 rounded-circle mb-3" style={{
                            background: 'linear-gradient(45deg, #0ea5e9 0%, #0284c7 100%)'
                          }}>
                            <i className="fas fa-check-circle text-white" style={{ fontSize: '1.8rem' }}></i>
                          </div>
                          <h3 className="text-dark" style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: '1.6rem',
                            fontWeight: '400',
                          }}>
                            Your Health Analysis
                          </h3>
                          <p className="text-muted" style={{ fontSize: '0.95rem' }}>Based on the information you provided</p>
                        </div>

                        <div className="row g-4 mb-4">
                          <div className="col-md-6">
                            <div className="ai-primary-result h-100 border-2">
                              <div className="ai-primary-result text-center border-0 p-4" style={{
                                backgroundColor: '#ffffff',
                                borderRadius: '16px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                              }}>
                                <h5 className="mb-3" style={{
                                  color: '#0ea5e9',
                                  fontSize: '1.1rem',
                                  fontWeight: '400'
                                }}>Primary Condition</h5>
                                <h4 className="text-dark" style={{
                                  fontWeight: '500',
                                  fontSize: '1.3rem'
                                }}>{prediction.primaryCondition}</h4>
                                <div className="mt-3">
                                  <span className="px-3 py-2 rounded-pill" style={{
                                    backgroundColor: '#0ea5e9',
                                    color: 'white',
                                    fontSize: '0.85rem'
                                  }}>
                                    Confidence: {prediction.confidence}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="ai-primary-result h-100 border-0">
                              <div className="ai-primary-result text-center p-4" style={{
                                backgroundColor: '#ffffff',
                                borderRadius: '16px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                              }}>
                                <h5 className="card-title mb-3" style={{
                                  color: '#0ea5e9',
                                  fontSize: '1.1rem',
                                  fontWeight: '400'
                                }}>Risk Assessment</h5>
                                <div className="mb-3">
                                  <span className="px-4 py-3 rounded-pill" style={{
                                    backgroundColor: '#f0f9ff',
                                    color: '#0ea5e9',
                                    border: '2px solid #0ea5e9',
                                    fontSize: '0.9rem'
                                  }}>
                                    <i className="fas fa-shield-alt me-2"></i>
                                    {prediction.riskAssessment}
                                  </span>
                                </div>
                                <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>{prediction.riskDetails}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="ai-primary-result border-0">
                          <div className="ai-primary-result p-4" style={{
                            backgroundColor: '#ffffff',
                            borderRadius: '16px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                          }}>
                            <h5 className="mb-4 text-dark" style={{
                              fontSize: '1.2rem',
                              fontWeight: '400'
                            }}>
                              <i className="me-2" style={{ color: '#0ea5e9' }}>💡</i>
                              Recommendations for You
                            </h5>
                            <div className="row g-3">
                              {prediction.recommendations.map((rec, index) => (
                                <div key={index} className="col-12">
                                  <div className="ai-primary-result d-flex align-items-start p-3 rounded-3" style={{
                                    backgroundColor: '#f0f9ff',
                                    border: '1px solid #e0f2fe'
                                  }}>
                                    <div className="rounded-circle p-2 me-3 flex-shrink-0" style={{
                                      backgroundColor: '#0ea5e9'
                                    }}>
                                      <i className="fas fa-check text-white" style={{ fontSize: '0.7rem' }}></i>
                                    </div>
                                    <p className="mb-0 text-dark" style={{ fontSize: '0.95rem' }}>{rec}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="alert bg-color-dark border-0 mt-4" style={{
                          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                          borderRadius: '15px'
                        }}>
                          <div className="ai-primary-result d-flex align-items-start">
                            <i className="me-3 mt-1" style={{ color: '#0ea5e9', fontSize: '1.1rem' }}>ℹ</i>
                            <div>
                              <h6 className="mb-2" style={{
                                color: '#0ea5e9',
                                fontSize: '1rem',
                                fontWeight: '500'
                              }}>Important Medical Disclaimer</h6>
                              <p className="mb-0 text-dark" style={{ fontSize: '0.9rem' }}>
                                This AI analysis is for informational purposes only and should not replace professional medical advice.
                                Please consult with a qualified healthcare provider for proper diagnosis and treatment.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}