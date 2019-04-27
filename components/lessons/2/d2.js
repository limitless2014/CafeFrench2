import React, { Component } from 'react';
import {Image} from 'react-native'
import { Container,Text, Card, CardItem, Header, Icon, Left, Body, Right, Button,StyleProvider  } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/platform';


export default class D2 extends Component {
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
          <Text>On se connaît ? </Text>
            </CardItem>
          <CardItem>
            <Body>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BRUNO:</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Pardonnez-moi, mademoiselle, pardonnez-moi, je vous ai vue... je voudrais... </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>ARLETTE:</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Vous êtes perdu ? Vous cherchez votre chemin, peut-être ?</Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BRUNO:</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Oh non, pas du tout, je suis du quartier. </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>ARLETTE:</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Bon alors, au revoir, monsieur.</Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BRUNO:</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Attendez, ne partez pas. J'étais en train de lire le journal à la terrasse du café quand je vous al vue.
                Je vous al reconnue tout de suite. </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>ARLETTE:</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Pas mol. Je ne vous ai jamais vu. Au revoir, monsieur. </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BRUNO:</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Mais écoutez-moi. Vous ne vous rappelez pas ?
               ... L'été dernier, à La Rochelle, aux Francofolies ? </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>ARLETTE:</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>À La Rochelle ? Vous vous trompez, monsieur. Au revoir. Je suis pressée.</Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BRUNO:</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Mais ne partez pas comme ça. Diles-mol quand je peux vous revoir, ce soir, demain...</Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>ARLETTE:</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Lalsscz-mol tranquille, monsieur.</Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BRUNO:</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Mais enfin ! Ne me dites pas que vous ne voulez pas me revoir... </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>ARLETTE:</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Ça suffit !</Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BRUNO:</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Ne VOUS fâchez pas ! </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>ARLETTE:</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Bon ! Vous avez besoin de parler à quelqu'un ? Voici le numéro de téléphone et l'adresse de SOS-amitié :
                 appelez-les ou écrivez-leur, mais ne m'embêtez pas ! </Text>
            </Body>
          </CardItem>
          </Card>
          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
            آیا ما همدیگر را میشناسیم ؟
          </Text>
          
            </CardItem>
          <CardItem >
            <Body style={{flexDirection:'column',justifyContent:'space-evenly',alignItems:'flex-end'}} >
              
              <Text  style={{padding:5,fontWeight:'bold',}}>
              برونو :
              </Text>
              
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              ببخشید خانم ببخشید .من شما را قبلاً دیده ام ؟ من ...
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              آرلت :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
               شما گم شده اید ؟ شما دنبال آدرستون میگردید شاید ؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              برونو :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              اوه نه . اصلاً و ابداً من اهل این محل هستم.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              آرلت :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
               بسیارخب ، خداحافظ آقا.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              برونو :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
               صبرکنید ، نروید من زمانی شما را دیدم که داشتم در تراس کافه روزنامه میخواندم. من شما را سریع شناختم
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              آرلت :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              من که کسی را ندیدم ، من هرگز شما را ندیده ام. خداحافظ آقا.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              برونو :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              ولی به من گوش کنید. شما به خاطر نمیارید ؟ ... شب گذشته در غوشل ، فستیوال فرانکوفولی ؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              آرلت :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
               در غوشل ؟ شما اشتباه میکنید آقا. خداحافظ. من عجله دارم. 
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              برونو :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              ولی اینجوری اینجا را ترک نکنید. به من بگویید کی شما را دوباره میتوانم ببینم امشب ، فردا ...
               </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              آرلت :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              ولم کنید آقا.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              برونو :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              ولی آخرش ! به من نگویید که شما نمیخواهید مرا دوباره ببینید ... 
               </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              آرلت :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
                کافیه (بسه)!
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              برونو :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              عصبانی نشوید!
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              آرلت :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              خب ! شما احتیاج داریدکه با یک نفر صحبت کنید ؟ بفرمایید این شماره و آدرس فوریتهای پزشکی : به آنها زنگ بزنید یا نامه بنویسید اما مزاحم من نشوید!
              </Text>
            </Body>
          </CardItem>
          </Card>





          <Card>
          <CardItem header>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>Pause de midi à la brasserie </Text>
            </CardItem>
          <CardItem>
            <Body>
            <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BERNARD :</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Pardon, mademoiselle, cette place est libre ? Je peux m'asseoir ? </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>CHANTAL :</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Oui, bien sûr. </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BERNARD :</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Il y a un monde fou, aujourd'hui. Vous êtes du quartier ?  </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>CHANTAL :</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Non, mais je ne travaille pas loin d'ici.   </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BERNARD :</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Vous mangez régulièrement dans ce restaurant ?  </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>CHANTAL :</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Non, c'est la première fois.  </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BERNARD :</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Je peux vous offrir quelque chose ? Qu'est-ce que vous voulez ? </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>CHANTAL :</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Mais rien ! Monsieur, l'addition, s'il vous plaît ! </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BERNARD :</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Vous partez déjà ? </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>CHANTAL :</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Oui, je reprends le travail dans 10 minutes </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>LE GARÇON :</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Voilà, ça fait 76 F. </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BERNARD :</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Dommage. Vous revenez demain ?  </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>CHANTAL :</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Pardon ? Je n'ai pas entendu.  </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BERNARD :</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Je vous demande si vous revenez demain. </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>CHANTAL :</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Non. Je ne travaille pas demain. La semaine prochaine peut-être. </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BERNARD :</Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>Alors, à la semaine prochaine </Text>
            </Body>
          </CardItem>
          </Card>

          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
          ناهار در آبجو فروشی
          </Text>
          
