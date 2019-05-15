import React, { Component } from 'react';
import { Container,Header,Left,Button,Icon, Body, Right, Card,CardItem,Text,StyleProvider} from 'native-base';
import {Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/platform';


export default class G3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
   
    
  }


  render() {
    return (
      <Container >
        <StyleProvider androidStatusBarColor='#000' style={getTheme(material)} >
         <Header>
           <Left >
           <Button onPress={()=>this.props.navigation.goBack()} transparent>
            <Icon name="arrow-back" />
            </Button>
            </Left>
            <Body/>
            <Right/>
         </Header>
         </StyleProvider>
         <ScrollView >
         <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',borderBottomLeftRadius:50,borderTopRightRadius:50,borderTopLeftRadius:20,borderBottomRightRadius:20}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>کاربردهای گذشته کامل (ماضی بعید) قسمت اول</Text>
              </CardItem>
              <CardItem  style={{flexDirection:'row-reverse'}} >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   ماضی بعید "گذشته در گذشته" است به این معنی که به ما اجازه میدهد تا درمورد
                   اتفاقی که در گذشته قبل از اتفاقی دیگر در گذشته اتفاق افتاده است صحبت کنیم مثلا در فارسی می گوییم 
                   قبل از اینکه به آنجا بروم او رفته بود به مثالهای زیر توجه کنید
                  </Text>
                  

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Au cours d'un voyage précédent, Nicoias avait déjà repéré le lieu de ses rêves.   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  در سفر قبلی ، نیکلاس از قبل مکان رویایی اش را پیدا کرده بود.
                  </Text>
                  
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Nous n'étions pas inquiets parce que nous avions consulté plusieurs médecins avant de partir   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  ما نگران نبودیم چون ما قبل از راهی شدن با چندین پزشک مشورت کرده بودیم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  به جمله زیر که از دو بخش تشکیل شده توجه کنید به بخش اول اتفاق مرجع در گذشته میگوییم و به بخش دوم اتفاقی که قبل از اتفاق
                  مرجع افتاده میگوییم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Juste avant la naissance de montaine, il était allé chez les nomades de Sibérie.     
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  درست قبل از تولد مانتین (اتفاق مرجع)، او پیش عشایر (خانه به دوش های) سیبری رفته بود. (اتفاق قبل از مرجع)
                  </Text>
 
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  ما میتوانیم با استفاده از قید deja تاکید کنیم که این اتفاق انجام شده است.
                  </Text>

                </Body>
              </CardItem>
           </Card> 

           

           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',borderBottomLeftRadius:50,borderTopRightRadius:50,borderTopLeftRadius:20,borderBottomRightRadius:20}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>کاربردهای گذشته کامل (ماضی بعید) قسمت دوم</Text>
              </CardItem>
              <CardItem  >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                 درون جملات شرطی ما از ماضی بعید برای اشاره به حالتی میکنیم که در گذشته انجام نشده است مثال :
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Si j'avais fait des études, je ne serais pas resté si longtemps sans travail,     
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  اگر من درس میخواندم ، من خیلی بیکار نمی ماندم.
                  </Text>
                  
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  در زبان محاوره ، ما به طور مکرر از ماضی بعید در یک عبارت ایزوله شد استفاده میکنیم
                  برای این کار رفرنس به اتفاق قبلی میکنیم اما صراحتاً به آن اشاره نمیکنیم .
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Je te l'avais bien dit !     
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من که بهت گفته بودم خب !
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Ce n'est pas ce que j'avais compris.     
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  این چیزی نیست که من متوجه شدم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Vous me l'aviez promis.     
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  شما به من قول داده بودید.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Je t'avais donné rendez-vous hier soir !    
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من که دیشب یک وقت ملاقات برات ردیف کردم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Je vous avais prévenu.    
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من بهت گفته بودم (من بهت هشدار داده بودم).
                  </Text>
                </Body>
              </CardItem>
           </Card> 




           
           </ScrollView>
         </Container>
    )
  }
}
