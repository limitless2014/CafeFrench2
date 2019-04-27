import React, { Component } from 'react';
import {Image} from 'react-native'
import { Container,Text, Card, CardItem, Header, Icon, Left, Body, Right, Button, StyleProvider  } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/platform';



export default class D1 extends Component {
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
          <Text>Les Francofolies</Text>
            </CardItem>
          <CardItem>
            <Body>
              <Text  style={{padding:5,textAlign:'justify',lineHeight:30}}>
              Tous Les ans,au mois de juillet,le festival de la chanson francophone,les FrancoFolies,réunit à La Rochelle des artistes que tous le monde connaît et des jeunes qui débutent.
              Le public qu'on y rencontre est jeune et international. Plus de 100 000 personnes assistent aux différents spectacles.
              Tous les styles musicaux sont présents. c'est la féte dans toute la ville pendent une semaine.
              </Text>
              
               <Image style={{width:'100%'}} resizeMode='stretch' source={require('../../../assets/img/lessons/lesson1/d1.png')}/>
            </Body>
          </CardItem>
          </Card>
          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>فرانکوفولیها (نام یک فستیوال موسیقی)
          </Text>
            </CardItem>
          

          <CardItem>
            <Body>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              هرساله در ماه ژوئیه طرفداران فستیوال موسیقی فرانسوی زبانان به نام فرانکوفولیها  در شهر روشل گرد هم می آیند. عموم مردمی که در آنجا گرد هم می آیند جوان و از ملتهای مختلف هستند. بالای 100 هزار نفر در قسمتهای مختلف این فستیوال مثل تئاتر سینما و ... شرکت میکنند تمام استایلهای موسیقی اجرا میشوند. این جشن در سراسر شهر بمدت یک هفته برگزار میشود.
              </Text>
            </Body>
          </CardItem>

          </Card>
          








          <Card>
          <CardItem header>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>Le groupe indochaine</Text>
            </CardItem>
          <CardItem>
            <Body>
              <Text  style={{padding:5,textAlign:'justify',lineHeight:30}}>
              ils chantent depuis plus de dix ans. Le groupe indochaine participe toujours aux Francofolies. Notre journaliste y a rencontré Nicola,Stephane et Domenique.
              </Text>
               <Image style={{width:'100%'}} resizeMode='stretch' source={require('../../../assets/img/lessons/lesson1/d2.png')}/>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>La journaliste:</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Comment avez-vous découvert la musique rock?</Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>Nicola:</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Moi,j'ai vécu en belgique pendent dix ans, de 3 à 13 ans. Et Stephane est né en belgique.À la maison, on écoutait du rock à la radio anglaise.</Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>Dominique:</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Vers 17 ans, nous avons achéte des instruments, et nous avons appris à jouer seuls. on s'amusait à limiter les autres.</Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>La journaliste:</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Où trouvez-vous l'inspiration pour écrire vos chansons?</Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>Dominique:</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>C'est Nicola qui écrit les paroles.</Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>Nicola:</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Je me proméne toujours avec un carnet sur moi. je note des phrases, des mots que j'entends dans la rue, à la télé, que je lis dans les livres.</Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>La journaliste:</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Pourquoi vous appelez-vous Indochaine?</Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>Nicola:</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Nous avons écrit des noms sur une feuille de papier ... et c'est Indochaine que nous avons choisi.</Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>Stephane:</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Quand on était enfant, on voyait des images de la guerre du Viêt-Nam à la télévision.Et puis, on a toujours aimé l'Extrême-orient.</Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>Dominique:</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Aprés nos premiers succés, les profs d'histoire nous ont beaucoup critiqués. C'est le nom qu'ils n'aiment pas . Tu sais, quand ils posent des questions sur l'indochaine, les élèves leur répondent que c'est un groupe rock!</Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>La journaliste:</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Aimez-vous votre métier ?</Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>Nicola:</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>On l'adore! C'est le métier que nous avons choisi. Mais c'est un métier difficile. il faut être fort pour tenir.</Text>
            </Body>
          </CardItem>
          </Card>
          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>گروه موسیقی اندوشن
          </Text>
          
