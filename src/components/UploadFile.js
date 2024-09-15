import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Alert, Spinner, Card } from 'react-bootstrap';

const UploadFile = () => {
    const [file, setFile] = useState(null);
    const [responseData, setResponseData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Handle file selection
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    // Handle file upload
    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file) return;

        setLoading(true);
        setError(null);

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:8000/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setResponseData(response.data);
        } catch (error) {
            setError('File upload failed!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className="mt-5">
            <Row className="mb-4">
                <Col md={6} className="mx-auto">
                    <Card>
                        <Card.Body>
                            <h3 className="text-center mb-4">Upload Excel File</h3>
                            <Form onSubmit={handleUpload}>
                                <Form.Group>
                                    <Form.Control
                                        type="file"
                                        onChange={handleFileChange}
                                        accept=".xlsx, .xls"
                                        className="mb-3"
                                    />
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        disabled={loading}
                                        block
                                    >
                                        {loading ? <Spinner animation="border" size="sm" /> : 'Upload'}
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {error && (
                <Row className="mb-4">
                    <Col md={6} className="mx-auto">
                        <Alert variant="danger">
                            {error}
                        </Alert>
                    </Col>
                </Row>
            )}

            {responseData && (
                <Row className="mb-4">
                    <Col md={6} className="mx-auto">
                        <Card>
                            <Card.Body>
                                <h4 className="text-center mb-3">Response Data</h4>
                                <pre>{JSON.stringify(responseData, null, 2)}</pre>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default UploadFile;