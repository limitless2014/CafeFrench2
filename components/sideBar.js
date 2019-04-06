import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {Container,Content,Text} from 'native-base';


export default class sideBar extends Component {
  render() {
    return (
      <Container style={styles.containerStyle}>
          <Content>
              <Text>put everything here!!!</Text>
          </Content>
      </Container>
    )
  }
}

const styles=StyleSheet.create({
    containerStyle:{
        flex:1,
        backgroundColor:'#fff'
    }
})