import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Badge, Carousel } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeContext";
import SymptoScopeLogo  from "../public/SymptoScopeLogo.png";
export default function Index() {
  const { isDarkMode} = useTheme();
  
  const features = [
    {
      icon: "fas fa-brain",
      title: "AI-Powered Pattern Recognition",
      description: "Advanced machine learning algorithms analyze your symptoms to identify patterns and correlations that might be missed by traditional tracking methods.",
      benefits: ["Real-time analysis", "Predictive modeling", "Pattern detection", "Correlation mapping"]
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Smart Symptom Tracking",
      description: "Intuitive logging with voice recognition, photo capture, and automated reminders to ensure comprehensive health data collection.",
      benefits: ["Voice-to-text logging", "Photo documentation", "Smart reminders", "Multi-device sync"]
    },
    {
      icon: "fas fa-chart-line",
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive visualizations and insights that help you understand your health trends and share meaningful data with your healthcare team.",
      benefits: ["Trend visualization", "Custom reports", "Doctor sharing", "Progress tracking"]
    },
    // {
    //   icon: "fas fa-shield-alt",
    //   title: "Medical-Grade Security",
    //   description: "HIPAA compliant platform with enterprise-level security ensuring your sensitive health information is always protected.",
    //   benefits: ["HIPAA compliant", "End-to-end encryption", "Secure cloud storage", "Regular audits"]
    // },
    // {
    //   icon: "fas fa-users-medical",
    //   title: "Healthcare Integration",
    //   description: "Seamlessly share comprehensive reports with your medical team and integrate with existing healthcare workflows.",
    //   benefits: ["Doctor collaboration", "Report generation", "EHR integration", "Telemedicine support"]
    // },
    // {
    //   icon: "fas fa-globe",
    //   title: "Research Contribution",
    //   description: "Optionally contribute anonymized data to advance rare disease research and help improve treatments for future patients.",
    //   benefits: ["Anonymous participation", "Research advancement", "Community impact", "Medical breakthroughs"]
    // }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      condition: "Systemic Lupus",
      location: "Boston, MA",
      quote: "SymptomAI helped me identify trigger patterns I never noticed before. My doctor was amazed by the detailed insights, and it's completely changed how we approach my treatment plan.",
      rating: 5,
      image: "https://via.placeholder.com/80x80/007bff/ffffff?text=SM"
    },
    {
      name: "Michael Rodriguez",
      condition: "Rheumatoid Arthritis",
      location: "Austin, TX", 
      quote: "The AI predictions are incredibly accurate. I can now prepare for flare-ups days in advance, which has given me so much more control over my condition.",
      rating: 5,
      image: "https://via.placeholder.com/80x80/28a745/ffffff?text=MR"
    },
    {
      name: "Dr. Emily Chen",
      role: "Rheumatologist",
      location: "San Francisco, CA",
      quote: "The detailed patient reports from SymptomAI have revolutionized my practice. I can make more informed decisions with better data than ever before.",
      rating: 5,
      image: "https://via.placeholder.com/80x80/17a2b8/ffffff?text=EC"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Patients", icon: "fas fa-users" },
    { number: "500+", label: "Rare Conditions", icon: "fas fa-dna" },
    { number: "95%", label: "AI Accuracy", icon: "fas fa-brain" },
    { number: "24/7", label: "Monitoring", icon: "fas fa-clock" }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Create Your Profile",
      description: "Set up your secure account with your medical history, current conditions, and treatment information.",
      icon: "fas fa-user-plus"
    },
    {
      step: 2,
      title: "Track Daily Symptoms",
      description: "Use our intuitive interface to log symptoms, medications, triggers, and lifestyle factors daily.",
      icon: "fas fa-notes-medical"
    },
    {
      step: 3,
      title: "Get AI Insights",
      description: "Receive personalized insights, pattern recognition, and predictive analytics powered by advanced AI.",
      icon: "fas fa-brain"
    },
    {
      step: 4,
      title: "Get Health Report",
      description: "Generate comprehensive reports to share with your healthcare team for better treatment decisions.",
      icon: "fas fa-user-md"
    }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="hero-section" style={{ color: '#ffffff' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="hero-content">
              <div className="animate-fade-in">
                <h1 className="display-2 fw-bold mb-4" style={{ color: '#ffffff', lineHeight: '1.2' }}>
                  Transform Your
                  <span className="d-block" style={{ color: '#fbbf24' }}>Health Journey</span>
                </h1>
                <p className="lead mb-5 text-justify" style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.25rem', lineHeight: '1.6' }}>
                  Navigating a rare condition can feel like walking in the dark. Our AI-powered journal helps you document your symptoms, analyze patterns, and discover possible conditions before they become critical.
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
                    <Link to="/register" style={{ textDecoration:"none", color:"#fff"}}>Get Started <i className="fas fa-arrow-right "></i></Link>
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
                  <img src={SymptoScopeLogo} alt="SymptoScope Logo" className="bg-transparent" style={{ height: "90px",background:"transparent" ,fontSize: '5rem', color: '#1976d2' }} />
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

      {/* Features Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <Badge bg="primary" className="mb-3 px-3 py-2">PLATFORM FEATURES</Badge>
              <h2 className="display-4 fw-bold mb-4">
                Next-Generation Health Technology
              </h2>
              <p className="lead text-muted">
                Cutting-edge AI algorithms combined with medical expertise to provide 
                unprecedented insights into rare conditions
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            {features.map((feature, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="medical-card h-100 border-0">
                  <Card.Body className="p-4">
                    <div className="gradient-primary rounded-3 d-inline-flex p-3 mb-4">
                      <i className={`${feature.icon} text-white`} style={{ fontSize: '1.5rem' }}></i>
                    </div>
                    <h4 className="fw-bold mb-3">{feature.title}</h4>
                    <p className="text-muted mb-4">{feature.description}</p>
                    <ul className="list-unstyled">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          <small>{benefit}</small>
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <Badge bg="success" className="mb-3 px-3 py-2">HOW IT WORKS</Badge>
              <h2 className="display-4 fw-bold mb-4">
                Simple Steps to Better Health
              </h2>
              <p className="lead text-muted">
                Get started with SymptomAI in just a few easy steps
              </p>
            </Col>
          </Row>
          
          <Row className="g-5">
            {howItWorks.map((step, index) => (
              <Col md={6} lg={3} key={index}>
                <div className="text-center">
                  <div className="position-relative mb-4">
                    <div className="gradient-primary rounded-circle d-flex align-items-center justify-content-center mx-auto text-white fw-bold"
                         style={{ width: '80px', height: '80px', fontSize: '1.5rem' }}>
                      {step.step}
                    </div>
                    <div className="gradient-success rounded-3 d-inline-flex p-2 position-absolute top-0 end-0">
                      <i className={`${step.icon} text-white`}></i>
                    </div>
                  </div>
                  <h4 className="fw-bold mb-3">{step.title}</h4>
                  <p className="text-muted">{step.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      {/* <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <Badge bg="info" className="mb-3 px-3 py-2">PATIENT STORIES</Badge>
              <h2 className="display-4 fw-bold mb-4">
                Real Results from Real Patients
              </h2>
              <p className="lead text-muted">
                Hear from patients and doctors who are transforming healthcare with SymptomAI
              </p>
            </Col>
          </Row>
          
          <Row className="justify-content-center">
            <Col lg={10}>
              <Carousel indicators={false} className="testimonial-carousel">
                {testimonials.map((testimonial, index) => (
                  <Carousel.Item key={index}>
                    <Card className="medical-card border-0 mx-auto" style={{ maxWidth: '800px' }}>
                      <Card.Body className="p-5 text-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="rounded-circle mb-4"
                          style={{ width: '80px', height: '80px' }}
                        />
                        <div className="mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <i key={i} className="fas fa-star text-warning"></i>
                          ))}
                        </div>
                        <blockquote className="fs-5 mb-4 fst-italic">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="fw-bold">{testimonial.name}</div>
                        <div className="text-muted">
                          {testimonial.condition || testimonial.role} • {testimonial.location}
                        </div>
                      </Card.Body>
                    </Card>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* Trust & Security */}
      {/* <section className="py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <Badge bg="warning" className="mb-3 px-3 py-2">TRUST & SECURITY</Badge>
              <h2 className="display-4 fw-bold mb-4">
                Medical-Grade Security & Privacy
              </h2>
            </Col>
          </Row>
          
          <Row className="g-4 text-center">
            <Col md={3}>
              <Card className="medical-card border-0 h-100">
                <Card.Body className="p-4">
                  <i className="fas fa-shield-alt text-success mb-3" style={{ fontSize: '3rem' }}></i>
                  <h5 className="fw-bold">HIPAA Compliant</h5>
                  <p className="text-muted small mb-0">Medical-grade privacy protection</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="medical-card border-0 h-100">
                <Card.Body className="p-4">
                  <i className="fas fa-lock text-primary mb-3" style={{ fontSize: '3rem' }}></i>
                  <h5 className="fw-bold">256-bit Encryption</h5>
                  <p className="text-muted small mb-0">Bank-level data security</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="medical-card border-0 h-100">
                <Card.Body className="p-4">
                  <i className="fas fa-certificate text-warning mb-3" style={{ fontSize: '3rem' }}></i>
                  <h5 className="fw-bold">FDA Approved</h5>
                  <p className="text-muted small mb-0">Breakthrough device designation</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="medical-card border-0 h-100">
                <Card.Body className="p-4">
                  <i className="fas fa-award text-info mb-3" style={{ fontSize: '3rem' }}></i>
                  <h5 className="fw-bold">SOC 2 Certified</h5>
                  <p className="text-muted small mb-0">Industry-leading compliance</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <Badge bg="warning" className="mb-4 px-3 py-2">GET STARTED TODAY</Badge>
              <h2 className="display-3 fw-bold mb-4">
                Ready to Transform Your Health Management?
              </h2>
              <p className="lead mb-5 opacity-90">
                Navigating a rare condition can feel like walking in the dark. Our AI-powered journal helps you document your symptoms, analyze patterns, and discover possible conditions before they become critical.
              </p>
              
              <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mb-5">
                <Link to="/register" className="text-decoration-none">
                  <Button variant="warning" size="lg" className="px-5 py-3">
                    <i className="fas fa-rocket me-2"></i>
                    Get Started  <i className="fas fa-arrow-right "></i>
                  </Button>
                </Link>
                {/* <Link to="/contact" className="text-decoration-none">
                  <Button variant="outline-light" size="lg" className="px-5 py-3">
                    <i className="fas fa-calendar me-2"></i>
                    Schedule Demo
                  </Button>
                </Link> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer-medical py-5">
        <Container>
          <Row className="g-4">
            <Col lg={4}>
              <div className="d-flex align-items-center mb-4">
                <div className="rounded-3 p-2">
                  <img src={SymptoScopeLogo} alt="SymptoScope Logo" style={{ width: '65px'}} />
                </div>
                <div>
                  <div className="fw-bold text-primary fs-4">SymptoScope</div>
                </div>
              </div>
              <p className="text-white-50 mb-4">
                Empowering patients with rare conditions through AI-driven insights 
                and personalized health tracking.
              </p>
              <div className="d-flex gap-3">
                <Button variant="outline-light" size="sm" className="rounded-circle">
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button variant="outline-light" size="sm" className="rounded-circle">
                  <i className="fab fa-linkedin"></i>
                </Button>
                <Button variant="outline-light" size="sm" className="rounded-circle">
                  <i className="fab fa-facebook"></i>
                </Button>
              </div>
            </Col>
            
            <Col md={6} lg={2}>
              <h5 className="text-white fw-bold mb-3">Product</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to="/features" className="text-white-50 text-decoration-none">Features</Link></li>
                <li className="mb-2"><Link to="/security" className="text-white-50 text-decoration-none">Security</Link></li>
                <li className="mb-2"><Link to="/mobile" className="text-white-50 text-decoration-none">Mobile Apps</Link></li>
              </ul>
            </Col>
            
            <Col md={6} lg={2}>
              <h5 className="text-white fw-bold mb-3">Company</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to="/about" className="text-white-50 text-decoration-none">About</Link></li>
               
                <li className="mb-2"><Link to="/press" className="text-white-50 text-decoration-none">Press</Link></li>
                <li className="mb-2"><Link to="/contact" className="text-white-50 text-decoration-none">Contact</Link></li>
              </ul>
            </Col>
            
            <Col md={6} lg={2}>
              <h5 className="text-white fw-bold mb-3">Legal</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to="/privacy" className="text-white-50 text-decoration-none">Privacy</Link></li>
                <li className="mb-2"><Link to="/terms" className="text-white-50 text-decoration-none">Terms</Link></li>
                <li className="mb-2"><Link to="/cookies" className="text-white-50 text-decoration-none">Cookies</Link></li>
              </ul>
            </Col>
          </Row>
          
          <hr className="my-4 text-white-50" />
          
          <Row className="align-items-center">
            <Col md={6}>
              <p className="text-white-50 mb-0">
                © 2024 SymptomAI. All rights reserved.
              </p>
            </Col>
            <Col md={6} className="text-md-end">
              <p className="text-white-50 mb-0">
                <i className="fas fa-shield-alt me-1"></i>
                HIPAA Compliant • FDA Approved • SOC 2 Certified
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
