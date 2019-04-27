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
          <Text>L'invitation</Text>
            </CardItem>
            <CardItem>
                <Body>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>PHILIPPE :</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Allô ! Jacques, c'est Philippe </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>JACQUES :</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Salut, ça va ? </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>PHILIPPE :</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Ça va bien. Je te dérange ?</Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>JACQUES :</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Non, pas du tout. Aujourd'hui, c'est une journée calme. </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>PHILIPPE :</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Écoute, vendredi, c'est l'anniversaire de Régine.
                 J'aimerais organiser une petite fête. Tu es libre, j'espère ?</Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>JACQUES :</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Oui. Pour vendredi soir, je n'ai rien de prévu. </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>PHILIPPE :</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>C'est parfait. Est-ce que tu pourrais m'aider ?
                 Je voudrais préparer un buffet pour une douzaine de personnes, sans rien dire à Régine.
                  Vous arriverez vers sept heures et quand elle rentrera, elle nous trouvera tous à la maison. Une amie,
                   à qui j'ai déjà parlé, la retient jusqu'à sept heures, le temps de tout organiser. </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>JACQUES :</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>C'est bien, tout ça.
                 Mais ne compte pas sur moi pour préparer un dîner gastronomique ! </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>PHILIPPE :</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Mais non. Mais non ! Ce n'est pas du tout le repas que j'ai prévu.
                 Je vais commander des plats chez un traiteur.
                 Tu vas m'aider à mettre la table. Bon, je te laisse. </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>JACQUES :</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Attends, attends. Qu'est-ce que j'offre à Régine comme cadeau d'anniversaire ?
                 Qu'est-ce qui pourrait lui faire plaisir ? </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>PHILIPPE :</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Oh, je ne sais pas. Tu as toujours plein d'Idées, toi.</Text>
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
              
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              سلام ! جک فیلیپ هستم.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              جک :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              سلام ، حالت چطور است ؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              فیلیپ :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              خوب هستم ، مزاحمت هستم؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              جک :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              نه اصلاً و ابداً . امروز یک روز آرام است.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              فیلیپ :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              گوش کن . جمعه روز تولد رژین است . میخواهم یک جشن کوچک ترتیب بدهم ، وقتت آزاد است امیدوارم که اینطور باشه ؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              جک :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              بله برای جمعه شب هیچ برنامه ریزی نکردم.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              فیلیپ :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              عالیه میتونی کمکم کنی ؟ من میخام یک غذای سر دستی برای 12 نفر درست کنم. بدون اینکه هیچ چیزی به رژین بگی حدود ساعت
              7 بیا و وقتی او برمیگردد او ما را همگی در خانه میبیند
              یک دوست را که من قبلاً با او صحبت کرده ام او را تا ساعت 7 معطل میکند ، وقتشه که برنامه ریزی همه چیز را بکنیم.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              جک :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              همه اش خوبه. ولی روی من در مورد یه شام با کیفیت حساب نکن.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              فیلیپ :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              اما نه ، نه این غذایی نیست که من برنامه ریزی کردم ، من مقداری غذا از سایت سفارش میدهم . میتونی 
              تو کمکم میکنی تا من میز را بچینم ، خوب من میروم.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              جک :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              صبر کن ، صبر کن . من کادوی تولد چی برای رژین بگیرم ؟ چه چیزی خوشحالش میکند ؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              فیلیپ :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              اوه ، من نمیدونم . تو خودت همیشه ایده های زیادی داری.
              </Text>

              </Body>
              </CardItem>
              </Card>


        <Card>
          <CardItem header>
             <Icon type="FontAwesome" name="coffee"/>
             <Text>Une surprise réussie</Text>
          </CardItem>
          <CardItem>
            <Body>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>LA SECRÉTAIRE :</Text>
                <Text style={{padding:5,textAlign:'justify'}}>Tiens, Régine il y a un fax pour toi</Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>RÉGINE :</Text>
                <Text style={{padding:5,textAlign:'justify'}}>Ah ! Merci !  </Text>
                
                <Text style={{padding:5,textAlign:'justify'}}>
                À l'attention de Madame Régine Perrier
                Régine, 
                Je rentrerai tard ce soir. Le directeur veut me parler. Je ne sais pas pourquoi. 
                Je lui ai demandé si on pouvait se voir demain, ce qu'il y avait de si 
                important. Il n'a pas voulu me répondre. Je te raconterai tout ça. 
                Je suis désolé, je t'embrasse. 
                Philippe 
                </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>RÉGINE :</Text>
                <Text style={{padding:5,textAlign:'justify'}}>Tiens ! Il a oublie mon anniversaire. 
                Quelques heures après, chez Régine et Philippe. </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>EN CHŒUR  :</Text>
                <Text style={{padding:5,textAlign:'justify'}}>
                (Ils chantent.) Joyeux anniversaire, Régine !
                </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>RÉGINE :</Text>
                <Text style={{padding:5,textAlign:'justify'}}>
                Pour une surprise, c'est une surprise ! Merci, mon chéri,
                c'est merveilleux.</Text>
            </Body>
            </CardItem>
        </Card>

          
          


          

        <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
          یک غافلگیری موفقیت آمیز 
          </Text>
            </CardItem>
          
          <CardItem>
            <Body style={{flexDirection:'column',justifyContent:'space-evenly',alignItems:'flex-end'}} >
              <Text  style={{padding:5,fontWeight:'bold',}}>
              منشی :
              </Text>
              
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              رژین این را بگیر. یک فکس برای تو است.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              رژین :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              اوه ، مرسی
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',backgroundColor:'orange',lineHeight:30}}>
              قابل توجه خانم رژین پریر. رژین من امشب دیر به خانه برمیگردم. مدیر میخواهد با من صحبت کند. من نمیدانم برای چه چیزی
              او میخواهد با من صحبت کند. من ازش پرسیدم اگه میشه فردا همدیگر را ببینیم ، موضوع خیلی مهمی بود.
              او نمیخواست جواب من را بدهد. من همه چیز را به تو میگویم. من متاسفم ، تو را در آغوش میگیرم.
              فیلیپ
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              رژین :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              چرا ! او تولد من را فراموش کرده است. چند ساعت بعد رژین و فیلیپ عزیز.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              چند ساعت بعد رژین و فیلیپ عزیز 
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
             گروه کر :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
               آنها آواز میخوانند. تولدت مبارک ، رژین!
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              رژین :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              به این میشه گفت یک سورپرایز واقعی ! ممنون عزیزم ، خارق العاده اس.
              </Text>
              </Body>
              </CardItem>
              </Card>






              <Card>
          <CardItem header>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>Anniversaire et tradition </Text>
            </CardItem>
            <CardItem>
            <Body>
              <Text  style={{padding:5,textAlign:'justify',lineHeight:30}}>
              La tradition de fêter l'anniversaire n'est pas très ancienne 
              Au xixe siècle, dans la plupart des familles, on ne célébrait 
              pas l'anniversaire mais la fête du saint. Au début du xx'^^ 
              siècle, les anniversaires sont devenues des fêtes familiales. 
              Les amis n'y participent pas.
              </Text>
               <Image style={{width:'100%'}} resizeMode='stretch' source={require('../../../assets/img/lessons/lesson4/d41.png')}/>
               <Text  style={{padding:5,textAlign:'justify',lineHeight:30}}>
               Aujourd'hui, pour fêter son anniversaire, on invite souvent 
              des personnes à qui on veut montrer son amitié. En géné
              ral, pour nous remercier de notre invitation, elles nous font 
              un petit cadeau qui ne nous plaît pas toujours, mais l'es
              sentiel est de passer une bonne soirée ensemble. Pour la 
              fête d'anniversaire, il n'y a pas de repas typique, seuls le 
              gâteau et les bougies sont indispensables. 
              On ne fête pas seulement l'anniversaire de sa naissance, on 
              fête aussi les anniversaires plus ou moins importants de sa 
              vie privée ou professionnelle. Par exemple, pour les cent 
              ans de son magasin, un patron organise un grand buffet 
              auquel il convie tous ses clients. Plus modestement, un 
              employé qui a travaillé pendant dix ans dans la même entreprise fête ses dix ans de maison : il organise 
              un pot auquel il invite ses collègues. Tous les motifs sont bons : un an de conduite sans accident ou vingt
              cinq ans de mariage ! 
              Enfin, quand on a envie de voir ses amis, on fait une « petite bouffe à laquelle on les invite pour être ensemble, tout simplement. 
              </Text>
            </Body>
          </CardItem>
          </Card>



          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
          جشن روز تولد و سنت
          </Text>
            </CardItem>
          
          <CardItem>
            <Body style={{flexDirection:'column',justifyContent:'space-evenly',alignItems:'flex-end'}} > 
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
               سنت جشن گرفتن برای روز تولد خیلی قدیمی نیست. در قرن نوزدهم ، در بین اکثر خانواده ها ،
               ما جشن روز تولد برگزار نمی کردیم ولی جشن مقدس (جشنی مذهبی) را برگزار میکردیم.
               در اوایل قرن بیستم ، جشن تولدها تبدیل به جشن های خانوادگی شدند. دوستان در جشن تولد شرکت نمی کردند.
               امروزه برای برگزاری جشن تولد ، ما اغلب افرادی را دعوت میکنیم که میخواهیم دوستی خود را به او نشان دهیم.
               به طور کلی ، برای تشکر از دعوت کردن ما ، آنها هدیه ای برای ما میگیرند که ما همیشه آن را دوست نداریم.
               ولی اساساً هدف این کار گذراندن یک شب خوب دورهم است. برای جشن روز تولد ، غذای خاصی  به جز کیک و شمع های دور
               آن که ضروری هستند چیز دیگری مد نظر نیست. ما فقط روز تولد شخصی را جشن نمیگیرم ، ما همچنین
               سالگرد های خیلی مهم یا کمی مهم زندگی شخصی یا حرفه ای یک شخص را جشن میگیرم. به عنوان مثال سالگرد صد سالگی یک مغازه ، 
               یک سر آشپز که یک وعده غذایی بزرگ را برای مشتریانش درست میکند ، متواضع تر اینکه یک کارمند که بمدت 10 سال را در یک شرکت کار
               میکند جشن ده سالگی بودن در شرکت (خانه) را جشن میگیرد. او غذایی را درست میکند و همکارانش را دعوت میکند.
               تمام این دلایل خوب هستند. یک سال رانندگی بدون تصادف یا 25 سال زندگی مشترک!
               در پایان ، زمانی که ما تمایل داریم که دوستانمان را ببینیم ، یک وعده غذایی مختصر 
               برای کسانی که دعوت میکنیم تا در کنار هم باشیم درست میکنیم ، کاملاً ساده.
              </Text>
              </Body>
              </CardItem>
              </Card>
              




          </ScrollView>
      </Container>
    );
  }
}
