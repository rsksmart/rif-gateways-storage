import React, {Component} from "react";
import {Table, Button, Form} from "react-bootstrap";
import {useDropzone} from 'react-dropzone';

type MyProps = {};
type MyState = {
    selectedFile: {
        name: ''
    },
    fileName: undefined,
};

function MyDropZone(props) {
    // const onDrop = useCallback(acceptedFiles => {
    //     console.log('files dropped');
    // }, []);

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

    const files = acceptedFiles.map(file => (
        <tr key={file.name}>
            <td className="text-left">{file.name}</td>
            <td className="text-center">{file.type}</td>
            <td className="text-right">{file.size} bytes</td>
        </tr>
    ));

    return (
        <section className="upload-file-container">
            <div {...getRootProps({className: 'dropzone mb-3'})}>
                <input {...getInputProps()} />
                <span>Drag 'n' drop some files here, or click to select files</span>
            </div>
            {files.length ?
                <div>
                    <Table striped borderless responsive size="sm">
                        <thead>
                            <tr>
                                <th className="text-left">File Name</th>
                                <th className="text-center">Type</th>
                                <th className="text-right">Size</th>
                            </tr>
                        </thead>
                        <tbody className="fs-11">
                            {files}
                        </tbody>
                    </Table>
                    <div className="text-left mt-4">
                        <h4><strong>Privacy</strong></h4>
                        <Form className="mb-3">
                            {['radio'].map(type => (
                                <div key={`default-${type}`}>
                                    <Form.Check
                                        type={"radio"}
                                        id={`default-${type}`}
                                        label={'Content is public'}
                                    />
                                </div>
                            ))}
                        </Form>
                    </div>
                </div> : <span> </span>
            }
        </section>
    );
}

export default class UploadFile extends Component <MyProps, MyState> {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: {
                name: ''
            },
            fileName: undefined
        }
    }

    onClickHandler = () => {
        // const data = new FormData();
        // data.append('file', this.state.selectedFile)
    };

    render () {
        return(
            <div className="text-right">
                <MyDropZone/>
                <Button variant="secondary" size="lg" onClick={this.onClickHandler}>
                    Next
                </Button>
            </div>
        )
    }
}

