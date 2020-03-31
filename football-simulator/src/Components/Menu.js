import React, { Component } from 'react';
import { Row, Col, Button} from 'antd';
import Dropzone from 'react-dropzone'
import FileUpload from './FileUpload';
import GameScreen from './GameScreen';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            screen: 0
        };
    }

    clickedSubmit = () => {
        this.setState({screen: 1});
    }

    render(){
        let dis;
        if(this.state.screen === 0){
            dis = (<div>
           
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
                <Button type="primary" size="large" onClick={this.clickedSubmit}>Submit</Button>
                
            </div>
            )
        }else{
            dis = <GameScreen/>
        }
        return(
            <div>
                {dis}
            </div>
        );
        
    }
}

export default Menu;