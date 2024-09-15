
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Spinner } from 'react-bootstrap';
import axios from 'axios';

const ChatApp = () => {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setResponse('');

        try {
            const result = await axios.post('http://127.0.0.1:8000/api/chat', { question });
            setResponse(result.data.response);
        } catch (err) {
            setError('An error occurred while fetching the response.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <Card>
                        <Card.Header className="text-center">
                            <h3>Drug Information Chat System</h3>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formQuestion">
                                    <Form.Label>Your Question</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ask about a drug..."
                                        value={question}
                                        onChange={(e) => setQuestion(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="mt-3" disabled={loading}>
                                    {loading ? <Spinner animation="border" size="sm" /> : 'Submit'}
                                </Button>
                            </Form>
                            {response && (
                                <Card className="mt-4">
                                    <Card.Body>
                                        <h5>Response</h5>
                                        <p>{response}</p>
                                    </Card.Body>
                                </Card>
                            )}
                            {error && (
                                <Card className="mt-4">
                                    <Card.Body>
                                        <p className="text-danger">{error}</p>
                                    </Card.Body>
                                </Card>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ChatApp;
