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
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}> جملات شرطی نوع (قسمت دوم) si + گذشته ناتمام (گذشته استمراری) </Text>
              </CardItem>
              <CardItem  style={{flexDirection:'row-reverse'}} >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                   جملات شرطی نوع دوم با استفاده از این فرمول ساخته میشوند :
                   فعل در زمان شرطی حال + فعل در زمان گذشته استمراری + si 
                   جملا شرطی نوع دوم دو دسته هستند دسته اول 
                   جملاتی هستند که در زمان آینده بیان میشوند و در آینده احتمال کمی دارد که به وقوع بپیوندند
                   مثال S’il y avait du soleil demain, nous irions nous promener en forêt. 
                   اگر فردا آفتابی باشد برای گردش کردن به جنگل خواهیم رفت.
                   دسته دوم جملاتی هستند که در زمان حال بیان می‌شوند و امکان ندارد که به وقوع بپیوندند
                   مثال Si nous avions un chalet à la montagne, nous ferions du ski plus souvent.
                   اگر یک کلبه در کوهستان داشتیم بیشتر اسکی می‌رفتیم. (اکنون نداریم و نمی‌رویم)
                   توجه کنید که هر دو دسته جملات شرطی نوع دوم با فرمول یکسان ساخته میشوند و تفاوت آنها فقط در معنی است.
                   به مثالهای کتاب توجه کنید.
                  </Text>
                  
                </Body>
              </CardItem>
           </Card> 

           <Card>
              <CardItem >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                  
                
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Si tu étais à ma place, tu trouverais une solution (mais tu n'es pas à ma place). 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  اگر تو جای من بودی ، تو یک راه حل پیدا میکردی (اما تو جای من نیستی).
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  جمله فوق جز دسته دسته دوم می باشد به دلیل اینکه امکان وقوع آن وجود ندارد.
                  </Text>
                   <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                   Si nous connaissions ses copains, on le comprendrait mieux (mais on ne connaît personne). 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  اگر ما دوستان او را میشناختیم ، ما او را بهتر میشناختیم (ولی ما هیچ کسی را نمیشناسیم).
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  جمله فوق جز دسته اول میباشد به دلیل اینکه احتمال کمی وجود دارد که میتوانست عملی بشود.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  در جملات شرطی نوع دوم هرگز بعد از si فعل در زمان حال شرطی صرف نمیشود.
                  </Text>
                </Body>
              </CardItem>
           </Card> 



           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',borderBottomLeftRadius:50,borderTopRightRadius:50,borderTopLeftRadius:20,borderBottomRightRadius:20}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>نقل قول مستقیم (قسمت دوم)  : نقل قول در گذشته و مطابقت زمانی</Text>
              </CardItem>
              <CardItem  >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  برای نقل قول مستقیم از شخصی اگر شخص در زمان حال سخن بگوید مثلاً 
                  Pourquoi tu ne mets pas ton blouson ? 
                  پدر : برای چه تو ژاکتت را نمیپوشی ؟ 
                  برای نقل کردن آن ،فعل جمله گفته شده را (mets) به زمان گذشته ناتمام تبدیل میکنیم مثال : 
                  Le père a demandé à Marie pourquoi elle ne mettait pas son blouson
                  پدر پرسید چرا او لباسش را نپوشیده بود.
                  از حالت فوق برای بیان یک واقعیت در زمان حال استفاده میکنیم.
                  در حالتی که شخص گوینده در مورد زمان آینده صحبت کند مثلاً
                  Bon, d'accord, je le porterai jusqu'à Noël
                  خب ، ایرادی ندارد ، من آن را تا عید کریسمس خواهم پوشید.
                  برای نقل کردن این جمله ، فعل جمله گفته شده که در اینجا porterai است را
                  به زمان حال شرطی تبدیل میکنیم مثال :
                  Marie a répondu qu'elle le porterait jusqu'à Noël. 
                  ماری جواب داد که او آن را تا عید کریسمس خواهد پوشید.
                  از حالت فوق برای بیان یک واقعیت در آینده استفاده میکیم.
                  </Text>
                </Body>
              </CardItem>
           </Card> 



           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',borderBottomLeftRadius:50,borderTopRightRadius:50,borderTopLeftRadius:20,borderBottomRightRadius:20}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>ضمیر قیدی en به همراه یک ضمیر شخصی مفعولی</Text>
              </CardItem>
              <CardItem  >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                ضمیر قیدی en به طور معمول جایگزین اسم هایی در جمله می شود که یک عبارت نشان دهنده مقدار برای آن ها وجود داشته باشد
                و ضمیر شخصی مفعولی  همانطور که از نامش مشخص است جای مفعول در جمله را می گیرد. 
                این دو ضمیر اگر باهم همراه شوند همیشه ضمیر en بعد از ضمایر شخصی (me , te , lui , nous , vous , leur) قرار میگیرد.
                و قبل از ضمیر قیدی en اگر ضمایر شخصی مفعولی te , me قرار گیرند تبدیل به t' , m' میشوند.
                </Text>


                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                Tu as déjà un blouson. Je ne vais pas t'en racheter un. Je t'en offrirai un nouveau à Noël.   
                </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  تو یک ژاکت داری . من قصد ندارم یکی دیگه برات بخرم . من یکی از آن برای عید کریسمس برات میگیرم.  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Vous voulez du café ? - Oh oui, donnez-m'en une tasse, s'il vous plaît. 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   شما قهوه میل دارید ؟ اوه بله ، یک فنجان از آن لطفاً به من بدهید.
                  </Text>

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Et votre ami anglais en prend aussi ?    
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  و دوست انگلیسی شما نیز یک لیوان از آن میل دارد ؟
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Non. Ne lui en donnez pas, il n'aime pas ça.    
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  نه . به او از آن ندهید ، او دوست ندارد.
                  </Text>
                  
                </Body>
              </CardItem>
           </Card> 

           </ScrollView>
         </Container>
    )
  }
}
