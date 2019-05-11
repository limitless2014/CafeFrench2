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
          <Text>Parlez de vos problèmes</Text>
            </CardItem>
            <CardItem>
                <Body>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',color:'green'}}>
                Dire non à la dépression 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Un des secrets du bonheur, c'est de ne pas se laisser abattre par ses problèmes.
                 Il faut oser râler, rouspéter pour s'en débarrasser.
                 Seulement, si l'on se plaint sans arrêt, on dérange tout le monde. On se sent alors mal aimé,
                  incompris, malheureux ; on tombe dans la morosité. Comment donc se plaindre, et à qui ? 
                </Text>
                <Image style={{width:'100%'}} resizeMode='stretch' source={require('../../../assets/img/lessons/lesson10/d102.png')}/>

                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',color:'green'}}>
                Trouver une oreille amie. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Se plaindre complique souvent les choses, tout simplement parce qu'on ne peut pas toujours justifier son ras-le-bol.
                 Si vous voulez qu'un ami vous écoute, dites-lui, par exemple ; « Je sais que tu n'y peux rien,
                  je ne sais pas très bien moimême ce qui ne va pas.
                   Mais j'ai vraiment besoin de t'en parler et cela me fait du bien que tu m'écoutes. »
                    Votre confident saura à quoi s'en tenir. Vous ne trouverez peut-être pas la solution de tous vos problèmes,
                     mais ils ne vous feront plus peur ! 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',color:'green'}}>
                Apprendre à se plaindre. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Savez-vous comment vous êtes quand vous rouspétez ?
                 Dès que vous vous sentez morose, courez crier votre ras-le-bol devant votre glace.
                  Si vous répétez des « j'en ai marre » à n'en plus finir, vous comprendrez que les autres n'ont pas envie de vous écouter ! 
                 Ne craquez pas et entraînez-vous : passez du dramatique au comique.
                  Ce travail d'acteur vous fera un bien fou, surtout si vous arrivez à rire de votre image dans la glace !  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',color:'green'}}>
                Ne pas se confier à n'importe qui  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Le choix du confident est très déhcat. Repérez les faux frères : ils vous écoutent avec une adorable gentillesse...
                 puis utilisent vos confidences pour mieux vous ridiculiser.
                  Avec ces gens-là, pas d'hésitation : ne parlez que de la pluie et du beau temps ! 
                </Text>
                </Body>
            </CardItem>
          </Card>
        




          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
           از مشکلاتتان بگویید
          </Text>
            </CardItem>
          
          <CardItem>
            <Body >
              
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end',color:'green'}}>
              به افسردگی نه بگویید
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              یکی از رازهای خوشبختی ، این است که تسلیم مشکلات نشویم. باید جرات شکایت ، اعتراض را داشته باشیم تا از مشکلات خلاص شویم.
              فقط اگر ما مداوم از آن مشکل شکایت کنیم باعث مزاحمت برای همه میشویم.
              ما احساس بی محبتی میکنیم ، دچار سو تفاهم میشویم ، غمگین میشویم. ما دچار یاس و نا امیدی میشویم.
              پس چگونه اعتراض کنیم و به چه کسی ؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end',color:'green'}}>
              یک دوست دلسوز پیدا کنید
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              شکایت کردن گاهی اوقات برخی مسائل را پیچیده میکند ، به طور ساده تر ما همیشه نمیتوانیم
              بیزاری مان را از آن مسئله توجیه کنیم. اگر میخواهید یک دوست به شما گوش کند به او بگویید مثلاً :
              من میدونم که تو نمیتونی این مشکل رو حل کنی ، من خودم هم نمیدونم مشکل چیه ولی من واقعاً 
              به صحبت کردن با تو درباره این مشکل نیاز دارم و همین که به من گوش کنی به من حس خوبی میدهد.
              حس اعتماد به نفش شما میداند که چه بگویید. شما ممکن است قادر نباشید تا برای همه مشکلات خود راه حل پیدا کنید ولی
              آنها بیشتر از این شما را نگران نمیکنند!
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end',color:'green'}}>
              یاد بگیرید که شکایت کنید
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              آیا میدانید زمانی که غر میزنید چگونه هستید ؟ زمانی که حس کردید غمگین هستید به سمت آینه بروید
              و دلیل بیزاری خود را جلوی آینه تان داد بزنید.
              اگر این جمله را مدام تکرار کنید من دیگه تحمل ندارم ، شما متوجه میشوید که دیگران نمیخواهند به شما گوش کنند!
              قلبتان را نشکنید با خودتان تمرین کنید : از حالت دراماتیک به کمدی سویچ کنید.
              این بازیگری شما را دیوانه میکند ، به خصوص  زمانی که چهره خود را در آینه ببیند میخندید!
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end',color:'green'}}>
              برای کسی که مهم نیست سفره دل خود را باز نکنید
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              حس اعتماد بسیار حساس است : دوست را از دشمن تشخیص دهید : آنها با یک مهربانی ستودنی به شما گوش میدهند
              سپس از صحبتهای شما برای مسخره کردن بهتر شما استفاده میکنند ، به محض مواجه شدن با این نوع افراد تردید نکنید :
              نگویید چون باران میبارد هوا خوب است! (از روی ظاهر افراد تصمیم نگیرید).
              </Text>
              </Body>
              </CardItem>
              </Card>


        <Card>
          <CardItem header>
             <Icon type="FontAwesome" name="coffee"/>
             <Text>Si on prenait un café ?</Text>
          </CardItem>
          <CardItem>
            <Body> 
 
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LISE :
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Bonjour, Barbara. Comment ça va ?   
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                BARBARA : 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Ça ne va pas du tout. J'en ai ras-le-bol de me lever à six heures tous les matins,
                 de prendre le bus, puis le métro pour aller travailler dans un bureau où tout m'énerve.
                  Le chef est en train de divorcer et il est insupportable.
                   Ma collègue ne parle que de ses problèmes avec ses enfants.
                    J'ai un nouvel ordinateur depuis lundi, et je n'arrive pas encore à bien travailler avec !
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LISE : 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Eh ben, c'est normal que tu sois sur les nerfs,
                 mais essaie d'oublier tout ça. Ton chef est souvent en déplacement.
                  Dans quinze jours, tu seras tellement contente de ton nouvel ordinateur que
                   tu te demanderas comment tu as pu travailler sans lui jusqu'à présent.
                    Et puis, tu es peut-être un peu fatiguée : il est temps que tu prennes des vacances ! 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                BARBARA : 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Excuse-moi, mais je n'en peux plus ! Tu penses peut-être que j'exagère, mais ça me fait du bien de parler de tout ça avec toi. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LISE : 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Je te comprends, mais enfin... Ton boulot n'est pas mal, même s'il n'est pas génial,
                 et tu savais ce qui t'attendait quand tu as décidé d'aller habiter en banlieue.
                  Tu aurais dû y penser avant de déménager. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                BARBARA : 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                C'est drôle que tu me dises ça maintenant :
                 quand je craignais de mal supporter mon déménagement en banlieue,
                  c'est bien toi qui me parlais de la campagne, du plaisir de lire son journal dans les transports en commun... 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LISE : 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Tu es injuste. Tu pourrais au moins reconnaître que la banlieue est plus agréable que Paris pour les enfants,
                 pour faire les courses, se promener... 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                BARBARA : 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Mmm ! Bof... On pourrait peut-être parler d'autre chose. Si on prenait un café ?   
                </Text>
                
            </Body>
            </CardItem>
        </Card>

          
          


          

        <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
          چطوره یک قهوه بخوریم ؟
          </Text>
            </CardItem>
          
          <CardItem>
            <Body >
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              لیز :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
              سلام باربارا ، حالت چطوره ؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              باربارا :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              حالم اصلاً خوب است . من خسته شدم از بس ساعت 6 صبح بیدار بشم و سوار اتوبوس بشم . بعدش
              با مترو برای کارکردن به اداره ای میروم که همه روی اعصابم راه میرن . رئیس در شرف طلاق گرفتن است او غیر قابل تحمل است.
              همکارم فقط از مشکلاتش با بچه هایش با من حرف میزند. من از روز دوشنبه یک کامپیوتر جدید دارم و هنوز نمیتونم
              خوب باهاش کار کنم! 
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              لیز :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              خب ، عادیه که تو عصبی هستی. ولی سعی کن که همه چی رو فراموش کنی. رئیس تو اغلب مواقع جابجا میشود. ظرف 15 روز
              تو از کامپیوتر جدیدت خیلی خوشحال خواهی شد به طوری که از خودت میپرسی که چطور توانسته ای بدون این کامپیوتر تا الان
              کارکنی. بعدش ممکنه یکم خسته بشی : اون موقع باید به تعطیلات بری!
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              باربارا :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              ببخشید. اما من بیشتر از این نمیتونم! تو ممکنه فکر کنی که من اغراق میکنم. ولی من وقتی در مورد
              همه اینها باهات صحبت میکنم حس خوبی بهم دست میده.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              لیز :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
               من تو را درک میکنم ولی در نهایت ... شغل تو بد نیست حتی اگر عالی نیست و تو میدونستی که چه چیزی در انتظارت است
               زمانی که تصمیم گرفتی بروی در حومه شهر زندگی  ، بایستی قبل از اینکه جابجا بشوی  به آن فکر میکردی.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              باربارا :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
               حرفی که الان به من میزنی خنده داره : زمانی که من میترسیدم از اینکه نتونم با جابجایی به حومه شهر کنار بیام
               این دقیقاً تو بودی که از حومه شهر ، از لذت روزنامه خواندن درون وسایل حمل و نقل عمومی با من صحبت میکردی ...
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              لیز :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              تو منصف نیستی. تو حداقل میتونستی تشخیص بدهی که حومه شهر دلپذیر تر از 
              پاریس برای بچه ها، برای خرید کردن ، برای پیاده روی کردن است.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              باربارا :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              ممم! نمیدونم ... میتونیم درمورد چیز دیگری صحبت کنیم. چطوره یک قهوه دیگه بخوریم؟
              </Text>
              </Body>
              </CardItem>
              </Card>


        
          </ScrollView>
      </Container>
    );
  }
}
