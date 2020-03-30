import React, { Component } from 'react';
import { Row, Col, Button} from 'antd';
import Dropzone from 'react-dropzone';

class FileUpload extends Component{
    render(){
        return(<div>
           
            <Row >
                <Col span={8}>
                    <h1>Drop Save File Here:</h1>
                </Col>
                
            </Row>
            <Row >
                <Col span={12}>
                    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                        {({getRootProps, getInputProps}) => (
                            <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>Drag 'n' drop some files here, or click to select files</p>
                            </div>
                            </section>
                        )}
                    </Dropzone>
                </Col>
            </Row>

            <Row >
                <Col span={8}>
                    <h1>Drop Roster File Here:</h1>
                </Col>
                
            </Row>
            
            <Row >
                <Col span={12}>
                    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                        {({getRootProps, getInputProps}) => (
                            <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>Drag 'n' drop some files here, or click to select files</p>
                            </div>
                            </section>
                        )}
                    </Dropzone>
                </Col>
            </Row>
            <Button type="primary" size="large">Submit</Button>
            
        </div>
        );
    }
}

export default FileUpload;