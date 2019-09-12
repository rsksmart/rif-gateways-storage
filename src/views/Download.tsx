import React from "react";
import {Button, Col, Container, Row, Form} from "react-bootstrap";

export default () => <Container className="py-5">
    <h1 className="text-center mb-5">Retrieve file</h1>
    <Row className="justify-content-md-center">
        <Col lg="6" className="text-right">
            <Form.Control type="text" placeholder="Enter RNS  name or hash" className="custom-input mb-4 rounded-0"/>
            <Button variant="secondary" size="lg">
                Retrieve
            </Button>
        </Col>
    </Row>
</Container>;