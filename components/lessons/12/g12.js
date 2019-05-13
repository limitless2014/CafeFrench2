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
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>قیدهای با پسوند -ment </Text>
              </CardItem>
              <CardItem  style={{flexDirection:'row-reverse'}} >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  قیدها همانطور که از اسم آنها مشخص است کلماتی یا عباراتی هستند که چگونگی انجام یک فعل یا  عبارت را بیان میکنند
                  برای مثال من به سرعت میروم کلمه به سرعت در اینجا قید است و حالت فعل که رفتن است را بیان میکند.
                  در زبان فرانسوی برای ساخت قید از یک صفت قاعده کلی به این صورت است که صفت را در حالت مونث در نظر میگیریم و پسوند 
                  -ment را به انتهای آن اضافه میکنیم تا قید آن ساخته شود.
                  شکل مونث صفات بی قاعده است و باید حفظ شود برای مثال صفت complet در حالت مذکر است و شکل مونث آن
                  complete میباشد از مقایسه این دو میتوان نتیجه گرفت برخی صفات در حالت مذکر و مونث تنها یک حرف e
                  با همدیگر تفاوت دارند. برخی دیگر صفات مثل simple حالت مذکر و مونث آنها یکی است.
                  </Text>
                  

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  On ne peut pas éviter complètement les embouteillages.   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  ما نمیتوانیم به طور کامل از ترافیک اجتناب کنیم.
                  </Text>
                  
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Beaucoup de Français passent leurs vacances tout simplement chez eux.  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  بسیاری از فرانسویها تعطیلاتشان را به صورت خیلی ساده در خانه خودشان سپری میکنند.
                  </Text>

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Je lis régulièrement le journal.   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من به صورت منظم روزنامه میخوانم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
                  استثنا : زمانی که صفت مذکر با یک حرف صدا دار خاتمه می یابد پسوند -ment را به انتهای آن اضافه میکنیم
                  تا قید آن ساخته شود مثل صفات poli , vrai , absolu که به ترتیب قیدهای آنها poliment , vraiment , absolument میباشد.
                  </Text>

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
                  استثنا : زمانی که صفت با پسوند -ent پایان میابد برای ساخت قید باید پسوند -emment را
                  جایگزین پسوند ent کرد مثل صفات fréquent , récent , excellent که به ترتیب قیدهای آنها fréquemment , récemment , excellemment
                  </Text>
                   
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
                  استثنا : زمانی که صفت به پسوند -ant ختم میشود برای ساخت قید کافی است پسوند ant را با پسوند
                  amment جایگزین کنیم برای مثال قید صفت های suffisant , abondant به ترتیب suffisamment , abondamment میباشد.
                  </Text>
                  
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
                  نکته : قیدها همیشه ثابت هستند و تغییر نمیکنند.
                  </Text>
                </Body>
              </CardItem>
           </Card> 

           

           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',borderBottomLeftRadius:50,borderTopRightRadius:50,borderTopLeftRadius:20,borderBottomRightRadius:20}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>قیدها</Text>
              </CardItem>
              <CardItem  >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  قیدهای کمیت و کیفیت : Beaucoup , trop , plus , autant , bien , mal بعد از صرف فعل 
                  و قبل از شکل گذشته فعل قرار میگیرند.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Elle joue bien au tennis.    
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  او به خوبی تنیس بازی میکند.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Elle a bien joué, elle a gagné le match.     
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  او به خوبی بازی کرد ، او مسابقه را برنده شده است.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                   قیدهای زمانی و مکانی مثل : maintenant , demain , tard , ici , là-bas , partout ,... و همچنین
                   قیدهای با پسوند ment به طور کلی بعد از فعل قرار میگیرند.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Elles sont arrivées ici très tard.      
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  آنها خیلی دیر به اینجا رسیدند.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Elles se sont promenées tranquillement.       
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  آنها به آرامی قدم میزنند.
                  </Text>
                </Body>
              </CardItem>
           </Card> 




           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',borderBottomLeftRadius:50,borderTopRightRadius:50,borderTopLeftRadius:20,borderBottomRightRadius:20}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>عبارت های متضاد</Text>
              </CardItem>
              <CardItem  >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                 برای بیان دو جمله که با هم در تضاد هستند از ساختار bien que + وجه التزامی یا قیدها
                 میتوانیم استفاده کنیم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Bien qu'il soit impossible d'éviter les embouteillages, 
                  on peut donner des conseils aux automobilistes. 
                  (= Il est impossible d'éviter les embouteillages mais cela 
                  n'empêche pas de donner des conseils aux automobilistes.)       
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  اگر چه اجتناب از ترافیک کاملاً غیر ممکن است ، زمانی که بدانیم
                  موتور سواران در چه زمانی از روز قصد حرکت را دارند ما میتوانیم آنها را بهتر راهنمایی کنیم .
                  (= این غیر ممکن است که از ترافیک اجتناب کنیم ولی این امر مانع از راهنمایی کردن موتورسوارن نمیشود)
                  </Text>
                  
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Les gens ne disent pas toujours la vérité, bien que les réponses soient anonymes. 
                  (= Les réponses sont anonymes. Pourtant les gens ne disent pas toujours ia vérité.)        
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  مردم همیشه حقیقت را بیان نمیکنند ، اگرچه جواب ها به صورت ناشناس هستند. 
                  (= جوابها ناشناس هستند. اما مردم همیشه واقعیت را بیان نمیکنند.)
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                 قیدها یک اصلاحیه یا اطلاعات تکمیلی درمورد اطلاعات اولیه به ما میدهند.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Je déteste la télé, mais je regarde quand même les informations.         
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من از تلویزیون متنفرم ولی  با این وجود اخبار را تماشا میکنم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Les sondages donnent des informations utiles cependant, il ne faut pas croire qu'ils puissent résoudre tous les problèmes.         
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  نظر سنجی ها اطلاعات مفیدی به ما میدهند اما به هر حال نباید باور داشته باشیم که آنها میتوانند تمام مشکلات ما را حل کنند.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Je passe beaucoup de temps devant la télé. Malgré tout, je lis régulièrement le journal.         
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من اغلب اوقاتم را صرف تماشای تلویزیون میکنم. اما با این حال به طور منظم روزنامه میخوانم.
                  </Text>
                </Body>
              </CardItem>
           </Card> 




           </ScrollView>
         </Container>
    )
  }
}
