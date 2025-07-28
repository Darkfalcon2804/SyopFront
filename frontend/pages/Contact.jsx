import { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Badge, Alert, Modal } from "react-bootstrap";
import SymptoScopeLogo from "../public/SymptoScopeLogo.png";
import { UseAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
    urgency: "medium"
  });
  const [error, setError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { isLogin, token } = UseAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    if (!isLogin) {
      setError(true);
      setTimeout(() => setShowSuccess(false), 5000);
      return;
    }
    const res = await axios.post("http://localhost:3000/api/contact", formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log(res.data);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      category: "",
      message: "",
      urgency: "medium"
    });
  };

  const contactMethods = [
    {
      icon: "fas fa-phone",
      title: "Phone Support",
      description: "Speak with our support team",
      detail: "+1 (555) 123-4567",
      hours: "Mon-Fri: 8AM-8PM EST",
      color: "primary"
    },
    {
      icon: "fas fa-envelope",
      title: "Email Support",
      description: "Get help via email",
      detail: "sympto.scope28@gmail.com",
      hours: "24/7 Response",
      color: "success"
    },
    {
      icon: "fas fa-comments",
      title: "Live Chat",
      description: "Chat with our team",
      detail: "Available on website",
      hours: "Mon-Fri: 9AM-6PM EST",
      color: "info"
    },
  ];

  const officeLocations = [
    {
      city: "San Francisco",
      address: "123 Innovation Drive, Suite 100",
      zipCode: "San Francisco, CA 94102",
      phone: "+1 (415) 555-0123",
      type: "Headquarters"
    },
    {
      city: "Boston",
      address: "456 Medical Center Blvd",
      zipCode: "Boston, MA 02115",
      phone: "+1 (617) 555-0456",
      type: "Research Center"
    },
    {
      city: "Austin",
      address: "789 Tech Hub Lane",
      zipCode: "Austin, TX 78701",
      phone: "+1 (512) 555-0789",
      type: "Development Office"
    }
  ];

  const faqs = [
    {
      question: " What is SymptoScope?",
      answer: "SymptoScope is a smart, web-based health tracking platform that helps users log symptoms, analyze health trends, and receive AI-driven insights for proactive well-being."
    },
    {
      question: "How does SymptoScope help me monitor my health?",
      answer: "By allowing you to log daily symptoms, track changes visually over time, and get personalized health insights using AI, SymptoScope enables you to stay informed and in control of your wellness."
    },
    {
      question: "Is SymptoScope available on mobile?",
      answer: "Currently, SymptoScope is optimized for desktop use. A mobile-responsive version and dedicated app are planned for future updates."
    },
    {
      question: "How do I contact the SymptoScope team?",
      answer: "For any queries or support, feel free to reach out to us at sympto.scope28@gmail.com — we're here to help!"
    }
  ];

  return (
    <div style={{ paddingTop: '100px' }}>
      {/* Hero Section */}
      <section className="hero-section" style={{ color: '#ffffff' }}>
        <Container>
          <Row className="flex align-items-center justify-content-between">
            <Col lg={6} className="hero-content">
              <div className="animate-fade-in">
                <h1 className="display-2 fw-bold mb-4">
                  We're Here to
                  <span className="d-block text-warning">Help You</span>
                </h1>
                <p className="lead mb-5">
                  Our dedicated support team is ready to assist you with any questions,
                  technical issues, or guidance you need on your health journey.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Button
                    variant="warning"
                    size="lg"
                    className="px-4 py-3"
                    onClick={() => setShowModal(true)}
                  >
                    <i className="fas fa-comments me-2"></i>
                    Start Live Chat
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={4} className="text-center">
              <div className="animate-slide-up">
                <div className="p-5 rounded-4 shadow-lg" style={{
                  background: '#f8f9fa', color: '#212529'
                }}>
                  <img src={SymptoScopeLogo} alt="SymptoScope Logo" style={{ width: '95px' }} />
                  <h3 className="mb-3 text-secondary ">AI support</h3>
                  <p className="mb-0 text-secondary">User-friendly healthcare provider</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Methods */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <Badge bg="primary" className="mb-3 px-3 py-2">CONTACT OPTIONS</Badge>
              <h2 className="display-4 fw-bold mb-4">How Can We Help?</h2>
              <p className="lead text-muted">
                Choose the contact method that works best for you
              </p>
            </Col>
          </Row>

          <Row className="g-4 flex justify-content-evenly">
            {contactMethods.map((method, index) => (
              <Col md={6} lg={3} key={index}>
                <Card className="medical-card h-100 border-0 text-center">
                  <Card.Body className="p-4">
                    <div className={`bg-${method.color} rounded-3 d-inline-flex p-3 mb-3`}>
                      <i className={`${method.icon} text-white`} style={{ fontSize: '1.5rem' }}></i>
                    </div>
                    <h5 className="fw-bold mb-2">{method.title}</h5>
                    <p className="text-muted mb-2">{method.description}</p>
                    <p className="fw-semibold text-primary mb-2">{method.detail}</p>
                    <small className="text-muted">{method.hours}</small>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col lg={8}>
              <Card className="medical-card border-0">
                <Card.Body className="p-5">
                  <div className="mb-4">
                    <h2 className="fw-bold mb-3">Send Us a Message</h2>
                    <p className="text-muted">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>



                  <Form onSubmit={handleSubmit}>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Full Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Your full name"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Email Address *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="your.email@example.com"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 98XXXXXXXX"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Contact Category *</Form.Label>
                          <Form.Select
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select a category</option>
                            <option value="technical">Technical Support</option>
                            <option value="medical">Medical Questions</option>
                            <option value="billing">Billing & Pricing</option>
                            <option value="partnership">Partnership Inquiry</option>
                            <option value="media">Media & Press</option>
                            <option value="other">Other</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Subject *</Form.Label>
                          <Form.Control
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            placeholder="Brief subject line"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Priority Level</Form.Label>
                          <Form.Select
                            name="urgency"
                            value={formData.urgency}
                            onChange={handleInputChange}
                          >
                            <option value="low">Low - General inquiry</option>
                            <option value="medium">Medium - Need assistance</option>
                            <option value="high">High - Urgent issue</option>
                            <option value="critical">Critical - Emergency</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>

                      <Col xs={12}>
                        <Form.Group>
                          <Form.Label>Message *</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            placeholder="Please describe your question or issue in detail..."
                          />
                        </Form.Group>
                      </Col>
                      {error && (
                        <Alert variant="danger" className="mb-4">
                          <i className="fas fa-exclamation-circle me-2"></i>
                          Please first login to submit the form.
                          <Button
                            size="lg"
                            className="px-3 py-2 shadow-lg ms-5"
                            style={{
                              borderRadius: '4px',
                              fontWeight: '600',
                              letterSpacing: '0.5px',
                              background: 'rgba(255, 255, 255, 0.2)',
                              border: '2px solid rgba(255, 255, 255, 0.3)',
                              color: '#ffffff',
                              backdropFilter: 'blur(10px)'
                            }}
                          >
                            <Link to="/login" style={{ textDecoration: "none", color: "#fff" }}>Sign In <i className="fas fa-arrow-right "></i></Link>
                          </Button>
                        </Alert>
                      )}

                      {showSuccess && (
                        <Alert variant="success" className="mb-4">
                          <i className="fas fa-check-circle me-2"></i>
                          Thank you for your message! We'll get back to you soon.
                        </Alert>
                      )}
                      <Col xs={12}>
                        <div className="d-flex align-items-center mb-3">
                          <Form.Check
                            type="checkbox"
                            id="privacy-check"
                            label="I agree to the Privacy Policy and Terms of Service"
                            required
                          />
                        </div>
                        <Button type="submit" className="btn-medical-primary px-5 py-2">
                          <i className="fas fa-paper-plane me-2"></i>
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              {/* Quick Contact Info */}
              <Card className="medical-card border-0 mb-4">
                {/* <Card.Body className="p-4">
                  <h5 className="fw-bold mb-3">
                    <i className="fas fa-clock text-primary me-2"></i>
                    Response Times
                  </h5>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between">
                      <span>Critical Issues:</span>
                      <Badge bg="danger">&lt; 1 hour</Badge>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between">
                      <span>High Priority:</span>
                      <Badge bg="warning">&lt; 4 hours</Badge>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between">
                      <span>General Inquiries:</span>
                      <Badge bg="success">&lt; 24 hours</Badge>
                    </div>
                  </div>
                </Card.Body> */}
              </Card>

              {/* Emergency Contact */}
              <Card className="medical-card border-0 mb-4 border-start border-5 border-danger">
                <Card.Body className="p-4">
                  <h5 className="fw-bold mb-3 text-danger">
                    <i className="fas fa-exclamation-triangle me-2"></i>
                    Medical Emergency?
                  </h5>
                  <p className="text-muted mb-3">
                    If you're experiencing a medical emergency, please contact your
                    healthcare provider or call emergency services immediately.
                  </p>
                  <Button variant="danger" className="w-100">
                    <i className="fas fa-phone me-2"></i>
                    Emergency: 108
                  </Button>
                </Card.Body>
              </Card>

              {/* FAQ Quick Links */}
              <Card className="medical-card border-0">
                {/* <Card.Body className="p-4">
                  <h5 className="fw-bold mb-3">
                    <i className="fas fa-question-circle text-info me-2"></i>
                    Quick Help
                  </h5>
                  <div className="d-grid gap-2">
                    <Button variant="outline-primary" size="sm">
                      <i className="fas fa-book me-2"></i>
                      User Guide
                    </Button>
                    <Button variant="outline-primary" size="sm">
                      <i className="fas fa-video me-2"></i>
                      Video Tutorials
                    </Button>
                    <Button variant="outline-primary" size="sm">
                      <i className="fas fa-download me-2"></i>
                      Mobile Apps
                    </Button>
                    <Button variant="outline-primary" size="sm">
                      <i className="fas fa-shield-alt me-2"></i>
                      Privacy & Security
                    </Button>
                  </div>
                </Card.Body> */}
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Office Locations */}
      {/* <section className="py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <Badge bg="success" className="mb-3 px-3 py-2">OFFICE LOCATIONS</Badge>
              <h2 className="display-4 fw-bold mb-4">Visit Our Offices</h2>
              <p className="lead text-muted">
                We have offices across the country to better serve our patients
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            {officeLocations.map((office, index) => (
              <Col md={4} key={index}>
                <Card className="medical-card border-0 h-100">
                  <Card.Body className="p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h5 className="fw-bold mb-0">{office.city}</h5>
                      <Badge bg="primary">{office.type}</Badge>
                    </div>
                    <p className="text-muted mb-2">
                      <i className="fas fa-map-marker-alt me-2"></i>
                      {office.address}
                    </p>
                    <p className="text-muted mb-2">{office.zipCode}</p>
                    <p className="text-primary fw-semibold">
                      <i className="fas fa-phone me-2"></i>
                      {office.phone}
                    </p>
                    <Button variant="outline-primary" size="sm" className="mt-2">
                      <i className="fas fa-directions me-2"></i>
                      Get Directions
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section> */}

      {/* FAQ Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <Badge bg="info" className="mb-3 px-3 py-2">FREQUENTLY ASKED</Badge>
              <h2 className="display-4 fw-bold mb-4">Common Questions</h2>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={10}>
              {faqs.map((faq, index) => (
                <Card key={index} className="medical-card border-0 mb-3">
                  <Card.Body className="p-4">
                    <h6 className="fw-bold mb-2">
                      <i className="fas fa-question-circle text-primary me-2"></i>
                      {faq.question}
                    </h6>
                    <p className="text-muted mb-0">{faq.answer}</p>
                  </Card.Body>
                </Card>
              ))}

              <div className="text-center mt-4">
                {/* <Button variant="primary" size="lg">
                  <i className="fas fa-external-link-alt me-2"></i>
                  View All FAQs
                </Button> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Live Chat Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="fas fa-comments text-primary me-2"></i>
            Live Chat Support
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center py-4">
            <i className="fas fa-user-headset display-4 text-primary mb-3"></i>
            <h5>Connect with Support</h5>
            <p className="text-muted">
              Our support team is currently available to help you with any questions.
            </p>
            <div className="d-grid gap-2">
              <Button variant="primary">Start Chat Session</Button>
              <Button variant="outline-secondary" onClick={() => setShowModal(false)}>
                Maybe Later
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
