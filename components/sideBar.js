import React, { Component } from 'react';
import {StyleSheet,Image} from 'react-native';
import {Container,Content,List,ListItem,Left,Body,Right,Text, Button, Icon, Title} from 'native-base';


export default class sideBar extends Component {
  render() {
    return (
      <Container style={styles.containerStyle}>
      
          <Content style={styles.content}>
          <Image style={{width:'100%'}} source={require('../assets/img/drawer.png')} resizeMode= 'stretch'/>
          <List>
          <ListItem>
            <Left style={{flex:1,flexDirection:'row-reverse'}}>
            <Text >درباره اپلیکیشن</Text>
            </Left>
            <Right>
              <Button transparent>
                <Icon type="Entypo" name="info"/>
              </Button>
            </Right>
          </ListItem>
          <ListItem>
            <Left style={{flex:1,flexDirection:'row-reverse'}}>
            <Text >به اشتراک گذاری لینک اپلیکیشن</Text>
            </Left>
            <Right>
              <Button transparent>
                <Icon type="Entypo" name="share"/>
              </Button>
            </Right>
          </ListItem>
          <ListItem>
            <Left style={{flex:1,flexDirection:'row-reverse'}}>
            <Text >خروج</Text>
            </Left>
            <Right>
              <Button transparent>
                <Icon type="MaterialIcons" name="exit-to-app"/>
              </Button>
            </Right>
          </ListItem>
        </List>
          </Content>
      </Container>
    )
  }
}

const styles=StyleSheet.create({
    containerStyle:{
        flex:1,
        backgroundColor:'#fff'
    },
    content:{
      width:'100%',
      
    }
})