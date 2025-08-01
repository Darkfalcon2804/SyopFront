import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeContext";
import SymptoScopeLogo from "../public/SymptoScopeLogo.png"
import boot from "../pages/images/boot.png"
import express from "../pages/images/express.png"
import mongo from "../pages/images/mongo.png"
import node from "../pages/images/node.png"
import ReactLogo from "../pages/images/react.png"
import Rohit from "../pages/images/rohit_image.jpg"
import Bhavesh from "../pages/images/bhavesh_image.jpg"
import Navita from "../pages/images/navita_image.jpg"
export default function About() {
  const { isDarkMode } = useTheme();
  const teamMembers = [
    {
      name: "Bhavesh Jain",
      role: "Full Stack Developer",
      image: `${Bhavesh}`,
      bio: "Btech CSE, Arya College of Engineering"
    },
    {
      name: "Navita Tulsani",
      role: "Full Stack Developer",
      image: `${Navita}`,
      bio: "Btech CSE(IT), Poornima College of Engineering"
    },
    {
      name: "Rohit Kumawat",
      role: "Full Stack Developer",
      image: `${Rohit}`,
      bio: "Btech CSE, Poornima College of Engineering ."
    }
  ];

  const milestones = [
    { year: "2019", event: "Company Founded", description: "Started with a mission to help rare disease patients" },
    { year: "2020", event: "First AI Model", description: "Developed proprietary symptom pattern recognition" },
    { year: "2021", event: "FDA Breakthrough", description: "Received FDA Breakthrough Device Designation" },
    { year: "2022", event: "Clinical Trials", description: "Completed Phase II trials with 95% accuracy" },
    { year: "2023", event: "Series A Funding", description: "Raised $25M led by top healthcare VCs" },
    { year: "2024", event: "Global Launch", description: "Platform now available in 15 countries" }
  ];


  const certifications = [
    {
      name: "React JS",
      icon: <img src={ReactLogo} alt="React logo" style={{width: "50px"}} />,
      color: "success"
    },
    {
      name: "Node JS",
      icon: <img src={node} alt="node.js" style={{width: "50px"}}/>,
      color: "primary"
    },
    {
      name: "Express JS",
      icon: <img src={express} alt="express.js" style={{width: "50px"}}/>,
      color: "warning"
    },
    {
      name: "MongoDB",
      icon: <img src={mongo} alt="mongoDb logo" style={{width: "50px"}} />,
      color: "info"
    },
    {
      name: "Bootstrap Framework",
      icon: <img src={boot} alt="bootstrap logo" style={{width: "50px"}}/>,
      color: "secondary"
    }
  ];


  return (
    <div style={{ paddingTop: '100px' }}>
      {/* Hero Section */}
      <section className="hero-section" style={{ color: '#ffffff' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="hero-content">
              <div className="animate-fade-in">
                <h1 className="display-2 fw-bold mb-4" style={{ color: '#ffffff', lineHeight: '1.2' }}>
                  Revolutionizing Rare Disease
                  <span className="d-block" style={{ color: '#fbbf24' }}>Healthcare with AI</span>
                </h1>
                <p className="lead mb-5" style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.25rem', lineHeight: '1.6' }}>
                  We're on a mission to transform how patients with rare conditions
                  understand, track, and manage their health through cutting-edge
                  artificial intelligence and compassionate care.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Button
                    size="lg"
                    className="px-5 py-3 shadow-lg"
                    style={{
                      borderRadius: '50px',
                      fontWeight: '600',
                      letterSpacing: '0.5px',
                      background: 'rgba(255, 255, 255, 0.2)',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      color: '#ffffff',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <i className="fas fa-rocket me-2"></i>
                    <a href="#our-purpose" style={{ color: '#ffffff', textDecoration: 'none' }}>
                      Our Mission
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    className="px-5 py-3 shadow-sm"
                    style={{
                      borderRadius: '50px',
                      fontWeight: '600',
                      background: 'transparent',
                      border: '2px solid rgba(255, 255, 255, 0.5)',
                      color: '#ffffff',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <i className="fas fa-users me-2"></i>
                    <a href="#our-team" style={{ color: '#ffffff', textDecoration: 'none' }}>
                      Meet the team
                    </a>
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={4} className="text-center">
              <div className="animate-slide-up">
                <div
                  className="p-5 rounded-4 shadow-lg"
                  style={{
                    ... (isDarkMode ? { background: 'linear-gradient(145deg, #1e293b, #334155)', color: '#1976d2' } : { background: '#f8f9fa', color: '#212529' }),
                    border: '1px solid #e9ecef'
                  }}
                >
                  {/* <i className="fas fa-brain mb-4" style={{ fontSize: '5rem', color: '#1976d2' }}></i> */}
                  <img src={SymptoScopeLogo} alt="SymptoScope Logo" className="bg-transparent" style={{ height: "90px", background: "transparent", fontSize: '5rem', color: '#1976d2' }} />
                  <p className="mb-0 " style={{ color: '#495057', fontSize: '1.1rem' }}>
                    AI Symptom Journal for Rare Conditions
                  </p>
                  <div className="mt-3">
                    <small className="text-success">
                      <i className="fas fa-arrow-up me-1"></i>
                      Enpowering Health
                    </small>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Animated Medical Equipment Background */}
        <div className="medical-equipment equipment-1">
          <i className="fas fa-stethoscope" style={{ fontSize: '4rem' }}></i>
        </div>
        <div className="medical-equipment equipment-2">
          <i className="fas fa-heartbeat" style={{ fontSize: '3.5rem' }}></i>
        </div>
        <div className="medical-equipment equipment-3">
          <i className="fas fa-user-md" style={{ fontSize: '3rem' }}></i>
        </div>
        <div className="medical-equipment equipment-4">
          <i className="fas fa-pills" style={{ fontSize: '2.5rem' }}></i>
        </div>
        <div className="medical-equipment equipment-5">
          <i className="fas fa-syringe" style={{ fontSize: '3rem' }}></i>
        </div>
        <div className="medical-equipment equipment-6">
          <i className="fas fa-microscope" style={{ fontSize: '3.5rem' }}></i>
        </div>

        {/* Additional Medical Elements */}
        <div className="medical-equipment" style={{ top: '10%', right: '5%', animationDelay: '6s' }}>
          <i className="fas fa-dna" style={{ fontSize: '2.8rem' }}></i>
        </div>
        <div className="medical-equipment" style={{ bottom: '10%', left: '8%', animationDelay: '7s' }}>
          <i className="fas fa-x-ray" style={{ fontSize: '3.2rem' }}></i>
        </div>
        <div className="medical-equipment" style={{ top: '55%', left: '12%', animationDelay: '8s' }}>
          <i className="fas fa-thermometer" style={{ fontSize: '2.5rem' }}></i>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 id="our-purpose" className="display-4 fw-bold mb-4">Our Purpose</h2>
              <p className="lead text-muted">
                Bridging the gap between patients with rare conditions and the insights they need to live better lives
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={6}>
              <Card className="medical-card h-100 border-0">
                <Card.Body className="p-5">
                  <div className="gradient-primary rounded-3 d-inline-flex p-3 mb-4">
                    <i className="fas fa-bullseye text-white" style={{ fontSize: '2rem' }}></i>
                  </div>
                  <h3 id="our-mission" className="fw-bold mb-3">Our Mission</h3>
                  <p className="text-muted mb-4">
                    To empower patients with rare conditions through AI-driven insights,
                    enabling them to take control of their health journey and improve
                    their quality of life through data-driven decisions.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Patient-centered healthcare innovation
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Evidence-based medical insights
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Accessible healthcare technology
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="medical-card h-100 border-0">
                <Card.Body className="p-5">
                  <div className="gradient-success rounded-3 d-inline-flex p-3 mb-4">
                    <i className="fas fa-eye text-white" style={{ fontSize: '2rem' }}></i>
                  </div>
                  <h3 className="fw-bold mb-3">Our Vision</h3>
                  <p className="text-muted mb-4">
                    A world where every patient with a rare condition has access to
                    personalized, AI-powered health insights that enable them to
                    advocate for better care and achieve optimal health outcomes.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="fas fa-star text-warning me-2"></i>
                      Global healthcare transformation
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-star text-warning me-2"></i>
                      Personalized medicine for all
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-star text-warning me-2"></i>
                      Empowered patient communities
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Company Timeline */}
      {/* <section className="py-5 bg-light"> */}
      {/* <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <Badge bg="primary" className="mb-3 px-3 py-2">COMPANY HISTORY</Badge>
              <h2 className="display-4 fw-bold mb-4">Our Journey</h2>
              <p className="lead text-muted">
                From a small startup to a leading healthcare AI company
              </p>
            </Col>
          </Row>
          
          <Row>
            <Col lg={10} className="mx-auto">
              <div className="position-relative">
                {milestones.map((milestone, index) => (
                  <div key={index} className="d-flex align-items-center mb-4">
                    <div className="flex-shrink-0">
                      <div className="gradient-primary rounded-circle d-flex align-items-center justify-content-center text-white fw-bold" 
                           style={{ width: '60px', height: '60px' }}>
                        {milestone.year.slice(-2)}
                      </div>
                    </div>
                    <div className="ms-4 flex-grow-1">
                      <Card className="medical-card border-0">
                        <Card.Body className="p-4">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <h5 className="fw-bold mb-0">{milestone.event}</h5>
                            <Badge bg="outline-primary">{milestone.year}</Badge>
                          </div>
                          <p className="text-muted mb-0">{milestone.description}</p>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container> */}
      {/* </section> */}

      {/* Team Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <Badge bg="success" className="mb-3 px-3 py-2">OUR TEAM</Badge>
              <h2 id="our-team" className="display-4 fw-bold mb-4">Meet Our Team</h2>
              <p className="lead text-muted">
                Full Stack Learners dedicated to transforming healthcare through AI
              </p>
            </Col>
          </Row>

          <Row className="g-4 justify-content-evenly">
            {teamMembers.map((member, index) => (
              <Col md={6} lg={3} key={index}>
                <Card className="medical-card text-center border-0 h-100">
                  <Card.Body className="p-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-circle mb-3"
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                    <h5 className="fw-bold mb-1">{member.name}</h5>
                    <p className="text-primary fw-semibold mb-2">{member.role}</p>
                    <Badge bg="light" text="dark" className="mb-3">{member.credentials}</Badge>
                    <p className="text-muted small">{member.bio}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>


      {/* Values Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <Badge bg="info" className="mb-3 px-3 py-2">OUR VALUES</Badge>
              <h2 className="display-4 fw-bold mb-4">What Drives Us</h2>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={4}>
              <Card className="medical-card border-0 h-100 text-center">
                <Card.Body className="p-5">
                  <i className="fas fa-heart text-danger mb-3" style={{ fontSize: '3rem' }}></i>
                  <h4 className="fw-bold mb-3">Compassion</h4>
                  <p className="text-muted">
                    Every patient's journey matters. We approach healthcare with empathy and understanding.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="medical-card border-0 h-100 text-center">
                <Card.Body className="p-5">
                  <i className="fas fa-microscope text-primary mb-3" style={{ fontSize: '3rem' }}></i>
                  <h4 className="fw-bold mb-3">Innovation</h4>
                  <p className="text-muted">
                    Pushing the boundaries of what's possible in healthcare technology and AI.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="medical-card border-0 h-100 text-center">
                <Card.Body className="p-5">
                  <i className="fas fa-shield-alt text-success mb-3" style={{ fontSize: '3rem' }}></i>
                  <h4 className="fw-bold mb-3">Integrity</h4>
                  <p className="text-muted">
                    Maintaining the highest ethical standards in healthcare and data privacy.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Certifications & Awards */}

      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="display-4 fw-bold mb-4">TECH STACK USED</h2>
              <p className="lead text-muted">
                Combined Technologies to provide you the Best Services
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            {certifications.map((cert, index) => (
              <Col md={6} lg={2} key={index} className="mb-4">
                <Card className="medical-card text-center border-0 h-100">
                  <Card.Body className="p-4">
                    <>
                    { cert.icon}

                    </>
                    <h6 className="fw-bold">{cert.name}</h6>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>


      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="display-4 fw-bold mb-4">Ready to Transform Your Health Journey?</h2>
              <p className="lead mb-5">
                Join thousands of patients who are taking control of their rare conditions with AI-powered insights.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Button variant="warning" size="lg" className="px-5 py-3">
                  <i className="fas fa-rocket me-2"></i>
                  Get Started Today
                </Button>
                <Button variant="outline-light" size="lg" className="px-5 py-3">
                  <i className="fas fa-phone me-2"></i>
                  Contact Our Team
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
