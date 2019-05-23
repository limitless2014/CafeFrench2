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
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',padding:5}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>اسم مصدر </Text>
              </CardItem>
              <CardItem  style={{flexDirection:'row-reverse'}} >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  مصدر یا بن واژه یک فعل شکل اولیه و ساده یک فعل است (صرف نشده با توجه به شخص)
                  . مصدر واژه‌ای است که همان مفهوم اصلی فعل را می‌رساند ولی تنها فرق بین فعل و مصدر این است که فعل علاوه بر مفهوم رسانی،
                  . بر شخص و شمار آن نیز دلالت می‌کند ولی در مصدر شخص و شمار، معلوم نیست و به همین دلیل مصدر یکی از اقسام اسم به شمار می‌آید.
                  اسم مصدر کاربردهای مختلفی دارد مثلاً میتواند به جای فاعل جمله قرارگیرد ، بعد از یک فعل صرف شده فعل دوم به صورت مصدر
                  می آید ، بعد از حرف اضافه مصدر می آید در این بین استثنا هایی وجود دارد به مثال زیر توجه کنید.
                  </Text>

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  En acceptant la présidence du festival, Alain Delon a 
                  fait beaucoup d'heureux.  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  با قبول کردن ریاست جشنواره ، آلن دولون خیلی خوشحال شد.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  استثنا اول : باید توجه داشت که برای ساخت مصدر با ضمیر en بعد از ضمیر en باید از ریشه حال فعل استفاده کرد تا مصدر ساخته شود.
                  برای ساخت شکل حال فعل ابتدا فعل را در زمان حال با فاعل اول شخص جمع (ما) صرف میکنیم سپس پسوند ons را حذف میکنیم
                  و پسوند ant را به انتهای آن اضافه میکنیم مثلاً فعل faire انجام دادن را در نظر بگیرید ابتدا آن را صرف میکنیم 
                  nous faisons در انتها تبدیل به faisant خواهد شد. موارد دیگری از ضمیر en وجود دارند که از این قاعده
                  پیروی نمیکنند و باید حفظ شوند مثل en étant ، en ayant , en sachent.
                  </Text>
                 
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  از اسم مصدر برای حالت های زیر استفاده میکنیم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  برای گفتن اینکه دو چیز در یک زمان اتفاق افتاده اند.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  En descendant de son hélicoptère, Alain Delon a déclaré...  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  زمانی که از هلیکوپتر شخصی اش پایین آمد ، آلن دولون بیان نمود ...
                  </Text>
                  
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  برای توضیح دادن :
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Il est tombé en glissant.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  او بدلیل اینکه لیز خورد افتاد.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  برای بیان یک شرط:
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  En prenant un taxi, tu arriveras à l'heure à la gare.  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  اگر یک تاکسی بگیری ، تو سر وقت به ایستگاه میرسی.
                  </Text>
                </Body>
              </CardItem>
           </Card> 

           

           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',padding:5}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>صرف فعل : وجه التزامی بخش دوم</Text>
              </CardItem>
              <CardItem  >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                 همانطور که در درس هفتم اشاره شد از وجه التزامی برای بیان وقوع فعل به طریق شک و تردید، التزام، احتمال، آرزو و امثال آن
                 استفاده میشود در این درس به کابردهای وجه التزامی در زمان حال پرداخته میشود ما از وجه التزامی بعد از افعال
                 خاصی یا حروف اضافه خاصی استفاده میکنیم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   بعد از افعال حسی مثل : aimer , regretter , ... .
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Je regrette que les gens n'aillent pas plus souvent au cinéma.  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   من از اینکه مردم به سینما نمی آیند احساس تاسف میکنم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   بعد از افعالی که برای بیان نظر استفاده میشوند : douter , s'étonner , craindre , ... 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  il est important que le film soit bien joué.  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   این مهم است که فیلم به خوبی اجرا شود.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Je ne crois pas que ce soit la raison.   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   من فکر نمیکنم که به این دلیل باشد.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   بعد از برخی حروف اضافه pour que , sans que.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Il y a des trucs pour qu'un objet paraisse plus grand.   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   ترفندهایی برای بزرگتر نشان دادن یک شی وجود دارد.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Les personnages sont très présents sans que le décor disparaisse.    
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                    شخصیت ها بسیار نمایان هستند فارغ از اینکه دکور محو شود.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                    صرف فعل aller در وجه التزامی بی قاعده است  و باید حفظ شود.
                    j'aille , tu ailles , elle aille , nous allions , vous alliez , ils aillent.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  il faut que j'aille au bureau.    
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                    من بایستی به اداره بروم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  je regrette que tu ailles chez ta mere.    
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من پشیمان هستم از اینکه تو باید خانه مادرت میروی.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  je m'etonne qu'elle aille travailler.    
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من تعجب کرده ام که او باید به سرکار برود.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  il faut que nous allions au marche.   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  بایستی ما به پیاده روی برویم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  je ne veux pas que vous alliez au cafe.   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من نمیخواهم که شما به کافه بروید.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  je ne crois pas qu'ils aillent s'amuser.   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من فکر نمیکنم که به آنها خوش بگذرد (سرگرم شوند).
                  </Text>
                </Body>
              </CardItem>
           </Card> 

           </ScrollView>
         </Container>
    )
  }
}
