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


        <ScrollView style={{backgroundColor:'blue'}}>
        <Card style={{paddingVertical:30,marginVertical:30}}>
            <CardItem header>
              <Body>
               <Text style={{alignSelf:'center',paddingBottom:10,fontWeight:'bold'}}>درس اول</Text>
               <Text style={styles.dialogs}>دیالوگ های صفحه 6 و 7 و 8 کتاب </Text>
               <Text style={styles.vocabs}>لغات صفحه  172 تا صفحه 189</Text>
               <Text style={styles.grammer}>ضمایر موصولی qui , que - ضمایر تاکیدی این ... کسی ، این ... که - سوالی کردن با جابجایی فاعل و فعل</Text>
             </Body>
            </CardItem>
        </Card>
        <Card style={{paddingVertical:30,marginVertical:30}}>
            <CardItem header>
              <Body>
               <Text style={{alignSelf:'center',paddingBottom:10,fontWeight:'bold'}}>درس دوم</Text>
               <Text style={styles.dialogs}>دیالوگ های صفحه 14 و 15 و 16 کتاب </Text>
               <Text style={styles.vocabs}>لغات صفحه  172 تا صفحه 189</Text>
               <Text style={styles.grammer}>تبدیل ضمایر مفعولی مستقیم و غیر مستقیم به شکل امری - جملات سوالی غیر مستقیم</Text>
             </Body>
            </CardItem>
        </Card>
         

        <Card style={{paddingVertical:30,marginVertical:30}}>
            <CardItem header>
              <Body>
               <Text style={{alignSelf:'center',paddingBottom:10,fontWeight:'bold'}}>درس سوم</Text>
               <Text style={styles.dialogs}>دیالوگ های صفحه 24 و 25 و 26 کتاب </Text>
               <Text style={styles.vocabs}>لغات صفحه  172 تا صفحه 189</Text>
               <Text style={styles.grammer}>ضمایر موصولی dont , ou - ضمایر اشاره</Text>
             </Body>
            </CardItem>
        </Card>



        <Card style={{paddingVertical:30,marginVertical:30}}>
            <CardItem header>
              <Body>
               <Text style={{alignSelf:'center',paddingBottom:10,fontWeight:'bold'}}>درس چهارم</Text>
               <Text style={styles.dialogs}>دیالوگ های صفحه 32 و 33 و 34 کتاب </Text>
               <Text style={styles.vocabs}>لغات صفحه  172 تا صفحه 189</Text>
               <Text style={styles.grammer}>صرف فعل : زمان حال شرطی - جملات سوالی غیرمستقیم بخش دوم : تطابق زمانی</Text>
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
    color:'blue',
    alignSelf:'flex-end',
    lineHeight:30,
    textAlign:'justify'
    
  }
  ,
  vocabs:{
    color:'red',
    alignSelf:'flex-end',
    lineHeight:30,
    textAlign:'justify'
  },
  grammer:{
    color:'green',
    alignSelf:'flex-end',
    lineHeight:30,
    textAlign:'justify'
  }
})