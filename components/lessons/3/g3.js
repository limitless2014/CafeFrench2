import React, { Component } from 'react';
import { Container,Header,Left,Button,Icon, Body, Right, Card,CardItem,Text,StyleProvider} from 'native-base';
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
      <Container>
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
         <ScrollView>
         <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',padding:5}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>ضمایر موصولی Dont و Où</Text>
              </CardItem>
              <CardItem  style={{flexDirection:'row-reverse'}} >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  ضمایر موصولی ضمایری هستند که بین دو جمله قرار میگیرند و دوجمله را به هم وصل میکنند ودر فارسی به معنی که ترجمه میشوند 
                  ضمیر موصولی Dont بعد از مفعول غیر مستقیمی که همراه با حرف اضافه de است قرار میگیرد.
                  ضمیر موصولی où بعد از یک عبارت قیدی مکانی یا زمانی قرار میگیرد.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  Robert arrive de Provence. Nous l'avons rencontré en Provence.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  رابرت به پرووانس می آید  و ما او را در پرووانس ملاقات خواهیم کرد
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Robert arrive de Provence où nous l'avons rencontré. 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  رابرت به پرووانس می آید جایی که ما او را ملاقات میکنیم  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  On vous retrouve à Colmar Vous avez été comptable à Colmar.
                   </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  ما شما را در کلمار ملاقات کردیم شما در کلمار حسابدار بودید.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  On vous retrouve à Colmar où vous avez été comptable. 
                 </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  ما شما را در کلمار ملاقات کردیم جایی که شما حسابدار بودید
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  Je me suis marié à Colmar cette année-là. J'ai travaillé à Colmar cette année-la
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من در آن سال در کلمار ازدواج کردم. من در آن سال در کلمار کار کردم
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Je me suis marié l'année où j'ai travaillé à Colmar 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من آن سالی که در کلمار کار میکردم ازدواج کردم.  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  Je suis parti dans une région. Je rêvais de cette région.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                    من آن محل را ترک کردم. من رویای آن محل را داشتم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Je suis parti dans la région dont je rêvais
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من محلی را ترک کردم که رویای آن را داشتم.  
                  </Text>
                </Body>
              </CardItem>
           </Card> 





           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',padding:5}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>ضمایر اشاره</Text>
              </CardItem>
              <CardItem  >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  ضمایر اشاره برای اشاره کردن به شی ، شخص و... استفاده میشوند این ضمایر به جای اسمی می آیند که میخواهیم به آن اشاره کنیم
                  ضمایر اشاره از نظر مفرد، مونث و خنثی بودن و نیز از نظر مفرد یا جمع بودن و یا ساده یا مرکب بودن دسته های مختلفی دارند
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
