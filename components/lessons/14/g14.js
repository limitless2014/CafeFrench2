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
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>بیان دلیل قسمت اول : حروف اضافه parce que و puisque</Text>
              </CardItem>
              <CardItem  style={{flexDirection:'row-reverse'}} >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   حرف اضافه puisque بین دو جمله برای بیان دلیل می آید که معمولاً جمله اولی وضعیتی را بیان میکند و 
                   جمله دومی دلیلی را درمورد وضعیت جمله اولی بیان میکند که برای کسانی که ما آنها را خطاب قرار میدهیم ناشناخته است مثال :
                  </Text>
                  

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Elisabeth est bilingue parce que sa mère est française et son père allemand.   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  الیزابت دو زبانه است چون مادرش فرانسوی است و پدرش آلمانی است.
                  </Text>
                  
                   
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  حرف اضافه puisque میتواند هم ابتدای جملات بیایید هم بین آنها قرار گیرد.
                  puisque یک توجیه یا نظر را معرفی میکند و علتی که از آن صحبت میکنیم برای مخاطب ما شناخته شده است.
                  </Text>
                  
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Les couleurs d'Elisabeth sont authentiques puisqu'elle les a trouvées dans le désert.       
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   رنگهای الیزابت واقعی (اصلی) هستند چون آنها را در بیابان پیدا کرده است.
                  </Text>



                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Puisqu'elle veut aider les femmes sahariennes, Elisabeth vend ses peintures pour elles.        
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   چون او میخواهد به زنان ساهارایی کمک کند ، الیزابت نقاشی هایش را برای آنها میفروشد.
                  </Text>
                 

                </Body>
              </CardItem>
           </Card> 

           

           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',padding:5}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>ریشه حال فعل</Text>
              </CardItem>
              <CardItem  >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                 شکل ریشه حال فعل همانند مصدر فعل است ولی قبل از ضمیر قیدی en نمی آید.
                 میتواند مرتبط با فاعل جمله یا مفعول باشد (مصدر همیشه مربوط به مفعول جمله است). 
                 باید توجه داشت ریشه حال همیشه ثابت است و تغییر نمیکند و در موارد زیر از آن استفاده میکنیم:
                  </Text>
                  
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
                   برای ارائه اطلاعات تکمیلی :
                  </Text>

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Elle s'est spécialisée dans la traduction de livres 
                  touchant le Sahara (= de livres qui touchent le Sahara).      
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  او تخصصش را در زمینه ترجمه کتابهای مرتبط با ساهارا کسب کرده است (= کتابهایی با موضوع ساهارا)
                  </Text>
                   
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
                  برای بیان دلیل :
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Elle a passé toute son enfance dans la région de Bale, 
                  séjournant à Mulhouse (= parce qu'elle séjournait...).     
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   او تمام کودکی اش را در منطقه بال گذراند ، در شهر مولوز اقامت داشت (= به این دلیل در مولوز اقامت داشت که تمام کودکی اش را ...)
                  </Text>
                  
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  برای بیان یک رابطه زمانی (موقتی) :
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Vivant au début de traductions, elle est aujourd'hui 
                  spécialisée... (= Alors qu'elle vivait de traductions au début, aujourd'hui elle est spécialisée...)     
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   اوایل مخارج زندگی اش را از ترجمه کسب میکرد ،امروزه او متخصص است (= در حالی که اوایل درآمدش را از ترجمه کسب میکرد
                   ، او امروزه متخصص ... است.)
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                    به استثناها توجه داشته باشید : avant به معنی داشتن ، etant به معنی بودن ، sachant به معنی دانستن.
                  </Text>
                </Body>
              </CardItem>
           </Card> 




           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',padding:5}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>ریشه گذشته فعل</Text>
              </CardItem>
              <CardItem  >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  از ریشه گذشته فعل میتوان به عنوان صفت استفاده کرد ، از این ساختار برای موارد زیر استفاده میشود :
                  </Text>
                   
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
                  کاهش یک عبارت :
                  </Text>
        
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Très tôt attirée par le désert, elle a eu la chance d'y accompagner un groupe. (= Elle a été très tôt attirée par le désert 
                  et elle a eu la chance d'y accompagner un groupe).       
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   خیلی زود او مجذوب صحرا شد ، او شانس این را داشت که یک گروه را همراهی کند (= او خیلی زود مجذوب صحراشد و 
                   شانس این را داشت تا یک گروه را همراهی کند.)
                  </Text>

 
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
                   بیان دلیل :
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Femme engagée, elle a créé un petit cercle d'amis... (= Parce qu'elle était une femme engagée, elle...)    
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                 زن متعهد ، او یک حلقه کوچک از دوستان را ساخت ... (= چون او یک زن متعهد بود ، او ...)
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
                  جایگزین کردن شکل گذشته فعل با حرف اضافه رابطه ای به همراه qui :
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Elle présente ses œuvres inspirées de récents voyages... (= Elle présente ses œuvres qui ont été inspirées par de récents 
                  voyages...). 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  او آثار هنری اش را که الهام گرفته از سفرهای اخیرش بودند را ارائه نمود (= او
                  آثار هنری اش را که الهام گرفته از سفرهای اخیرش بودند را ارائه نمود.)
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  ریشه گذشته فعل مثل یک صفت کاربرد دارد و با اسمی که آن را توصیف میکند مطابقت دارد.
                  </Text>
                </Body>
              </CardItem>
           </Card> 







           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',padding:5}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>بیان دلیل قسمت دوم</Text>
              </CardItem>
              <CardItem  >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  برای بیان دلیل بین چند رخداد از حالتهای زیر استفاده میکنیم :
                  </Text>
                   
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
                  ساختار parce que / puisque + verbe .
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
                  ساختار à cause de + اسم
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
                  مصدر : ضمیر قیدی en + ریشه حال فعل
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
                  ریشه حال فعل
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
                  ریشه گذشته فعل
                  </Text>
                </Body>
              </CardItem>
           </Card> 
           
           </ScrollView>
         </Container>
    )
  }
}
