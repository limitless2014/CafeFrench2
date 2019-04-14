import React, { Component } from 'react';
import {Image} from 'react-native'
import { Container,Text, Card, CardItem, Header, Icon, Left, Body, Right, Button, View,  } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';



export default class D1 extends Component {
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
          <Text>Les Francofolies</Text>
            </CardItem>
          <CardItem>
            <Body>
              <Text  style={{padding:5,textAlign:'justify'}}>
              Tous Les ans,au mois de juillet,le festival de la chanson francophone,les FrancoFolies,réunit à La Rochelle des artistes que tous le monde connaît et des jeunes qui débutent.
              Le public qu'on y rencontre est jeune et international. Plus de 100 000 personnes assistent aux différents spectacles.
              Tous les styles musicaux sont présents. c'est la féte dans toute la ville pendent une semaine.
              </Text>
              
               <Image style={{width:'100%'}} source={require('../../../assets/img/lessons/lesson1/d1.png')}/>
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
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
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
              <Text  style={{padding:5,textAlign:'justify'}}>
              ils chantent depuis plus de dix ans. Le groupe indochaine participe toujours aux Francofolies. Notre journaliste y a rencontré Nicola,Stephane et Domenique.
              </Text>
               <Image style={{width:'100%'}} source={require('../../../assets/img/lessons/lesson1/d2.png')}/>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>La journaliste:</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Comment avez-vous découvert la musique rock?</Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>Nicola:</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Moi,j'ai vécu en belgique pendent dix ans, de 3 à 13 ans. Et Stephane est né en belgique.À la maison, on écoutait du rock à la radio anglaise.</Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>Dominique:</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Vers 17 ans, nous avons achéte des instruments, et nous avons appris à jouer seuls. on s'amusait à limiter les autres.</Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>La journaliste:</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Où trouvez-vous l'inspiration pour écrire vos chansons?</Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>Dominique:</Text>
               <Text style={{padding:5,textAlign:'justify'}}>C'est Nicola qui écrit les paroles.</Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>Nicola:</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Je me proméne toujours avec un carnet sur moi. je note des phrases, des mots que j'entends dans la rue, à la télé, que je lis dans les livres.</Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>La journaliste:</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Pourquoi vous appelez-vous Indochaine?</Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>Nicola:</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Nous avons écrit des noms sur une feuille de papier ... et c'est Indochaine que nous avons choisi.</Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>Stephane:</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Quand on était enfant, on voyait des images de la guerre du Viêt-Nam à la télévision.Et puis, on a toujours aimé l'Extrême-orient.</Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>Dominique:</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Aprés nos premiers succés, les profs d'histoire nous ont beaucoup critiqués. C'est le nom qu'ils n'aiment pas . Tu sais, quand ils posent des questions sur l'indochaine, les élèves leur répondent que c'est un groupe rock!</Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>La journaliste:</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Aimez-vous votre métier ?</Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>Nicola:</Text>
               <Text style={{padding:5,textAlign:'justify'}}>On l'adore! C'est le métier que nous avons choisi. Mais c'est un métier difficile. il faut être fort pour tenir.</Text>
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
            <Body style={{direction:'rtl'}}>
            <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
          آنها به مدت 10 سال است که مشغول نوازندگی هستند. گروه موسیقی اندوشن همیشه در فستیوال موسیقی فرانکوفولیها شرکت میکنند. خبرنگار ما به ملاقات نیکلا ، استفانی و دومنیک رفته است .
          </Text>
              
              <Text  style={{padding:5,fontWeight:'bold',}}>
              خبرنگار :
              </Text>
              
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              شما چگونه با موسیقی راک آشنا شدید ؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              نیکلا :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              خودم ، بمدت 10 سال در بلژیک زندگی میکردم از سه سالگی تا 13 سالگی . و استفانی در بلژیک متولد شده است. توی خونه ، ما به موسیقی راک از یک رادیوی انگلیسی گوش میکردیم.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              دومنیک :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              حدود 17 سال از زمانی که ما وسایل موسیقی را خریده ایم میگذرد ، موسیقی نواختن را خودمان به تنهایی یاد گرفتیم. ما خودمان را با تقلید از دیگران سرگرم میکردیم.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              شما برای نوشتن اشعار آهنگ هایتان از کجا الهام گرفتید؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              دومنیک :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              نیکلا تمام اشعار آهنگ ها را نوشته است.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              نیکلا :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              من همیشه به پیاده روی میرفتم و یک دفترچه یادداشت همراهم بود. جمله ها ،کلماتی که در خیابان و تلویزیون میشنوم ، کلماتی که در کتابها میخوانم را یادداشت میکردم
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              چرا شما را گروه اندوشن می نامند؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              نیکلا :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              ما اسم های منتخب را روی یک برگه کاغذی نوشتیم ... و سرانجام اندوشن را انتخاب کردیم.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              استفانی :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              زمانی که ما بچه بودیم . ما تصاویری از جنگ ویتنام را در تلویزیون دیدیم و پس از آن ما همیشه عاشق کشورهای شرق دور بودیم.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              دومنیک :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              بعد از اولین موفقیتمان ، پروفسورهای تاریخ انتقاد زیادی از ما کردند. این اسم را آنها دوست ندارند. میدونی وقتی که آنها درمورد اندوشن سوال میکنند دانشجویان به آنها جواب میدهند که اندوشن یک گروه موسیقی راک است!
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              آیا شما حرفه خود را دوست دارید؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              نیکلا :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              ما عاشقش هستیم! این حرفه ای است که ما انتخابش کردیم ولی یک حرفه سخت است برای دوام آوردن در این حرفه باید قوی باشید.
              </Text>
              
            </Body>
          </CardItem>

          </Card>
          </ScrollView>
      </Container>
    );
  }
}
