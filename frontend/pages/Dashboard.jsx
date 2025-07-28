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
      setDaysAccount(res.data.user.createdAt);
      console.log(res.data)
      console.log(daysAccount)
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  }
  useEffect(() => {
    handleUserData();
  }, []);

  const stats = [
    { number: "47", label: "Days Tracked", icon: "fas fa-calendar", change: "+3 this week", color: "primary" },
    { number: "23", label: "Symptoms Logged", icon: "fas fa-notes-medical", change: "This week", color: "success" },
    { number: "8", label: "AI Insights", icon: "fas fa-brain", change: "2 new", color: "info" },
    { number: "15%", label: "Improvement", icon: "fas fa-chart-line", change: "This month", color: "warning" }
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
                      <button className="btn btn-outline-primary py-3">
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