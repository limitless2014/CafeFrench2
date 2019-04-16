import React, { Component } from 'react';
import {Image} from 'react-native'
import { Container,Text, Card, CardItem, Header, Icon, Left, Body, Right, Button,  } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';



export default class D2 extends Component {
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
          <Text>On se connaît ? </Text>
            </CardItem>
          <CardItem>
            <Body>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BRUNO:</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Pardonnez-moi, mademoiselle, pardonnez-moi, je vous ai vue... je voudrais... </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>ARLETTE:</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Vous êtes perdu ? Vous cherchez votre chemin, peut-être ?</Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BRUNO:</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Oh non, pas du tout, je suis du quartier. </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>ARLETTE:</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Bon alors, au revoir, monsieur.</Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BRUNO:</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Attendez, ne partez pas. J'étais en train de lire le journal à la terrasse du café quand je vous al vue.
                Je vous al reconnue tout de suite. </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>ARLETTE:</Text>
                <Text style={{padding:5,textAlign:'justify'}}>Pas mol. Je ne vous ai jamais vu. Au revoir, monsieur. </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BRUNO:</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Mais écoutez-moi. Vous ne vous rappelez pas ?
               ... L'été dernier, à La Rochelle, aux Francofolies ? </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>ARLETTE:</Text>
                <Text style={{padding:5,textAlign:'justify'}}>À La Rochelle ? Vous vous trompez, monsieur. Au revoir. Je suis pressée.</Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BRUNO:</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Mais ne partez pas comme ça. Diles-mol quand je peux vous revoir, ce soir, demain...</Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>ARLETTE:</Text>
                <Text style={{padding:5,textAlign:'justify'}}>Lalsscz-mol tranquille, monsieur.</Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BRUNO:</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Mais enfin ! Ne me dites pas que vous ne voulez pas me revoir... </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>ARLETTE:</Text>
                <Text style={{padding:5,textAlign:'justify'}}>Ça suffit !</Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BRUNO:</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Ne VOUS fâchez pas ! </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>ARLETTE:</Text>
                <Text style={{padding:5,textAlign:'justify'}}>Bon ! Vous avez besoin de parler à quelqu'un ? Voici le numéro de téléphone et l'adresse de SOS-amitié :
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
              
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              ببخشید خانم ببخشید .من شما را قبلاً دیده ام ؟ من ...
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              آرلت :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
               شما گم شده اید ؟ شما دنبال آدرستون میگردید شاید ؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              برونو :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              اوه نه . اصلاً و ابداً من اهل این محل هستم.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              آرلت :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
               بسیارخب ، خداحافظ آقا.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              برونو :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
               صبرکنید ، نروید من زمانی شما را دیدم که داشتم در تراس کافه روزنامه میخواندم. من شما را سریع شناختم
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              آرلت :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              من که کسی را ندیدم ، من هرگز شما را ندیده ام. خداحافظ آقا.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              برونو :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              ولی به من گوش کنید. شما به خاطر نمیارید ؟ ... شب گذشته در غوشل ، فستیوال فرانکوفولی ؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              آرلت :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
               در غوشل ؟ شما اشتباه میکنید آقا. خداحافظ. من عجله دارم. 
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              برونو :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              ولی اینجوری اینجا را ترک نکنید. به من بگویید کی شما را دوباره میتوانم ببینم امشب ، فردا ...
               </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              آرلت :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              ولم کنید آقا.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              برونو :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              ولی آخرش ! به من نگویید که شما نمیخواهید مرا دوباره ببینید ... 
               </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              آرلت :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
                کافیه (بسه)!
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              برونو :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              عصبانی نشوید!
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',fontWeight:'bold'}}>
              آرلت :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
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
               <Text style={{padding:5,textAlign:'justify'}}>Pardon, mademoiselle, cette place est libre ? Je peux m'asseoir ? </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>CHANTAL :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Oui, bien sûr. </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BERNARD :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Il y a un monde fou, aujourd'hui. Vous êtes du quartier ?  </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>CHANTAL :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Non, mais je ne travaille pas loin d'ici.   </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BERNARD :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Vous mangez régulièrement dans ce restaurant ?  </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>CHANTAL :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Non, c'est la première fois.  </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BERNARD :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Je peux vous offrir quelque chose ? Qu'est-ce que vous voulez ? </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>CHANTAL :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Mais rien ! Monsieur, l'addition, s'il vous plaît ! </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BERNARD :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Vous partez déjà ? </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>CHANTAL :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Oui, je reprends le travail dans 10 minutes </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>LE GARÇON :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Voilà, ça fait 76 F. </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BERNARD :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Dommage. Vous revenez demain ?  </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>CHANTAL :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Pardon ? Je n'ai pas entendu.  </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BERNARD :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Je vous demande si vous revenez demain. </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>CHANTAL :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Non. Je ne travaille pas demain. La semaine prochaine peut-être. </Text>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>BERNARD :</Text>
               <Text style={{padding:5,textAlign:'justify'}}>Alors, à la semaine prochaine </Text>




            </Body>
          </CardItem>
          </Card>
          <Card>
          <CardItem >
            <Body style={{flexDirection:'column',justifyContent:'space-evenly',alignItems:'flex-end'}} >
              
              <Text  style={{padding:5,fontWeight:'bold',}}>
              برنارد :
              </Text>
              
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              ببخشید خانم ، اینجا خالی است ؟ میتونم بشینم ؟
               </Text>
               <Text  style={{padding:5,fontWeight:'bold',}}>
              چانتال :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              بله البته.
               </Text>
               <Text  style={{padding:5,fontWeight:'bold',}}>
              برنارد :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              دنیای خرابیه امروز شما توی محله بودید ؟ 
               </Text>
               <Text  style={{padding:5,fontWeight:'bold',}}>
              چانتال :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              نه اما محل کارم از اینجا دور نیست. 
               </Text>
               <Text  style={{padding:5,fontWeight:'bold',}}>
              برنارد :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              شما معمولاً داخل این رستوران غذا میخورید ؟ 
               </Text>
               <Text  style={{padding:5,fontWeight:'bold',}}>
              چانتال :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              نه اولین بار است که اینجا غذا میخورم. 
               </Text>
               <Text  style={{padding:5,fontWeight:'bold',}}>
              برنارد :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              میتونم به شما چیزی پیشنهاد کنم ؟ شما چی میل دارید ؟ 
               </Text>
               <Text  style={{padding:5,fontWeight:'bold',}}>
              چانتال :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
               هیچی ! آقا ، صورتحساب لطفاً!
                </Text>
                <Text  style={{padding:5,fontWeight:'bold',}}>
              برنارد :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              شما داشتید میرفتید ؟  
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              چانتال :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              بله تا 10 دقیقه دیگه باید سرکار برگردم  .
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              گارسون :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              بفرمایید . صورتحساب شما 76 فرانک میشود .
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              برنارد :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              حیف شد. شما فردا برمیگردید ؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              چانتال :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              ببخشید صداتون را نشنیدم
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              برنارد :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
               پرسیدم فردا دوباره می آیید.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              چانتال :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              نه من فردا کار نمیکنم. هفته آینده شاید.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              برنارد :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              پس تا هفته آینده.
               </Text>




              </Body>
              </CardItem>
              
            </Card>



          
          </ScrollView>
      </Container>
    );
  }
}
