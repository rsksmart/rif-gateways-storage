import React, {Component, useCallback} from "react";
import {Table, Button} from  "react-bootstrap";
import {useDropzone} from 'react-dropzone';
import {log} from "util";

function MyDropzone(props) {
    const onDrop = useCallback(acceptedFiles => {
        console.log('files dropped');
    }, []);

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
            {files.length ? <Table striped borderless responsive size="sm">
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
            </Table> : <span>
            </span>}
        </section>
    );
}

type MyProps = {};
type MyState = {
    selectedFile: {
        name: ''
    },
    fileName: undefined
};

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
                <MyDropzone/>
                <Button variant="secondary" size="lg" onClick={this.onClickHandler}>
                    Next
                </Button>
            </div>
        )
    }
}