            </CardItem>
          <CardItem >
            <Body style={{flexDirection:'column',justifyContent:'space-evenly',alignItems:'flex-end'}} >
            <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
          آنها به مدت 10 سال است که مشغول نوازندگی هستند. گروه موسیقی اندوشن همیشه در فستیوال موسیقی فرانکوفولیها شرکت میکنند. خبرنگار ما به ملاقات نیکلا ، استفانی و دومنیک رفته است .
          </Text>
             
              
              <Text  style={{padding:5,fontWeight:'bold',}}>
              خبرنگار :
              </Text>
              
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              شما چگونه با موسیقی راک آشنا شدید ؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              نیکلا :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              خودم ، بمدت 10 سال در بلژیک زندگی میکردم از سه سالگی تا 13 سالگی . و استفانی در بلژیک متولد شده است. توی خونه ، ما به موسیقی راک از یک رادیوی انگلیسی گوش میکردیم.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              دومنیک :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              حدود 17 سال از زمانی که ما وسایل موسیقی را خریده ایم میگذرد ، موسیقی نواختن را خودمان به تنهایی یاد گرفتیم. ما خودمان را با تقلید از دیگران سرگرم میکردیم.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              شما برای نوشتن اشعار آهنگ هایتان از کجا الهام گرفتید؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              دومنیک :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              نیکلا تمام اشعار آهنگ ها را نوشته است.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              نیکلا :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              من همیشه به پیاده روی میرفتم و یک دفترچه یادداشت همراهم بود. جمله ها ،کلماتی که در خیابان و تلویزیون میشنوم ، کلماتی که در کتابها میخوانم را یادداشت میکردم
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              چرا شما را گروه اندوشن می نامند؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              نیکلا :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              ما اسم های منتخب را روی یک برگه کاغذی نوشتیم ... و سرانجام اندوشن را انتخاب کردیم.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              استفانی :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              زمانی که ما بچه بودیم . ما تصاویری از جنگ ویتنام را در تلویزیون دیدیم و پس از آن ما همیشه عاشق کشورهای شرق دور بودیم.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              دومنیک :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              بعد از اولین موفقیتمان ، پروفسورهای تاریخ انتقاد زیادی از ما کردند. این اسم را آنها دوست ندارند. میدونی وقتی که آنها درمورد اندوشن سوال میکنند دانشجویان به آنها جواب میدهند که اندوشن یک گروه موسیقی راک است!
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              آیا شما حرفه خود را دوست دارید؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              نیکلا :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              ما عاشقش هستیم! این حرفه ای است که ما انتخابش کردیم ولی یک حرفه سخت است برای دوام آوردن در این حرفه باید قوی باشید.
              </Text>
            </Body>
          </CardItem>
          </Card>







          <Card>
          <CardItem header>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>Les Français se mettent à chanter</Text>
            </CardItem>
          <CardItem>
            <Body>
              <Text  style={{padding:5,textAlign:'justify',lineHeight:30}}>
              Bonne nouvelle ! Depuis quelques années, les Français découvrent le plaisir du chant, seuls ou en groupe.
              Le chanteur de salle de bains sort de chez lui. Les chorales se développent partout, en ville et à la campagne.
               lia chorale « Les voisins du dessus » est née il y a trois ans.
                Jean-Claude Nardi, musicien, s'est mis à chanter avec sa voisine du dessus, Solène.
                 Solène en a parlé à une autre voisine, Danièle... Incroyable,
                  mais vrai ! Le chœur a déjà chanté dans un théâtre parisien et enregistré un CD.
                   Aujourd'hui « Les voisins du dessus » sont 90. Certains viennent de province pour deux heures de répétition.
                    Quand les relations entre les gens sont difficiles, la chanson aide à créer des liens : « Toute la journée,
                     je suis stressé au travail et, le dimanche, je me sens seul. Alors je ne manque jamais la répétition du lundi soir »,
                      dit Franck, informaticien. 
              </Text>
              
