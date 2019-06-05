import React, { Component } from 'react'

import { Container,Text, Card, CardItem, Header, Icon, Left, Body, Right, Button,StyleProvider } from 'native-base';
import {Image}from 'react-native'
import {name as app_name, version as app_version}  from '../package.json';
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
            <CardItem>
              <Body>
             <Image style={{width:'100%'}} resizeMode='stretch' source={require('../assets/img/drawer.png')}/>
             <Text style={{alignSelf:'center', fontWeight:'bold',paddingTop:20}}>App Version : 1.0</Text>
             <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
              اپلیکیشن کافه فرنچ 2 بر اساس کتاب کافه کرم 2 ساخته شده است.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
              مشخصات کتاب مرجع :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
              نام کتاب : Cafe creme 2 methode de francais
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
              موضوع : زبان فرانسه --کتابهای درسی برای خارجیان
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
               موضوع : زبان فرانسه -- راهنمای آموزشی
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
              موضوع : زبان فرانسه -- خودآموز
              </Text>
              
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
              شناسه افزوده : trevisi , sandra
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
              نویسنده و مترجم :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
              احسان پورحسین
              </Text>
             </Body>
            </CardItem>
        </Card>
        </ScrollView>
      </Container>
    )
  }
}
 