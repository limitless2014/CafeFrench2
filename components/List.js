import React, { Component } from 'react'

import { Container,Text, Card, CardItem, Header, Icon, Left, Body, Right, Button,StyleProvider } from 'native-base';

import { ScrollView } from 'react-native-gesture-handler';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/platform';

export default class About extends Component {
  render() {
    return (
      <Container>
        <StyleProvider androidStatusBarColor='#000' style={getTheme(material)} >
        <Header>
          <Left>
            <Button onPress={()=>this.props.navigation.goBack()} transparent>
            <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body/>
          <Right/>
        </Header>
        </StyleProvider>


        <ScrollView>
        <Card>
            <CardItem header>
              <Body>
               <Text style={{alignSelf:'center',fontWeight:'bold'}}>لیست دروس</Text>
             </Body>
            </CardItem>
        </Card>
        </ScrollView>
      </Container>
    )
  }
}
 