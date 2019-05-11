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
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>کاربردهای جملات شرطی </Text>
              </CardItem>
              <CardItem  style={{flexDirection:'row-reverse'}} >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  از زمان حال شرطی برای بیان موارد زیر استفاده میکنیم :
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
                  انتقاد از وضعیت کنونی
                  </Text>

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Tu pourrais au moins reconnaître que la banlieue est 
                  agréable (mais tu ne le fais pas) !   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  تو میتونستی حداقل تشخیص بدهی که حومه بهتر است (ولی تشخیص نمیدهی)!
                  </Text>
                  
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
                  ابراز پشیمانی  (تاسف )از وضعیت کنونی :
                  </Text>

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Je resterais bien plus longtemps (mais je ne peux pas, malheureusement). 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من بیشتر از این می ماندم (اما من نمیتوانم ، متاسفانه)
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  از گذشته شرطی برای بیان این موارد استفاده میکنیم:
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
                  برای انتقاد از وضعیتی در گذشته:
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Tu aurais dû y penser avant de déménager (mais tu ne l'as pas fait) !  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  تو باید قبل از اینکه جابجا میشدی به ان فکر میکردی (اما تو این کار را انجام ندادی).
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
                  ابراز پشیمانی (تاسف) درمورد وضعیتی در گذشته:
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  J'aurais dû rester une semaine de plus (mais je ne l'ai pas fait) !   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من باید یک هفته بیشتر می ماندم (ولی این کار را نکردم).
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  از جملات شرطی برای حالات زیر نیز استفاده میشود :
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
                  برای بیان نتیجه یک حالت فرضی که احتمال وقوع آن کم یا غیر ممکن است.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Si j'habitais en banlieue, je pourrais lire mon journal dans le bus.   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  اگر من در حومه شهر زندگی میکردم ، من میتوانستم داخل اتوبوس کتابم را بخوانم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Si je t'avais écouté(e), je serais resté(e) à Paris.    
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  اگر من به تو گوش میدادم ، من در پاریس می ماندم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
                  برای بیان یک آرزو(خواسته) ، یک درخواست مودبانه :
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Est-ce que tu pourrais m'aider ?     
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  آیا میتونید به من کمک کنید ؟
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  J'aimerais prendre un mois de vacances.     
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من میخواهم یک ماه تعطیلات بروم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
                  مشاوره دادن ، پیشنهاد دادن :
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Tu devrais prendre des vacances.      
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  تو بهتره که به تعطیلات بروی.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  On pourrait peut-être parler d'autre chose.       
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  شاید بتونیم درمورد چیز دیگه ای صحبت کنیم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
                  بیان آینده در گذشته :
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Henri se demandait quand Christine reviendrait        
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  هنری پرسید کریستین کی برمیگردد. (در زمان گذشته از آینده سوال پرسید)
                  </Text>
                </Body>
              </CardItem>
           </Card> 

           

           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',borderBottomLeftRadius:50,borderTopRightRadius:50,borderTopLeftRadius:20,borderBottomRightRadius:20}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>صرف فعل : افعال با پسوند indre</Text>
              </CardItem>
              <CardItem  >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                 افعال با پسوند indre مثل craindre به معنی ترسیدن و éteindre به معنی خاموش کردن جز افعال بی قاعده هستند
                 ولی قواعد صرف کردن آنها مشابه همدیگر است اگر قبل از این افعال ضمیر قیدی en آمد باید از شکل حال آنها استفاد کرد
                 شکل حال فعل craindre ، craignant است و شکل حال فعل éteindre ، éteignant میباشد. 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   صرف فعل در زمان حال  فعل craindre و éteindre به این صورت است که ریشه آنها که  cr و ét است را در نظر میگیریم و
                   پسوندهای ains , ains , aint , ons , ez , ent را به ریشه فعل craindre که cr است اضافه میکنیم تا زمان حال آن ساخته شود.
                   برای فعل éteindre پسوندهای eins , eins , eint , ons , ez , ent را به انتهای ریشه فعل که ét است اضافه میکنیم تا
                   زمان حال آن ساخته شود.
                  </Text>
                  
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  برای صرف این افعال در زمان گذشته چون هردوی انها جز افعال حرکتی نیستند با فعل avoir صرف میشوند.
                  برای ساخت زمان گذشته فعل craindre که ریشه آن cr است پسوند aint را برای تمام ضمایر شخصی استفاده کنیم.
                  برای ساخت زمان گذشته فعل éteindre به ریشه آن که ét است پسوند eint را برای تمام ضمایر شخصی استفاده میکنیم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  باید توجه داشت که شکل امری فقط برای دوم شخص مفرد(تو) ، دوم شخص جمع(شما) ، اول شخص جمع(ما) صرف میشود 
                  برای ساخت شکل امری فعل craindre در اول شخص مفرد کافی است تا به ریشه آن cr پسوند ains را اضافه کنیم.
                  برای ساخت شکل امری فعل éteindre در اول شخص مفرد کافی است به ریشه آن ét پسوند eins را اضافه کنیم.
                  برای ساخت شکل امری دوم شخص جمع و اول شخص جمع کافی است به مصدر این افعال که  craign و éteign است 
                  پسوند ons برای اول شخص جمع و ez را برای دوم شخص جمع به انتهای ریشه حال آنها اضافه کنیم تا شکل امری 
                  آنها ساخته شود.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   برای ساخت زمان گذشته ناتمام افعال craindre و éteindre کافی است به مصدر این افعال که 
                   craign و éteign است پسوندهای گذشته ناتمام (ais , ais , ait , ions , iez , aient) را اضافه کنیم تا شکل گذشته ناتمام
                   آنها ساخته شود.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   برای ساخت زمان حال شرطی این افعال کافی است e انتهای افعال craindre و éteindre را حذف کنیم
                   تا مصدر شرطی آنها بدست آید توجه کنید چیزی به نام مصدر شرطی وجود ندارد صرفاً برای یادگیر بهتر از این روش استفاده
                   میکنیم. و پسوندهای زمان گذشته ناتمام را به ریشه شرطی آنها اضافه میکنیم تا زمان شرطی حال آنها ساخته شود.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   برای ساخت زمان آینده این افعال ریشه آنها را با حذف e آخر فعل craindre و éteindre بدست می آوریم 
                   و پسوندهای rai , ras , ra , rons , rez , ront را به انتهای ریشه اضافه میکنیم تا زمان اینده ساخته شود.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   برای ساخت وجه التزامی این افعال کافی است به ریشه آنها که eteign و craign است پسوندهای e , es , e , ions , iez , ent
                   را اضافه کنیم.
                  </Text>
                </Body>
              </CardItem>
           </Card> 




           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',borderBottomLeftRadius:50,borderTopRightRadius:50,borderTopLeftRadius:20,borderBottomRightRadius:20}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>کاربردهای مصدر</Text>
              </CardItem>
              <CardItem  >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                 مصدر میتواند در جایگاه فاعل جمله ، مفعول یا فعل اصلی یک جمله بیاید :
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Se plaindre complique souvent les choses. Il faut oser râler. Ne pas se confier à n'importe qui.      
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  شکایت کردن میتواند مسائل را گاهی اوقات پیچیده کند . باید جرات گله کردن را داشته باشیم. نباید به شخصی که برای او اهمیتی
                  ندارد شکایت کنیم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                 جمله فوق از 3 قسمت تشکیل شده در قسمت اول مصدر se plaindre در جایگاه فاعل است .
                 در قسمت دوم مصدر raler در جایگاه فعل اصلی جمله است.
                 در قسمت سوم مصدر se confier در جایگاه مفعول است.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  در حالت منفی ne pas قبل از مصدر می آید و برای ne jamais , ne plus , ne rien نیز همین روش برقرار است.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Ne jamais arriver en retard à son travail, ne plus avoir de problèmes d'argent, ne rien faire de la journée.       
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  هرگز با تاخیر سرکار نرو ، از این به بعد مشکلات مالی نداشته باش ، هیچ کاری در طول روز انجام نده.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  زمانی که از ne pas استفاده میکنیم و بعد از آن یک مصدر استفاده میکنیم ما فقط اطلاعاتی را در مورد مصدری که منفی است میدهیم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Je lui ai demandé de ne pas m'attendre = Je lui ai dit : « Ne m'attends pas. »       
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من از او خواستم که منتظر من نماند = من به او گفتم : منتظر من نمان.
                  </Text>

                </Body>
              </CardItem>
           </Card> 




           </ScrollView>
         </Container>
    )
  }
}
