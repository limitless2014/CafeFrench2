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
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>جملات شرطی (قسمت اول): SI + زمان حال </Text>
              </CardItem>
              <CardItem  style={{flexDirection:'row-reverse'}} >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                   جمله شرطی نوع اول حالتی را بیان میکند که اگر فعلی انجام شود نتیجه آن فعل دیگری است مثلاً
                   اگر باران ببارد من بیرون نمیروم 
                   ، فعلی که در زمان حال است و در جمله شرطی وجود دارد بیانگر حالتی است که عملی یا محتمل است.
                   در زبان فرانسوی جملات شرطی نوع اول 3 ساختار دارند
                   ساختار اول بدین صورت است که حرف اضافه si در ابتدای جمله می آید بعد از آن فعل اصلی جمله در زمان حال صرف میشود و جمله 
                   نتیجه نیز در زمان حال صرف میشود ، ساختار دوم بدین صورت است که حرف اضافه si در ابتدای جمله می آید بعد از آن
                   فعل اصلی جمله در زمان حال و فعل جمله نتیجه در زمان آینده صرف میشود.
                   ساختار سوم بدین صورت است که حرف اضافه si در ابتدای جمله می آید و سپس فعل اصلی جمله در زمان حال و
                   فعل جمله نتیجه به صورت امری صرف میشود به مثالهای زیر توجه کنید.
                  </Text>
                  
                </Body>
              </CardItem>
           </Card> 

           <Card>
              <CardItem >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                  
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Si j'accepte la promotion , il faut déménager.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   اگر من ترفیع را قبول کنم ، باید نقل مکان کنیم. (ساختار اول)
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Si on a un jardin, on pourra avoir un chien.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  اگر ما یک باغ داشته باشیم ، ما میتوانیم یک سگ داشته باشیم(ساختار دوم).
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Si tu n'aimes pas Paris, change de métier.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  اگر تو پاریس را دوست نداشته باشی ، شغلت را عوض کن (ساختار سوم).
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,fontWeight:'bold',backgroundColor:'red'}}> 
                   نکته : هرگز در جمله اول بعد از حرف اضافه si فعل در زمان آینده صرف نمیشود 
                   </Text>
                   <Text style={{padding:8,textAlign:'justify',lineHeight:30,fontWeight:'bold',backgroundColor:'red'}}> 
                   نکته : نباید حرف اضافه si را که در جمله شرطی است با جمله سوالی غیر مستقیم اشتباه بگیریم همیشه در جمله شرطی حرف اضافه
                   si در ابتدای جمله می آید ، و در جملات سوالی غیر مستقیم بین دو جمله می آید.
                   </Text>
                   <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                   S'il fait beau demain, je ferai une promenade. 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  اگر فردا هوا خوب باشد ، من به پیاده روی میروم (جمله شرطی)
                  </Text>

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Je me demande s'il fera beau demain. 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من پرسیدم اگر فردا آفتابی است (جمله سوالی غیر مستقیم).
                  </Text>

                </Body>
              </CardItem>
           </Card> 



           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',borderBottomLeftRadius:50,borderTopRightRadius:50,borderTopLeftRadius:20,borderBottomRightRadius:20}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>ساختار Quelque Chose + مصدر ، Rien A + مصدر</Text>
              </CardItem>
              <CardItem  >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  از ساختار فعل داشتن + اسم + حرف اضافه à + مصدر برای بیان یک التزام استفاده میشود.
                  </Text>

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  J'ai une leçon à apprendre ( je dois apprendre une leçon). 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من یک درس دارم که باید یاد بگیرم (من باید یک درس را یاد بگیرم). (بیان التزام)
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Elle n'a pas beaucoup de travail à faire.  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  او کار زیادی برای انجام دادن ندارد.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Il a une lettre à écrire.  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  او یک نامه دارد که بنویسد.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  در این ساختار به جای اسم مکرراً از کلمه Quelque Chose یا rien استفاده میشود.
                  </Text>
                </Body>
              </CardItem>
           </Card> 



           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',borderBottomLeftRadius:50,borderTopRightRadius:50,borderTopLeftRadius:20,borderBottomRightRadius:20}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>هماهنگی : Quand...Et Que ... ، Parce Que...Et Que...</Text>
              </CardItem>
              <CardItem  >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                به طور کلی زمانی که دو جمله پایه و پیرو را بهم وصلی میکنیم با کلمه et یا ou را بهم وصل میکنیم
                ما parce que ، quand و dès que را تکرار نمیکنیم بجای آن از que استفاده میکنیم. به مثالهای زیر توجه کنید.
                </Text>


                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                 Quand on est jeune et qu'on veut travailler on n'a pas le choix  
                </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  زمانی که ما جوان هستیم و میخواهیم کارکنیم ما چاره دیگری نداریم.  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Plus tard, parce qu'on a des enfants et qu'on ne veut pas être trop loin du collège 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   بعداً ، چون ما فرزندانی داریم و نمی خواهیم خیلی از کالج دور باشیم.
                  </Text>

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Dès qu'on est à la retraite et qu'on pourrait enfin se retirer à la campagne...   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   از زمانی که ما وارد بازنشستگی میشویم و میتوانیم بازنشستگی مان را در حومه بگذرانیم ...
                  </Text>
                   
                  
                </Body>
              </CardItem>
           </Card> 




           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',borderBottomLeftRadius:50,borderTopRightRadius:50,borderTopLeftRadius:20,borderBottomRightRadius:20}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>نقل قول مستقیم (قسمت اول) زمان حال</Text>
              </CardItem>
              <CardItem  >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                برای نقل قول مستقیم در زمان حال کافی است که جمله شخص گوینده را در داخل گیومه قرار دهیم و فعلی را که معرفی کننده شخص گوینده است
                (demander , expliquer , raconter , répéter , affirmer...) را متناسب با گوینده صرف میکنیم و میتوانیم این جمله را قبل 
                یا بعد از جمله نقل شده  قرار دهیم. اگر جمله معرفی کننده شخص گوینده بعد از جمله نقل شده بیاید
                جای فاعل و فعل را عوض میکنیم.
                </Text>


                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                Les Parisiens qui déménagent en province répètent : « La vie est plus douce ici qu'à Paris. »  
                </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  پاریسی هایی که به پرووانس نقل مکان میکنند میگویند : « زندگی در اینجا نسبت به پاریس با نشاط تر است »
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  « La vie est plus douce ici qu'à Paris », répètent les Parisiens qui déménagent en province.  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  « زندگی در اینجا نسبت به پاریس با نشاط تر است  » پاریسی هایی که به پرووانس نقل مکان کرده اند میگویند
                  </Text>
                </Body>
              </CardItem>
           </Card> 

           </ScrollView>
         </Container>
    )
  }
}
