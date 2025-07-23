import { Link } from "react-router-dom";
import { useState } from "react";
import { Navbar, Nav, Container, Badge, Dropdown } from "react-bootstrap";
import { ThemeToggle } from "./ThemeToggle.jsx";
import { useTheme } from "../contexts/ThemeContext.jsx";

export function Header() {
  const { isDarkMode } = useTheme();
  const [notifications] = useState([
    { id: 1, title: "New AI Insight", message: "Pattern detected in your symptoms", unread: true },
    { id: 2, title: "Medication Reminder", message: "Time for your evening dose", unread: true },
    { id: 3, title: "Appointment Tomorrow", message: "Dr. Smith at 2:00 PM", unread: false }
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <Navbar expand="lg" className="navbar-medical fixed-top" style={{ zIndex: 1000 }}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <div className="rounded-3 p-2 me-3 bg-primary">
            <i className="fas fa-brain text-white" style={{ fontSize: '1.5rem' }}></i>
          </div>
          <div>
            <div className="fw-bold fs-4 mb-0 text-primary">SymptomAI</div>
            <small className={isDarkMode ? 'text-light' : 'text-muted'}>Rare Conditions Journal</small>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="fw-medium">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="fw-medium">About</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="fw-medium">Contact</Nav.Link>
            <Nav.Link as={Link} to="/dashboard" className="fw-medium">Dashboard</Nav.Link>
          </Nav>
          
          <Nav className="align-items-center">
            <div className="me-3">
              <ThemeToggle />
            </div>

            <Dropdown className="me-3">
              <Dropdown.Toggle variant="outline-primary" className="position-relative border-0 bg-transparent">
                <i className="fas fa-bell"></i>
                {unreadCount > 0 && (
                  <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle rounded-pill" style={{ fontSize: '0.7rem' }}>
                    {unreadCount}
                  </Badge>
                )}
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu-end" style={{ minWidth: '300px' }}>
                <Dropdown.Header>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>Notifications</span>
                    <Badge bg="primary">{unreadCount} new</Badge>
                  </div>
                </Dropdown.Header>
                <Dropdown.Divider />
                {notifications.map(notification => (
                  <Dropdown.Item key={notification.id} className="py-2">
                    <div className="d-flex">
                      <div className="flex-grow-1">
                        <div className="fw-semibold small">{notification.title}</div>
                        <div className="text-muted small">{notification.message}</div>
                      </div>
                      {notification.unread && (
                        <div className="ms-2">
                          <Badge bg="primary" className="rounded-pill" style={{ width: '8px', height: '8px' }}></Badge>
                        </div>
                      )}
                    </div>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Nav.Link as={Link} to="/login" className="btn btn-outline-primary me-2">Sign In</Nav.Link>
            <Nav.Link as={Link} to="/register" className="btn btn-primary text-decoration-none">Get Started</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
