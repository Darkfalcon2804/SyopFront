import { Container, Row, Col, Card } from "react-bootstrap";

export default function Profile() {
  return (
    <div style={{ paddingTop: '100px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="medical-card text-center">
              <Card.Body className="p-5">
                <i className="fas fa-user-cog display-1 text-success mb-4"></i>
                <h2 className="fw-bold mb-3">Profile & Settings</h2>
                <p className="text-muted mb-4">
                  Manage your account settings, medical history, and privacy preferences.
                  This page is currently under development.
                </p>
                <p className="text-muted small">
                  Continue prompting to help build out these features!
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
