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
               <Text style={styles.grammer}> ضمایر موصولی  qui , que</Text>
               <Text style={styles.grammer}>
                 ضمایر تاکیدی این ... کسی ، این ... که 
               </Text>
               <Text style={styles.grammer}>
                 سوالی کردن با جابجایی فاعل و فعل
               </Text>
               
             </Body>
            </CardItem>
        </Card>
        <Card style={{paddingVertical:30,marginVertical:30}}>
            <CardItem header>
              <Body>
               <Text style={{alignSelf:'center',paddingBottom:10,fontWeight:'bold'}}>درس دوم</Text>
               <Text style={styles.dialogs}>دیالوگ های صفحه 14 و 15 و 16 کتاب </Text>
               <Text style={styles.vocabs}>لغات صفحه  172 تا صفحه 189</Text>
               <Text style={styles.grammer}>تبدیل ضمایر مفعولی مستقیم و غیر مستقیم به شکل امری  </Text>
               <Text style={styles.grammer}>
               جملات سوالی غیر مستقیم
               </Text>
               
             </Body>
            </CardItem>
        </Card>
         

        <Card style={{paddingVertical:30,marginVertical:30}}>
            <CardItem header>
              <Body>
               <Text style={{alignSelf:'center',paddingBottom:10,fontWeight:'bold'}}>درس سوم</Text>
               <Text style={styles.dialogs}>دیالوگ های صفحه 24 و 25 و 26 کتاب </Text>
               <Text style={styles.vocabs}>لغات صفحه  172 تا صفحه 189</Text>
               <Text style={styles.grammer}>ضمایر موصولی dont , ou </Text>
               <Text style={styles.grammer}>
               ضمایر اشاره
               </Text>
               
             </Body>
            </CardItem>
        </Card>



        <Card style={{paddingVertical:30,marginVertical:30}}>
            <CardItem header>
              <Body>
               <Text style={{alignSelf:'center',paddingBottom:10,fontWeight:'bold'}}>درس چهارم</Text>
               <Text style={styles.dialogs}>دیالوگ های صفحه 32 و 33 و 34 کتاب </Text>
               <Text style={styles.vocabs}>لغات صفحه  172 تا صفحه 189</Text>
               <Text style={styles.grammer}> جملات سوالی غیرمستقیم بخش دوم : تطابق زمانی</Text>
               <Text style={styles.grammer}>
               صرف فعل : زمان حال شرطی
               </Text>
               
             </Body>
            </CardItem>
        </Card>


        <Card style={{paddingVertical:30,marginVertical:30}}>
            <CardItem header>
              <Body>
               <Text style={{alignSelf:'center',paddingBottom:10,fontWeight:'bold'}}>درس پنجم</Text>
               <Text style={styles.dialogs}>دیالوگ های صفحه 46 و 47 و 48 کتاب </Text>
               <Text style={styles.vocabs}>لغات صفحه  172 تا صفحه 189</Text>
               <Text style={styles.grammer}>
                 جملات شرطی قسمت اول : si + زمان حال
                 
               </Text>
               <Text style={styles.grammer}>
               هماهنگی : quand ... et que ... , parce que ... et que 
               </Text>
               <Text style={styles.grammer}>
                 ساختارهای quelque chose a + مصدر - rien a + مصدر
               </Text>
               <Text style={styles.grammer}>
               نقل قول مستقیم قسمت اول : زمان حال
               </Text>
               
             </Body>
            </CardItem>
        </Card>





        <Card style={{paddingVertical:30,marginVertical:30}}>
            <CardItem header>
              <Body>
               <Text style={{alignSelf:'center',paddingBottom:10,fontWeight:'bold'}}>درس ششم</Text>
               <Text style={styles.dialogs}>دیالوگ های صفحه 54 و 55 و 56 کتاب </Text>
               <Text style={styles.vocabs}>لغات صفحه  172 تا صفحه 189</Text>
               <Text style={styles.grammer}>
                 جملات شرطی قمست دوم : si + گذشته ناتمام
                 
               </Text>
               <Text style={styles.grammer}>
               نقل قول مستقیم قسمت دوم : نقل قول در گذشته و مطابقت زمانی 
               </Text>
               <Text style={styles.grammer}>
               ضمیر قیدی en به همراه یک ضمیر شخصی مفعولی
               </Text>
             </Body>
            </CardItem>
        </Card>




        <Card style={{paddingVertical:30,marginVertical:30}}>
            <CardItem header>
              <Body>
               <Text style={{alignSelf:'center',paddingBottom:10,fontWeight:'bold'}}>درس هفتم</Text>
               <Text style={styles.dialogs}>دیالوگ های صفحه 64 و 65 و 66 کتاب </Text>
               <Text style={styles.vocabs}>لغات صفحه  172 تا صفحه 189</Text>
               <Text style={styles.grammer}>
                  سوال کردن با کلمات qui , que 
               </Text>
               
               <Text style={styles.grammer}>
               صرف فعل : وجه التزامی قسمت اول 
               </Text>
               <Text style={styles.grammer}>
               ضمیر سوالی lequel
               </Text>
             </Body>
            </CardItem>
        </Card>





        <Card style={{paddingVertical:30,marginVertical:30}}>
            <CardItem header>
              <Body>
               <Text style={{alignSelf:'center',paddingBottom:10,fontWeight:'bold'}}>درس هشتم</Text>
               <Text style={styles.dialogs}>دیالوگ های صفحه 72 و 73 و 74 کتاب </Text>
               <Text style={styles.vocabs}>لغات صفحه  172 تا صفحه 189</Text>
               <Text style={styles.grammer}>
                  صرف فعل : ماضی بعید و گذشته شرطی
               </Text>
               <Text style={styles.grammer}>
               جملات شرطی قسمت سوم : si + ماضی بعید 
                 </Text>
                 <Text style={styles.grammer}>
                 ضمایر شخصی
                   </Text>
             </Body>
            </CardItem>
        </Card>






        <Card style={{paddingVertical:30,marginVertical:30}}>
            <CardItem header>
              <Body>
               <Text style={{alignSelf:'center',paddingBottom:10,fontWeight:'bold'}}>درس نهم</Text>
               <Text style={styles.dialogs}>دیالوگ های صفحه 86 و 87 و 88 کتاب </Text>
               <Text style={styles.vocabs}>لغات صفحه  172 تا صفحه 189</Text>
               <Text style={styles.grammer}>
               اسم مصدر 
               </Text>
               <Text style={styles.grammer}>
               صرف فعل : وجه التزامی قسمت دوم
               </Text>
              
             </Body>
            </CardItem>
        </Card>





        <Card style={{paddingVertical:30,marginVertical:30}}>
            <CardItem header>
              <Body>
               <Text style={{alignSelf:'center',paddingBottom:10,fontWeight:'bold'}}>درس دهم</Text>
               <Text style={styles.dialogs}>دیالوگ های صفحه 94 و 95 و 96 کتاب </Text>
               <Text style={styles.vocabs}>لغات صفحه  172 تا صفحه 189</Text>
               <Text style={styles.grammer}>
                   کاربردهای جملات شرطی  
               </Text>
               <Text style={styles.grammer}>
               صرف فعل : افعال با پسوند indre
               </Text>
               <Text style={styles.grammer}>
               کاربردهای مصدر
               </Text>

               
             </Body>
            </CardItem>
        </Card>



        <Card style={{paddingVertical:30,marginVertical:30}}>
            <CardItem header>
              <Body>
               <Text style={{alignSelf:'center',paddingBottom:10,fontWeight:'bold'}}>درس یازدهم</Text>
               <Text style={styles.dialogs}>دیالوگ های صفحه 104 و 105 و 106 کتاب </Text>
               <Text style={styles.vocabs}>لغات صفحه  172 تا صفحه 189</Text>
               <Text style={styles.grammer}>
                 قیدهای با پسوند ment
               </Text>
               <Text style={styles.grammer}>
               قیدها 
               </Text>
               <Text style={styles.grammer}>
               عبارتهای متضاد
               </Text>
             </Body>
            </CardItem>
        </Card>





        <Card style={{paddingVertical:30,marginVertical:30}}>
            <CardItem header>
              <Body>
               <Text style={{alignSelf:'center',paddingBottom:10,fontWeight:'bold'}}>درس دوازدهم</Text>
               <Text style={styles.dialogs}>دیالوگ های صفحه 112 و 113 و 114 کتاب </Text>
               <Text style={styles.vocabs}>لغات صفحه  172 تا صفحه 189</Text>
               <Text style={styles.grammer}>
                  حالت مجهول 
               </Text>
               <Text style={styles.grammer}>
               ضمایر ملکی : le mien
               </Text>
             </Body>
            </CardItem>
        </Card>




        <Card style={{paddingVertical:30,marginVertical:30}}>
            <CardItem header>
              <Body>
               <Text style={{alignSelf:'center',paddingBottom:10,fontWeight:'bold'}}>درس سیزدهم</Text>
               <Text style={styles.dialogs}>دیالوگ های صفحه 126 و 127 و 128 کتاب </Text>
               <Text style={styles.vocabs}>لغات صفحه  172 تا صفحه 189</Text>
               <Text style={styles.grammer}>
                  کابردهای گذشته کامل قسمت اول  
               </Text>
               <Text style={styles.grammer}>
               کابردهای گذشته کامل قسمت دوم 
               </Text>
               <Text style={styles.grammer}>
               عبارات پیرو مقایسه ای
               </Text>
             </Body>
            </CardItem>
        </Card>





        <Card style={{paddingVertical:30,marginVertical:30}}>
            <CardItem header>
              <Body>
               <Text style={{alignSelf:'center',paddingBottom:10,fontWeight:'bold'}}>درس چهاردهم</Text>
               <Text style={styles.dialogs}>دیالوگ های صفحه 134 و 135 و 136 کتاب </Text>
               <Text style={styles.vocabs}>لغات صفحه  172 تا صفحه 189</Text>
               <Text style={styles.grammer}>
                  بیان دلیل قسمت اول : حروف اضافه parce que , puisque
               </Text>
               
               <Text style={styles.grammer}>
               ریشه حال فعل
               </Text>
               <Text style={styles.grammer}>
               ریشه گذشته فعل
              </Text>
              <Text style={styles.grammer}>
               بیان دلیل قسمت دوم
               </Text>
             </Body>
            </CardItem>
        </Card>








        <Card style={{paddingVertical:30,marginVertical:30}}>
            <CardItem header>
              <Body>
               <Text style={{alignSelf:'center',paddingBottom:10,fontWeight:'bold'}}>درس پانزدهم</Text>
               <Text style={styles.dialogs}>دیالوگ های صفحه 144 و 145 و 146 کتاب </Text>
               <Text style={styles.vocabs}>لغات صفحه  172 تا صفحه 189</Text>
               <Text style={styles.grammer}>
                   صرف فعل : زمان گذشته ساده
               </Text>
               <Text style={styles.grammer}>
               استفاده از زمانها برای داستانسرایی (نقل داستان) 
               </Text>
               <Text style={styles.grammer}>
               کاربرد tellement ... que
               </Text>
             </Body>
            </CardItem>
        </Card>





        <Card style={{paddingVertical:30,marginVertical:30}}>
            <CardItem header>
              <Body>
               <Text style={{alignSelf:'center',paddingBottom:10,fontWeight:'bold'}}>درس شانزدهم</Text>
               <Text style={styles.dialogs}>دیالوگ های صفحه 152 و 153 و 154 کتاب </Text>
               <Text style={styles.vocabs}>لغات صفحه  172 تا صفحه 189</Text>
               <Text style={styles.grammer}>
                  نقل قول قسمت سوم : نقل قول مستقیم و غیرمستقیم
               </Text>
               <Text style={styles.grammer}>
               نقل قول مستقیم و غیر مستقیم قسمت چهارم
               </Text>
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