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
          <Text>Les chemins de grande randonnée </Text>
            </CardItem>
            <CardItem>
                <Body>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                L'été approche, n'hésitez plus ! Préparez votre itinéraire et partez !  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Tous les syndicats d'initiative de France 
                vous proposent des dépliants d'information 
                pour parcourir des régions à pied : 
                laquelle choisir ? 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Des milliers de kilomètres de sentiers 
                vous attendent au bord des lacs 
                ou sur les sommets des montagnes : 
                lesquels vous font rêver ? 
                </Text>
                </Body>
            </CardItem>
          </Card>





          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
          مسیرهای پیاده روی طولانی
          </Text>
            </CardItem>
          
          <CardItem>
            <Body >
              
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
              تابستان فرامیرسد ، بیشتر از این تردید نکنید ! مسیر خود را مشخص کنید و حرکت کنید!
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              همه دفاتر گردشگری فرانسه به شما بروشورهای اطلاعاتی در مورد مسیرهای پیاده روی به شما میدهند : شما کدام را انتخاب میکنید ؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              هزاران کیلومتر مسیرهای پیاده روی اعم از ساحل دریاچه ها تا قله های کوهستانی انتظار شما را میکشند : 
              شما رویای کدامیک از آنها را دارید ؟
              </Text>
              </Body>
              </CardItem>
              </Card>


        <Card>
          <CardItem header>
             <Icon type="FontAwesome" name="coffee"/>
             <Text>Marche et rêve </Text>
          </CardItem>
          <CardItem>
            <Body> 
            
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                « Et cet été, vous faites quoi ? » « On part marcher. » 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                La randonnée pédestre est la première activité de loisirs des Français.
                 Ils sont dix millions environ chaque année, à partir sur les sentiers.
                  Et deux millions à le faire'régulièrement, surtout les femmes (55 %).
                   La marche nous aide à combattre le stress des grandes villes.
                    Fini le bruit, la vitesse, la pollution. Retour au calme, au grand air, à la nature. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Marcher, c'est se Ubérer. On s'arrête quand on veut, ou on veut.
                 On redécouvre le plaisir de l'effort physique. Le soir, après une journée de marche,
                  la fatigue est vite oubliée. On ne pense qu'au bonheur de se reposer,
                   d'enlever ses chaussures. Le matin, après un bon petit déjeuner,
                    le départ est une fête. Souvent le soleil se lève à peine.
                     Ces moments de plaisir, on peut les vivre seul et en silence ou les partager dans un groupe.
                      Le rythme de la marche favorise les discussions.
                       Les randonnées sont des moments de solidarité, de camaraderie. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                 Marcher, c'est aussi voyager à son rythme, prendre son temps.
                  On découvre des paysages, des arbres, des témoins du passé :
                   églises, châteaux... Enfin, la randonnée est bon marché.
                    L'équipement n'est pas cher, les gîtes d'étape ou chambres d'hôtes pratiquent des prix intéressants. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Où aller ? En France, il y a 900 ООО kilomètres de sentiers.
                 On peut sortir avec ou sans bagages, avec ou sans accompagnateur.
                  Organiser soi-même, comme 90 % des Français, un petit ou un grand circuit n'est pas compliqué.
                   Préparer un itinéraire donne presque autant de plaisir que le suivre. 
                </Text>
            </Body>
            </CardItem>
        </Card>

          
          


          

        <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
            پیاده روی کردن و رویا پردازی
          </Text>
            </CardItem>
          
          <CardItem>
            <Body >
              <Text  style={{direction:"rtl",padding:5,fontWeight:'bold',alignSelf:'flex-end',lineHeight:30,textAlign:'justify'}}>
              و تابستان امسال ، شما چکار میکنید ؟ ما به پیاده روی میرویم.
              </Text>
            
              <Text  style={{direction:"rtl",padding:5,alignSelf:'flex-end',lineHeight:30,textAlign:'justify'}}>
              پیاده روی در طبیعت اولین فعالیت تفریحی فرانسوی ها است. آنها تقریباً هرسال حدود 10 میلیون نفر هستند که به مسیرهای پیاده روی
              میروند. و 2 میلیون این فعالیت را به صورت منظم انجام میدهند ، تقریباً 55 درصد آنها زنان هستند.
              پیاده روی به ما کمک میکند تا بتوانیم با استرس ناشی از شهرهای بزرگ مقابله کنیم
              سروصدای مزاحم ، سرعت غیرمجاز ، آلودگی را از بین ببریم. آرامش را در هوای آزاد ، در طبیعت مجدداً بدست آوریم.
              </Text>
              <Image style={{width:'100%'}} resizeMode='stretch' source={require('../../../assets/img/lessons/lesson7/d72.png')}/>
              <Text  style={{direction:"rtl",padding:5,alignSelf:'flex-end',lineHeight:30,textAlign:'justify'}}>
              پیاده روی کردن ، خود را آزاد کردن است. هر زمان یا مکانی که بخواهیم آن را تمام میکنیم.
              ما دوباره لذت فعالیت بدنی را دوباره کشف میکنیم. شبها ، بعد از یک روز پیاده روی خستگی به سرعت فراموش میشود.
              ما فقط به لذت استراحت کردن ، در آوردن کفشها فکر میکنیم.
              فردای آن ، بعد از یک صبحانه خوب ، رفتن لذت رفتن به یک مهمانی را دارد.
              گاهی اوقات خورشید به ندرت طلوع میکند. این لحظات سرشار از لذت را ما میتوانیم به تنهایی و در سکوت زندگی کنیم ، یا آنها را
              با یک گروه سهیم شویم. ریتم پیاده روی به پیشرفت بحث ها کمک میکند. پیاده روی در طبیعت لحظات همبستگی و همراهی است.
              </Text>

              <Text  style={{direction:"rtl",padding:5,alignSelf:'flex-end',lineHeight:30,textAlign:'justify'}}>
              پیاده روی نیز سفر کردن با ریتم خاص خودش و زمان خاص خودش است ، ما منظره ها 
              ، درختان ،  نشانه های گذشته : کلیساها ، قلعه ها را کشف میکنیم.
              در نتیجه ، پیاده روی ارزان است.
              تجهیزات آن گران نیستند. برای خانه های تفریحی جنگلی یا اتاق های هتل قیمتهای جذابی پیشنهاد میدهند.
              </Text>
              <Text  style={{direction:"rtl",padding:5,alignSelf:'flex-end',lineHeight:30,textAlign:'justify'}}>
              کجا برویم ؟ در فرانسه ، 900 هزار کیلومتر مسیر پیاده روی وجود دارد. ما میتوانیم با کوله پشتی یا
               بدون آن ، با همراه یا بدون آن به پیاده روی برویم. خودمان همه چیز را مدیریت کنیم همانند 90 درصد فرانسویها.
               انتخاب یک مسیر کوتاه یا طولانی خیلی پیچیده نیست.
               آماده کردن نقشه مسیر لذتی تقریباً به اندازه طی کردن مسیر دارد.
              </Text>
              </Body>
              </CardItem>
              </Card>


              <Card>
          <CardItem header>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>Il faudrait que tu écrives... </Text>
            </CardItem>
            <CardItem>
                <Body>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                MARCELLE  :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Allô, Agnès ? Bonjour c'est Marcelle. Comment ça va ? 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                AGNÈS  : 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Ça va, et toi ? 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                MARCELLE :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Très bien. J'organise mes vacances, alors ça va bien. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                AGNÈS :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Tu pars dans les Landes, c'est ça ?
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                MARCELLE :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Oui, je pars avec des copains. Je sais que tu connais très bien la région.
                 Est-ce que tu as des conseils à me donner, des adresses ?  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                AGNÈS :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Tu sais, il y a plein de choses à faire.
                 il y a la plage, bien sûr, mais il faut que tu fasses un tour dans le vignoble.
                  Si vous aimez la marche, vous pouvez découvrir le vignoble à pied.
                   Mais j'y pense, j'ai un très bon guide : Entre Garonne et Dordogne à pied. Et puis, il y a aussi... 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                MARCELLE :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Dis, tu pourrais me prêter ton guide ? 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                AGNÈS :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Bien sûr. Vous pouvez aussi louer des vélos et dormir dans des gîtes.
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                MARCELLE :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Ah, ça c'est une très bonne idée ! Je voudrais bien que tu me donnes des adresses.
                 Oui est-ce qui pourrait nous loger ? 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                AGNÈS :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                J'ai un copain qui a un gîte en pleine forêt landaise. Il habite dans un petit village, mais j'ai perdu son adresse. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                MARCELLE :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                C'est dommage. Et qui est-ce que je pourrais contacter pour avoir des informations sur les gîtes, les locations de vélos ?  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                AGNÈS :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Écoute, il faudrait que tu écrives à l'office du tourisme de Bordeaux. Dans toutes les villes,
                 il y a un syndicat d'initiative. Tu auras toutes les informations sur place. Si je pouvais, je partirais bien avec vous.  
                </Text>
                </Body>
            </CardItem>
          </Card>

          <Card>
           <CardItem>
            <Body style={{flexDirection:'column',justifyContent:'space-evenly',alignItems:'flex-end'}} >
              <Text  style={{padding:5,fontWeight:'bold'}}>
              مارسل :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              الو (سلام) اگنس ؟ روز بخیر مارسل هستم. حالت چطوره ؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold'}}>
              اگنس :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              خوبم تو چطوری ؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold'}}>
              مارسل :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              خیلی خوب هستم ، برنامه ریزی برای تعطیلاتم انجام میدهم ، اوضاع خوبه.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold'}}>
              اگنس :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              تو راهی شهرستان لاند هستی. درسته ؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold'}}>
              مارسل :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              بله من با چندتا از دوستانم میروم. من میدونم که تو اون منطقه رو خیلی خوب میشناسی.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold'}}>
              اگنس:
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              آیا تو پیشنهادی داری که به من بدهی ، یا آدرسی ؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold'}}>
              اگنس :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              میدونی ، تفریحات زیادی وجود داره که انجام بدهی ، یک ساحل اونجا وجود داره قطعاً ،  اما حتماً تو باید
              یک تور در تاکستان داشته باشی. اگر پیاده روی رو دوست داری میتونی با پای پیاده یک تور در تاکستان داشته باشی.
              من دارم به اونجا فکر میکنم. من یک راهنمایی خوب برات دارم ، بین رودخانه گارون و  رودخانه دور دونی پیاده روی بری ، بعدش
              ، همچنین وجود دارد ...
              </Text>
              <Text  style={{padding:5,fontWeight:'bold'}}>
              مارسل :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              بگو ، میتونی یکم راهنمایی ام کنی ؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold'}}>
              اگنس :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              البته ، تو میتونی همچنین دوچرخه اجاره کنی و توی خونه های جنگلی بخوابی.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold'}}>
              مارسل :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              اوه ، این یک ایده خیلی خوبه! من میخوام که چندتا آدرس دقیق بهم بدی. چه کسی میتونه به ما اسکان بده ؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold'}}>
              اگنس :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              من یک دوست دارم که یک کلبه در وسط جنگ لاند دارد ، او داخل یک روستای کوچک زندگی میکند ولی آدرسش
              را فراموش کرده ام.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold'}}>
              مارسل :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              چه بد ، پس با کی میتونم در ارتباط باشم برای کلبه و  اجاره دوچرخه؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold'}}>
              اگنس :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
               گوش کن . باید یک نامه به دفتر توریستی شهر بوردو بنویسی. در تمام شهرها یک اداره توریستی است .
               آنها تمام اطلاعات در مورد مکان ها را بهت میدن ، اگر من هم بتونم با شما می آیم.
              </Text>
              </Body>
            </CardItem>
          </Card>



          </ScrollView>
      </Container>
    );
  }
}
