import React, {Component} from "react";
import {Table, Button, Form} from "react-bootstrap";
import {useDropzone} from 'react-dropzone';

type MyProps = {};
type MyState = {
    selectedFile: {
        name: ''
    },
    fileName: undefined,
    selectedOptionPrivacy: 'public',
    selectedOptionIncentivisation: 'usersPay',
    storageProvider: '',
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
                </div> : <span> </span>
            }
        </section>
    );
}

export default class UploadFile extends Component <MyProps, MyState> {
    // private readonly handleChangeUserPay: any;
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedFile: {
                name: ''
            },
            fileName: undefined,
            selectedOptionPrivacy: 'public',
            selectedOptionIncentivisation: 'usersPay',
            storageProvider: '',
        };

        this.radioChangePrivacy = this.radioChangePrivacy.bind(this);
        this.radioChangeIncentivisation = this.radioChangeIncentivisation.bind(this);
        this.handleChangeStorageProvider = this.handleChangeStorageProvider.bind(this);
    }

    radioChangePrivacy= changeEvent => {
        this.setState({
            selectedOptionPrivacy: changeEvent.target.value
        });

        console.log(this.state.selectedOptionPrivacy);
    };

    radioChangeIncentivisation= changeEvent => {
        this.setState({
            selectedOptionIncentivisation: changeEvent.target.value
        });

        console.log(this.state.selectedOptionIncentivisation);
    }

    handleChangeStorageProvider(e) {
        this.setState({ storageProvider: e.target.value });
        console.log(this.state.storageProvider);
    }

    onClickHandler = () => {
        console.log('CLICK');
        // const data = new FormData();
        // data.append('file', this.state.selectedFile)
    };

    render () {
        return(
            <div className="text-right">
                <MyDropZone/>
                <div className="text-left mt-4">
                    <h4><strong>Privacy</strong></h4>
                    <Form className="mb-3">
                        <Form.Check
                            custom
                            name="privacy-opt"
                            type='radio'
                            id='public-content'
                            label={'Content is public'}
                            value="public"
                            checked={this.state.selectedOptionPrivacy === 'public'}
                            onChange={this.radioChangePrivacy}
                        />
                        <Form.Check
                            custom
                            name="privacy-opt"
                            type='radio'
                            id='private-content'
                            label={'Content is private'}
                            value="private"
                            // checked={this.state.selectedOptionPrivacy === 'private'}
                            onChange={this.radioChangePrivacy}
                        />

                        <h4 className="mt-4"><strong>Incentivisation</strong></h4>
                        <Form.Check
                            custom
                            name="pay-content"
                            type='radio'
                            id='users-pay'
                            label={'Users will pay to view my content'}
                            value="usersPay"
                            checked={this.state.selectedOptionIncentivisation === 'usersPay'}
                            onChange={this.radioChangeIncentivisation}
                        />
                        <Form.Check
                            custom
                            disabled={true}
                            name="pay-content"
                            type='radio'
                            id='me-pay'
                            label={'I will pay to store  the content'}
                            value="mePay"
                            // checked={this.state.selectedOptionPrivacy === 'mePay'}
                            onChange={this.radioChangeIncentivisation}
                        />

                        <h4 className="mt-4"><strong>Storage provider</strong></h4>
                        <Form.Control
                            type="text"
                            placeholder=""
                            id="storage-provider"
                            value={this.state.storageProvider}
                            onChange={this.handleChangeStorageProvider}
                        />
                    </Form>
                </div>
                <Button variant="secondary" size="lg" onClick={this.onClickHandler}>
                    Next
                </Button>
            </div>
        )
    }
}

