import React, { Component } from 'react';
import {Image} from 'react-native'
import { Container,Text, Card, CardItem, Header, Icon, Left, Body, Right, Button,StyleProvider  } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/platform';


export default class D3 extends Component {
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
          <Left>
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
          <CardItem header>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>La France ne s'est pas faite en un jour... </Text>
            </CardItem>
            <CardItem>
                <Body>
                
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                L'histoire de France, pour la plupart des Français, c'est Vercingétorix, Clovis, Charlemagne,
                 Jeanne d'Arc et de nombreux rois, mais bien peu savent a quoi la France ressemblait dans ces temps lointains. 
                 À partir du xIIIe siècle, la France prend peu à peu sa forme actuelle,
                  mais c'est un pays où le français est parlé par une petite partie de la population seulement :
                   dans le Sud, on parle occitan, et dans les régions périphériques, on parle breton, flamand, allemand, italien,
                    catalan, basque. La France est divisée en provinces relativement autonomes qui gardent leurs traditions.
                </Text>
                <Image style={{width:'100%'}} resizeMode='stretch' source={require('../../../assets/img/lessons/lesson12/d121.png')}/>

                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                La révolution de 1789 change tout : le territoire national est divisé en départements, l'autonomie des provinces est 
                supprimée, on essaie de remplacer les langues régionales par le français,
                 mais les populations sont très attachées à leur langue. Ce n'est qu'à la fin du xixe siècle,
                  avec l'enseignement obligatoire, que l'emploi du français se généraUse dans tout le pays. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Au xxe siècle, la France se transforme profondément :
                 l'administration se modernise, le français est la seule langue de la République,
                  l'industrie, l'agriculture et le commerce se développent. Le centralisme domine toute la vie française :
                   tout se décide à Paris où on donne les ordres qui seront exécutés en province. À la fin du xxe siècle,
                    avec la création de l'Union européenne, la France a trouvé un meilleur équilibre entre la capitale et la province.
                     Cette harmonisation a permis la création de régions administratives (correspondant souvent aux anciennes provinces) qui
                      possèdent une certaine autonomie : c'est ainsi que les langues régionales sont de nouveau enseignées en France après avoir
                       été souvent interdites à l'école. 
                </Text>
                </Body>
            </CardItem>
          </Card>
        




          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
           فرانسه در یک روز ساخته نشده است ...
          </Text>
            </CardItem>
          
          <CardItem>
            <Body >
              
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
               تاریخ فرانسه برای اکثریت فرانسویها وِرسینگِتوریکس (فرمانده قبیله آورن) ، کلوویس (پادشاه فرانکهای سالی) ، شارلمانی (امپراتور
               فرانکهای) ، ژان دارک (قهرمان ملی فرانسه) و بسیاری از پادشاهان دیگر است ، ولی تعداد کمی از مردم
               میدانند که فرانسه در زمانهای قدیم چگونه بوده است.
               از قرن هجدهم به بعد فرانسه به صورت تدریجی شکل امروزی اش را گرفت ، ولی کشوری بود که زبان فرانسوی
               تنها در بخش کوچکی از جمعیت آن صحبت میشد : در جنوب به زبان اکسیتان (زبان رومی) تکلم میشود
               و در مناطق اطراف زبان برتونی ، فلاندرز ، آلمانی ، ایتالیایی ، کاتالان ، باسکی تکلم میشود
               . فرانسه به بخش های نسبتاً مستقلی (خودمختاری) تقسیم شده است که سنت های خودشان را حفظ کرده اند.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
               انقلاب سال 1789 همه چیز را تغییر داد سرزمین ملی به بخشها تقسیم شد ، استقلال استانها ناپدید شده است.
               ما سعی میکنیم که فرانسوی را جایگزین زبانهای محلی کنیم ، ولی مردم بومی وابسته به زبانشان هستند.
               در پایان قرن نوزدهم و با اجباری شدن آموزش و پرورش بود که از استفاده از زبان فرانسوی در همه کشورها گسترش یافت.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
               در قرن بیستم فرانسه به طور وسیعی تغییر شکل داد :
               دولت مدرنیزه شد ، زبان فرانسوی تنها زبان جمهوری فرانسه است ، صنعت ، کشاورزی و تجارت توسعه یافت.
               مرکزگرایی بر تمام زندگی فرانسویها سیطره پیدا کرد : همه تصمیمات در پاریس گرفته میشوند ، پاریس جایی است که دستورات 
               به استانها برای اجرا داده میشوند. در اواخر قرن بیستم با تشکیل اتحادیه اروپا ، فرانسه به یک تعادل بهتر بین
               پایتخت و استانها دست یافت . این هماهنگی (هارمونی) اجاز داد تا مناطق مدیریتی (اغلب مطابق با استانهای قدیمی)
               یک خودمختاری کامل را بدست آورند.
               بنابراین زبانهای محلی جدیداً در فرانسه آموزش داده میشوند بعد از اینکه قبلاً گاهی آموزش آنها در مدرسه ممنوع شده بود.
              </Text>
               
              </Body>
              </CardItem>
              </Card>


        


