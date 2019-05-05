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
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}> سوال کردن با کلمات qui , que ... </Text>
              </CardItem>
              <CardItem  style={{flexDirection:'row-reverse'}} >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                   برای سوالی کردن جملات در زبان فرانسوی زمانی که فاعل یک شخص است از qui و qui est-ce qui استفاده میکنیم
                   برای مثال qui parle ? چه کسی صحبت میکند یا جمله qui est-ce qui parle ? چه کسی صحبت میکند 
                   در این جملات فاعل یک شخص است از لحاظ معنایی دو جمله هم معنی هستند با این تفاوت که qui est-ce qui رسمی تر است.
                   زمانی که درمورد یک مفعول مستقیماً سوال میکنیم و مفعول یک شخص است از qui و qui est-ce que استفاده میکنیم.
                   مثلاً qui cherchez vous ? شما دنبال چه کسی هستید ، qui est-ce que vous cherchez ? شما دنبال چه کسی هستید.
                   در حالتی که فاعل یک شی است از qu'est-ce qui برای سوال کردن استفاده میکنیم.
                   مثلاً qu'est-ce qui sonne ? صدای چه چیزی می آید.
                   زمانی که مفعول یک شی است برای سوال کردن در مورد آن از que و qu'est-ce que استفاده میکنیم.
                   مثلاً que cherches-tu ? دنبال چه چیزی میگردی  Qu'est-ce que tu cherches ? دنبال چه چیزی میگردی
                  </Text>
                </Body>
              </CardItem>
           </Card> 

           <Card>
              <CardItem >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                  
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  ما از  qu'est-ce qui در ساختارهای مهم زیر استفاده میکنیم.
                  </Text>

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Qu'est-ce qui se passe ?  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  چه چیزی اتفاق افتاد ؟
                  </Text>
                   <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                   Qu'est-ce qui ne va pas ?  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  مشکل چیه ؟
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Qu'est-ce qui te plaît ?   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  چه چیزی را دوست داری ؟
                  </Text>
                 
                </Body>
              </CardItem>
           </Card> 



           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',borderBottomLeftRadius:50,borderTopRightRadius:50,borderTopLeftRadius:20,borderBottomRightRadius:20}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>صرف فعل : وجه التزامی (قسمت اول)</Text>
              </CardItem>
              <CardItem  >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                این وجه برای بیان وقوع فعل به طریق شک و تردید، التزام، احتمال، آرزو و امثال آن به کار می‌رود در این درس 
                ساخت وجه التزامی در زمان حال را یاد میگیرم برای ساخت وجه التزامی در زمان حال کافی است که فعل را در زمان حال با فاعل سوم
                شخص جمع (ما) nous صرف کنیم برای مثال فعل telephoner را درنظر بگیرید این فعل را در زمان حال صرف میکنیم.
                nous téléphonons سپس پسوند ons را از انتهای آن حذف میکنیم تا ریشه بدست آید در مرحله بعد برای ساخت وجه التزام
                پسوندهای (-e , -es , -e , -ions , -iez , -ent ) را متناسب با فاعل مورد نظر به ریشه اضافه میکنیم .
                این روش برای تمام فعلها کاربرد دارد به جز فعل avoir و etre .
                  </Text>
                </Body>
              </CardItem>
           </Card> 



           <Card>
               <CardItem>
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                 نکته : بعد از افعال falloir que و vouloir que حتماً باید فعل بعدی در وجه التزامی صرف شود.
                </Text>


                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                Il faut que tu la rappelles.    
                </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  تو باید آن را بخاطر بسپاری.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  Il faudrait que nous écrivons. 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   ما باید حتماً نامه بنویسیم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  Je voudrais que tu me donnes des adresses. 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}> 
                  من میخواهم که تو به من آدرس بدهی.    
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  Je veux qu'ils fassent attention.     
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من میخواهم که آنها به من توجه کنند.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  نکته : ریشه فعل falloir بی قاعده است و باید حفظ شود . ریشه آن  fass است که باید پسوندهایی که ذکر شد را به آن اضافه کنیم
                  تا وجه التزامی آن ساخته شود.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  نکته : فعلهایی که در زمان حال ریشه آنها تغییر میکند در وجه التزامی نیز ریشه آنها متناسب با زمان حال تغییر میکند.
                  مثلاً فعل appeler در زمان حال به صورت je appelle , nous appelons صرف میشود و در وجه شرطی نیز j'appelle , nous appelions صرف میشود.
                  </Text>
                  
                </Body>
                </CardItem>
           </Card> 

           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',borderBottomLeftRadius:50,borderTopRightRadius:50,borderTopLeftRadius:20,borderBottomRightRadius:20}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>ضمیر سوالی lequel</Text>
              </CardItem>
              <CardItem  >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
               از ضمیر سوالی lequel برای سوال کردن استفاده میشود زمانی که بخواهیم به چیزی یا شخصی اشاره کنیم این ضمیر
               در زبان فارسی به معنی کدام ترجمه میشود نوع جنسیت آن را کلمه ای که به آن اشاره میکند که معمولاً قبل یا بعد از آن می آید مشخص میکند.
               از lequel برای اشاره به شخص یا شی مفرد مذکر ، از laquelle برای اشاره به شی یا شخص مفرد مونث و از lesquels و lesquelles برای
               اشاره به جمع مذکر و جمع مونث اشاره میشود.
                </Text>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                 ...parcourir des régions à pied 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   ... سفر کردن در مناطق با پای پیاده
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  Laquelle choisir ? (= quelle région choisir) 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   کدام یک را انتخاب میکنی ؟ (کدام منطقه را انتخاب میکنی ؟)
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                   Lesquelles de ces régions choisir ?  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   کدام یک از این مناطق را انتخاب میکنی ؟
                  </Text>
                </Body>
              </CardItem>
           </Card> 







           </ScrollView>
         </Container>
    )
  }
}
