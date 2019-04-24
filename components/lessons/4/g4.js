import React, { Component } from 'react';
import { Container,Header,Left,Button,Icon, Body, Right, Card,CardItem,Text,View, List, ListItem} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class G3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
         <Header>
           <Left >
           <Button onPress={()=>this.props.navigation.goBack()} transparent>
            <Icon name="arrow-back" />
            </Button>
            </Left>
            <Body/>
            <Right/>
         </Header>
         <ScrollView>
         <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',borderBottomLeftRadius:50,borderTopRightRadius:50,borderTopLeftRadius:20,borderBottomRightRadius:20}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>صرف فعل : زمان حال شرطی </Text>
              </CardItem>
              <CardItem  style={{flexDirection:'row-reverse'}} >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                   یک جمله شرطی از دو بخش تشکیل شده است جمله شرطی و جمله نتیجه برای مثال جمله زیر را
                  در زبان فارسی در نظر بگیرید "اگر باران ببارد من بیرون نمیروم" جمله اگر باران ببارد جمله شرطی و جمله من بیرون نمیروم جمله
                  نتیجه است برای ساخت جمله شرطی در زمان حال ابتدا ریشه زمان آینده فعل را از جمله جدا میکنیم (برای بدست آوردن ریشه زمان آینده
                  به کافه فرنچ 1 مراجعه شود) و پسوندهای زمان ماضی بعید ( ais , ais , ait , ions , iez , aient)
                  را به ریشه آینده فعل اضافه میکنیم و در ضمن هیچ استثانایی وجود ندارد برای مثال فعل aimer را در نظر بگیرید
                  ریشه آینده آن aimer است حال برای ساخت جمله حال شرطی کافی است پسوند ais را به انتهای آن اضافه کنیم .
                  </Text>
                  
                </Body>
              </CardItem>
           </Card> 
           <Card>
             <CardItem style={{flexDirection:'row',backgroundColor:'lightgreen'}}>
               
               
                    <Body style={{flexDirection:'column',}}>
                    <Text style={{fontWeight:'bold'}}>مصدر زمان حال</Text>
                    <Text>aimer</Text>
                    <Text>être</Text>
                    <Text>aller</Text>
                    <Text>venir</Text>
                    <Text>faire</Text>
                    <Text>vouloir</Text>
                    </Body>
                    <Body style={{flexDirection:'column'}}>
                    <Text style={{fontWeight:'bold'}}>مصدر زمان آینده</Text>
                    <Text>j'aimerai</Text>
                    <Text>tu seras</Text>
                    <Text>il ira</Text>
                    <Text>nous viendrons </Text>
                    <Text>vous ferez</Text>
                    <Text>ils voudront</Text>
                    </Body>
                    <Body style={{flexDirection:'column'}}>
                    <Text style={{fontWeight:'bold'}}>زمان حال شرطی</Text>
                    <Text>j'aimerais</Text>
                    <Text>tu serais</Text>
                    <Text>il/elle irait</Text>
                    <Text>nous viendrions</Text>
                    <Text>vous feriez </Text>
                    <Text>ils voudraient</Text>
                    </Body>
             </CardItem>
           </Card>


           <Card>
              <CardItem >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   از زمان حال شرطی برای موارد زیر استفاده میکنیم
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   یک در خواست مودبانه :
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Tu pourrais m'aider ?
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   میتونید بهم کمک کنید؟
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   بیان کردن یک آرزو:
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  J'aimerais voyager.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من آرزو دارم به مسافرت بروم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   بیان کردن یک احتمال:
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Un foulard, ça lui ferait plaisir ?
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  یک روسری ، اون رو خوشحال میکنه ؟
                  </Text>
                </Body>
              </CardItem>
           </Card> 



           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',borderBottomLeftRadius:50,borderTopRightRadius:50,borderTopLeftRadius:20,borderBottomRightRadius:20}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>ضمایر اشاره</Text>
              </CardItem>
              <CardItem  >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  ضمایر اشاره برای اشاره کردن به شی ، شخص و... استفاده میشوند این ضمایر به جای اسمی می آیند که میخواهیم به آن اشاره کنیم
                  ضمایر اشاره از نظر جنس (مفرد، مونث و خنثی)، از نظر شمار (مفرد و جمع) و شکل (ساده یا مرکب) به انواع مختلفی تقسیم می‌شوند
                  ضمایر ساده مثل celle ، celui و ... از یک بخش تشکیل شده اند گروه دیگری از ضمایر اشاره ، ضمایر اشاره مرکب هستند 
                  که از دو بخش تشکیل شده اند بخش اول همان ضمیر ساده است و بخش دوم ضمیر موصولی است به طور کلی
                  اگر اشاره به شی ای کردیم از que بعد از ضمیر اشاره استفاده میکنیم و اگر اشاره به شخصی کردیم از ضمیر موصولی qui استفاده
                  میکنیم ضمایر اشاره به 4 دسته مفرد مذکر (celui) ، جمع مذکر (ceux) ، مفرد مونث (celle) ، جمع مونث (celles) تقسیم میشوند که
                  باید با توجه به اسم مورد اشاره ضمیر متناسب را به کار برد.
                  </Text>
                  <Text style={{padding:8,lineHeight:30}}> 
                  Je peux écouter un disque de jazz ?
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من میتونم به یک موسیقی جاز گوش کنم ؟
                  </Text>

                  <Text style={{padding:8,lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Écoute celui que tu veux. 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  به هرکدام که دوست داری گوش کن.
                  </Text>


                  <Text style={{padding:8,lineHeight:30}}> 
                  il y a beaucoup de bonnes émissions ce soir à la télé.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                    امشب تلویزیون برنامه های زیادی دارد.
                  </Text>

                  <Text style={{padding:8,lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Regardez celles qui vous plaisent.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   آنهایی را تماشا کنید که دوست دارید.
                  </Text>


                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                   نکته : گاهی اوقات به جای les gens qui/que از ceux qui/que استفاده میکنیم.
                   </Text>

                  <Text style={{padding:8,lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Les émissions s'adressent à ceux qui ont du temps. 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  برنامه ها برای اشخاصی هستند که وقت دارند.
                  </Text>

                   <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  La voix des journalistes tient compagnie à celui ou celle qui est bloqué(e) dans les embouteillages.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  صدای خبرنگاران افرادی را که در ترافیک معطل شده اند همراهی میکند.
                  </Text>
                </Body>
              </CardItem>
           </Card> 


           </ScrollView>
         </Container>
    )
  }
}
