import React, { Component } from 'react';
import { Container,Header,Left,Button,Icon, Body, Right, Card,CardItem,Text,View} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class G2 extends Component {
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
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>تبدیل ضمایر مفعولی مستقیم و غیر مستقیم به شکل امری </Text>
              </CardItem>
              <CardItem  >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   به طور کلی ضمایر مفعولی به جای مفعول در جمله می آیند در این حالت برای تبدیل ضمایر مفعولی 
                   به امری کافی است که فاعل حذف شود سپس فعل و بعد از آن
                   اگر ضمیر مفعولی me بود به moi و اگر te بود به toi تبدیل میشود و در انتهای جمله قرار میگیرد.
                   بقیه ضمایر مفعولی بدون تغییر در انتهای جمله می آیند این روش برای تبدیل هر دو ضمیر مفعولی مستقیم و غیر مستقیم استفاده میشود.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Tu te regardes. Regarde-toi</Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  تو به خودت نگاه میکنی . به خودت نگاه کن  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Tu la prends.  Prends-la</Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  تو آن را برمیداری . آن را بردار  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Vous nous appelez. .  Appelez-nous. </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  شما با ما تماس میگیرید . با ما تماس بگیرید  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Nous les écoutons. Écoutons-les</Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  ما به آنها گوش میدهیم . بیاید به آنها گوش دهیم.  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Tu me téléphones.  Téléphone-moi</Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  تو به من تلفن میکنی . به من تلفن بزن.  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Nous lui disons. Disons-lui</Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  ما با او صحبت میکنیم . بیاید با او صحبت کنیم.  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Vous leur envoyez une carte. Envoyez-leur une carte</Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  ضما برای آنها یک کارت دعوت میفرستید . برای آنها یک کارت دعوت بفرستید.  
                  </Text>
                  
                   <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}> 
                   همیشه یک خط تیره بین فعل و ضمیر قرار میگیرد
                   </Text>
                   
                  
                   <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}> 
                   زمانی که y و en در انتهای جمله امری می آیند و فعل جمله از دسته er بود و دوم شخص بود یک s به انتهای فعل اضافه میکنیم.
                   </Text>
                   
                   <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Aller .Vas-y</Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  رفتن . به انجا برو  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Manger. Manges-en</Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  خوردن . مقداری از آن را بخور.  
                  </Text>

                  
                   <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                    زمانی که میخواستیم جمله امری از ضمایر مفعولی مستقیم و غیر مستقیم بسازیم یک قاعده کلی وجود دارد و آن
                    این است که ضمایر مفعولی قبل از فعل می آیند.
                   </Text>
                   

                   <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Ne me regarde pas. </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  به من نگاه نکن .  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Ne l'écoutons pas.</Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  به آنها گوش نکنیم.  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Ne me téléphone pas.</Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  به من تلفن نکن .  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Ne leur envoyez pas de carte.</Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  برای آنها کارت دعوت ارسال نکن  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  N'en mange pas</Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  از آن نخور.  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  N'y va pas.</Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                 آنجا نرو.  
                  </Text>
                </Body>
              </CardItem>
           </Card> 





           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',borderBottomLeftRadius:50,borderTopRightRadius:50,borderTopLeftRadius:20,borderBottomRightRadius:20}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>جملات سوالی غیر مستقیم</Text>
              </CardItem>
              <CardItem >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  جملات سوالی مستقیم بدین صورت است که شخص مستقیماً از شخص دیگری سوال میپرسد مثل آیا شما اینجا زندگی میکنید ؟ 
                  در مقابل جمله سوالی غیر مستقیم حالتی است که شخص مکالمه ای را تشریح میکند 
                  که در آن یک شخص دیگر از دیگری سوال میکند مثل برنارد پرسید آیا او اینجا زندگی میکند. برای ساخت جملات سوالی غیر مستقیم اگر
                  جمله سوالی مستقیم با est-ce que پرسیده شده باشد باید برای تبدیل ابتدا فاعل (سوال کننده) را می آوریم سپس فعل demande و مفعول
                  را می آوریم در مرحله بعد کلمه si را می آوریم سپس سوال را از زبان خودمان نقل میکنیم.
                  </Text>
                  <Text style={{padding:8,lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  BERNARD : « Est-ce que vous revenez demain ?  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  برنارد : آیا شما فردا برمیگردید ؟  (سوالی مستقیم)
                  </Text>

                  <Text style={{padding:8,lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Bernard demande à Chantal si elle revient le lendemain  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                    برنارد از چانتال پرسید آیا شما فردا برمیگردید ؟ (سوالی غیر مستقیم)
                  </Text>


                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  نکته : زمانی که جمله سوالی مستقیم با Qu'est-ce qui یا Qu'est-ce que یا Quand est-ce que یا  Où est-ce que  
                  یا Pourquoi یا Avec qui est-ce que  سوال پرسیده شود به ترتیب از  ce qui یا ce que یا  quand  یا où یا pourquoi
                  یا avec qui در جمله سوالی غیر مستقیم بجای  si استفاده میکنیم.
                  </Text>

                  <Text style={{padding:8,lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  BERNARD : « Qu'est-ce qui vous plaît ? »  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                    برنارد : چه جیزی دوست دارید ؟ (سوالی مستقیم)
                  </Text>

                  <Text style={{padding:8,lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Bernard demande à Chantal ce qui lui plaît.  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   برنارد از چانتال پرسید او چه چیزی را دوست دارد. (سوالی غیر مستقیم)
                  </Text>

                  <Text style={{padding:8,lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  ALICE : « Qu'est-ce que je dois faire ? »   </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  آلیس : چه کار باید بکنم ؟ (سوالی مستقیم)
                  </Text>

                  <Text style={{padding:8,lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Alice demande ce qu'elle doit faire.   </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  آلیس پرسید چه کاری باید او بکند ؟ (سوالی غیر مستقیم)
                  </Text>

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  BRUNO : « Quand est-ce que je peux vous revoir ?  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  برونو : چه زمانی میتوانم دوباره شما را ببینم ؟ (سوالی مستقیم)
                  </Text>

                  <Text style={{padding:8,lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Bruno demande à Ariette quand il peut la revoir. </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  برونو از آرلت پرسید چه موقع میتواند او را ملاقات کند. (سوالی غیر مستقیم)
                  </Text>



                  <Text style={{padding:8,lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  BRUNO : « Où est-ce que vous habitez ? »  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  برونو : کجا زندگی میکنید ؟ (سوالی مستقیم)
                  </Text>

                  <Text style={{padding:8,lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Bruno demande à Ariette où elle habite. </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  برونو از آرلت پرسید  او کجا زندگی میکند (سوالی غیر مستقیم).
                  </Text>
                  

                  <Text style={{padding:8,lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  BRUNO : « Pourquoi ne parlez-vous pas ? »   </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  برونو : چرا شما صحبت نمیکنید ؟ (سوالی مستقیم)
                  </Text>

                  <Text style={{padding:8,lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Il lui demande pourquoi elle ne parle pas. </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  برونو از آرلت پرسید چرا او صحبت نمیکند . (سوالی غیر مستقیم)
                  </Text>

                  <Text style={{padding:8,lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  BRUNO ; « Avec qui est-ce que vous travaillez ? »   </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  برونو : با چه کسی شما کار میکنید ؟ (سوالی مستقیم)
                  </Text>

                  <Text style={{padding:8,lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Il lui demande avec qui elle travaille.  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  برونو از آرلت پرسید با چه کسی او کار میکند. (سوالی غیر مستقیم)
                  </Text>


                   <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}> 
                   زمانی که حرف بعد از que صدادار یا h بود que تبدیل  به qu'میشود.
                   </Text>

                   <Text style={{padding:8,lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Je ne sais pas ce qu'elle veut.</Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من نمیدانم او چه چیزی میخواهد .
                  </Text>

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}> 
                   زمانی که بعد از si ضمیر ils یا il آمد si تبدیل به s' میشود.
                   </Text>

                   <Text style={{padding:8,lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Je me demande s'il est déjà arrivé
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من از خودم پرسیدم آیا او قبلاً رسیده است .
                  </Text>

                </Body>
              </CardItem>
           </Card> 


           </ScrollView>
         </Container>
    )
  }
}
