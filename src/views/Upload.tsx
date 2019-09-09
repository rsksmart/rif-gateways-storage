import React from "react";
import {Container, Row, Col} from  "react-bootstrap";
import UploadFile from "../components/UploadFile";

export default () => <Container className="py-5">
    <Row className="justify-content-md-center">
        <Col lg="6">
            <h1 className="text-center mb-3">Upload new file or folder</h1>
            <UploadFile/>
        </Col>
    </Row>
</Container>;