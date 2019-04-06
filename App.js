/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Container, Header, Title, Button, Left, Right, Body,Icon,Drawer,Text  } from 'native-base';
import SplashScreen from 'react-native-splash-screen';
import SideBar from './components/sideBar';


export default class App extends Component {

    constructor(props){
      super(props);
    }


   closeDrawer=()=>{
   this.drawer._root.close();
   }

   openDrawer=()=>{
    this.drawer._root.open();
   }

  componentDidMount() {
    SplashScreen.hide()
  }


  render() {
    return (
      <Drawer
      ref={(ref)=>this.drawer=ref}
      content={<SideBar/>}
     
      onClose={()=>this.closeDrawer()}
      >
      <Container>
        <Header>
          <Left>
            <Button onPress={()=>this.openDrawer()} transparent>
              <Icon  name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Menu</Title>
          </Body>
          <Right/>
        </Header>
      </Container>
      </Drawer>
    );
  }
}


