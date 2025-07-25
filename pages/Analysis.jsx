
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Area, AreaChart } from 'recharts';
import { TrendingUp, TrendingDown, Activity, Heart, Brain, Users, AlertTriangle, CheckCircle } from 'lucide-react';


// Mock data for demonstrations
const vitalTrends = [
  { date: '2024-01', heartRate: 72, bloodPressure: 120, temperature: 98.6 },
  { date: '2024-02', heartRate: 74, bloodPressure: 118, temperature: 98.4 },
  { date: '2024-03', heartRate: 71, bloodPressure: 122, temperature: 98.7 },
  { date: '2024-04', heartRate: 73, bloodPressure: 119, temperature: 98.5 },
  { date: '2024-05', heartRate: 75, bloodPressure: 121, temperature: 98.6 },
  { date: '2024-06', heartRate: 70, bloodPressure: 117, temperature: 98.3 }
];

const riskFactors = [
  { name: 'Cardiovascular', value: 15, color: '#ef4444' },
  { name: 'Diabetes', value: 8, color: '#f97316' },
  { name: 'Respiratory', value: 12, color: '#eab308' },
  { name: 'Mental Health', value: 22, color: '#06b6d4' },
  { name: 'Low Risk', value: 43, color: '#10b981' }
];

const patientDemographics = [
  { ageGroup: '18-30', count: 145, percentage: 25 },
  { ageGroup: '31-45', count: 210, percentage: 36 },
  { ageGroup: '46-60', count: 132, percentage: 23 },
  { ageGroup: '60+', count: 93, percentage: 16 }
];

const aiPredictions = [
  { condition: 'Hypertension', confidence: 78, trend: 'up', risk: 'moderate' },
  { condition: 'Diabetes Type 2', confidence: 65, trend: 'stable', risk: 'low' },
  { condition: 'Heart Disease', confidence: 42, trend: 'down', risk: 'low' },
  { condition: 'Mental Health', confidence: 89, trend: 'up', risk: 'high' }
];

