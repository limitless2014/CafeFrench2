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
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>صرف فعل : زمان گذشته ساده</Text>
              </CardItem>
              <CardItem  style={{flexDirection:'row-reverse'}} >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  زمان گذشته ساده یا passé simple برای نشان دادن اتفاقات تمام شده در زمان گذشته که تنها یک بار اتفاق افتاده اند یا اتفاق دیگری را در گذشته متوقف کرده اند، 
                  مورد استفاده قرار می گیرد. از این زبان معمولا در فرم نوشتاری زبان فرانسه استفاده می شود و استفاده از آن در محاوره کلامی رایج نیست.
                  از ترکیب زمان گذشته استمراری (imparfait) و ماضی بعید (plus que parfait) با گذشته ساده برای نقل داستان ، رمان ، داستانهای تاریخی و اخبار استفاده میشود.
                  ما همیشه میتوانیم زمان passe compose (ماضی نقلی) را جایگزین زمان گذشته ساده بکنیم.
                  برای صرف کردن افعال گروه er ، صرف فعل penser را حفظ میکنیم و از پسوندهای آن برای ساخت زمان گذشته ساده افعال این دسته
                  استفاده میکنیم. je pensai , tu pensas , il/elle pensa , nous pensâmes , vous pensâtes , ils/elles pensèrent .
                  طبق یک قانون کلی افعال با پسوندهای ir , ire , dre , tre با یک حرف i در پسوند آنها صرف میشوند و
                  افعال با پسوندهای oir , oire , aître با یک حرف u در پسوندشان صرف میشوند.
                  فعل mettre را در نظر بگیرید پسوند tre دارد پس از یک حرف i در صرف فعلش استفاده میکنیم مثال :
                  je mis , tu mis , il/elle mit , nous mimes , vous mites , ils/elles mirent.
                  برای صرف افعال با پسوند oir , oire , aître فعل pouvoir را در نظر بگیرید :
                  je pus , tu pus , il/elle put , nous pûmes , vous pûtes , ils/elles purent.
                  </Text>
 
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  به فعلهای بی قاعده توجه کنید : naître (je naquis), mourir (je mourus), courir (je courus), 
                  faire (je fis), voir (je vis), s'asseoir (je m'assis). این افعال بی قاعده هستند و باید صرف فعلهای آنها
                  حفظ شود از پر کاربردترین این افعال میتوان فعلهای etre , avoir , venir و tenir را نام برد ، صرف فعل venir و tenir
                  مثل هم میباشد.
                  </Text>
                  
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   صرف فعل etre در زمان گذشته ساده بدین صورت است : je fus , tu fus , il/elle fut , nous fûmes , vous fûtes , ils/elles furent 
                   صرف فعل avoir در زمان گذشته ساده بدین صورت است j'eus , tu eus , il/elle eut , nous eûmes , vous eûtes , ils/elles eurent 
                   صرف فعل venir و tenir در زمان گذشته ساده بدین صورت است je vins , tu vins , il/elle vint , nous vînmes ,vous vîntes 
                   , ils/elles vinrent .
                  </Text>
                  
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Debout devant la fenêtre sale de son bureau, Albert Billot regardait la pluie tomber sur le square. Foutu mois de septembre, 
                  pensa-t-il, et pas la plus petite affaire. Lorsque le téléphone sonna, il sauta sur Lappareil en se disant que même une 
                  catastrophe serait préférable à l'ennui.        
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  در کناره پنجره غبارآلودش ایستاده بود. آلبرت بیلوت میدان را که باران روی آن میبارید تماشا میکرد.
                باخودش فکر میکرد ، ماه سپتامبر لعنتی است و حتی یک بیزینس خیلی کوچک وجود ندارد.
                زمانی که تلفن اش زنگ زد او به سرعت به سمت تلفن رفت و گفت حتی یک فاجعه بهتر از بی حوصلگی (خستگی) است.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  C'est l'agence Mergitur ? demanda une voix féminine.        
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  کسی که میپرسید صدای زنانه داشت : آژانس مغگیتوغ است ؟
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   بیشتر اوقات از زمان گذشته ساده به همراه سوم شخص مفرد (il,elle,on) و سوم شخص جمع (ils,elles) استفاده میشود.
                  </Text>
                </Body>
              </CardItem>
           </Card> 

           

           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',borderBottomLeftRadius:50,borderTopRightRadius:50,borderTopLeftRadius:20,borderBottomRightRadius:20}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>استفاده از زمانها برای داستانسرایی (نقل داستان)</Text>
              </CardItem>
              <CardItem  >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                 در یک داستان ، تمام اکشن ها در زمان خاصی اتفاق می افتند. 
                 ما افعالی را که در پشت صحنه اتفاق می افتند (این افعال وضعیت را توصیف میکنند) را از افعالی که
                 در جلوی صحنه اتفاق می افتند (این افعال اکشن های مهم را بیان میکنند) را از همدیگر متمایز میکنیم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   ما از زمان گذشته استمراری (imparfait) برای دادن اطلاعات در مورد کادر کلی مطلب ، جو داستان ، وضعیت فعلی ، تشریح وضعیت فیزیکی 
                   یا حالت روحی استفاده میشود. به مثال زیر توجه کنید.
                  </Text>
                   
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Debout, devant la fenêtre sale de son bureau, Albert Billot regardait ia pluie tomber    
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  در کناره پنجره غبارآلودش ایستاده بود. آلبرت بیلوت باران را که میبارید تماشا میکرد.
                  </Text>
                  
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  از زمان حال کامل (passe compose) یا passe simple (گذشته ساده) برای بیان رویدادهای دائم (رویدادهایی که در زمان دقیق یا مشخصی به وقوع می پیوندند ) که در چارچوب کلی موضوع اتفاق می افتند استفاده می کنیم.
                  اینها رویدادهایی هستند که داستان را به پیش میبرند.
                  به مثال زیر توجه کنید
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Lorsque le téléphone sonna, il sauta sur l'appareil.     
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                    زمانی که تلفن زنگ زد ، او به سمت تلفن پرید.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                    ما از زمان ماضی بعید برای اشاره به رویدادی میکنیم که قبل از رویدادی دیگر (این رویداد میتواند در زمان گذشته ساده
                     ، حال کامل یا گذشته استمراری داشته باشد.) اتفاق افتاده است
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  il se rappela que c'était une Fernault qui avait gagné le Grand Prix de Monaco.  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                    او به خاطر آورد که یک نفر از شرکت فرنالت بود که مسابقه گراند پری موناکو را قبلاً برنده شده بود.
                  </Text>
                </Body>
              </CardItem>
           </Card> 




           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',borderBottomLeftRadius:50,borderTopRightRadius:50,borderTopLeftRadius:20,borderBottomRightRadius:20}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>کاربرد : Tellement ... que</Text>
              </CardItem>
              <CardItem  >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                   عبارت Tellement ... que نتیجه (دلیل) یک اتفاق را بیان میکند و در فارسی به صورت خیلی ... که معنی میشود.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  il y avait tellement de monde que personne ne faisait attention à Billot. 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                    خیلی از افراد وجود داشتند و در نتیجه(به این دلیل) هیچکس به بیلوت توجهی نکرد.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
                    این ساختار چندین حالت مختلف دارد:
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
                    Tellement de + اسم + que
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Nous avions tellement d'argent que nous sommes restés deux semaines de plus à l'hôtel.     
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  ما آنقدر پول زیادی داشتیم که دو هفته بیشتر در هتل اقامت داشتیم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
                  صرف فعل + tellement + que
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  il a tellement travaillé qu'il est tombé malade. 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  او آنقدر زیاد کارکرد که مریض شد.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
                   Tellement + صفت یا قید + que
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  il conduit tellement vite qu'il a souvent des amendes 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  او خیلی سریع رانندگی میکند به طوری که اغلب مواقع جریمه میشود.
                  </Text>
                </Body>
              </CardItem>
           </Card> 
           
           </ScrollView>
         </Container>
    )
  }
}
