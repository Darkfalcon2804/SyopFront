import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default function Journal() {
  const [entries, setEntries] = useState([]);
  const [text, setText] = useState("");
  const [charLimit] = useState(500);

  useEffect(() => {
    const savedEntries = localStorage.getItem("journalEntries");
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("journalEntries", JSON.stringify(entries));
  }, [entries]);

  const handleSave = () => {
    if (text.trim()) {
      const newEntry = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        content: text.trim(),
      };
      setEntries([newEntry, ...entries]);
      setText("");
    }
  };

  const handleDelete = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <div style={{ paddingTop: "100px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Container className="py-5">
        <Row>
          <Col md={8} className="mx-auto">
            <h2 className="text-center mb-4">📝 My Health Journal</h2>

            <Form.Group className="mb-3">
              <Form.Label>Write something today:</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={text}
                maxLength={charLimit}
                placeholder="How are you feeling today?"
                onChange={(e) => setText(e.target.value)}
              />
              <div className="text-end small mt-1">
                {text.length}/{charLimit} characters
              </div>
            </Form.Group>

            <div className="d-grid">
              <Button
                className="btn-medical-success mb-4"
                onClick={handleSave}
                disabled={!text.trim()}
              >
                Save Entry
              </Button>
            </div>

            {entries.length > 0 && (
              <>
                <h4 className="mb-3">📋 Previous Entries</h4>
                {entries.map((entry) => (
                  <Card className="mb-3 medical-card shadow-sm" key={entry.id}>
                    <Card.Body>
                      <Card.Title>{entry.date}</Card.Title>
                      <Card.Text>{entry.content}</Card.Text>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleDelete(entry.id)}
                      >
                        Delete
                      </Button>
                    </Card.Body>
                  </Card>
                ))}
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