export default function Analysis() {
  const [activeTab, setActiveTab] = useState('overview');
  const [timeRange, setTimeRange] = useState('6months');

  const StatCard = ({ icon: Icon, title, value, change, trend }) => (
    <div className="card shadow mb-4 rounded-3 bg-white border-0 ">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6 className="text-muted mb-2">{title}</h6>
            <h3 className="mb-1">{value}</h3>
            <p className={`small mb-0 d-flex align-items-center ${trend === 'up' ? 'text-success' : trend === 'down' ? 'text-danger' : 'text-muted'}`}>
              {trend === 'up' ? <TrendingUp size={14} className="me-1" /> : trend === 'down' ? <TrendingDown size={14} className="me-1" /> : <Activity size={14} className="me-1 text-muted" />}
              {change}
            </p>
          </div>
          <div className="bg-primary-light rounded-circle p-3">
            <Icon size={24} className="text-primary" />
          </div>
        </div>
      </div>
    </div>
  );

  const PredictionCard = ({ condition, confidence, trend, risk }) => (
    <div className="card shadow border-0 mb-3 rounded-4 overflow-hidden prediction-card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="card-title mb-0">{condition}</h5>
          <span className={`badge rounded-pill ${risk === 'high' ? 'bg-gradient-high' : risk === 'moderate' ? 'bg-gradient-warning' : 'bg-gradient-success'} text-white text-uppercase`}>
            {risk.toUpperCase()} RISK
          </span>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="small font-weight-bold">Confidence: {confidence}%</span>
          <span className={`bg-light p-2 rounded-circle ${trend === 'up' ? 'bg-danger-light text-danger' : trend === 'down' ? 'bg-success-light text-success' : 'bg-secondary-light text-secondary'}`}>
            {trend === 'up' ? <TrendingUp size={16} /> : trend === 'down' ? <TrendingDown size={16} /> : <Activity size={16} />}
          </span>
        </div>
        <div className="progress mb-3" style={{ height: '0.75rem' }}>
          <div 
            className="progress-bar bg-primary-gradient rounded-pill" 
            style={{ width: `${confidence}%` }}
          ></div>
        </div>
        <p className="small font-weight-bold text-muted text-center mb-0">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );

  return (
    <div className="min-vh-100 analytics-bg py-5">
      <div className="container">
        {/* Header */}
        <div className="mb-4 " style={{marginTop:'100px'}}>
          <h1 className="display-5 fw-bold mb-2">AI Analytics & Insights (Coming Soon)</h1>
          <p className="lead text-muted">Advanced pattern recognition and predictive health analytics</p>
        </div>

        {/* Navigation Tabs */}
        <ul className="nav nav-pills nav-pills-custom mb-4">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'trends' ? 'active' : ''}`}
              onClick={() => setActiveTab('trends')}
            >
              Health Trends
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'predictions' ? 'active' : ''}`}
              onClick={() => setActiveTab('predictions')}
            >
              AI Predictions
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'demographics' ? 'active' : ''}`}
              onClick={() => setActiveTab('demographics')}
            >
              Demographics
            </button>
          </li>
        </ul>

        {/* Time Range Selector */}
        <div className="d-flex justify-content-end mb-4">
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="form-select form-select-sm w-auto"
          >
            <option value="1month">Last Month</option>
            <option value="3months">Last 3 Months</option>
            <option value="6months">Last 6 Months</option>
            <option value="1year">Last Year</option>
          </select>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            {/* Key Metrics */}
            <div className="row g-4 mb-5">
              <div className="col-md-6 col-lg-3">
                <StatCard
                  icon={Users}
                  title="Total Patients"
                  value="1,247"
                  change="+12% from last month"
                  trend="up"
                />
              </div>
              <div className="col-md-6 col-lg-3">
                <StatCard
                  icon={Activity}
                  title="Active Monitoring"
                  value="892"
                  change="+8% from last month"
                  trend="up"
                />
              </div>
              <div className="col-md-6 col-lg-3">
                <StatCard
                  icon={AlertTriangle}
                  title="High Risk Cases"
                  value="34"
                  change="-5% from last month"
                  trend="down"
                />
              </div>
              <div className="col-md-6 col-lg-3">
                <StatCard
                  icon={CheckCircle}
                  title="Resolved Cases"
                  value="156"
                  change="+18% from last month"
                  trend="up"
                />
              </div>
            </div>

            {/* Quick Insights */}
            <div className="card shadow-sm mb-4">
              <div className="card-body" style={{height:'300px'}}>
                <h3 className="card-title mb-3" style={{fontSize:'28px'}}>Key Insights</h3><br />
                <div className="row g-4">
                  <div className="col-md-6" style={{fontSize:'22px'}}>
                    <div className="insight-item">
                      <span className="dot bg-success"></span>
                      <span>Overall patient health trending positively</span>
                    </div>
                    <br />
                    <div className="insight-item">
                      <span className="dot bg-primary"></span>
                      <span>Mental health support showing increased demand</span>
                    </div>
                    <br />
                    <div className="insight-item">
                      <span className="dot bg-warning"></span>
                      <span>Seasonal patterns detected in respiratory conditions</span>
                    </div>
                    <br />
                  </div>
                  <div className="col-md-6" style={{fontSize:'22px'}}>
                    <div className="insight-item">
                      <span className="dot bg-purple"></span>
                      <span>AI model accuracy improved by 12% this quarter</span>
                    </div>
                    <br />
                    <div className="insight-item">
                      <span className="dot bg-danger"></span>
                      <span>Early intervention reduced hospital readmissions by 23%</span>
                    </div>
                    <br />
                    <div className="insight-item">
                      <span className="dot bg-indigo"></span>
                      <span>Patient engagement with digital tools up 31%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Health Trends Tab */}
        {activeTab === 'trends' && (
          <div>
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h3 className="card-title mb-3">Vital Signs Trends</h3>
                <div className="card-chart">
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={vitalTrends}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="heartRate" stroke="#DC3545" strokeWidth={2} name="Heart Rate (BPM)" />
                      <Line type="monotone" dataKey="bloodPressure" stroke="#0D6EFD" strokeWidth={2} name="Blood Pressure (Systolic)" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h3 className="card-title mb-3">Risk Factor Distribution</h3>
                <div className="card-chart">
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={riskFactors}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {riskFactors.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* AI Predictions Tab */}
        {activeTab === 'predictions' && (
          <div>
            <div className="card mb-4 bg-gradient-primary">
              <div className="card-body pb-5 pt-4 px-4">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mb-5">
                  <div className="d-flex align-items-center mb-4 mb-md-0">
                    <div className="rounded-circle me-3 bg-primary-blue p-3">
                      <Brain size={24} className="text-white" />
                    </div>
                    <h3 className="card-title mb-0">AI Risk Predictions</h3>
                  </div>
                  <div className="badge bg-white text-primary-blue">
                    <span className="fa-stack text-success me-1"></span>
                    <span>Neural Network Model v2.1</span>
                  </div>
                </div>
                <div className="row">
                  {aiPredictions.map((prediction, index) => (
                    <div key={index} className="col-md-6 mb-4">
                      <PredictionCard {...prediction} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="card shadow-sm mb-4 bg-gradient-blue">
              <div className="card-body">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center mb-4">
                  <div className="rounded-circle me-3 bg-primary-blue p-3 mb-3 mb-md-0">
                    <Brain size={24} className="text-white" />
                  </div>
                  <h3 className="card-title mb-0">Model Performance Metrics</h3>
                </div>
                <div className="row g-4">
                  {[
                    { name: "Overall Accuracy", value: 94.2, icon: CheckCircle, color: "blue" },
                    { name: "Sensitivity", value: 89.7, icon: TrendingUp, color: "success" },
                    { name: "Specificity", value: 91.4, icon: Activity, color: "purple" }
                  ].map((metric, index) => (
                    <div key={index} className="col-md-4 mb-3">
                      <div className="card text-center shadow-sm">
                        <div className="card-body">
                          <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3 p-4 bg-gradient-light">
                            <metric.icon size={24} className={`text-${metric.color}`} />
                          </div>
                          <h3 className="display-2 mb-2">{metric.value}%</h3>
                          <h6 className="mb-3">{metric.name}</h6>
                          <div className="progress" style={{ height: '8px' }}>
                            <div
                              className={`progress-bar bg-gradient-${metric.color}`} 
                              style={{ width: `${metric.value}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 d-flex justify-content-center">
                  <button className="btn btn-sm btn-blue d-flex align-items-center">
                    <Heart size={16} className="me-2" />
                    <span>AI Model Status: Optimized & Active</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Demographics Tab */}
        {activeTab === 'demographics' && (
          <div>
            <div className="card shadow-sm mb-4 bg-gradient-blue">
              <div className="card-body">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center mb-5">
                  <div className="rounded-circle me-3 bg-primary-blue p-3 mb-3 mb-md-0">
                    <Users size={24} className="text-white" />
                  </div>
                  <h3 className="card-title mb-0">Patient Demographics</h3>
                </div>
                <div className="card shadow-sm mb-4">
                  <div className="card-body">
                    <ResponsiveContainer width="100%" height={350}>
                      <BarChart data={patientDemographics}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0f2fe" />
                        <XAxis dataKey="ageGroup" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" fill="#0D6EFD" radius={[5, 5, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4 mb-5">
              {patientDemographics.map((demo, index) => (
                <div key={index} className="col-md-6 col-lg-3">
                  <div className="card shadow-sm bg-white">
                    <div className="card-body text-center">
                      <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4 p-4 bg-gradient-blue">
                        <Users size={24} className="text-white" />
                      </div>
                      <h3 className="display-6">{demo.count}</h3>
                      <h6>{demo.ageGroup} years</h6>
                      <h3 className="text-blue">{demo.percentage}%</h3>
                      <div className="progress mt-3 mb-2">
                        <div 
                          className="progress-bar bg-blue-gradient rounded-pill" 
                          style={{ width: `${demo.percentage}%` }}
                        ></div>
                      </div>
                      <small className="text-muted">of total patients</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
