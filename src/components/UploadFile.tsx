import React, {Component} from "react";
import {Table, Button, Form} from "react-bootstrap";
import {useDropzone} from 'react-dropzone';

type UploadProps = {};
type UploadState = {
    selectedFile: {
        name:string
    },
    fileName:string,
    selectedOptionPrivacy:string,
    selectedOptionIncentivisation:string,
    storageProvider:string,
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
            {files.length > 0 ?
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
                    <h4 className="mt-4"><strong>Privacy</strong></h4>
                    <Form className="mb-3">
                        <Form.Check
                            custom
                            name="privacy-option"
                            type='radio'
                            id='public-content'
                            label={'Content is public'}
                            value="public"
                            checked={props.privacyOptionChecked}
                            onChange={props.privacyOptionChanged}
                        />
                        <Form.Check
                            custom
                            name="privacy-option"
                            type='radio'
                            id='private-content'
                            label={'Content is private'}
                            value="private"
                            onChange={props.privacyOptionChanged}
                        />

                        <h4 className="mt-4"><strong>Incentivisation</strong></h4>
                        <Form.Check
                            custom
                            name="pay-content"
                            type='radio'
                            id='users-pay'
                            label={'Users will pay to view my content'}
                            value="usersPay"
                            checked={props.payContentChecked}
                            onChange={props.payContentChanged}
                        />
                        <Form.Check
                            custom
                            disabled={true}
                            name="pay-content"
                            type='radio'
                            id='me-pay'
                            label={'I will pay to store  the content'}
                            value="mePay"
                            onChange={props.payContentChanged}
                        />

                        <h4 className="mt-4"><strong>Storage provider</strong></h4>
                        <Form.Control
                            type="text"
                            placeholder=""
                            id="storage-provider"
                            value={props.storageProviderValue}
                            onChange={props.storageProviderChanged}
                        />
                    </Form>
                    <div className="text-right">
                        <Button variant="secondary" size="lg" onClick={props.nextHandlerClick}>
                            Next
                        </Button>
                    </div>
                </div> : ''
            }
        </section>
    );
}

export default class UploadFile extends Component <UploadProps, UploadState> {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedFile: {
                name: ''
            },
            fileName: '',
            selectedOptionPrivacy: 'public',
            selectedOptionIncentivisation: 'usersPay',
            storageProvider: '',
        };

        this.handlerRadioPrivacy = this.handlerRadioPrivacy.bind(this);
        this.handlerRadioIncentivisation = this.handlerRadioIncentivisation.bind(this);
        this.handlerChangeStorageProvider = this.handlerChangeStorageProvider.bind(this);
    }

    handlerRadioPrivacy= changeEvent => {
        this.setState({
            selectedOptionPrivacy: changeEvent.target.value
        });
    };

    handlerRadioIncentivisation= changeEvent => {
        this.setState({
            selectedOptionIncentivisation: changeEvent.target.value
        });
    };

    handlerChangeStorageProvider(e) {
        this.setState({ storageProvider: e.target.value });
    };

    onClickHandlerNext = () => {
        console.log('CLICK');
        // const data = new FormData();
        // data.append('file', this.state.selectedFile)
    };

    render () {
        console.log(this.state.selectedOptionPrivacy);
        console.log(this.state.storageProvider);
        console.log(this.state.selectedOptionIncentivisation);

        return(
            <div>
                <MyDropZone
                    privacyOptionChecked={this.state.selectedOptionPrivacy === 'public'}
                    privacyOptionChanged={this.handlerRadioPrivacy}
                    payContentChecked={this.state.selectedOptionIncentivisation === 'usersPay'}
                    payContentChanged={this.handlerRadioIncentivisation}
                    storageProviderValue={this.state.storageProvider}
                    storageProviderChanged={this.handlerChangeStorageProvider}
                    nextHandlerClick={this.onClickHandlerNext}
                />
            </div>
        )
    }
}

