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
          <Text>Les sondages : pourquoi et comment ? </Text>
            </CardItem>
            <CardItem>
                <Body>
                
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,color:'green',alignSelf:'center'}}>
                LES SONDAGES SERVENT-ILS A QUELQUE CHOSE ?
                </Text>
               

                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                La réponse est oui.  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                De quoi parlerait-on à la radio, à la télé, dans les journaux, s'il n'y avait pas de sondages ?
                 Mais soyons sérieux ! Prenons deux exemples. 
                 Pour organiser leur saison, les professionnels du tourisme doivent savoir dans quelle proportion les Français passeront
                  leurs vacances à la mer, à la montagne ou tout simplement chez eux. De même, la veille des grands weekends,
                   bien qu'il soit impossible d'éviter complètement les embouteillages,
                    on peut donner de bons conseils aux automobilistes quand on sait à quel moment de la journée ils ont l'intention de partir.
                     Ce sont toujours des sondages qui fournissent ces informations utiles. 
                </Text>
                <Image style={{width:'100%'}} resizeMode='stretch' source={require('../../../assets/img/lessons/lesson11/d111.png')}/>

               
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                Comment réalise-t-on un sondage ?   
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                En politique, par exemple : on veut savoir quel est l'homme politique préféré des Français.
                 On sélectionne 1ООО personnes représentatives de la population française et on les Interroge par téléphone.
                 On regroupe ensuite les réponses. Si 45 % des personnes interrogées disent qu'elles préfèrent monsieur Martin,
                 on peut en déduire qu'environ 45 % de l'ensemble de la population française préfère monsieur Martin.
                 Si, quelques semaines après, monsieur Martin passe de 45 % à 44 %, on peut dire qu'il reste stable :
                 la différence est trop faible pour qu'on puisse voir s'il baisse ou non. Mais,
                 s'il passe de 45 % à 35 %, on peut dire qu'il chute dans les sondages. 
                 Cependant, il ne faut pas croire que les sondages puissent vraiment résoudre tous les problèmes.
                 Ils donnent une indication sur l'opinion des gens à un moment donné,
                 mais ce n'est pas toujours une image fidèle de la réalité. En effet, 1 ООО personnes interrogées,
                 même si on les a bien choisies, ne peuvent pas répondre pour 60 millions de Français.
                 De plus, les sondés peuvent changer d'avis et ils ne disent 
                 pas toujours la vérité, bien que les réponses soient anonymes.
                 Pour qu'un sondage fournisse des données fiables, il ne suffit pas de poser les bonnes questions et d'interroger
                 un échantillon de personnes représentatif. il faut surtout savoir interpréter les réponses.
                 On peut tout faire dire aux chiffres : ainsi, avant des élections,
                 un parti de droite et un parti de gauche verront tous les deux dans un même 
                 sondage la confirmation de leur politique .
                </Text>
                </Body>
            </CardItem>
          </Card>
        




          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
           نظر سنجی ها : چرا و چگونه ؟
          </Text>
            </CardItem>
          
          <CardItem>
            <Body >
              
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'center',color:'green'}}>
              آیا نظر سنجی ها برای چیزی استفاده میشوند (کاربردی دارند)؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
              جواب بله است.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
               یک نفر از چه چیزی در رادیو ، تلویزیون ، روزنامه ها صحبت میکرد ، اگر نظر سنجی ای نبود؟
               جداً ! دو مثال را در نظر بگیرید. حرفه ای های گردشگری برای مدیریت کردن فصل شان باید بدانند که در کدام بخش
               فرانسه تعطیلاتشان را بگذرانند در دریا ، در کوهستان یا خیلی ساده تر در خانه خودشان. همینطور در آستانه تعطیلات آخر هفته
               طولانی. اگر چه اجتناب از ترافیک کاملاً غیر ممکن است  زمانی که بدانیم
               موتور سواران در چه زمانی از روز قصد حرکت را دارند ما میتوانیم آنها را بهتر راهنمایی کنیم .
               این نظرسنجی ها هستند که این اطلاعات سودمند را به ما میدهند. 
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
              چگونه نتایج نظر سنجی را بدست آوریم ؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
               در سیاست ، برای مثال : ما میخواهیم بدانیم چه کسی سیاستمدار محبوب فرانسوی ها است.
               هزار شخص را به نمایندگی از جمعیت فرانسویها انتخاب میکنیم و از آنها با تلفن سوال میپرسیم
               سپس جوابها را دسته بندی میکنیم اگر 45 درصد افراد مصاحبه شونده بگویند که آقای مارتین را ترجیح میدهند.
               ما میتوانیم نتیجه بگیریم که حدود 45 درصد از جمعیت کل فرانسویها آقای مارتین را ترجیح میدهند.
               اگر چند هفته بعد آقای مارتین از 45 درصد به 44 درصد تنزل کند ما میتوانیم بگوییم که محبوبیت او ثابت مانده است:
               تغییرات بسیار کم هستند که ما متوجه شویم. ولی اگر از 45 درصد به 35 درصد تغییر کند.
               ما میتوانیم بگوییم که او در نظر سنجی ها سقوط کرده است.
               به هرحال نباید باور داشته باشیم که نظر سنجی ها میتوانند تمام مشکلات را حل کنند. آنها اشاره ای به
               نظرات مردم در زمان انجام نظر سنجی میکنند ولی همیشه  یک تصویر از واقعیت نیستند.
               در واقع هزار نفری که مورد مصاحبه قرار گرفتند حتی اگر به خوبی انتخاب شوند
               بازهم نمیتوانند به نمایندگی از 60 میلیون فرانسوی پاسخ بدهند. علاوه بر این نظر سنجی ها میتوانند
               نظرات را عوض کنند و همیشه واقعیت را بیان نمیکنند.
               اگرچه جواب ها به صورت ناشناس هستند ، برای اینکه یک نظر سنجی داده های حساس را فراهم کند .
               این کافی نیست که سوال صحیح بپرسیم و از نمونه بارزی از افراد نظر سنجی کنیم.
               این مهم است که بدانیم چگونه جوابها را تفسیر کنیم.
               ما میتوانیم همه چیز را بر اساس اعداد بگوییم : پس از ، قبل از انتخابات ، حزب راست و چپ هردوی آنها تاییدیه سیاست هایشان
               را در یک نظر سنجی خواهند دید.
              </Text>
              </Body>
              </CardItem>
              </Card>


        <Card>
          <CardItem header>
             <Icon type="FontAwesome" name="coffee"/>
             <Text>Les sondages et vous</Text>
          </CardItem>
          <CardItem style={{backgroundColor:'green'}}>
            <Body> 
 
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                Chère lectrice, cher lecteur, Aidez-nous à mieux vous connaître en répondant aux questions suivantes. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                1. Trouvez-vous les sondages :  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                indispensables
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                plutôt utiles 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                plutôt inutiles 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                sans opinion 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                2. Si on vous le demandait, répondriez-vous aux questions d'un sondage ?   
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                oui, bien sûr 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                cela dépend du sujet 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                non, en aucun cas  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                sans opinion 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                3. Préférez-vous être interrogé :    
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                par courrier  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                par téléptnone 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                dans la rue 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                sans opinion 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                4. Qu'est-ce qui est le plus important, pour vous, dans un sondage ?    
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                les questions posées   
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                les personnes interrogées  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                l'interprétation des réponses 
                </Text>
                
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Merci de nous avoir répondu. Vous pourrez lire les résultats de ce sondage dans notre numéro d'été.   
                </Text>
                
            </Body>
            </CardItem>
        </Card>

          
          


          

        <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
          شما و نظرسنجی
          </Text>
            </CardItem>
          
          <CardItem style={{backgroundColor:'green'}}>
            <Body >
              <Text  style={{padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              خواننده عزیز (مرد ،زن) با پاسخ دادن به سوالات بعدی به ما کمک کنید تا شما را بهتر بشناسیم .
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
              1. شما چگونه نظر سنجی را میبینید ؟
              </Text>
              <Text  style={{padding:5,alignSelf:'flex-end',textAlign:'justify',lineHeight:30}}>
              ضروری
              </Text>
              <Text  style={{padding:5,alignSelf:'flex-end',textAlign:'justify',lineHeight:30}}>
              کاملاً مفید
              </Text>
              <Text  style={{padding:5,alignSelf:'flex-end',textAlign:'justify',lineHeight:30}}>
              کاملاً غیر مفید
              </Text>
              <Text  style={{padding:5,alignSelf:'flex-end',textAlign:'justify',lineHeight:30}}>
              نظری ندارم
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
              2. اگر ما از شما بخواهیم به سوالات یک نظر سنجی پاسخ دهید ؟
              </Text>
              <Text  style={{padding:5,alignSelf:'flex-end',textAlign:'justify',lineHeight:30}}>
              بله ، البته
              </Text>
              <Text  style={{padding:5,alignSelf:'flex-end',textAlign:'justify',lineHeight:30}}>
              بستگی به موضوع دارد
              </Text>
              <Text  style={{padding:5,alignSelf:'flex-end',textAlign:'justify',lineHeight:30}}>
              نه ، به هیچ وجه
              </Text>
              <Text  style={{padding:5,alignSelf:'flex-end',textAlign:'justify',lineHeight:30}}>
              نظری ندارم
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
              3.  ترجیح میدهید از چه طریقی با شما مصاحبه شود ؟
              </Text>
              <Text  style={{padding:5,alignSelf:'flex-end',textAlign:'justify',lineHeight:30}}>
              با ایمیل
              </Text>
              <Text  style={{padding:5,alignSelf:'flex-end',textAlign:'justify',lineHeight:30}}>
              با تلفن
              </Text>
              <Text  style={{padding:5,alignSelf:'flex-end',textAlign:'justify',lineHeight:30}}>
              در خیابان
              </Text>
              <Text  style={{padding:5,alignSelf:'flex-end',textAlign:'justify',lineHeight:30}}>
              نظری ندارم
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
              4. در یک نظر سنجی چه چیزی برای شما خیلی مهم است ؟
              </Text>
              <Text  style={{padding:5,alignSelf:'flex-end',textAlign:'justify',lineHeight:30}}>
              سوالاتی که پرسیده میشوند
              </Text>
              <Text  style={{padding:5,alignSelf:'flex-end',textAlign:'justify',lineHeight:30}}>
              مصاحبه شوندگان
              </Text>
              <Text  style={{padding:5,alignSelf:'flex-end',textAlign:'justify',lineHeight:30}}>
              تفسیر پاسخ ها
              </Text>
              
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              مرسی از اینکه پاسخ دادید ، شما میتوانید نتایج این نظر سنجی را در نسخه تابستانی مجله مشاهده کنید.
              </Text>
              </Body>
              </CardItem>
              </Card>





              <Card>
          <CardItem header>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>Les Français et la télévision </Text>
            </CardItem>
            <CardItem>
                <Body>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                On vit vingt ans de plus qu'en 1890. On travaille deux fois moins. Pourtant, chacun se plaint d'être toujours débordé !
                 Notre premier voleur de temps est la télévision. En France, elle est présente dans plus de 95 % des foyers et nous 
                retient en moyenne près de quatre heures par jour contre deux heures il y a dix ans.  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                Notre journaliste a posé la même question à quatre personnes différentes. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE JOURNALISTE :  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Combien de temps est-ce que vous passez devant la télé ? Quelles sont vos émissions préférées ? 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                PERSONNE A :   
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Je regarde la télé une heure et demie ou deux heures par jour environ. Le soir, à 8 heures, je regarde 
                les infos. Ensuite je fais la vaisselle pendant la pub et la météo. Puis, vers 9 heures, je cherche une émission 
                qui m'intéresse. J'aime surtout les reportages, les films sur les animaux.  
                </Text>  
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                PERSONNE B :   
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Moi, je n'aime que les films. Le reste ne m'intéresse pas. Alors, selon le programme, je passe de deux à 
                trois heures devant la télé.  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                PERSONNE C :   
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Je déteste passer la soirée devant la télé, mais je regarde quand même les informations. Je trouve que 
                les émissions sont nulles. Je préfère lire ou sortir.   
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                PERSONNE D :   
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Maintenant que je suis à la retraite, je passe beaucoup de temps devant la télé 
                Je zappe et je finis toujours par trouver une émission qui me plaît. J'aime les films comiques et je regarde 
                tous les matchs de foot. Malgré tout, je lis régulèrement le journal et je fais une partie d'échecs tous les soirs. 
                </Text>
                </Body>
            </CardItem>
          </Card>
        




          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
           فرانسویها و تلویزیون
          </Text>
            </CardItem>
          
          <CardItem>
            <Body >
              
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
              ما 20 سال بیشتر نسبت به کسانی که در سال 1890 زندگی میکردند ، زندگی میکنیم. دو برابر کمتر کار میکنیم.
              اما با این حال هرکدام از ما از اینکه همیشه زیر بار عظیمی از مشکلات هستیم شکایت میکنیم!
              اولین دزد زمان ما تلویزیون است. در فرانسه تلویزیون در میان بیش از 95 درصد از خانوارها حضور دارد
              و حداقل به طور متوسط 4 ساعت از وقت ما را در روز میگیرد در حالی که 10 سال قبل 2 ساعت از وقت ما را میگرفت.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
              خبرنگار ما همین سوالات را از چهار شخص مختلف پرسیده است.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
               خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
              شما چه مقدار از وقتتون را جلوی تلویزیون سپری میکنید ؟ برنامه های مورد علاقه شما چه هستند ؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
               شخص اول :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
               من تلویزیون را حدود یک ساعت و نیم تا 2 ساعت در روز تماشا میکنم. شبها ساعت 8 اخبار را میبینم.
               سپس زمانی که آگهی پخش میشود یا برنامه آب و هوا پخش میشود ظرفها را میشویم بعد از آن
               در حدود ساعت 9 به دنبال برنامه مورد علاقه ام میگردم. من مخصوصاً برنامه های گزارشی یا مستند ها را دوست دارم.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
               شخص دوم :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
               من  فقط فیلمها را دوست دارم . از بقیه برنامه ها خوشم نمی آید. طبق برنامه زمانی ام من 2 تا 3 ساعت را جلوی تلویزیون
               سپری میکنم.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
               شخص سوم :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
               من از اینکه شبها را جلوی تلویزیون سپری کنم متنفرم ولی با این وجود اخبار را تماشا میکنم.
               من فکر میکنم که برنامه ها هیچ اثری ندارند. من ترجیح میدهم کتاب بخوانم یا بیرون بروم.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
               شخص چهارم :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
               حالا که من بازنشسته شده ام ، من وقت زیادی را صرف تماشای تلویزیون میکنم.
               من همیشه در حال کانال عوض کردن هستم و در نهایت همیشه برنامه مورد علاقه ام را پیدا میکنم. 
               من فیلمهای کمدی را دوست دارم و همیشه مسابقات فوتبال را تماشا میکنم. با این وجود من به صورت منظم
               روزنامه میخوانم و هر شب یک دست شطرنج بازی میکنم.
              </Text>




              </Body>
              </CardItem>
              </Card>


        
          </ScrollView>
      </Container>
    );
  }
}
