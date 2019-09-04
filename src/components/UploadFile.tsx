import React, {Component} from "react";
import {Form, Button} from  "react-bootstrap";

export default class UploadFile extends Component  {
    render () {
        return(
            <Form.Group>
                <Form.Control type="file" name="file" className="c-upload-file-input mb-3" id="upload-file" />
                <Form.Label htmlFor="upload-file" column={true}>Drag & Drop some files or click to upload</Form.Label>
                <Button variant="secondary" size="lg" className="mt-3">
                    Next
                </Button>
            </Form.Group>
        )
    }
}

