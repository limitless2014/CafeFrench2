import React, { Component } from 'react';
import {Image} from 'react-native'
import { Container,Text, Card, CardItem, Header, Icon, Left, Body, Right, Button,  } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';



export default class D3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button onPress={()=>this.props.navigation.goBack()} transparent>
            <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body/>
          <Right/>
        </Header>
        <ScrollView>
         







          <Card>
          <CardItem header>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>La Maison de la Radio </Text>
            </CardItem>
          <CardItem>
            <Body>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
               Le 14 décembre 1963, le général de gaulle inaugure la Maison de la radio sur les bords de la Seine,
               ou se trouve aujourd'hui Radio France. Radio France est l'un de plus importants réseau radio du monde.
               C'est d'abord France Inter avec son programme, puis les radios spécialisées comme France Musique, France Culture ou
               France Info qui donne des information toute la journée. C'est aussi Radio France Internationale (RFI) qui permet à
               30 millions d'auditeurs de garder le contact avec la France et la langue française dans le monde entier. RFI propose
               des émissions en FM dans les pays où les auditeurs sont les plus nombreux. 
               </Text>
            </Body>
          </CardItem>
          </Card>
          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
            ایستگاه رادیو
          </Text>
          
            </CardItem>
            <CardItem>
            <Body>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              روز چهاردهم دسامبر سال 1963 ژنرال دوگل ایستگاه رادیو را در ساحل رود سن افتتاح کرد جایی که امروزه رادیوی فرانسه قرار دارد.
              رادیوی فرانسه یکی از ایستگاه های رادیویی مهم در جهان است. اولین کانال آن فرانس انتغ با برنامه اختصاصی آن است سپس کانالهای
              تخصصی مثل فرانس موزیک ، فرانس کالچر یا فرانس اینفو هستند که تمام روز اطلاع رسانی میکنند.
              همچنین کانال رادیوی بین المللی فرانسه (RFI) وجوددارد که این امکان را فراهم می آورد تا 30 میلیون شنونده از سراسر
              دنیا از کشور فرانسه و زبان فرانسوی مطلع باشند.
              رادیوی بین المللی فرانسه برنامه های خود را بر روی موج FM در کشورهایی که شنونده های زیادی وجود دارند ارائه میدهد.
              </Text>
            </Body>
          </CardItem>
          </Card>





          <Card>
          <CardItem header>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>La radio nous regarde </Text>
            </CardItem>
          <CardItem>
            <Body>
            <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>
            La radio  peut accompagner chacun de nous à chaque heure de la journée.
            </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold',color:'blue'}}>AU RÉVEIL</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
               Entre 6 h 30 et 9 heures, la radio nous informe sur l'actualité.
               c'est d'abord la voix du radioréveil, qu'on arrêté pour dormir encore un peu.
               puis viennent les information à l'heure du petit déjeuner. plus trad, c'est la voix des journalistes qui tient compagnie
               à celui ou à celle qui se trouve bloqué en voiture, dans les embouteillages.
               Après une nuit de sommeil, la radio nous dit que la terre ne s'est pas arette de tourner. Le début de la matinée
               , c'est l'heure des émissions courtes parce que les auditeurs sont pressées : la toillete, le petit déjeuner, le départ
               pour le travail. Mais de 9 heures à midi, les émissions sont plus longues et s'addressent à ceux qui ont du temps.
               </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold',color:'blue'}}>LE SOIR</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
               pendent le retour à la maison et la préparation du repas, la radio nous informe sur les événements de la journée.
               C'est le moment des débats politiques, mais aussi des émissions sur le cinéma, le théâtre...
               </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold',color:'blue'}}>LA NUIT</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
               Après 21 heures, il y a moins d'auditeurs, mais ceux qui continuent à écouter sont très fidèle.
               Reportages,dialogs avec le public, récits policiers : la radio écoute et fait rêver.
              </Text>
            </Body>
          </CardItem>
          </Card>

          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
          رادیو مراقب ماست
          </Text>
            </CardItem>
          <CardItem >
            <Body style={{flexDirection:'column',justifyContent:'space-evenly',alignItems:'flex-end'}} >
              
              <Text  style={{padding:5,fontWeight:'bold',}}>
              رادیو میتواند هرکدام از ما را در هر ساعتی از روز همراهی کند
              </Text>
              
              <Text  style={{padding:5,fontWeight:'bold',color:'blue'}}>
              زمان بیدار شدن
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              بین ساعت 6:30 تا ساعت 9 رادیو ما را از اخبار مطلع میکند. ابتدا صدای آلارم رادیو شروع میشود که ما آن را قطع میکنیم تا کمی 
              بیشتر بخوابیم سپس اخبار زمان صبحانه شروع میشود کمی بعد صدای خبرنگاران می آید که کسانی را که داخل خودرویشان در ترافیک
              گیر کرده اند را همراهی میکنند. بعد از خواب شبانه ، رادیو به ما میگوید که زمین از چرخیدن متوقف نشده است. صبح زود ساعتی است
              که برنامه ها کوتاه میشوند به دلیل اینکه شنوندگان برای رفتن به دستشویی ، صبحانه خوردن ، سرکار رفتن عجله دارند.
              اما از ساعت 9 تا ظهر برنامه ها طولانی تر هستند و به کسانی می پردازند که وقت بیشتری دارند.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',color:'blue'}}>
              عصر
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              هنگام برگشت به خانه و آماده کردن غذا ، رادیو ما را از وقایع روز مطلع میکند . زمانی است که مناظره های سیاسی و همچنین برنامه های سینمایی
              تئاتر و ... در جریان هستند.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',color:'blue'}}>
              شب
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              بعد از ساعت 21 ، شنوندگان کمتری وجود دارند ، اما کسانی که به گوش دادن ادامه میدهند خیلی وفادار هستند. رپرتاژ ، گفتگو با عموم مردم
              داستانهای پلیسی : رادیو گوش میدهد و خواب میبیند.
              </Text>
              </Body>
              </CardItem>
            </Card>



            <Card>
          <CardItem header>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>Un boulanger pas comme Les autres  </Text>
            </CardItem>
            <CardItem>
            <Body>
              <Text  style={{padding:5,textAlign:'justify',lineHeight:30}}>
              Bonjour, ravie de vous retrouver tous et toutes. Nous sommes 
              ensemble jusqu'à midi comme tous les jours. Aujourd'hui, nous 
              recevons des invités qui ont choisi de vivre de façon originale. 
              Pour commencer, nous sommes heureux d'accueillir Robert 
              Trautman qui arrive d'un petit village de Provence, où nous 
              l'avons rencontré la semaine dernière. 
              </Text>
               <Image style={{width:'100%'}} resizeMode='stretch' source={require('../../../assets/img/lessons/lesson3/d31.png')}/>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>LA JOURNALISTE :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Robert, vous avez cinquante ans, je crois. </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>LA ROBERT :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Oui, c'est ça. </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>LA JOURNALISTE :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Très tôt, vous avez appris le métier de boulanger grâce à votre père. </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>LA ROBERT :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>
               En fait, je l'ai appris malgré lui. Je voulais être boulanger, mais mon père m'a poussé à faire des études.
               </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>
               LA JOURNALISTE :
               </Text>
               <Text style={{padding:5,textAlign:'justify'}}>
               Alors, vous avez appris comment ? 
                </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>
               LA ROBERT :
               </Text>
               <Text style={{padding:5,textAlign:'justify'}}>
               Oh ! je me souviens... j'avais... trois ou quatre ans. Je passais des heures dans la boulangerie et j'observais tous les gestes de mon père. 
                </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>LA JOURNALISTE :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>
               Et plus tard, vous avez fait des études.
                </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>LA ROBERT :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>
               Oui, j'ai quitté la maison à douze ans pour entrer dans un collège à Strasbourg oii j'étais interne.
                Mais je rentrais dans ma famille aux vacances : je me levais à trois heures du matin pour raire le pam avec mon père.
                J'adorais ça. 
                </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>LA JOURNALISTE :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>
               Ensuite, on vous retrouve à Calmar où vous avez été comptable pendant quinze ans. 
               </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>LA ROBERT :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>
               Oui, quinze années oii j'ai rêvé tous les jours de devenir boulanger... 
                </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>LA JOURNALISTE :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>
               Et après ? 
               </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>LA ROBERT :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>
               Eh bien, un jour, j'ai lu par hasard une annonce dans le journal.
                Une boulangerie était à vendre dans un petit village de Provence, une région dont je rêvais. 
               </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>LA JOURNALISTE :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>
               Vous avez donc répondu à cette annonce...
               </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>LA ROBERT :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>
               Oui, j'ai téléphoné le jour même.
                Je venais de divorcer et j'avais envie d'aller ailleurs.
                 Alors j'ai quitté Strasbourg et je suis venu m'installer en Provence. 
               </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>LA JOURNALISTE :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>
               Et vous avez créé ce lieu formidable 
               </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>LA ROBERT :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>
               Oui, j'ai téléphoné le jour même.
                Je venais de divorcer et j'avais envie d'aller ailleurs.
                 Alors j'ai quitté Strasbourg et je suis venu m'installer en Provence. 
               </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text  style={{padding:5,textAlign:'justify'}}>
              Au début, ça n'a pas été facile. Et puis la boulangerie s'est développée.
               J'ai eu envie de faire quelque chose de nouveau.
                J'ai aménagé le vieux moulin du village et j'ai créé le musée des Métiers du pain. 
              </Text>
            </Body>
          </CardItem>
          </Card>


          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
          یک نانوای متفاوت  
          </Text>
            </CardItem>
          <CardItem>
            <Body>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
               سلام، از دیدن همه شما خوشحال هستم . ما هرروز تا ظهر باهم هستیم. امروز ما خوشامد میگوییم به میهمانانی که انتخاب کرده اند تا
               به شیوه ای اصیل زندگی کنند. برای شروع ، ما مفتخریم تا خوشامد بگوییم به رابرت تراتمن که از روستایی کوچک از پرووانس می آید
               جایی که ما با او هفته گذشته دیدار کردیم
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body style={{flexDirection:'column',justifyContent:'space-evenly',alignItems:'flex-end'}} >
              <Text  style={{padding:5,fontWeight:'bold',}}>
              خبرنگار :
              </Text>
              
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              رابرت من فکر میکنم شما 50 سال سن دارید
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              رابرت :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              بله درست است.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              در زمان خیلی قبل شما حرفه نانوایی را از پدرتان آموختید.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              رابرت :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              در حقیقت من این حرفه را با کمک او یادگرفتم. من میخواستم نانوا بشوم ولی پدرم مرا مجبور میکرد تا درس بخوانم.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              پس ، شما چگونه این حرفه را یادگرفتید؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              رابرت :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              من به خاطر دارم ... من ... 3 یا 4 سال داشتم. من بیشتر ساعات روز را در نانوایی بودم و تمام حرکات پدرم را تحت نظر داشتم.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              و چند سال بعد از آن شما درس خواندید.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              رابرت :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              بله ، من درسن 12 سالگی خانه را ترک کردم تا وارد کالج استراسبورگ شوم جایی که من دوران دانشجویی ام را گذراندم.
              ولی من در تعطلات پیش خانواده ام برمیگشتم : ساعت 3 شب بیدار میشدم تا به پدرم در نانوایی کمک کنم . من عاشق این کار بودم.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              بعد از آن شما را در کلمار ملاقات کردم جایی که شما بمدت 15 سال حسابدار بودید.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              رابرت :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              بله 15 سال هر روز رویای این را داشتم تا یک نانوا بشوم.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              و بعد از آن؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              رابرت :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              آه خب ، یک روز من به صورت اتفاقی یک آگهی در روزنامه دیدم. یک نانوایی داخل یک روستای کوچک در پرووانس که من رویای آن را داشتم برای فروش
              گذاشته شده بود.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              شما پیگیر آن آگهی شدید ...
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              رابرت :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              بله من در همان روز تماس گرفتم. من تازه از همسرم جدا شده بودم و میخواستم به جای دیگری نقل مکان کنم.
              پس من  استراسبورگ را ترک کردم و در آنجا ساکن شدم.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              و شما این مکان عالی را خلق کردید.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              رابرت :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              اوایل ، آسان نبود ، بعد نانوایی توسعه یافت . من میخواستم کار جدیدی را انجام دهم. من کار آسیاب های قدیمی روستا را تمام کردم 
              و موزه حرفه نانوایی را ایجاد کردم.
              </Text>
            </Body>
          </CardItem>
          </Card>
          </ScrollView>
      </Container>
    );
  }
}
