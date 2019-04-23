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
          <Text>L'invitation</Text>
            </CardItem>
            <CardItem>
                <Body>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>PHILIPPE :</Text>
                <Text style={{padding:5,textAlign:'justify'}}>Allô ! Jacques, c'est Philippe </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>JACQUES :</Text>
                <Text style={{padding:5,textAlign:'justify'}}>Salut, ça va ? </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>PHILIPPE :</Text>
                <Text style={{padding:5,textAlign:'justify'}}>Ça va bien. Je te dérange ?</Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>JACQUES :</Text>
                <Text style={{padding:5,textAlign:'justify'}}>Non, pas du tout. Aujourd'hui, c'est une journée calme. </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>PHILIPPE :</Text>
                <Text style={{padding:5,textAlign:'justify'}}>Écoute, vendredi, c'est l'anniversaire de Régine.
                 J'aimerais organiser une petite fête. Tu es libre, j'espère ?</Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>JACQUES :</Text>
                <Text style={{padding:5,textAlign:'justify'}}>Oui. Pour vendredi soir, je n'ai rien de prévu. </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>PHILIPPE :</Text>
                <Text style={{padding:5,textAlign:'justify'}}>C'est parfait. Est-ce que tu pourrais m'aider ?
                 Je voudrais préparer un buffet pour une douzaine de personnes, sans rien dire à Régine.
                  Vous arriverez vers sept heures et quand elle rentrera, elle nous trouvera tous à la maison. Une amie,
                   à qui j'ai déjà parlé, la retient jusqu'à sept heures, le temps de tout organiser. </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>JACQUES :</Text>
                <Text style={{padding:5,textAlign:'justify'}}>C'est bien, tout ça.
                 Mais ne compte pas sur moi pour préparer un dîner gastronomique ! </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>PHILIPPE :</Text>
                <Text style={{padding:5,textAlign:'justify'}}>Mais non. Mais non ! Ce n'est pas du tout le repas que j'ai prévu.
                 Je vais commander des plats chez un traiteur.
                 Tu vas m'aider à mettre la table. Bon, je te laisse. </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>JACQUES :</Text>
                <Text style={{padding:5,textAlign:'justify'}}>Attends, attends. Qu'est-ce que j'offre à Régine comme cadeau d'anniversaire ?
                 Qu'est-ce qui pourrait lui faire plaisir ? </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>PHILIPPE :</Text>
                <Text style={{padding:5,textAlign:'justify'}}>Oh, je ne sais pas. Tu as toujours plein d'Idées, toi.</Text>
                </Body>
            </CardItem>
          </Card>





          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
          دعوت نامه 
          </Text>
            </CardItem>
          
          <CardItem>
            <Body style={{flexDirection:'column',justifyContent:'space-evenly',alignItems:'flex-end'}} >
              <Text  style={{padding:5,fontWeight:'bold',}}>
              فیلیپ :
              </Text>
              
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              سلام ! جک فیلیپ هستم.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              جک :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              سلام ، حالت چطور است ؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              فیلیپ :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              خوب هستم ، مزاحمت هستم؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              جک :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              نه اصلاً و ابداً . امروز یک روز آرام است.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              فیلیپ :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              گوش کن . جمعه روز تولد رژین است . میخواهم یک جشن کوچک ترتیب بدهم ، وقتت آزاد است امیدوارم که اینطور باشه ؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              جک :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              بله برای جمعه شب هیچ برنامه ریزی نکردم.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              فیلیپ :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              عالیه میتونی کمکم کنی ؟ من میخام یک غذای سر دستی برای 12 نفر درست کنم. بدون اینکه هیچ چیزی به رژین بگی حدود ساعت
              7 بیا و وقتی او برمیگردد او ما را همگی در خانه میبیند
              یک دوست را که من قبلاً با او صحبت کرده ام او را تا ساعت 7 معطل میکند ، وقتشه که برنامه ریزی همه چیز را بکنیم.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              جک :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              همه اش خوبه. ولی روی من در مورد یه شام با کیفیت حساب نکن.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              فیلیپ :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              اما نه ، نه این غذایی نیست که من برنامه ریزی کردم ، من مقداری غذا از سایت سفارش میدهم . میتونی 
              تو کمکم میکنی تا من میز را بچینم ، خوب من میروم.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              جک :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              صبر کن ، صبر کن . من کادوی تولد چی برای رژین بگیرم ؟ چه چیزی خوشحالش میکند ؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              فیلیپ :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              اوه ، من نمیدونم . تو خودت همیشه ایده های زیادی داری.
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
