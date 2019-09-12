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
            <div {...getRootProps({className: 'dropzone mb-4'})}>
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
                            <Form.Check
                                name="privacy-opt"
                                type='radio'
                                id='public-content'
                                label={'Content is public'}
                            />
                            <Form.Check
                                name="privacy-opt"
                                type='radio'
                                id='private-content'
                                label={'Content is private'}
                            />

                            <h4 className="mt-4"><strong>Incentivisation</strong></h4>
                            <Form.Check
                                name="pay-content"
                                type='radio'
                                id='users-pay'
                                label={'Users will pay to view my content'}
                            />
                            <Form.Check
                                name="pay-content"
                                type='radio'
                                id='me-pay'
                                label={'I will pay to store  the content'}
                            />

                            <h4 className="mt-4"><strong>Storage provider</strong></h4>
                            <Form.Control type="text" placeholder=""/>
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

