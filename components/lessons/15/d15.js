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
          <Text>Une disparition mystérieuse</Text>
            </CardItem>
            <CardItem>
                <Body>
                
                 
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Debout devant la fenêtre sale de son bureau, Albert Billot regardait la pluie tomber sur le square.
                 Foutu mois de septembre, pensa-t-il, et pas la plus petite affaire. Lorsque le téléphone sonna,
                  il sauta sur l'appareil en se disant que même une catastrophe serait préférable à l'ennui. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                « C'est l'agence Mergitur ? demanda une voix féminine.   
                </Text>  
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Oui, madame.    
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Monsieur Albert Billot ? continua la voix. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Lui-même.   
                </Text>
 
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Bonjour, monsieur Billot. Je suis la secrétaire de monsieur Du Murier,
                 le directeur de la société Fernault. Monsieur Du Mûrier voudrait vous parler.
                  Il s'agit d'une affaire très délicate. Pourriezvous passer à nos bureaux de la rue de Rivoli cet après-midi ? 
                </Text>
 
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Aujourd'hui ! Un instant. J'ai un emploi du temps très chargé.
                </Text>

                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Il laissa passer le temps nécessaire pour consulter son agenda... qu'il savait vide. 
                </Text>

                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Ça devrait aller, entre deux rendez-vous. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Bien. Est-ce que 15 heures vous conviendrait ? 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Parfaitement. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Il raccrocha. Il ne savait pas quoi penser de ce rendez-vous.
                 Il se rappela que c'était une Fernault qui avait gagné le dernier Grand Prix de Monaco, mais, pour rien au monde.
                  Il n'aurait échangé sa vieille caisse contre une Fernault. On ne se refait pas. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                À 15 heures précises, la secrétaire le fit entrer dans le bureau de Paul Du Murier.
                 Ce dernier était inquiet pour son ingénieur en chef, Bertrand Hartman.
                  On ne l'avait pas vu depuis quatre jours et personne ne savait où il était. Albert Billot demanda si Hartman avait de la famille. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                « Il a encore sa mère, répondit Du Murier. Je lui ai téléphoné, mais pour elle, son fils est à Paris,
                 à son travail, comme d'habitude. C'est une vieille dame, et je n'ai pas insisté pour ne pas l'inquiéter. » 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Ses collègues n'avaient rien remarqué de particulier, à part une certaine lassitude, peut-être.
                 Ces derniers temps, Bertrand se plaignait souvent d'avoir trop de travail et trop de responsabilités, mais rien de bien grave. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Il n'est pas marié ? voulut savoir Albert Billot. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                 Non. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                On lui connaît une liaison ? 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Personne ne sait rien de sa vie privée. Bertrand est très réservé.
                 Mme Leterrier, avec qui il travaille depuis très longtemps, pense qu'il y a une femme dans sa vie,
                  du moins c'est ce que lui dit son intuition féminine. Bertrand ne lui en a jamais parlé.
                   Voilà, je crois que je vous ai tout dit. » 
                </Text>
                </Body>
            </CardItem>
          </Card>
        




          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
            ناپدید شدن مرموز
          </Text>
            </CardItem>
          
          <CardItem>
            <Body >
 
  
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                در کناره پنجره غبارآلودش ایستاده بود. آلبرت بیلوت میدان را که باران روی آن میبارید تماشا میکرد.
                باخودش فکر میکرد ، ماه سپتامبر لعنتی است و حتی یک بیزینس خیلی کوچک وجود ندارد.
                زمانی که تلفن اش زنگ زد او به سرعت به سمت تلفن رفت و گفت حتی یک فاجعه بهتر از بی حوصلگی (خستگی) است.
              </Text>
               <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                 کسی که میپرسید صدای زنانه داشت : آژانس مغگیتوغ است ؟
                </Text> 
                <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                 بله خانم.
                </Text> 
                <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                 صدا ادامه داشت : آقای آلبرت بیلوت هستید ؟
                </Text>
                <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  خودم هستم.
                  </Text>
                  <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  روزبخیر آقای بیلوت ، من منشی آقای موریر (مدیر شرکت فرنالت)  هستم.
                  آقای موریر میخواست در مورد موضوع حساسی با شما صحبت کند. 
                  </Text>
                  <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  میتونید بعد از ظهر به اداره ما که در خیابان غیولی هست بیاید ؟
                  </Text>
                  <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  امروز ، یک لحظه لطفاً. امروز برنامه کاری ام کامله.
                  </Text>
                  <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  او گذاشت تا زمان لازم برای چک کردن برنامه کاری اش بگذرد ... چون برنامه اش خالی بود.
                  </Text>
                  <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  مشکلی نیست اگر بین دو ملاقات دیگه باشه ؟
                  </Text>
                  <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  خوبه ، ساعت 15 براتون مناسب هست ؟
                  </Text>
                  <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  عالیه
                  </Text>
                  <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  او تلفن را قطع میکند . او نمیدانست این ملاقات برای چه چیزی است (هیچ ایده ای نداشت).
                  او به خاطر آورد که یک زن از شرکت فرنالت بود، شرکتی که آخرین مسابقه گراندپری موناکو (مسابقه اتومبیل رانی فرمول یک) را برنده شد.
                   اما به ازای هیچ چیزی در دنیا، او ماشین قدیمی اش را با یک فرنالت تعویض نمیکند . مردم عوض نمیشوند.
                   
                  </Text>
                  <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  راس ساعت 15 ، منشی او را به دفتر پاول موریر برد. او این اواخر نگران مهندس ارشدش برنارد هارتمن بود.
                  چهار روز است که او دیده نشده است و هیچ کس خبر ندارد او کجا بوده است. آلبرت بیلوت میپرسد آیا او خانواده ای دارد.
                  </Text>
                  <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  آقای موریر پاسخ داد :او هنوز مادرش را دارد.
                  من با او تماس گرفتم ولی او فکر میکند که مثل همیشه پسرش در پاریس مشغول به کار است . پیرزن است و من زیاد سوال نکردم
                  تا نگران نشود.
                  </Text>
                  <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  همکارانش به چیز خاصی اشاره نکرده اند ، به جز ضعف (کمبود انرژی) او ، این اواخر
                  برنارد گاهی اوقات از کار بیش از حد و مسئولیت داشتن زیاد شکایت میکرد ولی چیز جدی نبود.
                  </Text>
                  <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  آلبرت بیلوت میخواست بداند : آیا او متاهل است ؟
                  </Text>
                  <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  نه
                  </Text>
                  <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  آیا او یک رابطه مخفیانه داشته است ؟
                  </Text>
                  <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  هیچ کس از زندگی شخصی اش چیزی نمیداند. برنارد خیلی محافظه کار است ، خانم لتغیه
                  کسی است که با او مدت زمان زیادی کار کرده است ، فکر میکند که یک زن در زندگی او وجود دارد ، حداقل این چیزی است که
                  حس زنانه اش به او میگوید. برتراند هرگز در این مورد با او حرف نزده است. بفرما فکر کنم من همه چیز را به تو گفتم.
                  </Text>

              </Body>
              </CardItem>
              </Card>






       
        <Card>
          <CardItem header>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>Connaissez-vous Bertrand Hartman ? </Text>
            </CardItem>
            <CardItem>
                <Body>
                
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Albert Billot décida de faire le tour des trois ou quatre bistrots voisins de l'immeuble Fernault.
                 Qui sait, on pourrait peut-être lui donner des informations sur Hartman. On le connaissait bien à La Table Ronde.
                  Il y prenait son petit déjeuner tous les matins. La serveuse l'aimait bien : un homme discret,
                   charmant, 35, 40 ans, pas mal du tout, précisa-t-elle. La fleuriste du Bouton d'or, le magasin d'à côté,
                    qui était en train de prendre un petit noir au comptoir, le connaissait aussi. C'était un de ses clients, depuis quelques mois.
                     Intéressé, Billot s'assit à côté d'elle. La fleuriste était enchantée de répondre à ses questions.
                      Elle dit que Hartman achetait souvent des fleurs, toujours les mêmes, des roses jaunes, et que, deux ou trois fois,
                       il lui avait demandé de livrer un bouquet rue Saint-Paul, dans le Marais.
                        Billot lui demanda si elle pourrait retrouver l'adresse. Elle voulait bien essayer,
                         mais il fallait qu'il la suive dans le magasin et qu'il lui laisse le temps de chercher dans ses papiers.
                          Pendant qu'elle cherchait, elle lui fit part de ses impressions.
                           Elle était sûre que Hartman envoyait des fleurs à une femme dont il était amoureux et qui l'aimait.
                            Elle avait donc le même sentiment que la collègue de Bertrand Hartman.
                             Décidément, il faut faire confiance à l'intuition féminine, se dit Billot,
                              et il décida d'aller jeter un coup d'œil rue Saint-Paul, au domicile de cette Barbara Auteuil,
                               qui aimait les roses jaunes. 
 
                </Text>

                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Billot sonna chez la concierge. Elle avait l'air de bien connaître Barbara Auteuil. qui habitait l'immeuble depuis trois ans.
                 « Il faut vous dire que je ne passe pas mon temps à observer mes locataires, dit la concierge, j'ai trop à faire. »
                  En fait, elle savait beaucoup de choses et elle avait envie de parler. Mme Auteuil recevait souvent la visite d'un homme.
                   D'après sa description, c'était Hartman. Et ils sortaient tous les deux la main dans la main, comme des amoureux.
                    Un couple charmant ! Il y avait presque une semaine que Barbara Auteuil était partie en vacances.
                     Elle avait laisse une adresse où faire suivre son courrier. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Comme la concierge commençait à distribuer le courrier,
                 Billot en profita pour lire l'adresse de Barbara dans les papiers éparpillés sur la table de la petite loge :
                  elle était à Castelbrac, dans les Corbières. 
                </Text>
                
                </Body>
            </CardItem>
          </Card>
        




          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
           آیا شما برنارد هارتمن را میشناسید ؟
          </Text>
            </CardItem>
          
          <CardItem>
            <Body >
              
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
                آلبرت بیلوت تصمیم گرفت که به سه یا چهار بار اطراف ساختمان فرنالت سربزند. چه کسی میداند شاید ما بتوانیم
                به او درمورد هارتمن اطلاعاتی بدهیم. ما همه به یک اندازه از او اطلاع داریم. او هرروز صبح صبحانه اش را میل میکرد.
                خدمتکار از او خوشش می آمد : یک مرد محتاط ، جذاب ، 35 تا 40 ساله ، اصلاً او آدم بدی نبود ، خدمتکار او را تحسین میکرد.
                گلفروش مغازه Bouton d'or ، مغازه بغلی ، که داشت در کانتر اسپرسو میخورد ، همچنین او را شناخت.
                 به مدت چند ماه او یکی از مشتریانش بود ، بیلوت که علاقمند به این موضوع بود ، کنار او نشست.
                 گلفروش از اینکه به سوالهای او جواب میداد خوشحال بود. او گفت که هارتمن بیشتر اوقات گل میخرید ، همیشه گل رز زرد میخرید و اینکه
                 دو یا سه بار هارتمن از گلفروش خواسته که دسته گل را به آدرسی در خیابان سنت پل در محله لومری تحویل دهد.
                 بیلوت از او پرسید آیا میتواند آدرس را پیدا کند. گلفروش میخواست سعی کند آدرس را پیدا کند  اما باید بیلوت به دنبال گلفروش
                 به مغازه میرفت و به او وقت میداد تا در کاغذهایش دنبال آدرس بگردد.
                 زمانی که او داشت دنبال آدرس میگشت او نظرش در مورد هارتمن را میگفت.
                 او مطمئن بود که هارتمن گلها را برای زنی میفرستاد که عاشقش بود و او را دوست داشت.
                 او همان حسی را داشت که همکار برنارد هارتمن در مورد او داشت .
                 بیلوت میگوید قطعاً ما باید به حس زنانه اعتماد کنیم و او تصمیم میگیرد که سری به خیابان سنت پاول که خانه
                 باربارا اوتیل که رزهای زرد را دوست داشت بزند.

              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
               بیلوت زنگ خانه مسئول مجتمع را زد.
               به نظر میرسید که او باربارا اوتیل را که سه سال است در آن ساختمان زندگی میکند به خوبی میشناسد.
               من باید به شما بگویم که من وقتم را صرف تحت نظر گرفتن مستاجرانم نمیکنم ، این جمله را مسئول ساختمان میگوید ، من کارهای زیادی
               دارم. درحقیقت او چیزهای زیادی میدانست و میخواست صحبت کند.  اغلب مواقع یک مرد به دیدارخانم اوتیل می آمد.
               طبق توصیف او آن مردآقای هارتمن بود. و این دو دست در دست هم مثل دو عاشق با هم بیرون میرفتند.
               یک زوج جذاب ! تقریباً یک هفته بود که باربارا به تعطیلات رفته بود. او آدرسی جدید برای دریافت نامه هایش گذاشته بود.


              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
                زمانی که مسئول ساختمان شروع به توزیع نامه ها کرد ، بیلوت از فرصت استفاده کرد تا آدرس باربارا را از روی نامه های پخش 
                شده روی میز اتاق دربان  بخواند : او در تفریحگاه ساحلی کستل براک در منطقه کوربیر بود.
              </Text>
              </Body>
              </CardItem>
              </Card>




              <Card>
          <CardItem header>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>Une nouvelle vie</Text>
            </CardItem>
            <CardItem>
                <Body>
                
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Billot n'était pas mécontent de faire un petit voyage à Castelbrac, aux frais de Fernault. Il faisait un beau soleil 
                de septembre quand il arriva au Cadeyer, la propriété des Auteuil. Au village, il avait appris que César Auteuil 
                était décédé six mois auparavant et que, cette année, c'était sa nièce, Barbara, qui dirigeait les vendanges. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Jusqu'à aujourd'hui, je n'ai jamais eu l'impression que Noël était important pour moi,
                 sauf quand j'étais petite, à cause du Père Noël et des cadeaux. Et pourtant, hier soir, je ne jouais pas la comédie.
                  Je pensais avec émotion à ma famille, à mes amis du bord du Rhin. C'est peut-être ridicule,
                   mais il me semblait que je comprenais tout d'un coup, pour la première fois peut-être, ce que représentait Noël :
                    message d'amour. En plein désert, dans ce campement, avec quatre Touaregs et six chameaux, sous un ciel plein d'étoiles,
                     je suis plus proche des origines que tous les chrétiens d'Europe... 
                    Peut-être que je me suis fabriqué moi-même une petite crise de mal du pays, tout bêtement. 
                </Text>
    
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Il était presque midi et les vendangeurs étaient en train du manger au soleil, devant la maison. Il y avait 
                tellement de monde que personne ne faisait attention à Billot. Les vendangeurs s'adressaient amicalement à une 
                jeune femme, en l'appelant patronne. un homme plus âgé que les autres invita les jeunes à faire attention à ce 
                qu'ils disaient car « l'homme de la patronne » était là. Tout le monde rit. Billot reconnut alors Bertrand Hartman, 
                assis à côté de la « patronne », qui mangeait avec appétit. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                L'entretien avec Barbara et Bertrand fut très sympathique. Bertrand, un peu mal à l'aise quand Billot se 
                présenta, avoua qu'il était parti sans rien dire parce qu'on aurait essayé de le retenir et qu'il ne savait pas s'il 
                aurait pu résister. Du Murier voulait le garder auprès de lui à cause d'un prototype de formule 1. Et puis Fernault, 
                c'était un peu sa famille, il y travaillait depuis 15 ans. Mais maintenant, il était plus sûr de lui. Barbara et lui 
                avaient décidé de se marier, de s'installer dans la propriété et d'exploiter le vignoble... 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Hartman téléphona lui-même à Du Murier pour lui expliquer sa décision. Le patron de Fernault demanda à parler 
                à Billot qu'il remercia pour son efficacité. Du Murier était déçu, mais il aimait trop Hartman pour lui en vouloir. 
                Sur l'autoroute en direction de Paris, Billot pensait que, lui aussi, il aurait bien aimé s'installer dans une propriété
                 des Corbières, mais qu'aucune femme ne le lui avait encore proposé. 
                </Text>
                </Body>
            </CardItem>
          </Card>
        




          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
           یک زندگی جدید
          </Text>
            </CardItem>
          
          <CardItem>
            <Body >
 
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
                بیلوت از اینکه به یک سفر کوتاه به کستل براک با هزینه فرنالت برود بدش نمی آمد. زمانی که به ملک خانواده اوتیل
                در منطقه کادور رسید خورشید زیبای ماه سپتامبر در آسمان میدرخشید. در دهکده فهمید که سزار اوتیل 6 ماه پیش فوت کرده است و
                امسال خواهرزاده اش باربارا از تاکستان برداشت میکند.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
                نزدیک های ظهر بود که انگورچین ها داشتند زیر آفتاب جلوی خانه خانواده اوتیل نهار میخوردند.
                افراد زیادی وجو داشتند که هیچکدامشان به بیلوت توجه نمیکرد.
                انگورچینها با یک زن جوان دوستانه برخورد میکردند و او را رئیس صدا میزدند.
                یک مرد مسن از جوانها خواست تا به چیزی که گفته اند توجه بیشتری کنند چون شوهر رئیس آنجا بود. همه خندیدند.
                بیلوت ، برنارد هارتمن را شناخت ، بغل رئیس نشسته بود و با اشتها غذا میخورد.

              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
               گفتگو با باربارا و هارتمن خیلی دوستانه بود. برنارد زمانی که بیلوت خودش را معرفی کرد کمی ناراحت بود.
               او گیج شده بود که بدون گفتن به هیچکسی آنجا را ترک کرده بود ، چون آنها اگر سعی میکردند جلویش را بگیرند نمیدانست مقابل 
               آنها مقاومت میکند یا نه. آقای موریر میخواست او را نزدیک خودش نگهدارد تا نمونه اولیه فرمول 1 تکمیل شود.
               و درثانی شرکت فرنارد خانواده کوچک او بود که 15 سال در آنجا کار کرده است. اما حالا او از خودش مطمئن تر شده بود.
               باربارا و او تصمیم گرفتند باهم ازدواج کنند و در مزرعه ساکن شوند و از تاکستان بهره برداری کنند.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              هارتمن ، خودش با موریر تماس گرفت تا تصمیمی که گرفته بود را برای او توضیح دهد.
              رئیس شرکت فرنالت درخواست کرد تا با بیلوت صحبت کند و از تلاشهای موثرش تشکر کند.
              آقای موریر نا امید شده بود ولی هارتمن را بیشتر از آن چیزی دوست داشت که سرزنشش کند.
              در بزرگراه پاریس بیلوت فکر کرد که خودش هم خیلی دوست دارد که در مزارع رشته کوه های کوربیر ساکن شود.
              ولی هیچ زنی تاکنون به او چنین پیشنهادی نداده است.
              </Text>
              </Body>
              </CardItem>
              </Card>

        


             

        
          </ScrollView>
      </Container>
    );
  }
}
