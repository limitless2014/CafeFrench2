import React, { Component } from 'react'

import { Container,Text, Card, CardItem, Header, Icon, Left, Body, Right, Button,StyleProvider,Content,List,ListItem } from 'native-base';
import {StyleSheet} from 'react-native'
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
               <Text style={{alignSelf:'flex-end'}}>درس اول</Text>
               <Text style={{alignSelf:'flex-end'}}>دیالوگ های صفحه 6 و 7 و 8 کتاب </Text>
               <Text style={{alignSelf:'flex-end'}}>لغات صفحه  172 تا صفحه 189</Text>
               <Text style={{alignSelf:'flex-end'}}>ضمایر ربطی qui , que صفحه 9 و ضمایر ربطی صحه 9</Text>
             </Body>
            </CardItem>
        </Card>
         
        </ScrollView>
      </Container>
     
    )
  }
}
 

const styles=StyleSheet.create({
  dialogs:{
    backgroundColor:'blue',
    
  }
  ,
  vocabs:{
    backgroundColor:'red'
  },
  grammer:{
    backgroundColor:'green'
  }
})