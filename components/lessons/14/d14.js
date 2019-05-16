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
          <Text>Un an dans le Grand Nord </Text>
            </CardItem>
            <CardItem>
                <Body>
                
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Ma fille Montaine avait 20 mois, un âge où il est important d'être avec ses parents.
                 Nous sommes partis au début de l'été, pour nous adapter progressivement au froid. 
                 Nous avons fait la première partie du voyage à cheval. Nous avons parcouru 700 km entre juin et août. Montaine,
                  très sensible à nos émotions, était inquiète quand nous l'étions. Sinon, elle prenait un grand plaisir à ce voyage.
                   Elle chantait, dormait sur mon dos, s'amusait à reconnaître les animaux, parlait à Otchum, notre chien. 
                </Text>
                <Image style={{width:'100%'}} resizeMode='stretch' source={require('../../../assets/img/lessons/lesson13/d131.png')}/>

                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Au cours d'un voyage précédent, Nicolas avait déjà repéré le lieu de ses rêves :
                 les bords du lac Thukada, entouré de glaciers superbes et de forêts magnifiques. Le village le plus proche était à 200 km.
                  Nous avons d'abord campé là six semaines, le temps pour Nicolas de construire une cabane de 30 m2.
                   Un hydravion a transporté les vitres de la fenêtre, les chiens et un traîneau.
                    C'est dans cette cabane que nous avons passé une partie de l'hiver Vivre, jour après jour, tous les trois ensemble,
                     a été un immense bonheur Montaine voulait participer à tout :
                      elle ramassait du bois quand le feu s'éteignait, péchait avec Nicolas... Chaque jour,
                       nous partions dans les montagnes pour observer les animaux.
                        Elle regardait des livres d'images, jouait avec Otchum,
                         vivant avec lui une véritable histoire d'amour Notre seule peur était les ours. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Après quelques mois, nous sommes repartis vers le sud.
                 Nous avancions de 10 à 80 km par jour, sur les fleuves et les rivières pris par les glaces ou à travers la forêt.
                  Montaine n'a jamais eu froid. Couchée à l'arrière du traîneau, elle dormait trois à quatre heures par jour mais,
                   pour nous, les journées étaient épuisantes. Nous tirions, poussions le traîneau. Nous tombions souvent.
                    Nous craignions que la glace ne cède. Mon pire souvenir ? Le jour où nous avons vu un trou d'eau, à cent mètres du traîneau.
                     Nicolas a essayé de ralentir mais les chiens n'obéissaient pas.
                      J'ai attrapé Montaine, l'ai jetée dans la neige avant de m'y jeter aussi.
                       Le traîneau s'est renversé, par miracle, à deux mètres de l'eau.  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Le soir, il fallait deux heures pour installer notre camp. Nicolas montait la tente pendant que je déchargeais le traîneau.
                 Montaine s'énervait parce qu'on ne s'occupait pas d'elle. Cette deuxième partie 
                de l'aventure a duré six mois. J'ai bien sûr connu des moments de découragement,
                 des moments où j'ai pleuré de froid, mais je n'ai jamais rien regretté.
                </Text>
                </Body>
            </CardItem>
          </Card>
        




          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
           یکسال در نیمکره شمالی
          </Text>
            </CardItem>
          
          <CardItem>
            <Body >
              
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
               دختر من مانتین 20 ماه داشت ، سنی که  با والدین بودن مهم است.
               ما در اوایل تابستان راهی شدیم ، برای اینکه به تدریج به سرما عادت کنیم قسمت اول سفرمان را با اسب انجام دادیم.
               ما 700 کیلومتر از ماه ژون تا اوت پیاده روی کردیم. مانتین به عواطف و احساسات ما بسیار حساس بود زمانی که ما نگران بودیم
               او هم نگران بود. در مواقع دیگر او از این سفر بسیار لذت میبرد. او آواز میخواند ، زمانی که روی کول من بود خوابش میبرد
               ، از شناختن حیوانات لذت میبرد ، با اتشوم (سگ ما) حرف میزد.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
               در سفر قبلی ما ، نیکلاس محل رویایی اش را پیدا کرده بود : سواحل دریاچه توکادا که توسط یخچال های طبیعی عالی و جنگل های
               با شکوه احاطه شده است. نزدیکترین دهکده 200 کیلومتر فاصله داشت. ما ابتدا به مدت 6 هفته آنجا کمپ زدیم تا نیکلاس
               یک کلبه 30 متر مربعی را آنجا بسازد. یک هواپیمای دریایی پنجره ها و شیشه ها، سگها و یک سورتمه را به آنجا منتقل کرد.
               ما در این کلبه بخشی از زمستان را گذراندیم. هرسه نفر ما روزی پس از روز دیگری را باهم زندگی کردیم ، یک شادی وصف ناپذیری بود.
               مانتین میخواست در همه چیز مشارکت کند : زمانی که آتش خاموش شد او مشغول جمع آوری مقداری چوب بود.
               با نیکلاس ماهیگیری میکرد ... هرروز ما به کوهستان میرفتیم تا حیوانات را تماشا کنیم. او به عکسهای کتابها نگاه میکرد ، با اوشوم
               بازی میکرد ، زندگی کردن با او یک داستان عاشقانه واقعی بود. تنها نگرانی ما خرسها بودند.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              بعد از چندماه ، ما به سمت جنوب دوباره عازم شدیم. ما روزی 10 تا 80 کیلومتر پیش روی میکردیم ، در شریانها و رودخانه های
              پوشیده از یخ یا از میان جنگل. مانتین هرگز دچار سرماخوردگی نشد. او سوار بر پشت سورتمه بود ، 
              روزی سه یا چهار ساعت میخوابید ، روزها برای ما طاقت فرسا بودند ، ما سورتمه را میکشیدیم و هل میدادیم.
              گاهی اوقات به زمین میخوردیم. ما نگران بودیم که یخ درهم نشکند ، بدترین خاطره ام ؟ روزی بود که ما یک چاله آب
              در 100 متری سورتمه دیدیم. نیکلاس سعی کرد که سرعت سورتمه را کم کند ولی سگها اطاعت نمیکردند.
              مانتین را بغلم گرفتم و قبل از اینکه خودم را در برف پرتاب کنم او را پرتاب کردم.
              سورتمه به طور معجزه آسایی در فاصله 2 متری آب واژگون شد.
              </Text>

              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              عصرها 2 ساعت طول میکشید تا کمپ را برپا کنیم. نیکلاس زمانی که من بار را از سورتمه داشتم خالی میکردم چادر را  برپا کرد.
              مانتین از اینکه ما او را سرگرم نکردیم اذیت شد.
              قسمت دوم ماجراجویی ما 6 ماه طول کشید.
              مطمئناً من لحظات ناامیدی یا لحظاتی را که از سرما گریه میکردم را تجربه کردم ، 
              ولی من از هیچ چیزی پشیمان نیستم.
              </Text>
               
              </Body>
              </CardItem>
              </Card>


        


              <Card>
          <CardItem header>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>Un entretien avec Diane </Text>
            </CardItem>
            <CardItem>
                <Body>
                
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE JOURNALISTE :  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Avant de partir, vous n 'aviez pas peur du froid, de la solitude ? 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                DIANE :     
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                J'y pensais, bien sûr, mais j'avais confiance en Nicolas.
                 C'est un passionné du Grand Nord, il y voyage depuis quinze ans et son expérience me rassurait.  
                </Text>  
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE JOURNALISTE :   
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Comment votre famille, vos amis, ont-ils réagi quand vous avez annoncé votre projet ?    
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                DIANE :     
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Mes parents étaient inquiets et ils nous ont invités à bien réfléchir. Quant à nos amis, ils nous prenaient pour des fous.
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE JOURNALISTE :   
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Est-ce qu'il ne fallait pas un peu d'Inconscience pour entreprendre ce voyage ? 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                DIANE :    
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Vous savez, ce n'est pas une idée aussi folle qu'on pourrait le croire ! Ce projet,
                 Nicolas m'en avait déjà parlé longtemps auparavant. Juste avant la naissance de Montaine,
                  il était allé chez les nomades de Sibérie voir comment ils voyageaient avec leurs enfants.
                   Pour la première partie du voyage, à cheval, nous avons fait fabriquer une selle biplace pour Montaine et moi.
                    Nous nous sommes entraînées pendant plusieurs mois à deux. Monlaine adorait ça !  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE JOURNALISTE :     
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Vous avez consulté des médecins ?   
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                DIANE :    
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Bien sûr, j'en ai consulté plusieurs. Aucun n'a élé dissuasif.
                 On m'a dit que le grand froid tuait microbes el virus. Effectivement, Montaine n'a jamais été malade. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE JOURNALISTE :    
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Est-ce qu'il vous est arrivé de regretter les avantages de la ville ?  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                DIANE :    
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Non. Je vivais dans un autre monde qui m'a beaucoup apporté.   
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE JOURNALISTE :     
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Et aujourd'hui, vous vous sentez différente ?   
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                DIANE :   
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Oui, je ne regarde plus les choses comme avant. Maintenant,
                 je donne moins d'importance aux petits inconvénients de la vie de tous les jours, je suis plus sereine. 
                </Text>
                </Body>
            </CardItem>
          </Card>
        




          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
           مصاحبه ای با دایان
          </Text>
            </CardItem>
          
          <CardItem>
            <Body >
 
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                قبل از حرکت کردن ، شما از سرما ، تنهایی ترسی نداشتید ؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
              دایان :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                البته که من به آن فکر میکردم ولی من از نیکلاس مطمئن بودم . او مشتاق شمالگان هست . او 15 سال است که به آنجا سفر میکند و
                تجربه او دوباره به من اطمینان خاطر داد.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
              چگونه خانواده شما ، دوستان شما زمانی که شما پروژه خودتان را اعلام کردید واکنش نشان دادند ؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
              دایان :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
               والدین من نگران بودند و از ما خواستند تا به دقت در این مورد فکر کنیم. اما دوستان ما ، ما را دیوانه فرض کردند.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                 آیا نباید کمی بی پروا بود تا این سفر را دست کم گرفت ؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
              دایان :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
               میدونید ، این ایده آنقدرها هم که تصور میکنید دیوانه وار نبود ! نیکلاس در مورد این پروژه خیلی قبل با من صحبت کرده بود.
               درست قبل از تولد مانتین او پیش عشایر (خانه به دوش های)سیبری رفته بود تا ببیند آنها چگونه با بچه ها سفر میکنند.
               برای قسمت اول سفرمان با اسب ، ما یک صندلی دوتایی برای من و مانتین ساختیم. ما به مدت چندین ماه با همدیگر آموزش دیدیم ، 
               مانتین عاشق این کار بود.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
               شما با چند پزشک مشورت کرده بودید ؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
               دایان :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
               البته ، من چندین بار با آنها مشورت کرده بودم. هیچ عامل بازدارنده ای وجود نداشت. به من گفته شده بود که سرما
               میکروبها و ویروسها را از بین میبرد ، به طور موثری مانتین هرگز مریض نشد.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                آیا در طول سفرتان دلتنگ مزیتهای شهر شده اید ؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
               دایان :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
               نه من در یک دنیای دیگری زندگی میکردم که مزیتهای زیادی به من داد.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
               و امروز ، شما به طور متفاوتی حس میکنید ؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
               دایان :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
               بله ، من نسبت به قبل به چیزهای بیشتری توجه میکنم. اکنون من اهمیت کمتری به مشکلات روزمره زندگی میدهم. من آرام تر هستم.
              </Text>
              </Body>
              </CardItem>
              </Card>


        
          </ScrollView>
      </Container>
    );
  }
}
