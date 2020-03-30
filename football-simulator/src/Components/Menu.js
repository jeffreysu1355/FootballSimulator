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
    render(){
        let dis;
        if(this.state.screen === 0){
            dis = <FileUpload/>
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