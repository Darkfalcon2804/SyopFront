import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Navbar, Nav, Container, Badge, Dropdown } from "react-bootstrap";
import { ThemeToggle } from "./ThemeToggle.jsx";
import SymptoScopeLogo from "../public/SymptoScopeLogo.png";
import { UseAuth } from "../contexts/AuthContext.jsx";

export function Header() {
  const [isActive, setIsActive] = useState("Home");
  const { isLogin, logout } = UseAuth();
  const navigate = useNavigate();
  const [notifications] = useState([
    { id: 1, title: "New AI Insight", message: "Pattern detected in your symptoms", unread: true },
    { id: 2, title: "Medication Reminder", message: "Time for your evening dose", unread: true },
    { id: 3, title: "Appointment Tomorrow", message: "Dr. Smith at 2:00 PM", unread: false }
  ]);
  const unreadCount = notifications.filter(n => n.unread).length;

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to login page after logout
  };
  return (
    <Navbar expand="lg" className="navbar-medical fixed-top" style={{ zIndex: 1000 }}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <div className="rounded-3 p-2 bg-transparent">
            <img src={SymptoScopeLogo} alt="SymptoScope Logo" style={{ width: '65px' }} />
          </div>
          <div>
            <div className="fw-bold fs-4 mb-0 text-primary">SymptoScope</div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" className={isActive === "Home" ? "fw-medium active" : "fw-medium"} onClick={() => setIsActive("Home")}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className={isActive === "About" ? "fw-medium active" : "fw-medium"} onClick={() => setIsActive("About")}>About</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className={isActive === "Contact" ? "fw-medium active" : "fw-medium"} onClick={() => setIsActive("Contact")}>Contact</Nav.Link>
            {
              isLogin && <Nav.Link as={NavLink} to="/dashboard" className={isActive === "Dashboard" ? "fw-medium active" : "fw-medium"} onClick={() => setIsActive("Dashboard")}>Dashboard</Nav.Link>
            }
          </Nav>
          
          <Nav className="flex align-items-center g-4">
            <div className="me-3">
              <ThemeToggle />
            </div>

            <Dropdown className="me-3">
              <Dropdown.Toggle variant="outline-primary" className="position-relative border-0">
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
            {
              !isLogin ? (
                <>
                  <Nav.Link as={Link} to="/login" className="btn btn-outline-primary me-2">Sign In</Nav.Link>
                  <Nav.Link as={Link} to="/register" className="btn btn-primary text-decoration-none">Get Started</Nav.Link>
                </>
              ) : (<>
                <Nav.Link as={Link} to="/profile" className="text-decoration-none me-3">My Profile</Nav.Link>
                <button className="btn text-decoration-none hover:btn btn-danger" onClick={handleLogout}>Logout</button>
              </>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
