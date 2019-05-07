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
          <Text>13e festival du film policier</Text>
            </CardItem>
            <CardItem>
                <Body>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                ALAIN DELON PRÉSIDENT
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                En acceptant la présidence du 13e festival du film policier de 
                Cognac, Alain Delon a fait beaucoup d'heureux. Faut-il rappeler 
                que Delon a 40 ans de carrière et que, parmi ses 87 films, ,52 
                étaient des polars ? En descendant de son hélicoptère, il a déclaré : 
                « Si je suis à Cognac, c'est parce que dans un festival de polars, j'ai 
                ma place, je m'y sens un peu chez moi. » 
                </Text>
                <Image style={{width:'100%'}} resizeMode='stretch' source={require('../../../assets/img/lessons/lesson9/d91.png')}/>
                </Body>
            </CardItem>
          </Card>





          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
          سیزدهمین جشنواره فیلم های پلیسی
          </Text>
            </CardItem>
          
          <CardItem>
            <Body >
              
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
              الن دولون ریاست فستیوال فیلم
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              با قبول کردن مسئولیت ریاست سیزدهمین جشنواره فیلم های پلیسی کنیاک (اسم شهری در فرانسه) آلن دولون بسیار خوشحال شد.
              آیا باید یاد آوری کرد که آقای دولون 40 سال است که حرفه اش را دنبال میکند و در 87 فیلم او 32 تای آنها جنایی بوده اند ؟
              از هلیکوپترش که پیاده میشود ، او بیان میکند : زمانی که من در کنیاک هستم چون در فستیوال فیلمهای جنایی من
              جایگاه خودم را دارم من کمی حس میکنم که در خانه خودم هستم.
              </Text>
              </Body>
              </CardItem>
              </Card>


        <Card>
          <CardItem header>
             <Icon type="FontAwesome" name="coffee"/>
             <Text>Pour filmer vos vacances</Text>
          </CardItem>
          <CardItem>
            <Body> 
            
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',color:'green'}}>
                CONSEILS D'UN CAMÉRAMAN
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                Faites parler les images !   
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE JOURNALISTE  :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Monsieur Croziy. quelle est votre activité principale ?  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE CAMERAMAN :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Nous faisons de la vidéo sur commande pour présenter quelque chose dans un grand magasin par exemple,
                ou pour filmer une fête de famille... 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE JOURNALISTE :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Est-ce que vous pourriez expliquer à nos lecteurs comment choisir les différents plans pour une vidéo de vacances ? 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE CAMERAMAN :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                C'est simple!  Vous voulez filmer une excursion, par exemple.
                 Pour commencer, vous choisissez un plan général pour montrer l'ensemble du paysage,
                  le cadre. Ensuite, vous passez à un plan  moyen, plus précis,
                   pour montrer la route que vous allez suivre. Si vous voulez prendre votre famille ou des amis,
                    il vaut mieux choisir un plan américain : les personnages sont très présents dans le décor 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE JOURNALISTE :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Et si on veut aussi filmer des détails ? Si on a un zoom... 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE CAMERAMAN :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Les détails sont importants, bien sûr, mais attention !
                 Un plan rapproché ou un gros plan peuvent montrer un détail amusant ou intéressant,
                  mais il ne faut pas en abuser. Le but d'un film, c'est de raconter une histoire. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE JOURNALISTE :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Est-ce qu'il y a des trucs pour la perspective ? Pour qu'un objet paraisse plus grand, par exemple ?
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE CAMERAMAN :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Il y a des trucs : quand on veut donner l'impression que quelque chose est petit,
                 il faut le filmer d'en haut : c'est ce qu'on appelle la plongée. Et pour insister sur la hauteur,
                  il faut que la caméra soit située le plus bas possible : c'est une contre-plongée. Ce n'est pas très compliqué,
                   il faut apprendre à regarder. C'est tout !   
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE JOURNALISTE :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Facile à dire, mais comment ? 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE CAMERAMAN :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Il y a un bon entraînement pour ça : lire des bandes dessinées. Les images de BD sont des images de cinéma qui ne bougent pas.   
                </Text>
                <Image style={{width:'100%'}} resizeMode='stretch' source={require('../../../assets/img/lessons/lesson9/d92.png')}/>
            </Body>
            </CardItem>
        </Card>

          
          


          

        <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
          توصیه هایی برای فیلمبرداری از تعطیلاتتان
          </Text>
            </CardItem>
          
          <CardItem>
            <Body >
              <Text  style={{direction:"rtl",padding:5,fontWeight:'bold',alignSelf:'flex-end',lineHeight:30,textAlign:'justify',color:'green'}}>
              توصیه های یک فیلمبردار
              </Text>
              <Text  style={{direction:"rtl",padding:5,alignSelf:'flex-end',lineHeight:30,textAlign:'justify',fontWeight:'bold'}}>
              عکس ها را به صحبت کردن وا دارید !
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
              آقای کروزلی ، فعالیت اصلی شما چیست ؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              فیلمبردار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              ما ویدیوهای سفارشی به طور مثال برای نمایش محصولی در فروشگاه زنجیره ای ، یا فیلمبرداری از یک جشن خانوادگی میسازیم
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              آیا میتوانید به خوانندگان ما توضیح دهید چطور میشود طرح های مختلف برای یک ویدیو از تعطیلات را انتخاب کرد؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              فیلمبردار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              ساده است ، شما میخواهید به طور مثال از یک سفر تفریحی فیلم بگیرید. برای شروع شما یک طرح کلی برای نمایش تمام منظره ، کادر
              انتخاب میکنید شما سپس طرح را با یک طرح متوسط ، دقیق تر برای نمایش مسیری که میخواهید بروید تغییر میدهید.
              اگر میخواهید از خانواده یا دوستان خود فیلم بگیرید بهتر است تا از یک طرح امریکایی استفاده کنید :
              شخصیتهای بسیار در دکور قرار دارند.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              و اگر ما بخواهیم همچنین از جزئیات فیلم بگیریم ؟ اگر یک بزرگنمایی داشته باشیم ...
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              فیلمبردار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              جزئیات مهم هستند ، البته ، ولی توجه کنید! یک طرح نزدیک ، یا یک طرح کلوز آپ (طرح خیلی نزدیک) میتوانند جزئیات سرگرم کننده (جالبی)
              یا جذابی را نشان دهند. ولی نباید در آن اغراق کرد. هدف یک فیلم گفتن یک داستان است.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              آیا ترفندی برای دورنما وجود دارد ؟ به طور مثال یک شی را بزرگتر نمایش دادن ؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              فیلمبردار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              ترفندهایی وجود دارد : اگر بخواهیم حسی را به بیننده القا کنیم که چیزی کوچک است ، از بالا باید فیلم بگیریم : به این
              تکنیک پلانژی (شیرجه از بالا) میگوییم و برای تاکید بیشتر بر ارتفاع دوربین باید دوربین در پایین ترین حد ممکنه
              قرار گیرد : به این تکنیک پلانژ معکوس میگوییم . خیلی پیچیده نیست 
              ما باید تماشا کردن را یاد بگیریم. همه اش همین است!

              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
              گفتن آن راحت است اما چگونه ؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              فیلمبردار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              یک تمرین خوب برای این وجود دارد : به آن  کامیک بوک (داستان مصور) میگویند. تصاویر کامیک بوک ، تصاویر سینما هستند که حرکت
              نمیکنند.
              </Text>
              </Body>
              </CardItem>
              </Card>


              <Card>
          <CardItem header>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>Vous avez la parole  </Text>
            </CardItem>
            <CardItem>
                <Body>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                Elle a choisi... :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                Anne-Sophie, 34 ans, chef du service de publicité 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                « Je travaille dans un groupe de presse. Le même depuis sept ans. Je gagne bien ma 
                vie. Il y a six mois, le service de publicité d'une radio m'a proposé un poste de direc
                teur commercial et un salaire supérieur de 50 % à celui que j'ai actuellement. Je 
                n'ai pas réfléchi longtemps ; j'ai dit non. D'abord, j'ai une fille de 6 ans, je viens de 
                me remarier et je voudrais un autre enfant. Impossible, si je passais directrice, avec 
                de nouvelles responsabilités. Là, j'ai un travail qui me plaît, j'en ai fini avec le stress 
                des débuts. Je connais très bien mon métier, je m'entends bien avec mes collègues, 
                et surtout j'ai du temps. Qu'est-ce que j'aurais gagné si j'avais accepté ? J'aurais loué 
                un appartement plus grand, j'aurais remplacé ma vieille voiture par une Twingo, 
                j'aurais envoyé ma fille aux sports d'hiver... Justement, cette année, elle n'y est pas 
                allée. À Pâques, elle est partie à la campagne avec sa grand-mère. Et comme j'avais 
                du temps, je l'ai accompagnée. Non, je ne regrette rien... » 
                </Text>
                <Image style={{width:'100%'}} resizeMode='stretch' source={require('../../../assets/img/lessons/lesson8/d83.png')}/>
                </Body>
            </CardItem>
          </Card>

       <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
          نوبت شماست مه صحبت کنید
          </Text>
            </CardItem>
          
          <CardItem>
            <Body >
              <Text  style={{direction:"rtl",padding:5,fontWeight:'bold',alignSelf:'flex-end',lineHeight:30,textAlign:'justify'}}>
              او انتخاب کرده است ...
              </Text>
              <Text  style={{direction:"rtl",padding:5,fontWeight:'bold',alignSelf:'flex-end',lineHeight:30,textAlign:'justify'}}>
              آن سوفی ، 34 ساله ، سرپرست بخش تبلیغات
              </Text>
              <Text  style={{direction:"rtl",padding:5,alignSelf:'flex-end',lineHeight:30,textAlign:'justify'}}>
              من در یک گروه مطبوعاتی کار میکنم ، بمدت 7 سال است. من به خوبی بر زندگی ام فائق شده ام ، 6 ماه است که سرپرست بخش
              تبلیغات یک رادیو به من پیشنهاد پست مدیریت فروش و افزایش حقوق 50 درصدی ، حقوق فعلی ام را داده است .
              من خیلی به آن فکر نکردم : من نه گفتم، اولاً من یک دختر شش ساله دارم ، من تازه ازدواج مجدد
              کرده ام و میخواهم یک فرزند دیگر داشته باشم.
              غیر ممکن است ،اگر من مدیر باشم مسئولیت های جدیدی دارم . آنجا ، من شغلی دارم که آن را دوست دارم.
              من استرس های روز اول کاری را ندارم ، من به خوبی شغلم را میدانم. من با همکارانم به خوبی کنار می آیم ، و مخصوصاً اینکه زمان
              بیشتری دارم. چگونه میتوانستم موفق بشوم اگر آن را میپذیرفتم ؟ من یک آپارتمان بزرگتر اجاره میکردم ، 
              ماشین قدیمی ام را با یک توینگو (یک مدل هاچ بک از رنو) تعویض میکردم.
              دخترم را به ورزش های زمستانی میفرستادم ، دقیقاً همین امسال او نرفته است.
              عید پاک ، او به همراه مادربزرگش به حومه شهر رفته است. و هروقت من وقت داشته باشم او را همراهی میکنم. نه من هیچ چیزی
              را از دست نمیدهم.
              </Text>
              </Body>
            </CardItem>
        </Card>
              



          </ScrollView>
      </Container>
    );
  }
}