               <Image style={{width:'100%'}} resizeMode='stretch' source={require('../../../assets/img/lessons/lesson1/d3.png')}/>
            </Body>
          </CardItem>
          </Card>
          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
          فرانسویها شروع به آواز خواندن میکنند  
          </Text>
            </CardItem>
          

          <CardItem>
            <Body>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              خبرهای خوب! طی چند سال اخیر فرانسوی ها لذت آواز خواندن را به صورت تکی یا گروهی کشف کرده اند ،
               . کسی که در حمام آواز میخواند درحال آواز خواندن از خانه اش خارج میشود.
                گروه های کُر در همه جا گسترش میابند در شهر و حومه شهر. گروه کر همسایه های طبقه بالا سه سال است که به وجود آمده است ، 
                ژان کلاد نردی موزیسینی است که همراه همسایه طبقه بالایی اش (سولن) شروع به خوانندگی کردند .
                 سولن با همسایه دیگری در این مورد حرف زد دنیل ... خارق العاده است ،
                  اما واقعی! گروه کُر قبلاً در یک تئاتر پاریسی اجرا داشته است و یک لوح فشرده نیز رکورد کرده است. 
                  امروزه گروه کر همسایه های طبقه بالا 90 نفر هستند . برخی از مرکز استان برای دو ساعت تمرین می آیند.
                   زمانی که ایجاد ارتباط بین مردم سخت است ، ، آهنگ به ایجاد ارتباط بین مردم کمک کرده است.
                    تمام طول روز ، سرکار استرس داشتم و روز یکشنبه احساس تنهایی کردم. 
                    اگرچه هرگز تمرین دوشنبه شب را از دست نمیدهم ، نقل قول از فرانک ، متخصص کامپیوتر.
              </Text>
            </Body>
          </CardItem>

          </Card>




          <Card>
          <CardItem header>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>Le festival de Sully</Text>
            </CardItem>
          <CardItem>
            <Body>
              <Text  style={{padding:5,textAlign:'justify',lineHeight:30}}>
              Tous les ans, pendant les week-ends du mois 
              de juin, le festival de Sully réunit depuis plus 
              de 20 ans des interprètes connus qui viennent 
              du monde entier Tous les styles y ont leur 
              place : musique ancienne, classique ou 
              contemporaine, opéra, jazz, chanson... Le 
              public vient de tous les pays pour écouter 
              l'Orchestre national de Lille ou l'orchestre du Capitole (de Toulouse), 
              Barbara Hendricks, Ray Charles ou Claude Nougaro
              </Text>
               <Image style={{width:'100%'}} resizeMode='stretch' source={require('../../../assets/img/lessons/lesson1/d4.png')}/>
            </Body>
          </CardItem>
          </Card>
          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
          فستیوال سالی  
          </Text>
            </CardItem>
              <CardItem >
            <Body style={{flexDirection:'column',justifyContent:'space-evenly',alignItems:'flex-end'}} >
            <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
            فستیوال بین المللی موسیقی کلاسیک که هرسال در ماه می و ژانویه در شهر sully sur loire و داخل چندین شهر دیگر برگزار میشود
           
          </Text>
          </Body>
           </CardItem>
          <CardItem>
            <Body>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              هر سال در طول آخر هفته های ماه ژوئن بیش از 20 سال است که فستیوال سالی با مشارکت خوانندگان شناخته شده موسیقی درام از تمام دنیا
              برگزار میشود . تمام سبک های موسیقی جایگاه مخصوص خودشان را در آنجا دارند : موسیقی باستانی ، کلاسیک ، معاصر ، اپرا ، جاز و ...
              عموم مردم از کشورهای مختلف می آیند تا به موسیقی ارکستر ملی لیل (شهری در فرانسه)
              یا ارکستر ملی پایتخت (تولوز) ، باربارا چارلز ، ری چارلز یا کلاد نوگرو گوش دهند
              </Text>
            </Body>
          </CardItem>

          </Card>
          </ScrollView>
      </Container>
    );
  }
}
