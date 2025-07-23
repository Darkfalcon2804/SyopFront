import { Container, Row, Col, Card } from "react-bootstrap";

export default function Journal() {
  return (
    <div style={{ paddingTop: '100px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="medical-card text-center">
              <Card.Body className="p-5">
                <i className="fas fa-notes-medical display-1 text-primary mb-4"></i>
                <h2 className="fw-bold mb-3">Symptom Journal</h2>
                <p className="text-muted mb-4">
                  Advanced symptom logging with intelligent tracking and AI-powered insights.
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
