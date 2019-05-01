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
          <Text>Négociation</Text>
            </CardItem>
            <CardItem>
                <Body>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                Dans la famille traditionnelle, il y avait une hiérarchie précise :
                 le père, la mère, les enfants... Chacun avait son rôle, sa place.
                 Aujourd'hui, on rencontre un nouveau type de relations entre parents et enfants :
                  la négociation. Voici comment Patrick négocie avec sa fille de onze ans. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Marie, qui vient d'entrer en sixième, se rend tous les jours au collège en voiture 
                en compagnie de son père qui ne travaille pas loin. Tous les deux apprécient 
                ces quelques minutes de trajet matinal, moment toujours privilégié pour se parler 
                Lorsque les premiers froids d'octobre arrivent, le père de Marie s'étonne de voir 
                sa fille avec un blouson léger plus adapté à l'été. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,color:'blue'}}>
                LE PÈRE :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Pourquoi tu ne mets pas ton blouson d'hiver ? 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,color:'blue'}}>
                 MARIE : 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Je ne peux pius le mettre, il est trop petit. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,color:'blue'}}>
                LE PÈRE :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Comment trop petit ? Ce n'est pas possible, tu l'as eu l'hiver dernier et nous l'avons choisi grand !
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,color:'blue'}}>
                MARIE :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Il est trop petit. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,}}>
                La discussion en reste là. Le lendemain, le père de Marie reprend la discussion avec une certaine insistance.
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,color:'blue'}}>
                LE PÈRE :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Marie, s'il te plaît, mets ce blouson, je voudrais examiner ce problème de taille. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,color:'blue'}}>
                MARIE :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Non, je te dis qu'il est trop petit, je l'ai déjà essayé. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Le père de Marie ne comprend pas. Le blouson est superbe. Calmement, Il réengage la discussion. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,color:'blue'}}>
                LE PÈRE :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Dis-moi, Marie, ce blouson, tu n'as plus envie de le mettre. Il y a 
                peut-être dans ta classe une fille que tu n'aimes pas et qui a 
                le même ? Mais ne me dis pas qu'il ne te va plus. Dis-moi 
                qu'il ne te plaît plus. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Après quelques secondes de silence, Marie se décide à répondre. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,color:'blue'}}>
                MARIE :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                C'est vrai, papa, je n'ai plus envie de le mettre. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,color:'blue'}}>
                LE PÈRE :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Cela m'ennule, je ne vais pas t'en racheter un maintenant. J'y réfléchis, et nous en reparlerons. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Le surlendemain, le père reprend le débat. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                LE PÈRE :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Marie, à propos du blouson, j'ai une proposition à te faire. Tu portes 
                ce blouson vert jusqu'à Noël, et je t'en offre un nouveau à Noël. Qu'en penses-tu ? 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Silence de quelques secondes.
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                MARIE :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                D'accord, papa ! 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Le lendemain, Marie portait son blouson vert. 
                </Text>
                </Body>
            </CardItem>
          </Card>





          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
          مذاکره 
          </Text>
            </CardItem>
          
          <CardItem>
            <Body >
              
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
              در یک خانواده سنتی ، یک سلسه مراتب دقیق وجود داشت : پدر ، مادر ، بچه ها و ...
              هرکدامشان نقش و جایگاه خودش را داشت. امروزه ما با نوع جدیدی از روابط بین والدین و فرزندان مواجه هستیم.
              : مذاکره . در این قسمت پاتریک با دختر 11 ساله اش مذاکره میکند.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
              ماری ، تازه وارد ششمین سال میشود که با پدرش با ماشین به کالجی در حومه شهر میرود که نزدیک محل کار پدرش نیست
              هردوی آنها از سفر کوتاه روزانه ای که صبح ها دارند لذت میبرند.
              همیشه زمان ویژه برای صحبت کردن آنها با یکدیگر زمانی است که اولین سرمای ماه اکتبر فرا میرسد.
              پدر ماری مبهوت دیدن دخترش با ژاکت نازکی که مناسب فصل تابستان است شده است.
              </Text>
              </Body>
              </CardItem>
              </Card>


        <Card>
          <CardItem header>
             <Icon type="FontAwesome" name="coffee"/>
             <Text>Vivre en province aujourd'hui </Text>
          </CardItem>
          <CardItem>
            <Body> 
            <Text style={{padding:5,textAlign:'justify',fontWeight:'bold',color:'blue'}}>
            Text A     
             </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                L'expérience de Pierre B. 
                « La vie y est bien plus douce, plus facile », répètent les 
                Parisiens qui annoncent leur déménagement en province. 
                Les embouteillages sont rares. Les gens sont souriants. Le 
                travail est moins stressant. Pierre est parti, il y a trois ans. 
                il rêvait d'une grande maison à dix minutes de la forêt, de 
                promenades au bord de la rivière... Cet été, Pierre a déci
                dé de rentrer. Où ? À Paris, bien sûr ! Problèmes de bou
                lot ? Non. il s'ennuie. Ses amis de la capitale viennent trop 
                rarement. Et, sur place, il ne s'est pas fait un seul vrai ami. 
                Il parlait de qualité de vie. Il parle maintenant de qualité 
                de relation. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold',color:'blue'}}>
                Text B     
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Le témoignage de Marcel M. 
                Je vis dans le Gers. Je suis employé de banque. Le soir, 
                après le travail, je fais du vélo sur les petites routes. Les 
                gens ici prennent le temps de vivre. Et puis, il y a plein de 
                choses à faire dans une petite ville. À Marciac, pas loin 
                d'ici, il y a un des plus célèbres festivals de jazz de France. 
                Je me sens un privilégié. Je ne voudrais pas vivre dans une 
                grande ville. 
                </Text>
            </Body>
            </CardItem>
        </Card>

          
          


          

        <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
          زندگی در پرووانس (اسم یک شهر در فرانسه) امروزی
          </Text>
            </CardItem>
          
          <CardItem>
            <Body >
              <Text  style={{direction:"rtl",padding:5,fontWeight:'bold',color:'blue',alignSelf:'flex-end'}}>
              متن اول
              </Text>
              <Text  style={{direction:"rtl",padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              تجربه پییر ب .
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              زندگی در آنجا خیلی با نشاط تر ، ساده تر است.
              این جمله را پاریسی هایی تکرار میکنند که با پرووانس اسباب کشی میکنند.
              ترافیک خیلی کم است. مردم خندان هستند. کار استرس کمتری دارد. پییر 3 سال است که نقل مکان کرده است.
              او رویای داشتن خانه ای را داشت که از جنگل ده دقیقه فاصله دارد.
              مسیر پیاده روی آن در امتداد رودخانه باشد... .
              این تابستان ، پییر تصمیم گرفته است که برگردد. کجا ؟ به پاریس ، البته!
              مشکلات شغلی ؟ نه او خسته شده است.
              دوستانش در پایتخت خیلی کم می آیند. و علاوه بر این او یک دوست واقعی پیدا نکرده است.
              او از کیفیت زندگی میگفت ، حالا او از کیفیت روابط میگوید.

              </Text>
              <Text  style={{direction:"rtl",padding:5,fontWeight:'bold',color:'blue',alignSelf:'flex-end'}}>
              متن دوم
              </Text>
              <Text  style={{direction:"rtl",padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
               گزارش مارسل ام.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              من در مرکز شهر زندگی میکنم. من کارمند بانک هستم ، شبها 
              بعد از کارم در مسیرهای کوتاه دوچرخه سواری میکنم.
              مردم اینجا در لحظه زندگی میکنند.
              و همچنین ، چیزهای زیادی برای انجام دادن در یک شهر کوچک وجود دارد
              در شهر مارسیاک ، که خیلی از اینجا دور نیست ، یکی از فستیوال های معروف جاز در فرانسه برگزار میشود.
              من احساس رفاه میکنم ، من نمیخواهم درون یک شهر بزرگ زندگی کنم
              </Text>
              </Body>
              </CardItem>
              </Card>



          <Card>
           <CardItem>
            <Body style={{flexDirection:'column',justifyContent:'space-evenly',alignItems:'flex-end'}} >
              <Text  style={{padding:5,fontWeight:'bold',color:'blue'}}>
              پدر :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              چرا ژاکت زمستانی است را نپوشیده ای ؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',color:'blue'}}>
              ماری :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              من نمیتونم دیگه اون رو بپوشم چون که خیلی کوچک است.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',color:'blue'}}>
              پدر :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              چطور میگویی کوچک است ؟ امکان ندارد ، تو همین زمستون قبلی خریدیش و ما بزرگترین رو هم انتخاب کردیم!
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',color:'blue'}}>
              ماری :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              خیلی کوچک است.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              بحث آنها تا اینجا تمام میشود.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              فردا ، پدر ماری بحث را دوباره با یک پافشاری خاص از سر میگیرد.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',color:'blue'}}>
              پدر :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              چرا ژاکت زمستانی است را نپوشیده ای ؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',color:'blue'}}>
              پدر :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              ماری ، لطفاً این ژاکت را بپوش ، میخوام مشکل اندازه اش را ببینم.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',color:'blue'}}>
              ماری :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              نه ، من میگم که خیلی کوچک است ، من قبلاً امتحانش کرده ام.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              پدر ماری متوجه نمیشود ، ژاکت عالی است ، به آرامی دوباره شروع به بحث کردن میکند.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',color:'blue'}}>
              پدر :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              بهم بگو ، ماری ، این لباس ، تو نمیخواهی دیگه بپوشیش. آیا توی کلاس شما دختری وجود داره که تو دوستش نداری و همین لباس
              را دارد ؟ اما بهم نگو که این لباس به تو نمیاد. بهم بگو که تو دیگه از این لباس خوشت نمیاد.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              بعد از چند ثانیه سکوت ، ماری تصمیم میگیرد که جواب بدهد.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',color:'blue'}}>
              ماری :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              درسته بابا ، من دیگه نمیخوام بپوشمش.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',color:'blue'}}>
              پدر :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              این مسئله من رو اذیت میکنه ، من قصد ندارم یکی دیگه الان برات بخرم. من درباره اش فکر میکنم و ما دوباره بحث میکنیم.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              فردای آن روز ، پدر دوباره بحث را شروع میکند. ماری راجع به ژاکت ، من یک پیشنهاد برات دارم. تا نزدیک عید کریسمس این
              ژاکت را بپوش. و من برای هدیه عید کریسمس یک ژاکت جدید میخرم. نظرت چیه ؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              چند ثانیه سکوت حکمفرما است.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',color:'blue'}}>
              ماری :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              قبوله بابا!
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              فردای آن روز ماری ژاکت سبزش را میپوشد.
              </Text>
              </Body>
            </CardItem>
          </Card>






              <Card>
          <CardItem header>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>Et moi, et moi,.. et eux !</Text>
            </CardItem>
            <CardItem>
            <Body>
            
            <Text  style={{padding:5,textAlign:'justify',lineHeight:30,color:'green'}}>
            Ces temps-ci, il y a des crises à la maison.
             Des scènes terribles entre moi et mes parents toujours pour la même raison :
              ils me posent des questions, me suspectent de cacher les pires choses et à ce moment-là,
               je me réfugie dans ma chambre. J'allume la radio pour m'isoler, mais ils continuent de me questionner derrière la porte :
                « Si tu nous répondais, on pourrait discuter. Quand tu étais petit, tu nous parlais ;
                 maintenant on n'a même plus le droit d'entrer dans ta chambre. » 
            </Text>
            <Image style={{width:'100%'}} resizeMode='stretch' source={require('../../../assets/img/lessons/lesson6/d62.png')}/>
            <Text  style={{padding:5,textAlign:'justify',lineHeight:30,color:'green'}}>
            J'ai interdit l'accès de ma chambre et je trouve ça normal.
             Ma mère n'a pas le droit de regarder toutes mes affaires sous prétexte de ranger ou de  faire le ménage.
              La dernière fois, elle a vu une photo de Véronique (la fille que j'aime) et j'ai eu droit à un interrogatoire :
               « Eh bien, elle est mignonne. C'est ta petite amie ?
                Depuis quand ? j Qu'est-ce qu'elle fait, hein, dis-moi ! » En unj sens,
                 je comprends sa curiosité : je suis son fils et elle s'intéresse à moi. D'ailleurs, si elle m'ignorait,
                  je n'aimerais pas non plus. Mais sa façon de se mêler de mes histoires m'énerve.
                   Je ne sais pas si tous les parents sont pareils, mais les miens sont paniques par l'adolescence.
                    Ils devraient se calmer ! Bon, c'est vrai que mes notes ont baissé depuis que je connais Véronique :
                     mais sinon, tout va bien. Ils ont leurs secrets, moi aussi. C'est pas plus compliqué que ça ! 
            </Text>
            </Body>
          </CardItem>
          </Card>



          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
           من ، من ... و آنها!
          </Text>
            </CardItem>
          
            <CardItem>
            <Body style={{flexDirection:'column',justifyContent:'space-evenly',alignItems:'flex-end'}} >
              
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              در این مواقع اینجا ، بحران در خانه وجود دارد. صحنه های وحشتناک بین من و پدر و مادرم 
              همیشه به خاطر یک دلیل : آنها از من سوال میکنند ، به من مشکوک هستند که چیزهای بدی را پنهان میکنم در همین لحظه
              من به اتاقم پناه میبرم. من رادیو را روشن میکنم تا خودم را از آنها دور نگهدارم ولی آنها به سوال پرسیدن از پشت 
              در اتاق ادامه میدهند : اگر تو جواب ما را بدهی ، ما میتوانیم بحث کنیم.
              زمانی که کوچک بودی ، با ما صحبت میکردی ، حالا ما حق نداریم
              حتی وارد اتاقت بشویم.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              من دسترسی به اتاقم را ممنوع کرده ام و به نظرم عادی است.
              مادرم حق ندارد  به بهانه مرتب کردن یا انجام دادن کارهای خانه (جارو  ، گردگیری و ...) به وسایل من نگاه کند.
              آخرین با ، او یک عکس از ورونیک (دختری که من به او علاقه دارم) دید.
              و من را سین جیم کرد : خوب ، او زیباست . او دوست دختر توست ؟ از کی ؟ کارش چیه ؟ هان ، بهم بگو!
              از یک طرف من کنجکاوی او را درک میکنم : من پسرش هستم و او به من اهمیت میدهد ، از طرف دیگر
              اگر او مرا نادیده بگیرد من این حالت را هم دوست ندارم.
              اما شیوه او در قاطی کردن تمام مسائل مرا عصبانی میکند.
              من نمیدونم آیا همه پدر و مادرها اینجوری هستند ، ولی پدر و مادر من از اینکه من در سن بلوغ هستم می ترسند
              آنها باید آرام شوند ! خب ، این یک واقعیت است که نمره های من از زمانی که با ورونیک آشنا شده ام افت کرده اند.
              در هر صورت همه چی خوب پیش خواهد رفت. آنها مسائل مخفی خودشان را دارند و من هم همینطور.
              خیلی پیچیده تر از این نیست!
              تییری (17 ساله)
             </Text>
              
              </Body>
              </CardItem>
              </Card>
              




          </ScrollView>
      </Container>
    );
  }
}