            </CardItem>
          <CardItem >
            <Body style={{flexDirection:'column',justifyContent:'space-evenly',alignItems:'flex-end'}} >
              
              <Text  style={{padding:5,fontWeight:'bold',}}>
              برنارد :
              </Text>
              
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              ببخشید خانم ، اینجا خالی است ؟ میتونم بشینم ؟
               </Text>
               <Text  style={{padding:5,fontWeight:'bold',}}>
              چانتال :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              بله البته.
               </Text>
               <Text  style={{padding:5,fontWeight:'bold',}}>
              برنارد :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              دنیای خرابیه امروز شما توی محله بودید ؟ 
               </Text>
               <Text  style={{padding:5,fontWeight:'bold',}}>
              چانتال :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              نه اما محل کارم از اینجا دور نیست. 
               </Text>
               <Text  style={{padding:5,fontWeight:'bold',}}>
              برنارد :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              شما معمولاً داخل این رستوران غذا میخورید ؟ 
               </Text>
               <Text  style={{padding:5,fontWeight:'bold',}}>
              چانتال :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              نه اولین بار است که اینجا غذا میخورم. 
               </Text>
               <Text  style={{padding:5,fontWeight:'bold',}}>
              برنارد :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              میتونم به شما چیزی پیشنهاد کنم ؟ شما چی میل دارید ؟ 
               </Text>
               <Text  style={{padding:5,fontWeight:'bold',}}>
              چانتال :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
               هیچی ! آقا ، صورتحساب لطفاً!
                </Text>
                <Text  style={{padding:5,fontWeight:'bold',}}>
              برنارد :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              شما داشتید میرفتید ؟  
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              چانتال :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              بله تا 10 دقیقه دیگه باید سرکار برگردم  .
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              گارسون :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              بفرمایید . صورتحساب شما 76 فرانک میشود .
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              برنارد :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              حیف شد. شما فردا برمیگردید ؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              چانتال :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              ببخشید صداتون را نشنیدم
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              برنارد :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
               پرسیدم فردا دوباره می آیید.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              چانتال :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              نه من فردا کار نمیکنم. هفته آینده شاید.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              برنارد :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              پس تا هفته آینده.
               </Text>
              </Body>
              </CardItem>
            </Card>



            <Card>
          <CardItem header>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>Le courrier du cœur </Text>
            </CardItem>
            <CardItem>
            <Body>
              <Text  style={{padding:5,textAlign:'justify',lineHeight:30}}>
              J'aime mon voisin du dessus. Il ne sait rien de mes sentiments.
               II a 36 ans, il est informaticien. J'en ai 22 et je vais à la fac.
               Je n'ose pas lui parler ouvertement. Qu'est-ce que je dois faire ?
               Comment est-ce que je peux engager la conversation ? Est-ce que je ne suis pas trop jeune pour lui ?
               Qu'est-ce qui l'intéresse ? Je ne sais rien de lui. Mes amies me donnent des conseils.
               Annick me conseille d'inventer une histoire pour attirer son attention.
               Françoise, elle, pense que c'est lui qui doit faire le premier pas. Mais je n'ai pas envie d'attendre... Je ne pen.
               se qu'à lui : je suis très malheureuse. Dites-moi ce que je dois faire. 
               ALICE 
              </Text>
               <Image style={{width:'100%'}} resizeMode='stretch' source={require('../../../assets/img/lessons/lesson2/d21.png')}/>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text  style={{padding:5,textAlign:'justify',lineHeight:30}}>
              Le journaliste répond : Votre situation est peut-être plus simple que vous le pensez.
              Ne vous demandez pas si vous êtes trop jeune, ce qui l'intéresse...
               Inventez plutôt un problème d'ordinateur et demandezlui de vous aider.
                Vous pourrez lut offrir l'apéritif pour le remercier et vous verrez bien s'il vous invitera ensuite au restaurant ou au cinéma...
              </Text>
            </Body>
          </CardItem>
          </Card>


          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
          نامه عاشقانه  
          </Text>
            </CardItem>
          <CardItem>
            <Body>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
               من همسایه پایینی ام را دوست دارم . او هیچ چیز درباره به احساسات من نمیداند.
               او 36 سال سن دارد و متخصص کامپیوتر است. من 22 سال سن دارم و به دانشگاه میروم. من جرات نمیکنم آزادانه با او صحبت کنم.
               من چه کاری باید انجام دهم ؟ چگونه میتوانم با او سر صحبت را باز کنم ؟
               آیا من خیلی جوان برای او نیستم ؟ او از چه کسی خوشش می آید ؟ من هیچ چیز از او نمیدانم.
               دوستان من مرا راهنمایی میکنند. آنیک به من پیشنهاد داد تا یک داستان سر هم کنم تا توجه او را جلب کنم. 
               فرانسوا معتقد است که او باید اولین قدم را بردارد
               من نمیخواهم صبر کنم ... من فقط به او فکر میکنم : من خیلی ناراحت هستم. به من بگو چه کاری انجام دهم؟
              </Text>

            </Body>
          </CardItem>
          <CardItem>
            <Body>       
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              خبرنگار پاسخ میدهد : وضعیت شما ساده تر از آن است که تصور میکنید از خودتان نپرسید که خیلی جوان هستید یا از چه کسی خوشتان می آید.
               به طریقی یک مشکل برای کامپیوتر خود به وجود بیاورید و از او کمک بخواهید. میتوانید به او نوشیدنی به منظور تشکر پیشنهاد دهید
               و شما خواهید دید که او در اسرع وقت شما را به رستوران یا سینما دعوت خواهد کرد.
              </Text>
            </Body>
          </CardItem>
          </Card>




          </ScrollView>
      </Container>
    );
  }
}
