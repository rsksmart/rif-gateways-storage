import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";

export default () => <Container className="py-5">
    <h1 className="text-center mb-5">My Profile</h1>
    <Row className="justify-content-md-center">
        <Col lg="6">
            <ul className="list-unstyled text-center">
                <li className="mb-2 text-muted">0xD856FA8E0b978da6d8D5C3FC3DfE177b39b501f7</li>
                <li className="text-secondary mb-4"><strong>john.rsk</strong></li>
                <li>
                    <Button variant="primary" size="lg" className="mx-2">
                        Deposit
                    </Button>
                    <Button variant="secondary" size="lg" className="mx-2">
                        Withdraw
                    </Button>
                </li>
            </ul>
        </Col>
    </Row>
</Container>;
