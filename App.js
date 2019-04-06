/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Container, Header, Title, Button, Left, Right, Body,Icon,Drawer,Text, List, ListItem  } from 'native-base';
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
      side="right"
      onClose={()=>this.closeDrawer()}
      >
      <Container>
        <Header>
          <Left style={{flex:1}}/>
          <Body style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
            <Title>Cafe French 2</Title>
            </Body>
          <Right style={{flex:1}}>
              <Button onPress={()=>this.openDrawer()} transparent>
              <Icon  name='menu' />
              </Button>
            </Right>
        </Header>
      </Container>
      </Drawer>
    );
  }
}


