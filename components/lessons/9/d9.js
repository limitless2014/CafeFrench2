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
          <Text>Micro-trottoir : Les Français et le cinéma </Text>
            </CardItem>
            <CardItem>
                <Body>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LA JOURNALISTE :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Je suis sur les grands boulevards. Les gens font la queue devant les cinémas. Monsieur, pourquoi allez-vous au cinéma ? 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                PERSONNE A :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Les loisirs, pour moi, c'est le cinéma. Je vais au cinéma pour rire, pour pleurer, pour partager mes sentiments avec des inconnus, avec des gens comme moi.
                 Je m'étonne toujours que beaucoup préfèrent rester assis seuls devant la télévision.   
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LA JOURNALISTE :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Et vous ? 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                PERSONNE B :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                C'est la sortie idéale quand on est avec des copains, mais j'aime la télé aussi. C'est moins cher.  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LA JOURNALISTE :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                C'est parce que le cinéma est trop cher que les gens y vont de moins en moins ? 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                PERSONNE C :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Je ne crois pas que ce soit la raison, et aujourd'hui, avec toutes les réductions, le cinéma ne coûte pas trop cher. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LA JOURNALISTE : 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Madame, à votre avis, pourquoi est-ce qu'on va moins au cinéma qu'avant ? 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                PERSONNE D :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Peut-être par paresse. Avec la télévision et le magnétoscope,
                 c'est beaucoup plus simple : il n'y a pas d'horaire, il y a beaucoup plus de choix... Personnellement,
                  je préfère le cinéma, l'ambiance de la salle, la lumière qui s'éteint la musique,
                   les premières images sur l'écran. C'est magique. Et pendant deux heures, j'oublie tout. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LA JOURNALISTE :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Et vous ? 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                PERSONNE E :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                J'adore les films comiques, et je regrette que les gens n'aillent pas plus souvent voir les nouveaux films.
                 Ça leur ferait du bien, ils seraient moins tristes. À la télé, ce n'est pas pareil,
                  et on ne s'amuse pas autant. Il faut que j'aille au cinéma au moins une fois par mois. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LA JOURNALISTE :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Est-ce qu'il est important pour vous qu'un film soit français ? 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                PERSONNE F : 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Avant tout, il est important que le film soit bon ! J'aime bien le cinéma français,
                 bien sûr, et nous avons de grands acteurs, mais j'aime aussi les films américains ou italiens, par exemple. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LA JOURNALISTE :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                En tout cas. si la télévision se porte bien, le cinéma n'est pas mort !
                 C'était Sophie, en direct des grands boulevards. À vous les studios. 
                </Text>
                












                </Body>
            </CardItem>
          </Card>

       <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
          صدای مردم : فرانسوی ها و سینما
          </Text>
            </CardItem>
          
          <CardItem>
            <Body >
            <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              من در گراند بولوار (بلواری در پاریس) هستم . مردم دم در سینماها صف کشیده اند. آقا شما چرا به سینما میروید ؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              شخص اول :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              تفریح من سینما است . من به سینما میروم تا بخندم ، تا گریه کنم ، تا احساساتم را با غریبه ها به اشتراک بگذارم.
              ، تا احساساتم را با افرادی مثل خودم به اشتراک بگذارم
              در عجبم که بسیاری از مردم همیشه ترجیح میدهند تا به تنهایی پای تلویزیون بنشینند.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
              و نظر شما در باره این موضوع چیست ؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              شخص دوم :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              جای ایده آلی برای بیرون رفتن به همراه دوستان است . ولی من تلویزیون را نیز دوست دارم. کم هزینه تر است.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
              آیا بدلیل اینکه سینما خیلی گران است مردم کمتر و کمتر به آنجا میروند ؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              شخص سوم :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              من فکر نمیکنم که به این دلیل است. و امروزه با تمام کاهش قیمتهایی که انجام میشود. سینما خیلی گران نیست.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
              خانم ، به نظر شما چرا ما کمتر نسبت به قبل به سینما میرویم ؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              شخص چهارم :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              میتونه ناشی از تنبلی ما باشه ، با تلویزیون و دستگاه ضبط ویدیو خیلی راحت تر است :
              برنامه زمانی وجود ندارد. انتخاب های بسیار بیشتری وجود دارد ... شخصاً سینما را ترجیح میدهم ، جو سالن سینما ، نورپردازی،
              موسیقی ، اولین تصاویری که اکران میشود. جادویی است و بعد از 2 ساعت همه چیز را فراموش میکنم.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
              و نظر شما در باره این موضوع چیست ؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              شخص پنجم :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              من عاشق فیلمهای کمدی هستم ، من از این که مردم اغلب به سینما نمیروند تا فیلمهای جدید را ببینند احساس تاسف میکنم.
              این کار حال آنها را خوب میکند ، ناراحتیشان کمتر میشود. تلویزیون مثل سینما نیست . ما را به اندازه سینما سرگرم نمیکند.
              من باید دست کم ماهی یکبار به سینما بروم.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
              آیا برای شما مهم است که فیلم فرانسوی باشد ؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              شخص ششم :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              اول از همه ، این مهم است که فیلم خوب باشد ! من سینمای فرانسه را خیلی دوست دارم. مطمئناً ، ما بازیگران بزرگی داریم
              ولی من  برای مثال فیلمهای آمریکایی و ایتالیایی را نیز دوست دارم.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              در هرصورت ، اگر تلویزیون کارش  را خوب انجام دهد ، سینما از بین نمیرود! سوفی هستم به صورت زنده از گراند بولوار .
              به استودیو برمیگردیم.
              </Text>
              </Body>
            </CardItem>
        </Card>
              



          </ScrollView>
      </Container>
    );
  }
}
