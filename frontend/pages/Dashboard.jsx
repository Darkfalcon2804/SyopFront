import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Badge, ProgressBar } from "react-bootstrap";
import { UseAuth } from "../contexts/AuthContext";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Dashboard() {
  const { user, token } = UseAuth();
  const navigate = useNavigate();
  const [daysAccount, setDaysAccount] = useState(0);
  if (!user) {
    return (<>
      <p style={{ paddingTop: '100px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>You are not Authorized for this page. please sign-in</p>;
      {setTimeout(() => {
        navigate("/login");
      }, 2000)}
    </>
    )
  }
  // it is a function that give us the data of how long ago a user's account was created
  const getDaysAgo = (createdAt) => {
    const createdDate = new Date(createdAt);
    const now = new Date();
    const diffTime = now - createdDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  const handleUserData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setDaysAccount(getDaysAgo(res.data.user.createdAt));
      console.log(daysAccount)
      console.log(res.data)
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  }
  useEffect(() => {
    handleUserData();
  }, []);

  const stats = [
    { number: `${daysAccount}`, label: "Days Tracked", icon: "fas fa-calendar", color: "primary" },
    { number: "12", label: "Symptoms Logged", icon: "fas fa-notes-medical", color: "success" },
    { number: "8", label: "AI Insights", icon: "fas fa-brain", color: "info" },
    { number: "15%", label: "Improvement", icon: "fas fa-chart-line", color: "warning" }
  ];

  const recentActivity = [
    {
      type: "symptom",
      title: "Logged fatigue level: 7/10",
      time: "Today, 2:30 PM",
      badge: "High",
      badgeColor: "warning"
    },
    {
      type: "insight",
      title: "AI detected sleep quality improvement",
      time: "Yesterday, 9:15 AM",
      badge: "Insight",
      badgeColor: "info"
    },
    {
      type: "medication",
      title: "Medication reminder: Methotrexate taken",
      time: "2 days ago, 8:00 AM",
      badge: "Completed",
      badgeColor: "success"
    }
  ];

  const todaysGoals = [
    { task: "Symptom Check-in", progress: 66, current: "2/3", status: "In Progress" },
    { task: "Water Intake", progress: 75, current: "6/8 glasses", status: "Good" },
    { task: "Medication", progress: 100, current: "Complete", status: "Done" }
  ];



  // Add this function to your Dashboard component, right after your existing functions

  const handleGenerateReport = () => {
    const reportWindow = window.open('', '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');

    const reportHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Health Report - ${user.FirstName}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #87CEEB 0%, #E0F6FF 50%, #87CEEB 100%);
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .header {
            background: linear-gradient(135deg, #4682B4, #87CEEB);
            color: white;
            padding: 40px;
            border-radius: 15px;
            margin-bottom: 30px;
            box-shadow: 0 10px 30px rgba(70, 130, 180, 0.3);
        }
        
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .header h1 {
            font-size: 2.5rem;
            margin: 0 0 10px 0;
            font-weight: bold;
        }
        
        .header p {
            font-size: 1.2rem;
            margin: 0;
            opacity: 0.9;
        }
        
        .header-icon {
            font-size: 3rem;
            opacity: 0.7;
        }
        
        .card {
            background: white;
            border-radius: 15px;
            padding: 30px;
            margin-bottom: 30px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }
        
        .section-title {
            color: #4682B4;
            margin-bottom: 25px;
            font-size: 1.8rem;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }
        
        .stat-card {
            background: linear-gradient(135deg, #E0F6FF, #B0E0E6);
            padding: 25px;
            border-radius: 12px;
            text-align: center;
            border: 2px solid #87CEEB;
        }
        
        .stat-icon {
            font-size: 2rem;
            margin-bottom: 10px;
        }
        
        .stat-number {
            font-size: 2.2rem;
            margin: 0 0 5px 0;
            color: #4682B4;
            font-weight: bold;
        }
        
        .stat-label {
            margin: 0 0 8px 0;
            color: #2F4F4F;
            font-weight: 600;
            font-size: 1.1rem;
        }
        
        .stat-change {
            color: #008B8B;
            font-weight: 500;
            font-size: 0.9rem;
        }
        
        .activity-container {
            max-height: 600px;
            overflow-y: auto;
        }
        
        .activity-item {
            background: linear-gradient(135deg, #F0F8FF, #E6F3FF);
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 15px;
            border: 1px solid #B0E0E6;
            box-shadow: 0 2px 10px rgba(135, 206, 235, 0.2);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .activity-content p {
            margin: 0 0 8px 0;
            font-size: 1.1rem;
            font-weight: 600;
            color: #2F4F4F;
        }
        
        .activity-time {
            margin: 0;
            color: #708090;
            font-size: 0.95rem;
        }
        
        .activity-badge {
            color: white;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 600;
        }
        
        .download-section {
            text-align: center;
        }
        
        .download-buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 30px;
        }
        
        .btn {
            padding: 15px 30px;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            border: none;
            min-width: 200px;
            transition: all 0.3s ease;
        }
        
        .btn:hover {
            transform: translateY(-2px);
        }
        
        .btn-primary {
            background: linear-gradient(135deg, #4682B4, #87CEEB);
            color: white;
            box-shadow: 0 5px 15px rgba(70, 130, 180, 0.4);
        }
        
        .btn-primary:hover {
            box-shadow: 0 8px 25px rgba(70, 130, 180, 0.6);
        }
        
        .btn-secondary {
            background: linear-gradient(135deg, #87CEEB, #B0E0E6);
            color: #2F4F4F;
            border: 2px solid #4682B4;
            box-shadow: 0 5px 15px rgba(135, 206, 235, 0.4);
        }
        
        .btn-secondary:hover {
            box-shadow: 0 8px 25px rgba(135, 206, 235, 0.6);
            background: linear-gradient(135deg, #B0E0E6, #87CEEB);
        }
        
        .note-section {
            margin-top: 30px;
            padding: 20px;
            background: linear-gradient(135deg, #E0F6FF, #F0F8FF);
            border-radius: 10px;
            border: 1px solid #B0E0E6;
        }
        
        .note-text {
            margin: 0;
            color: #2F4F4F;
            font-size: 0.95rem;
            line-height: 1.5;
        }
        
        .report-id {
            margin: 10px 0 0 0;
            color: #708090;
            font-size: 0.85rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <div class="header-content">
                <div>
                    <h1>Health Report</h1>
                    <p>Generated on ${new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })}</p>
                    <p style="font-size: 1.1rem; margin: 5px 0 0 0; opacity: 0.8;">
                        Patient: ${user.FirstName}
                    </p>
                </div>
                <div>
                    <div class="header-icon">📊</div>
                </div>
            </div>
        </div>

        <!-- Stats Overview -->
        <div class="card">
            <h2 class="section-title">📈 Summary Statistics</h2>
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon">📅</div>
                    <h3 class="stat-number">${daysAccount}</h3>
                    <p class="stat-label">Days Tracked</p>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">📋</div>
                    <h3 class="stat-number">12</h3>
                    <p class="stat-label">Symptoms Logged</p>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">🧠</div>
                    <h3 class="stat-number">8</h3>
                    <p class="stat-label">AI Insights</p>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">📈</div>
                    <h3 class="stat-number">15%</h3>
                    <p class="stat-label">Improvement</p>
                </div>
            </div>
        </div>

        <!-- Recent Activity -->
        <div class="card">
            <h2 class="section-title">🕒 Recent Activity Log</h2>
            <div class="activity-container">
                <div class="activity-item">
                    <div class="activity-content">
                        <p>Logged fatigue level: 7/10</p>
                        <p class="activity-time">🕐 Today, 2:30 PM</p>
                    </div>
                    <span class="activity-badge" style="background-color: #FF6B6B;">High</span>
                </div>
                <div class="activity-item">
                    <div class="activity-content">
                        <p>AI detected sleep quality improvement</p>
                        <p class="activity-time">🕐 Yesterday, 9:15 AM</p>
                    </div>
                    <span class="activity-badge" style="background-color: #4ECDC4;">Insight</span>
                </div>
                <div class="activity-item">
                    <div class="activity-content">
                        <p>Medication reminder: Methotrexate taken</p>
                        <p class="activity-time">🕐 2 days ago, 8:00 AM</p>
                    </div>
                    <span class="activity-badge" style="background-color: #45B7D1;">Completed</span>
                </div>
                <div class="activity-item">
                    <div class="activity-content">
                        <p>Logged joint pain level: 5/10</p>
                        <p class="activity-time">🕐 3 days ago, 10:15 AM</p>
                    </div>
                    <span class="activity-badge" style="background-color: #FFA726;">Medium</span>
                </div>
                <div class="activity-item">
                    <div class="activity-content">
                        <p>Exercise correlation with mood detected</p>
                        <p class="activity-time">🕐 4 days ago, 3:45 PM</p>
                    </div>
                    <span class="activity-badge" style="background-color: #4ECDC4;">Insight</span>
                </div>
                <div class="activity-item">
                    <div class="activity-content">
                        <p>Vitamin D supplement taken</p>
                        <p class="activity-time">🕐 5 days ago, 9:00 AM</p>
                    </div>
                    <span class="activity-badge" style="background-color: #45B7D1;">Completed</span>
                </div>
                <div class="activity-item">
                    <div class="activity-content">
                        <p>Logged mood level: 8/10</p>
                        <p class="activity-time">🕐 6 days ago, 7:20 PM</p>
                    </div>
                    <span class="activity-badge" style="background-color: #66BB6A;">Good</span>
                </div>
                <div class="activity-item">
                    <div class="activity-content">
                        <p>Weather pattern affecting symptoms</p>
                        <p class="activity-time">🕐 1 week ago, 11:30 AM</p>
                    </div>
                    <span class="activity-badge" style="background-color: #4ECDC4;">Insight</span>
                </div>
            </div>
        </div>

        <!-- Download Section -->
        <div class="card download-section">
            <h2 class="section-title">📥 Download Report</h2>
            <p style="color: #708090; margin-bottom: 30px; font-size: 1.1rem; line-height: 1.6;">
                Download your complete health report for your records or to share with your healthcare provider.
            </p>
            <div class="download-buttons">
                <button class="btn btn-primary" onclick="downloadTextReport()">
                    📄 Download as Text
                </button>
                <button class="btn btn-secondary" onclick="downloadPDFReport()">
                    🖨️ Print/Save as PDF
                </button>
            </div>
            <div class="note-section">
                <p class="note-text">
                    <strong>📋 Note:</strong> This report contains a comprehensive overview of your health tracking data. 
                    For detailed analysis and recommendations, please consult with your healthcare provider.
                </p>
                <p class="report-id">
                    Report ID: ${Date.now()} | Generated: ${new Date().toLocaleString()}
                </p>
            </div>
        </div>
    </div>

    <script>
        function downloadTextReport() {
            const reportContent = \`HEALTH TRACKING REPORT
Generated on: ${new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })}
Patient: ${user.FirstName}

=== SUMMARY STATISTICS ===
Days Tracked: 47 (+3 this week)
Symptoms Logged: 23 (This week)
AI Insights: 8 (2 new)
Improvement: 15% (This month)

=== RECENT ACTIVITY LOG ===
1. Logged fatigue level: 7/10
   Time: Today, 2:30 PM
   Status: High
   Type: Symptom

2. AI detected sleep quality improvement
   Time: Yesterday, 9:15 AM
   Status: Insight
   Type: Insight

3. Medication reminder: Methotrexate taken
   Time: 2 days ago, 8:00 AM
   Status: Completed
   Type: Medication

4. Logged joint pain level: 5/10
   Time: 3 days ago, 10:15 AM
   Status: Medium
   Type: Symptom

5. Exercise correlation with mood detected
   Time: 4 days ago, 3:45 PM
   Status: Insight
   Type: Insight

6. Vitamin D supplement taken
   Time: 5 days ago, 9:00 AM
   Status: Completed
   Type: Medication

7. Logged mood level: 8/10
   Time: 6 days ago, 7:20 PM
   Status: Good
   Type: Symptom

8. Weather pattern affecting symptoms
   Time: 1 week ago, 11:30 AM
   Status: Insight
   Type: Insight

=== NOTES ===
This report contains a comprehensive overview of your health tracking data.
For detailed analysis and recommendations, please consult with your healthcare provider.

Generated by Health Tracker App
Report ID: ${Date.now()}\`;

            const blob = new Blob([reportContent], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'health-report-' + new Date().toISOString().split('T')[0] + '.txt';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        }

        function downloadPDFReport() {
            window.print();
        }
    </script>
</body>
</html>
  `;

    reportWindow.document.write(reportHTML);
    reportWindow.document.close();
  };

  //Replace your existing Generate Report button in the Dashboard with this:
  /*
  <div className="col-md-6 col-lg-3">
    <div className="d-grid">
      <button 
        className="btn btn-outline-primary py-3"
        onClick={handleGenerateReport}
      >
        <i className="fas fa-file-pdf d-block mb-2" style={{ fontSize: '1.5rem' }}></i>
        Generate Report
      </button>
    </div>
  </div>
  */

  return (
    <div style={{ paddingTop: '100px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Container>
        <Row className="mb-4">
          <Col>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h1 className="display-4 fw-bold text-gradient-primary mb-2">
                  Welcome back, {user.FirstName}
                </h1>
                <p className="text-muted fs-5">
                  Your health overview for {new Date().toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
              <div className="d-flex gap-2">
                <Link to="/journal" className="text-decoration-none">
                  <Button className="btn-medical-primary">
                    <i className="fas fa-plus me-2"></i>
                    Quick Log
                  </Button>
                </Link>

              </div>
            </div>
          </Col>
        </Row>

        {/* Stats Cards */}
        <Row className="g-4 mb-5">
          {stats.map((stat, index) => (
            <Col md={6} lg={3} key={index}>
              <Card className="medical-card h-100 text-center">
                <Card.Body className="p-4">
                  <div className={`bg-${stat.color} rounded-3 d-inline-flex p-3 mb-3`}>
                    <i className={`${stat.icon} text-white`} style={{ fontSize: '1.5rem' }}></i>
                  </div>
                  <h3 className="fw-bold">{stat.number}</h3>
                  <p className="text-muted mb-1">{stat.label}</p>
                  <small className="text-success">{stat.change}</small>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Quick Actions - Full Width */}
        <div className="row mb-5">
          <div className="col-12" >
            <div className="card medical-card"  >
              <div className="card-header">
                <h4 className="mb-0">
                  <i className="fas fa-bolt text-warning me-2"></i>
                  Quick Actions
                </h4>
              </div>
              <div className="card-body" >
                <div className="row g-3" style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                  <div className="col-md-6 col-lg-3">
                    <Link to="/journal" className="text-decoration-none">
                      <div className="d-grid">
                        <button className="btn btn-medical-primary py-3">
                          <i className="fas fa-plus d-block mb-2" style={{ fontSize: '1.5rem' }}></i>
                          Log Symptoms
                        </button>
                      </div>
                    </Link>
                  </div>
                  {/* <div className="col-md-6 col-lg-3">
                    <div className="d-grid">
                      <button className="btn btn-outline-primary py-3">
                        <i className="fas fa-microphone d-block mb-2" style={{ fontSize: '1.5rem' }}></i>
                        Voice Log
                      </button>
                    </div>
                  </div> */}
                  <div className="col-md-6 col-lg-3">
                    <Link to="/analysis" className="text-decoration-none">
                      <div className="d-grid">
                        <button className="btn btn-outline-primary py-3">
                          <i className="fas fa-chart-bar d-block mb-2" style={{ fontSize: '1.5rem' }}></i>
                          View Analysis
                        </button>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="d-grid">
                      <button
                        className="btn btn-outline-primary py-3"
                        onClick={handleGenerateReport}
                      >
                        <i className="fas fa-file-pdf d-block mb-2" style={{ fontSize: '1.5rem' }}></i>
                        Generate Report
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area with Recent Activity and Today's Goals side by side */}
        <div className="row">
          <div className="col-lg-8">
            <div className="card medical-card">
              <div className="card-header">
                <h4 className="mb-0">
                  <i className="fas fa-clock text-info me-2"></i>
                  Recent Activity
                </h4>
              </div>
              <div className="card-body">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="d-flex align-items-center p-3 rounded glassmorphism mb-3">
                    <div className="me-3">
                      <i className={`fas fa-circle text-${activity.badgeColor}`}></i>
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <p className="mb-1 fw-medium">{activity.title}</p>
                          <small className="text-muted">
                            <i className="fas fa-clock me-1"></i>
                            {activity.time}
                          </small>
                        </div>
                        <span className={`badge bg-${activity.badgeColor}`}>{activity.badge}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card medical-card">
              <div className="card-header">
                <h5 className="mb-0">
                  <i className="fas fa-target text-success me-2"></i>
                  Today's Goals
                </h5>
              </div>
              <div className="card-body">
                <div className="text-center py-5">
                  {/* <i className="fas fa-clock text-muted mb-3" style={{ fontSize: '3rem' }}></i> */}
                  <p className="text-muted fs-3 mb-0" style={{ fontStyle: 'italic' }}>
                    Coming Soon...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}