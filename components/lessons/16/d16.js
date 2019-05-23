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
          <Text>Odile</Text>
            </CardItem>
            <CardItem>
                <Body>
 
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                À quinze ans, mes vacances à Etretat ne se cantonnaient plus, comme à sept ou huit ans, dans le jardin de la villa.
                 Je sentais le besoin de rechercher les autres. Je m'essayais avec les filles.
                  Avec Beryl, notamment, une petite Américaine à la mèche blonde sur l'oeil, qui manifestait de l'Intérêt à mon égard.   
                </Text>
 
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                L'un des hauts lieux, à Etretat, c'était la pâtisserie Lecoeur.
                 Un jour que j'avais emmené Beryl manger un chou, entra une jeune fille Inconnue.
                  À sa seule apparition, la couleur du jour, la qualité de l'air parurent se transformer.
                   Grande, élancée, cette jeune fille irradiait la santé, la vie et la joie.
                    Elle était accompagnée de deux petits garçons qui, riant aux éclats des histoires qu'elle leur contait à mi-voix, réclamaient :
                     « Odile, j'ai droit à deux gâteaux aujourd'hui. Odile, moi aussi j'en veux deux.
                      Odile, je veux en rapporter un à maman. » Et Odile souriait, caressait les garçons, les embrassait,
                       choisissait un éclair pour le plus grand, une tarte pour le plus petit,
                        hésitait pour elle-même, riait, plaisantait, essuyait les taches dc crème sur une blouse,
                         jetait un regard gourmand sur les babas, finissait par engloutir une religieuse avec un appétit féroce,
                          Un mélange d'exubérance et de douceur. De tendresse et de gravité. Jamais je n'avais rien vu de pareil : une fée.  
                </Text>  
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Dès lors, je n'eus plus qu'une idée fixe : la revoir. Pendant plusieurs jours, je m'installai dans la pâtisserie.
                 Je n'en bougeais plus. J'y passais mes journées à attendre.
                  Je mangeais des gâteaux avec lenteur, avec plus de lenteur encore, à toutes petites bouchées,
                   pour les faire durer, chacun, le plus longtemps possible. Un palmier. Un éclair. Un friand. Un autre éclair. Une tarte.
                    Un chou. Encore un palmier. J'avais mal au coeur. Mais pour rien au monde, je n'aurais quitté la pâtisserie.
                     Hélas ! Elle ne revint pas. Une fois, de loin, je l'aperçus dans la rue. Puis plus rien.
                      Elle était repartie. Je ne savais ni qui elle était ni où elle vivait.
                       Tout ce que je savais d'elle, c'était le nom : Odile. 
                       </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                D'après La Statue intérieure, de François Jacob, éd. Odile Jacob.  
                </Text>
                </Body>
            </CardItem>
          </Card>
        




          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
           اودیل (اسم دخترانه)
          </Text>
            </CardItem>
          
          <CardItem>
            <Body >
 
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                در سن 15 سالگی تعطیلات من در اترات (بخشی در فرانسه) مانند زمانی که 7 یا 8 ساله بودم محدود به باغ ویلا نمیشد.
                من حس کردم که نیاز دارم انسانهای دیگری را در زندگی ام پیدا کنم.
                من با چندتا دختر قرار گذاشتم. خصوصاً با بریل (اسم شخصی) که یک دختر امریکایی قد کوتاه با موهای مش که تا روی چشمانش بودند ،
                که علاقه اش را به من ابراز نمود.
               </Text>
               <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                 یکی از مکان های باکلاس در اترات ، شیرینی فروشی Lecoeur بود.
                 یک روز بریل را به آنجا بردم تا یک Choux (نوعی کیک) بخوریم.
                 یک زن جوان ناشناس وارد شد. با ظاهر منحصر به فردش ، رنگ روز و کیفیت هوا به نظرم عوض شد ، بلند قد ، قلمی بود این دختر جوان
                 از خودش سلامتی ، زندگی و شادی را منعکس میکرد. دو پسربچه کوچک همراه او بودند که به داستانهایی که او برای آنها
                 زمزمه میکرد با صدای بلند می خندیدند. با پافشاری از او میخواستند : اودیل من امروز حق دارم دو کیک بخرم ، اودیل من 
                 هم همینطور دوتا کیک میخواهم ، اودیل من میخواهم یکی را برای مامان ببرم.
                 و اودیل خندید ، پسر بچه ها را نوازش کرد ، آنها را در آغوش گرفت ، یک کیک برای پسر بچه بزرگتر و یک تارت (نوعی شیرینی) برای
                 پسربچه کوچکتر انتخاب کرد. برای خودش تردید کرد چه چیزی انتخاب کند ، خندید ، شوخی کرد و لکه های 
                 خامه را از روی بلوزش پاک کرد. من به طور حریصانه ای به باباها (نوعی شیرینی) نگاه کردم و در نهایت یک رلیگو (نوعی شیرینی)
                 را با اشتهای زیادی خوردم. او ترکیبی از شیرینی و شادابی ، مهربانی و جاذبه بود.
                 هرگز کسی مثل او را ندیده بودم. او یک فرشته بود.
                 </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                 از آن زمان به بعد من فقط یک ایده داشتم : که او را دوباره ببینم. به مدت چند روز در شیرینی فروشی می نشستم.
                 من دیگر از آن جا حرکت نمیکردم. روزهایم را در انتظارش سپری میکردم.
                 من کیکم را آهسته و آهسته تر با گازهای کوچک میخوردم تا هرکدام از لقمه هایم تا حدی که امکان دارد دیرتر تمام شود.
                 یک خرما ، یک کیک eclair ، یک کیک بادامی ، یک کیک eclair دیگر ، یک شیرینی تارت ، یک شیرینی choux ،
                 یک خرمای دیگر . قلبم شکسته بود. ولی برای هیچ چیزی در دنیا شیرینی فروشی را ترک نمیکردم. بدبختانه!
                 او برنگشت. یکبار او را از دور در خیابان دیدم. بعدش هیچی نشد . او رفته بود.
                 من نه میدانستم او چه کسی بود نه میدانستم کجا زندگی میکند. تمام چیزی که من از او میدانستم اسمش بود : اودیل.
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                 مطابق با کتاب مجسمه درون اثری از فرانسوا جیکوب نسخه اودیل جیکوب.
                </Text>
              </Body>
              </CardItem>
              </Card>






       
        <Card>
          <CardItem header>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>La revue</Text>
            </CardItem>
            <CardItem>
                <Body>
                
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Pendant tout l'hiver, je gardai en moi, au chaud, au secret, cette image radieuse de jeune fille.
                 Avec l'arrivée imminente de l'été, ce n'étaient plus seulement les vacances qui approchaient.
                  C'était surtout la perspective de bientôt revoir Odile. Sans le moindre argument, sans la moindre raison,
                   j'avais la certitude de la retrouver. Et, en effet, à peine arrivé en vacances depuis quelques jours,
                    j'aperçus la longue et mince silhouette que j'espérais. Plus belle encore que dans mon souvenir,
                     plus souriante, plus lumineuse. Cette fois, je m'arrangeai pour apprendre au plus vite son nom,
                      pour savoir quelle était sa famille, où elle habitait.
                       J'allais rôder près de sa maison. J'attendais le passage d'Odile.
                        Mais quand je la rencontrais, je ne savais ni que faire ni que dire.
                         Une fois qu'elle arrivait chargée de paquets, j'offris mes services. Elle refusa tout net.
                          Pour faire sa connaissance, pour la rencontrer selon les règles, il fallut attendre la revue.  
                </Text>

                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                La revue, c'était la fête de la saison. Une série de tableaux écrits et joués par des gens en vacances qui,
                 sur des airs à la mode ou des opérettes d'Offenbach, se moquaient d'eux-mêmes avec un mélange de gentillesse et de férocité.
                  Quinze jours avant la représentation, les répétitions commencèrent. Je n'avais jamais joué dans la revue.
                   Mais, ayant appris la participation d'Odile, je m'inscrivis aussitôt.
                    Comme collègues, il devenait facile de faire connaissance. Soyons juste. Mon rôle resta modeste.   
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Odile, au contraire, devint l'une des vedettes de cette revue.
                 En longue robe rouge, elle chantait et dansait un duo avec un grand type brun.
                  À la voir glisser dans les bras de ce garçon, je sentais monter en moi une furieuse jalousie.
                   Pourtant, mon objectif était atteint. Depuis les répétitions, j'avais le droit de ramener Odile le soir.
                    J'avais le droit de passer la chercher, de me promener et de nager avec elle.
                     J'avais le droit de lui faire apprendre son rôle,
                      de me glisser près d'elle dans l'obscurité de la salle pendant les répétitions.  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                D'après La Statue intérieure. de François Jacob, éd. Odile Jacob. 
                </Text>
                </Body>
            </CardItem>
          </Card>
        




          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
           مراسم la revue
          </Text>
            </CardItem>
          
          <CardItem>
            <Body >
              
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
               در تمام زمستان ، من گرمای وجودش را ، رازش را ، تصویر درخشان دختر جوان را درون خودم نگهداری کردم.
               با ورود قریب الوقوع تابستان ، فقط تعطیلات نبودند که نزدیک میشدند بلکه این چشم انداز دیدار دوباره اودیل در آینده بود که نزدیک میشد.
               بدون  کوچکترین استدلال و دلیلی من مطمئن بودم که او را پیدا میکنم. در نهایت بمدت چند روز برای تعطیلات آمد.
               ،من آن نیم رخ بلند و باریک را که امیدش را داشتم، دیدم از آن چیزی که در رویایم بود زیباتر ، خندان تر ، نورانی تر بود.
               این دفعه موفق شدم که هرچه سریع تر اسم او را یادبگیرم ، فهمیدم خانواده اش چه کسانی هستند و اینکه کجا زندگی میکند.
               من نزدیک خانه اش پرسه زدم ، من منتظر اودیل بودم تا از آنجا عبور کند. ولی من تا او را دیدم نمیدانستم چه بگویم
               یا چه کاری انجام دهم. زمانی که او با پاکت های پر رسید من به او پیشنهاد کمک دادم ولی او هیچ کمکی را قبول نکرد.
               برای شناختن او ، برای دوباره دیدن قانونی او ، باید منتظر میشدم تا جشن la revue فرا برسد.

              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
                 جشن la revue یک جشن فصل بود .یک سری از نقاشی های ترسیم شده در مورد ملودی های مد روز (مرسوم) یا در مورد اپرت های (ژانری از اپرا) آفن باخ(آهنگساز المانی)  توسط افرادی که در تعطیلات هستند 
                 به اجرا گذاشته میشد. آنها خودشان را با ترکیبی از مهربانی و بی رحمی سرگرم کرده بودند.
                 پنج روز قبل از اجرا تمرینات شروع شدند. من هرگز در جشن la revue تا به حال بازی نکرده بودم.
                 ولی از قبل فهمیده بودم که اودیل میخواهد در این جشن شرکت کند. من فوری ثبت نام کردم. همکاری با او شناختنش را برایم راحت تر کرد.
                 بیایید منصفانه باشیم. نقش من در نمایشنامه متواضع بود (نه خیلی خوب بود نه خیلی بد).
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
                اودیل برعکس من ، او تبدیل به یک ستاره در جشن la revue شد. او با یک لباس بلند قرمز رنگ
                در یک دئو (اجرای دو نفره) همراه با یک مرد بلند قد با یک تیپ قهوه ای رقصید و آواز خواند.
                زمانی که او را دیدم روی دستان آن پسر لم داده بود حس کردم که حسادت خشنی در من پدید آمد.
                اما من به هدفم رسیده بودم. از زمان شروع تمرینات من میتوانستم که او را شبها تا خانه اش همراهی کنم. من اجازه داشتم تا دنبالش بروم
                ، با او پیاده روی و شنا کنم. 
                من میتوانستم نقش او را یادش بدهم ، من میتوانستم بطور مخفیانه در تاریکی سالن هنگام تمرینات به او نزدیک شوم.
              </Text>
              <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                 مطابق با کتاب مجسمه درون اثری از فرانسوا جیکوب نسخه اودیل جیکوب.
                </Text>
              </Body>
              </CardItem>
              </Card>




              <Card>
          <CardItem header>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>Le rendez-vous</Text>
            </CardItem>
            <CardItem>
                <Body>
                
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Odile devait partir d'Etretat trois jours après la revue. Pour son dernier jour, elle accepta une promenade seule avec moi.
                 À peine éveillé, ce matin-là. je me précipitai ouvrir les volets pour voir s'il ferait beau.
                  Oui, il ferait beau. Oui, ce serait une chaude journée, avec ciel bleu, soleil et chants d'oiseaux.
                   Une heure avant le rendez-vous fixé, je tournais déjà autour de la maison d'Odile.
                    Quand elle parut, étincelante, dans sa robe bleue et ses espadrilles,
                     pas un instant je ne doutai que j'allais sortir avec la plus belle des jeunes filles du monde.
                      Nous avions décidé d'aller gouter dans une ferme, en partant par la falaise et le bord de mer pour revenir par l'intérieur.
                       En haut, soufflait une brise tiède et fraîche à la fois, une brise venue de l'océan.
                        Étonnant panorama avec, ce jour-là, le bleu intense de la mer, le bleu très pâle d'un ciel sans nuage,
                         et sur ce fond, Odile, avec la douceur de son visage, la tendresse de son sourire.
                          Merveilleuse promenade au bout du monde, dans l'air du large, avec l'odeur de l'océan.
                           Nous avions tant de choses à nous dire. Sur nos études, sur nos lectures. Le théâtre. Les gens d'Étretal.
                            Paris et les amis communs. Je ne savais ce que j'admirais le plus en elle, de sa manière de conter,
                             de se moquer des gens, sans toutefois manquer de tendresse.
                              Ou de son aisance, de celle maîtrise de gestes que donne une complète souplesse et qui permet,
                               sans hésitation, d'exécuter, avec une parfaite précision, les mouvements choisis.
                                A plusieurs reprises, pendant la montée, j'offris, pour l'aider, une main à Odile. Chaque fois, elle la refusa.
                                 Était-ce réserve ? Crainte ? Mépris ? 
                                 Nous revînmes à Étretat. Elle partit le lendemain. 
                </Text>
                            
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                D'après Lu Statue intérieure, de François Jacob, éd. Odile Jacob. 
                </Text>

                </Body>
            </CardItem>
          </Card>
        




          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
           قرارملاقات
          </Text>
            </CardItem>
          
          <CardItem>
            <Body>
              
    
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
                اودیل 3 روز بعد از مراسم la revue مجبور بود تا اترات را ترک کند.
                در آخرین روز ، او قبول کرد که با من تنهایی به پیاده روی بیاید.
                آن روز صبح به سختی بیدار شدم. سریع پرده پنجره را کشیدم تا ببینم هوا خوب است یا نه. بله هوا خوب خواهد بود . بله روزی گرم ، همراه با آسمانی آبی و آفتابی
                خواهد بود وپرنده ها هم آواز میخواندند. یک ساعت قبل از قرار ملاقات من اطراف خانه اودیل پرسه میزدم.
                زمانی که او با لباس آبی اش و کفشهای بند دارش ، به طور نورانی ظاهر شد حتی یک لحظه هم شک نکردم که دارم
                با زیباترین دختر دنیا بیرون میروم. ما تصمیم گرفتیم که در یک مزرعه غذا بخوریم.
                ما از کنار صخره ها و ساحل دریا شروع به رفتن کردیم تا داخل مزرعه رسیدیم.
                در ارتفاعات یک نسیم ملایم و تازه ای از سمت اقیانوس وزید ، پانورما ای (دید 360 درجه) خیره کننده ، رنگ آبی تیره دریا
                در آن روز ، رنگ آبی کم رنگ آسمان بدون ابر ، و در این پیش زمینه ، اودیل با ملایمت صورتش و لبخند مهربانش قرار داشت.
                یک پیاده روی شگفت انگیز در پایان دنیا ، در هوای اقیانوس ، با بوی اقیانوس بود.
                ما حرف های زیادی برای گفتن به همدیگر داشتیم. درباره چیزهایی که مطالعه کرده بودیم ، چیزهایی که خوانده بودیم.
                ، تئاتر ، مردم اترات ، پاریس و دوستان مشترک ، من نمیدانستم چه چیزی را بیشتر از همه در او تحسین میکنم ، طرز
                صحبت کردنش را ، شوخی کردن او با مردم را ، همیشه مهربانی او را.
                سادگی او را. بدون تردید تسلط او بر ژستهایش  به او انعطاف پذیری کاملی را میداد و او را قادر میساخت تا
                حرکات منتخب را با دقت عالی ای چندین بار انجام دهد.
                زمانی که صخره نوردی میکردیم من به اودیل پیشنهاد کمک دادم هردفعه او کمک را رد کرد آیا او خجالتی بود ؟ میترسید ؟ 
                احساس حقارت میکرد ؟. ما به اترات برگشتیم و او فردای آن روز رفت.
              </Text>
              <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                 مطابق با کتاب مجسمه درون اثری از فرانسوا جیکوب نسخه اودیل جیکوب.
                </Text>
              </Body>
              </CardItem>
              </Card>

        


             

        
          </ScrollView>
      </Container>
    );
  }
}
