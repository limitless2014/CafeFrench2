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
          <Text>Dis-moi ce que tu fais, je aurai qui tu es </Text>
            </CardItem>
            <CardItem>
                <Body>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Deux personnes se rencontrent. Après les présentations, la première question est souvent :
                 « Et vous faites quoi dans la vie ? » Ce qui veut dire, en réalité :
                  « Quand je saurai ce que vous faites, je saurai qui vous êtes. » 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Plus le travail se fait rare, plus il prend de l'importance dans notre vie.
                 D'un côté, il y a les chômeurs qui en cherchent, de l'autre, les salariés qui font tout pour garder leur emploi.
                  D'un côté rien, mais de l'autre, souvent trop.
                   Pour garder leur travail, pour gagner plus, beaucoup sacrifient leurs soirées et leurs week-ends,
                    oublient les loisirs, les rencontres avec les amis et regardent leur montre quand ils sont avec leurs enfants.
                     Mais aujourd'hui aussi, des gens rêvent de changement.
                      Ils préfèrent un rythme plus lent et une meilleure qualité de vie aux avantages de la réussite.
                       53 % de ceux qui travaillent souhaitent avoir plus de temps libre que d'argent.
                        Alors, prêts pour un monde où le travail ne serait plus la seule valeur de notre vie ?
                         Pas facile, mais certains essaient. Une chose est sûre : personne ne rêve d'être chômeur.
                </Text>
                </Body>
            </CardItem>
          </Card>





          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
          به من بگو چه کاری انجام میدهی ، من تو را خواهم شناخت
          </Text>
            </CardItem>
          
          <CardItem>
            <Body >
              
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              دو شخص که یکدیگر را ملاقات میکنند. بعد از معرفی ، اغلب اوقات اولین سوالشان این است :
              شغل شما چیست ؟ که در واقعیت به این معنی است : زمانی  که من بدانم شغل شما چیست ، من شما را خواهم شناخت.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              هرچه شغل کمیاب تر میشود ارزش بیشتری در زندگی ما دارد. از یک طرف بیکارانی هستند که به دنبال شغل میگردند.
              از طرف دیگر ، کارکنانی هستند که هرکاری میکنند تا شغل خود را نگهدارند. از یک طرف هیچ چیز برای نگهداشتن وجود ندارد ، اما
              از طرف دیگراغلب امتیازهای شغلی بیش از اندازه ای وجود دارد.
              افراد بسیاری شبها و آخرهفته های خود را صرف شغلشان میکنند ، تفریحات خود را از دست میدهند ، قرارملاقات
              های خود را با دوستانشان از دست میدهند ، و زمانی که با فرزندان خود هستند به ساعت مچی خود نگاه میکنند.
              ولی امروزه همچنین افرادی وجود دارند که رویایی تغییرات را دارند.
              آنها ریتم آهسته تر و کیفیت زندگی بهتر را به موفقیت ترجیح میدهند.
              53 درصد کسانی که شاغل هستند آرزو دارند که زمان آزاد بیشتری را داشته باشند تا پول بیشتر.
              پس ، آماده هستید برای یک دنیایی که در آن کار تنها ارزش زندگی شما نباشد ؟.
              آسان نیست ، ولی برخی تلاش میکنند. یک چیز قطعی است : هیچ کس دوست ندارد بیکار باشد.
              </Text>
              </Body>
              </CardItem>
              </Card>


        <Card>
          <CardItem header>
             <Icon type="FontAwesome" name="coffee"/>
             <Text>Les  jeunes et le monde du travail </Text>
          </CardItem>
          <CardItem>
            <Body> 
            
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                Les études préparent-elles à entrer dans le monde du travail ? L'avis des jeunes 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                Laure, 18 ans, en terminale au lycée Lamartine  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Les diplômes restent sans doute une garantie contre le chômage même s'ils ont beaucoup perdu de leur valeur.
                 Il y a vingt ans, le bac, c'était formidable ; maintenant ce n'est plus rien.
                  Alors il faut continuer ses études, même si on ne sait pas vraiment où on va.  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                Anne, 18 ans, en première à l'école Notre-Dame 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Si l'on veut, on peut ! C'est le caractère qui fait la différence.
                 Les diplômes, on peut toujours les acquérir. 
                 Les relations aussi ! Alors je suis sûre que tout marchera bien ! 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                Éric, 19 ans, en terminale au lycée Pasteur 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                On dit que les diplômes ont moins de valeur,
                 mais tout le monde court après. Moi, je ne sais pas ce que je ferai.
                  Je n'ai pas envie de continuer après le bac. J'irai peut-être au Canada,
                   j'ai de la famille là-bas. D'abord, je veux voir le monde. Après, je penserai aux diplômes. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                Luc, 19 ans, en première au lycée Jules-Ferry 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                On entend souvent dire que le bac n'a plus de valeur En tout cas,
                 il faut travailler pour l'avoir. On ne vous le donne pas comme ça,
                  mais on vous le demande pour faire des études supérieures. 
                </Text>
            </Body>
            </CardItem>
        </Card>

          
          


          

        <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
          جوانان و دنیای کار
          </Text>
            </CardItem>
          
          <CardItem>
            <Body >
              <Text  style={{direction:"rtl",padding:5,fontWeight:'bold',alignSelf:'flex-end',lineHeight:30,textAlign:'justify'}}>
               آیا دانشجوها خودشان را برای ورود به دنیای کار آماده کرده اند ؟
              </Text>
            
              <Text  style={{direction:"rtl",padding:5,alignSelf:'flex-end',lineHeight:30,textAlign:'justify',fontWeight:'bold'}}>
              لور ، 18 ساله ، از دبیرستان لامارتین
              </Text>
              <Text  style={{direction:"rtl",padding:5,alignSelf:'flex-end',lineHeight:30,textAlign:'justify'}}>
              دیپلم بدون شک یک تضمین در مقابل بیکاری است ، حتی اگر مقدار زیادی از ارزش خود را از دست داده باشد.
              بمدت 20 سال است ، دوره کارشناسی عالی بوده است ;الان اینگونه نیست اگرچه باید به تحصیل ادامه داد
              حتی اگر ندانیم سرنوشت ما چه خواهد شد.
              </Text>

              <Text  style={{direction:"rtl",padding:5,alignSelf:'flex-end',lineHeight:30,textAlign:'justify',fontWeight:'bold'}}>
              آن ، 18 ساله ، از دبیرستان نوتردام
              </Text>
              <Text  style={{direction:"rtl",padding:5,alignSelf:'flex-end',lineHeight:30,textAlign:'justify'}}>
              خواستن ، توانستن است! این خصوصیتی است که باعث متمایز شدن میشود. دیپلم را ما همیشه میتوانیم بدست آوریم ، روابط را هم همینطور
              ! اگرچه من مطمئن هستم که همه چیز خوب پیش خواهد رفت!
              </Text>
              <Text  style={{direction:"rtl",padding:5,alignSelf:'flex-end',lineHeight:30,textAlign:'justify',fontWeight:'bold'}}>
              اریک ، 19 ساله ، از دبیرستان پاستور
              </Text>
              <Text  style={{direction:"rtl",padding:5,alignSelf:'flex-end',lineHeight:30,textAlign:'justify'}}>
              ما میگوییم که دیپلم ارزش کمی دارد ولی همه بدنبال بدست آوردن آن هستند. من ، نمیدانم در آینده چکاره خواهم شد.
              من نمیخواهم بعد از دوره کارشناسی به تحصیل ادامه بدهم. من احتمالاً به کانادا میروم.
              خانواده ام آنجا هستند. اول میخواهم دنیا را ببینم بعدش به دیپلم فکر خواهم کرد.
              </Text>
              <Text  style={{direction:"rtl",padding:5,alignSelf:'flex-end',lineHeight:30,textAlign:'justify',fontWeight:'bold'}}>
              لوک ، 19 ساله ، از دبیرستان ژول فری
              </Text>
              <Text  style={{direction:"rtl",padding:5,alignSelf:'flex-end',lineHeight:30,textAlign:'justify'}}>
              ما گاهی اوقات میشنویم که دوره کارشناسی دیگر ارزش ندارد ، در هر حال ، باید کار کنیم تا آن را داشته باشیم.
              ما دوره کارشناسی را اینگونه به شما نمیدهیم ، اما ما از شما میخواهیم که تحصیلات عالی را بگذرانید.
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