              <Card>
          <CardItem header>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>Au commissariat </Text>
            </CardItem>
            <CardItem>
                <Body>
                
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                DANIEL B. :  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Bonjour monsieur, je voudrais faire une déclaration de perte. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE POLICIER :    
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Bon, asseyez-vous, je vous écoute. 
                </Text>  
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                DANIEL B. :   
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Voilà, ce matin, j'ai pris le métro vers huit heures à Vanves, je suis descendu à Montparnasse.
                 Je me suis aperçu que je n'avais plus ma mallette en arrivant au bureau.
                  J'ai tout de suite téléphoné à la RATFP mais personne n'avait rapporté de mallette.
                   Je suis vraiment ennuyé parce que j'avais tous mes papiers dedans et que je dois partir après-demain pour l'étranger.   
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE POLICIER :    
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Qu'est-ce que vous aviez exactement dans votre mallette ? 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                DANIEL B. :   
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Eh bien, mon portefeuille avec mes papiers d'identité, un livre, des notes, mon carnet d'adresses... et mes clés. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE POLICIER :    
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Alors, vous n'avez plus de papiers d'identité ?  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                DANIEL B. :     
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Non, et c'est bien ça qui m'ennuie. De plus, je suis étranger, plus précisément, je suis suisse.  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE POLICIER :    
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Il va falloir que vous alliez à votre consulat avec une copie de votre déclaration de perte.
                 On vous fera des papiers provisoires. Vous aviez de l'argent ? 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                DANIEL B. :    
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Oh ! pas grand-chose, heureusement ! 150,200 francs au maximum. Des francs français ! 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE POLICIER :    
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Est-ce qu'on peut vous joindre par téléphone dans la journée ?  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                DANIEL B. :     
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Bien sûr. Au 01 44 90 70 82, je voulais dire au 01 44 90 70 82.  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE POLICIER :    
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                C'est votre numéro direct ?  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                DANIEL B. :    
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Non, ce n'est pas le mien. C'est le numéro de la secrétaire.
                 Normalement, je travaille à Fribourg. Mais elle est au courant.  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE POLICIER :    
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                De toute façon, le sien ou le vôtre, pour nous, c'est la même chose.
                 L'important, c'est que nous ayons un numéro à Paris. Dès que nous saurons quelque chose, nous vous appellerons.   
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                DANIEL B. :     
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Merci bien. Au revoir, monsieur. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE POLICIER :    
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                À votre service.   
                </Text>
                </Body>
            </CardItem>
          </Card>
        




          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
           در ایستگاه پلیس (کلانتری)
          </Text>
            </CardItem>
          
          <CardItem>
            <Body >
 
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
               دانیل ب :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
               سلام آقا. من میخواهم گزارش مفقودی بدهم.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
               پلیس :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
               بسیارخب ، بنشینید ، من به شما گوش میدهم.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
              دانیل ب :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
              داستان از این قراره ، امروز صبح من حدود ساعت 8 سوار متروی شهر وانو شدم و در مونپارناس (اسم منطقه ای در پاریس) از قطار
              پیاده شدم. در حال رفتن به اداره بودم که متوجه شدم کیف سامسونتم همراهم نیست.
              من سریع زنگ زدم به شرکت حمل و نقل عمومی مترو. اما هیچکس گزارش پیداشدن کیف سامسونت من را نداده بود.
              من خیلی نگران شدم چون تمام مدارکم داخل کیفم بود و من باید پس فردا به خارج از کشور بروم.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
               پلیس :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
               دقیقاً داخل کیف شما چه چیزی وجود داشت ؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
              دانیل ب :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                خب ، کیف پولم به همراه مدارک شناسایی ام ، یک کتاب ، تعدادی یادداشت ، دفترچه تلفن ام ... و کلیدهایم.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
               پلیس :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
               پس شما الان مدارک شناسایی ندارید ؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
              دانیل ب :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
               نه ، من به همین خاطر خیلی نگرانم. علاوه بر اینها من خارجی هستم ، به طور دقیق تر من سوئیسی هستم.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
               پلیس :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
               شما باید به کنسولگری کشورتان با یک کپی از گزارش مفقودی مراجعه کنید.
               ما به شما مدارک موقتی میدهیم ، شما پول دارید ؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
              دانیل ب :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
               اوه نه خیلی زیاد خوشبختانه 150 تا 200 فرانک ماکزیمم دارم. فرانک فرانسه!
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
               پلیس :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
               آیا ما با تلفن میتوانیم در طول روز به شما دسترسی داشته باشیم ؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
              دانیل ب :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
               البته با 01 44 90 70 82 من میخواستم بگویم با شماره تلفن 01 44 90 70 82
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
               پلیس :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
               این شماره مستقیم شماست ؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
              دانیل ب :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
               نه این شماره من نیست. این شماره منشی ام است. من معمولاً در فرایبورگ کار میکنم ولی او همیشه پاسخگو است.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
               پلیس :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
               به هرحال ، مال او یا شما ، هردو یکی هستند ، مهم این است که ما شماره دفتر پاریش شما را داشته باشیم. هروقت که ما چیز جدیدی
               بفهمیم با شما تماس خواهیم گرفت.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
              دانیل ب :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
               خیلی ممنون خداحافظ آقا.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
               پلیس :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                خدمتگذار شما هستم.
              </Text>
              </Body>
              </CardItem>
              </Card>


        
          </ScrollView>
      </Container>
    );
  }
}
