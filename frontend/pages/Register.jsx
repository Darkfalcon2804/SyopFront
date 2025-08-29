import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { UseAuth } from "../contexts/AuthContext";
import axios from "axios";
export default function Register() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    password: "",
    ConfirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { backendUrl } = UseAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.FirstName.trim()) newErrors.FirstName = "First name is required";
    if (!formData.LastName.trim()) newErrors.LastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.ConfirmPassword) newErrors.ConfirmPassword = "Passwords don't match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    setErrors({});
    setShowSuccess(false);

    try {
      const response = await axios.post(`${backendUrl}/api/user/register`, formData);
      setShowSuccess(true);
    } catch (error) {
      console.error("Registration Error:", error);
      const message = error.response?.data?.message || "Registration failed. Please try again.";
      setErrors({ message });
    } finally {
        setIsLoading(false); //  Hide loading spinner
      }
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
    }, 1500);
  };

  if (showSuccess) {
    return (
      <div style={{ paddingTop: '100px', minHeight: '100vh' }} className="bg-light d-flex align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <Card className="border-0 shadow">
                <Card.Body className="p-5 text-center">
                  <div className="text-success mb-4">
                    <i className="fas fa-check-circle" style={{ fontSize: '4rem' }}></i>
                  </div>
                  <h2 className="fw-bold mb-3">Registration Successful!</h2>
                  <p className="text-muted mb-4">
                    Welcome to SymptomAI! Your account has been created successfully.
                  </p>
                  <Link to="/login" className="btn btn-primary">
                    Sign In to Your Account
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={6}>
            <Link to="/" className="text-decoration-none text-muted mb-4 d-inline-flex align-items-center">
              <i className="fas fa-arrow-left me-2"></i>
              Back to Home
            </Link>

            <Card className="medical-card border-0 shadow">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <div className="bg-primary rounded-3 d-inline-flex p-3 mb-3">
                    <i className="fas fa-user-plus text-white" style={{ fontSize: '2rem' }}></i>
                  </div>
                  <h2 className="fw-bold text-primary">Create Your Account</h2>
                  <p className="text-muted">Join thousands of patients managing their health with AI</p>
                </div>

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          className="white-placeholder"
                          type="text"
                          name="FirstName"
                          value={formData.FirstName}
                          onChange={handleInputChange}
                          placeholder="Enter your first name"
                          isInvalid={!!errors.FirstName}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.FirstName}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                        className="white-placeholder"
                          type="text"
                          name="LastName"
                          value={formData.LastName}
                          onChange={handleInputChange}
                          placeholder="Enter your last name"
                          isInvalid={!!errors.LastName}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.LastName}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                    className="white-placeholder"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    className="white-placeholder"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Create a password"
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                    className="white-placeholder"
                      type="password"
                      name="ConfirmPassword"
                      value={formData.ConfirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm your password"
                      isInvalid={!!errors.ConfirmPassword}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.ConfirmPassword}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button
                    type="submit"
                    className="btn btn-primary w-100 py-3 mb-3"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Creating Account...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-user-plus me-2"></i>
                        Create Account
                      </>
                    )}
                  </Button>

                  <div className="text-center">
                    <span className="text-muted">Already have an account? </span>
                    <Link to="/login" className="text-primary text-decoration-none fw-semibold">
                      Sign In
                    </Link>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
