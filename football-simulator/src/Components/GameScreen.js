import React, { Component } from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

class GameScreen extends Component{

    handleClick = e => {
        console.log('click ', e);
    };

    render(){
        return(
            <div>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <Menu.Item key="0">Dashboard</Menu.Item>
                    <SubMenu
                        key="league"
                        title={
                            <span>League</span>
                        }
                    >
                        <Menu.Item key="1">Standings</Menu.Item>
                        <Menu.Item key="2">Playoff</Menu.Item>
                        <Menu.Item key="3">Finances</Menu.Item>
                        <Menu.Item key="4">History</Menu.Item>
                    </SubMenu>
                    
                    <SubMenu
                        key="team"
                        title={
                            <span>Team</span>
                        }
                    >
                        <Menu.Item key="5">Roster</Menu.Item>
                        <Menu.Item key="6">Schedule</Menu.Item>
                        <Menu.Item key="7">History</Menu.Item>
                    </SubMenu>
                    
                    <SubMenu
                        key="players"
                        title={
                            <span>Players</span>
                        }
                    >
                        <Menu.Item key="8">Free Agent</Menu.Item>
                        <Menu.Item key="9">Trade</Menu.Item>
                        <Menu.Item key="10">Trade Block</Menu.Item>
                        <Menu.Item key="11">Prospects</Menu.Item>
                        <Menu.Item key="12">Watch List</Menu.Item>
                        <Menu.Item key="13">Hall of Fame</Menu.Item>
                    </SubMenu>
                    
                    <SubMenu
                        key="stats"
                        title={
                            <span>Stats</span>
                        }
                    >
                        <Menu.Item key="14">Game Log</Menu.Item>
                        <Menu.Item key="15">League Leaders</Menu.Item>
                        <Menu.Item key="16">Player Ratings</Menu.Item>
                        <Menu.Item key="17">Player Stats</Menu.Item>
                        <Menu.Item key="18">Team Stats</Menu.Item>
                        <Menu.Item key="19">Statistical Feats</Menu.Item>
                    </SubMenu>
                    
                </Menu>
            </div>
        );
    }
}

export default GameScreen;