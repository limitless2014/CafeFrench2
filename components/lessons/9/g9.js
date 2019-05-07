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
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>صرف فعل : ماضی بعید و گذشته شرطی </Text>
              </CardItem>
              <CardItem  style={{flexDirection:'row-reverse'}} >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  زمان گذشته کامل یا plus-que-parfait یا ماضی بعید برای نشان دادن یک اتفاق پیش از اتفاقی دیگر در گذشته مورد استفاده قرار می گیرد.
                  برای ساخت ماضی بعید کافی است تا فعل avoir یا etre را متناسب با فعل  اصلی جمله بکار ببریم
                  اگر فعل اصلی فعل حرکتی بود مثل aller , venir , sortir , rester ... از فعل کمکی etre متناسب با فعل اصلی جمله استفاده میکنیم در 
                  غیر اینصورت از فعل کمکی avoir استفاده میکنیم . شکل گذشته فعل avoir (avais , avais , avait , avions , aviez , avaient) و شکل گذشته
                  فعل etre (etais , etais , etait , etions , etiez , etaient) میباشد.در انتهای جمله از شکل سوم فعل اصلی جمله در زمان حال استفاده میکنیم.
                  برای ساخت شکل سوم فعل اگر فعل جز افعال er بود er تبدیل به é میشود .
                  اگر فعل جز افعال ir بود ir آن حذف و تبدیل به r خواهد شد. اگر فعل جز افعال re بود
                  re آن تبدیل به u میشود. باید توجه داشت که شکل سوم از نظر جنسیت و تعداد با فاعل جمله هماهنگی دارد
                  در نتیجه اگر فاعل مونث بود e به انتهای آن اضافه میشود و اگر جمع بود s به انتهای آن اضافه خواهد شد.
                  </Text>

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  j'avais travaillé. 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من کار کرده بودم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  tu avais oublié. 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  تو فراموش کرده بودی
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  il avait téléphoné  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  او تلفن زده بود.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  nous avions perdu. 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  ما گمشده بودیم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  vous aviez fini. 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  شما تمام کرده بودید.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  ils avaient lu. 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  آنها خوانده بودند.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  j'étais arrivé(e). 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من (مفرد یا مذکر) رسیده بودم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  tu étais venu(e). 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  تو (مفرد یا مذکر) آمده بودی.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  elle était entrée. 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  او (مفرد یا مذکر) وارد شده بود.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  nous étions connus. 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  ما (جمع) شناخته شده بودیم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  vous étiez tombés. 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  شما (جمع ) افتاده بودید.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  elles étaient nées. 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  آنها (جمع مونث) متولد شده بودند.
                  </Text>
                  
                </Body>
              </CardItem>
           </Card> 

           <Card>
              <CardItem >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                  
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                   زمان گذشته شرطی که به آن جمله شرطی نوع دوم نیز گفته میشود برای بیان شرطی در گذشته استفاده میشوند و در واقع
                   احتمال وقوع نتیجه صفر است برای مثال "اگر پست مدیریت را قبول میکردم میتوانستم یک آپارتمان بزرگتر اجاره کنم".
                   به این ساختار حال غیر واقعی نیز میگویند.
                   برای ساخت جمله گذشته شرطی کافی است مانند روش ساخت جمله ماضی بعید عمل کنیم با این تفاوت که فعل etre و avoir 
                   را در زمان حال شرطی صرف کنیم برای این منظور ریشه آینده فعل avoir و etre را که aur و ser هستند
                   را به انتهای آنها پسوندهای (ais , ais , ait , ions , iez , aient ) را اضافه میکنیم.
                  </Text>

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  J'aurais gagné.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من برنده میشدم
                  </Text>
                   <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                   tu aurais répondu.  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  تو جواب میدادی.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  il aurait trouvé.   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  او پیدا میشد.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  nous aurions chanté.   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  ما آواز میخواندیم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  vous auriez aimé .   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  شما خوشتان می آمد.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  ils auraient vu.   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  آنها میدیدند.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  je serais parti(e).   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من ترک میکردم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  tu serais sorti(e).   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  تو خارج میشدی.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  elle serait perdue .   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  او گم میشد.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  nous serions allés.   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  ما می رفتیم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  vous seriez revenus.   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  شما برمیگشتید.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  elles seraient restées.   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  آنها می ماندند.
                  </Text>
                </Body>
              </CardItem>
           </Card> 



           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',borderBottomLeftRadius:50,borderTopRightRadius:50,borderTopLeftRadius:20,borderBottomRightRadius:20}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>جملات شرطی (قسمت سوم) : si + ماضی بعید</Text>
              </CardItem>
              <CardItem  >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                 در جملات شرطی نوع سوم احتمال وقوع اتفاق ذکر شده اصلا وجود ندارد در حقیقت غیر ممکن است.
                 از این ساختار برای توجیه کردن ، سرزنش و ابراز پشیمانی استفاده میکنیم.
                 ساختار این جملات بدین صورت است si + فعل در زمان ماضی بعید + فعل در زمان  گذشته شرطی.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Si j'avais accepté le poste de directeur, j'aurais loué 
                  un appartement plus grand (mais je n 'ai pas accepté le 
                  poste de directeur).   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   اگر پست مدیریت را قبول میکردم ، من یک آپارتمان خیلی بزرگ اجاره میکردم (ولی من پست مدیریت را قبول نکردم)
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Si j'avais fait des études, je ne serais pas resté si 
                  longtemps sans travail (mais je n'ai pas fait d'études). 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  اگر من درس میخواندم ، من مدت زیادی بیکار نمی ماندم (ولی من درس نخواندم).
                  </Text>
                </Body>
              </CardItem>
           </Card> 



          

           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',borderBottomLeftRadius:50,borderTopRightRadius:50,borderTopLeftRadius:20,borderBottomRightRadius:20}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>جملات شرطی : بخش چهارم</Text>
              </CardItem>
              <CardItem  >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                در این قسمت فرمول های جملات شرطی برای مرور بیان شده است.
                جمله شرطی نوع اول : si + زمان حال + ... + زمان حال/ آینده / گذشته ناتمام.
                جمله شرطی نوع دوم : si + گذشته ناتمام + ... + حال شرطی .
                جمله شرطی نوع سوم : si + ماضی بعید + ... + گذشته شرطی.
                </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   نکته : هرگز بعد از حرف اضافه شرطی si جمله ای در زمان شرطی یا آینده نمی آید فقط زمان حال یا گذشته ناتمام یا ماضی بعید 
                   می آید.
                  </Text>
                </Body>
              </CardItem>
           </Card> 

           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',borderBottomLeftRadius:50,borderTopRightRadius:50,borderTopLeftRadius:20,borderBottomRightRadius:20}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>ضمایر شخصی</Text>
              </CardItem>
              <CardItem  >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                 در شکل زیر ترتیب قرار گرفتن ضمایر شخصی در جمله نشان داده شده است. شماره ستونها ترتیب قرار گرفتن ضمایر را نشان میدهد.
                 در سمت چپ فعل این ترکیبات امکان پذیر هستند.
                </Text>
                <Image style={{width:'100%'}} resizeMode='stretch' source={require('../../../assets/img/lessons/lesson8/g84.png')}/>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  1-2  je te le donne.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  ترکیب ستون 1 و 2 ، من آن را به تو میدهم. 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  1-4  Tu nous y emmènes ? 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  ترکیب ستون 1 و 4 ، تو ما را به آنجا میبری.
                  </Text>

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  1-5  Il vous en envoie.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                 ترکیب ستون 1 و 5 ،او مقداری از آن برای تو میفرستد.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  2-3  Elle le lui donne.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  ترکیب ستون 2 و 3 ،او مقداری از آن برای تو میفرستد.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  2-4  Nous l'y emmènerons.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  ترکیب ستون 2 و 4 ،ما او را به آنجا میبریم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  2-5  Vous l'en empêchez.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  ترکیب ستون 2 و 5 ،تو جلوی آن را میگیری.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  3-5  Ils lui en donnent.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  ترکیب ستون 3 و 5 ،انها به او میدهند.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  4-5  Ils lui en donnent.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  ترکیب ستون 4 و 5 ،مقداری از آن وجود دارد.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  در حالت امری ضمایر me , te تبدیل به moi و toi میشوند به جز مواردی که بعد از آنها ضمیر en بیاید.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Ton nouvel ordinateur est génial ! Prête-le-moi pour une heure ! 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  کامپیوتر جدید تو عالیه ! یک ساعت آن را به من قرض بده !
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Je n'ai pas mis de sucre dans mon café. Donne-m'en un s'il te plaît.  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من شکر داخل قهوه ام نریخته ام ، لطفاً کمی از آن به من بده.
                  </Text>
                </Body>
              </CardItem>
           </Card> 





           </ScrollView>
         </Container>
    )
  }
}
