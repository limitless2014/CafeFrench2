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
          <Text>Des bords du Rhin au Sahara </Text>
            </CardItem>
            <CardItem>
                <Body>
                
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE JOURNALISTE :  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Quand je vous vois entourée de vos amis, j'ai l'impression que votre 
                monde est ici. Et pourtant, vous repartez pour le Sahara. Pourquoi ?  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                ELISABETH SAUER :     
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Ici, j'ai des amis, ou plutôt des connaissances.
                 C'est vrai, ici je peux sortir, m'amuser, mais, comment dire,
                  j'ai l'Impression que toutes ces activités m'etourdissent,
                   qu'elles m'empêchent de vivre parce qu'elles cachent la vraie vie.  
                </Text>  
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE JOURNALISTE :   
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Vous recherchez la solitude ?    
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                ELISABETH SAUER :     
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Ce n'est pas ça. Dans le désert, je ne suis pratiquement jamais seule.
                 Ce que je veux dire, c'est que je veux être moi-même, faire des choses peut-être simples,
                  mais des choses que j'ai choisi de faire, sans que des amis, la publicité ou la mode, ne m'aient poussée à les faire.
                   Et je veux pouvoir aimer les gens pour ce qu'ils sont, pour ce qu'ils font, et non pas pour ce qu'ils ont. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE JOURNALISTE :   
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Vous fuyez la société de consommation ?  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                ELISABETH SAUER :  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Je ne dirais pas ça puisque j'en profile, même quand je suis en plein désert :
                 mon sac à dos, mes chaussures, par exemple sont des produits de celle société.
                  Pourquoi refuserais-je tout confort ? Disons que je recherche un monde naturel,
                   authentique, pour avoir des rapports humains plus francs. Bien que nous ne parlions pas beaucoup,
                    mes meilleures amies sont les femmes du désert. Vous savez que je fais de la peinture.
                     Regardez mes couleurs. C'est le Sahara qui me les a données. Je ne les aurais pas trouvées ailleurs. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                LE JOURNALISTE :     
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Depuis quand êtes-vous à la recherche de cette « authenticité » ?  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                ELISABETH SAUER :    
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Depuis toujours. Je n'ai pas connu mon père qui est mort avant ma naissance,
                 et ma mère m'a élevée seule en ne me laissant pratiquement pas de liberté.
                  Je crois que c'est par réaction que je rêvais d'aventures, que je voulais être libre,
                   que je ne voulais plus rester une petite gamine et - c'est une image - plus jouer seulement à la poupée.
                    Je tenais à montrer à tout le monde que je vivrais ma vie comme je le voudrais. 
                </Text>
                </Body>
            </CardItem>
          </Card>
        




          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
           از سواحل رودخانه راین (رودخانه ای در کشور آلمان) تا ساهارا (بیابانی در قاره افریقا)
          </Text>
            </CardItem>
          
          <CardItem>
            <Body >
 
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                هنگامی که شما را دیدم که توسط دوستانتان احاطه شده بودید ، حس کردم که دنیای شما همینجاست ، اما شما راهی ساهارا هستید چرا؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
              الیزابت سائر :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
               اینجا ، من دوستان یا آشنایان بیشتری دارم. این درسته که من اینجا میتونم بیرون بروم ، خودم را سرگرم کنم
               اما چطور بگم ، من حس میکنم که تمام این فعالیتها مرا گیج میکنند ، که آنها مانع زندگی کردن من میشوند بدلیل اینکه حقیقت زندگی
               را مخفی میکنند.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
              شما به دنبال تنهایی هستید ؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
              الیزابت سائر :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                این درست نیست. در بیابان من تقریباً هیچ وقت تنها نیستم. منظورم اینه که میخواهم خودم باشم.
                کارهای ساده ای را ممکنه انجام بدهم ، اما کارهایی را انجام میدهم که خودم انتخاب کرده ام ، بدون دوستان ، تبلیغات یا مد
                  که مرا مجبور به انجام این کارها کنند. و من میخواهم بتوانم مردم را برای آنچه که هستند، آن چیزی که انجام میدهند
                   دوست داشته باشم و نه برای اینکه چه چیزی دارند.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                آیا از جامعه مصرف کننده محور فراری هستید ؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
              الیزابت سائر :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
               من این را نمیگویم چون از آن سود میبرم ، حتی زمانی که در بیابان هستم :
               برای مثال کوله پشتی من ، کفشهایم محصول این جامعه هستند. چرا من تمام این ابزار راحتی را پس بزنم ؟
               بیایید اینطور بگوییم که من به دنبال یک دنیای طبیعی ، اصیل میگردم تا روابط انسانی صادقانه تری داشته باشم.
               اگرچه ما زیاد صحبت نمیکنیم ، بهترین دوستانم زنان صحرا هستند. شما میدانید که من نقاشی میکنم.
               به رنگهای نقاشی ام نگاه کنید این ساهارا است که به من آنها را داده است.
               من هیچ جای دیگری نمیتوانستم آنها را پیدا کنم.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
              خبرنگار :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
               از چه زمانی بدنبال این اصالت بودید ؟
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold',alignSelf:'flex-end'}}>
               الیزابت سائر :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                همیشه ، من از پدرم که قبل از تولد من مرده است شناختی ندارم و مادرم مرا به تنهایی بزرگ کرد و عملاً هیچ آزادی به من نداد.
                من فکر میکنم که این عکس العمل بود که باعث شد رویای ماجراجویی ، آزاد بودن را داشته باشم ، که من نمیخواستم بیشتر از این 
                یک دختر کوچک بمانم و این تنها یک تصور است که من دیگر تنها با عروسکهایم بازی کنم.
                من میخواستم به همه نشان دهم که من هرجور که دوست دارم زندگی میکنم
              </Text>
              </Body>
              </CardItem>
              </Card>






       
        <Card>
          <CardItem header>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>Biographie</Text>
            </CardItem>
            <CardItem>
                <Body>
                
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Elisabeth Sauer est née le 17 mars 1945 en Suisse, à côté de Bâle. Sa 
                mère est française, d'origine alsacienne. Elle n'a pas connu son père, 
                allemand, mort en 1944. Elle a passé toute son enfance dans la région de BâIe,
                 séjournant très souvent chez ses oncles et tantes français, à Mulhouse. Elle est parfaitement bilingue,
                  allemand et français, mais elle a toujours considéré le français comme sa langue.
                   Après des études secondaires sans problèmes,
                    elle a passé son diplôme de traductrice-interprète en français-allemand pour « avoir de quoi gagner sa vie ». 
                </Text>

                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Très tôt attirée par le désert, le Sahara en particulier, elle a eu la chance d'y accompagner un groupe comme interprète.
                 Depuis, elle s'est initiée à l'arabe. Vivant au début de traductions pour des entreprises suisses,
                  allemandes ou françaises, elle s'est aujourd'hui spécialisée dans la traduction de livres d'art et de livres sur le Sahara.
                   Curieusement, elle a refusé de traduire un livre sur les femmes touaregs,
                    sans doute par respect pour une culture qu'elle admire.  
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Depuis quelques années, Elisabeth Sauer fait de la peinture.
                 Elle essaie d'exprimer la couleur qu'elle dit tenir du désert lui-même.
                  Elle présente aujourd'hui ses dernières œuvres inspirées de récents voyages.
                   Femme engagée, elle a créé un petit cercle d'amis dans le but d'aider les femmes dans la zone saharienne.
                    Le produit des ventes de ses peintures doit financer son action au Sahara.   
                </Text>
                
                </Body>
            </CardItem>
          </Card>
        




          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
           زندگی نامه (بیوگرافی)
          </Text>
            </CardItem>
          
          <CardItem>
            <Body >
              
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
               الیزابت سائر متولد هفدهم مارس 1945 در سوئیس است ، در حوالی شهر بال (سومین شهر پرجمعیت سوئیس).
               مادرش فرانسوی است و اصلاتاً آلزایسی (استانی در فرانسه) . او پدر آلمانی اش را که در سال 1944 فوت کرد نمیشناخت.
               او تمام دوران کودکی اش را در منطقه بال گذراند ، او اغلب اوقات  در خانه عموهای(دایی های) و عمه های (خاله های) فرانسوی اش
               در شهر مولوز(در استان آلزایس) اقامت داشت. او یک دوزبانه بی نقص است ، آلمانی و فرانسوی را روان صحبت میکند
               ولی همیشه فرانسوی را به عنوان زبان اصلیش در نظر میگیرد.
               پس از گذراندن بی دردسر دوران متوسطه اش ، او دیپلم مترجمی - مفسری زبان فرانسه به آلمانی را گرفت "به اندازه ای که زندگی اش را بگذراند".
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
                خیلی زود او مجذوب صحرا شد ، بخصوص منطقه ساهارا ، او این شانس را داشت که بعنوان مترجم یک گروه را همراهی کند.
                از آن زمان او شروع به یادگیری مفاهیم اولیه زبان عربی کرد.
                اوایل مخارج زندگی اش را از ترجمه کردن برای شرکتهای سوئیسی ، آلمانی یا فرانسوی میگذراند ، او امروزه در ترجمه کتابهای هنری ، کتابهایی در مورد
                ساهارا تخصص دارد. به طرز شگفت انگیزی او ترجمه کتابی در مورد زنان قبیله طوارق را رد کرده است بدون شک این کارش به این دلیل بوده است
                که این کتاب بی احترامی به فرهنگی بوده است که او آن را تحسین میکند.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
               در سالهای اخیر الیزابت سائر مشغول به نقاشی بوده است. او سعی میکند تا مفاهیم رنگهایی را منتقل کند که او می گفت خود بیابان آنها را دربردارد.
               او امروزه آخرین آثار هنری اش را با الهام از سفرهای اخیرش ارائه میکند.
               او زنی متعهد(پایبند) به کارش است ، او به منظور کمک کردن به زنانی که در منطقه ساهارا هستند یک
               حلقه (گروه) کوچکی از دوستان ایجاد کرده است. درآمد حاصل از فروش نقاشی هایش پشتیبان مالی جنبش او در ساهارا هستند.
              </Text>
              </Body>
              </CardItem>
              </Card>




              <Card>
          <CardItem header>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>Carnet de voyage</Text>
            </CardItem>
            <CardItem>
                <Body>
                
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                Le 25 décembre, avant le petit déjeuner 
                </Text>

                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Ce matin, j'éprouve des sentiments contradictoires ! C'est le premier Noël que je passe loin de ma mère,
                 loin de chez moi, loin de mon village, loin de l'hiver Sans messe de minuit, sans sapin, sans bougies, sans chants de Noël,
                  sans cadeaux à donner ou à recevoir. Hier soir, après notre dîner, quand je me suis coiffée et habillée « comme si je 
                  sortais », tout le monde a compris qu'il se passait quelque chose d'important pour moi.
                   Ils m'ont tous laissée partir, mais je me demande ce qu'ils ont pensé quand j'ai allumé mes bougies « magiques » qui
                    lancent des étincelles dans tous les sens. 
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
                <Text style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
                Le 25 décembre, le soir 
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Tout à l'heure, Ahmed, notre cuisinier, le plus curieux et aussi le plus gentil de tous ces hommes 
                qui m'accompagnent, m'a demandé de lui expliquer Noël. Que vais-je lui raconter ? 
                </Text>

                </Body>
            </CardItem>
          </Card>
        




          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
           دفترچه خاطرات سفر
          </Text>
            </CardItem>
          
          <CardItem>
            <Body >
              
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
                25 سپتامبر ، قبل از صبحانه
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
               امروز صبح ، من احساسات متناقضی دارم ! این اولین عید کریسمسی است که من به دور از مادرم سپری میکنم ، به دور از خانه ام ، روستایم ، بدون مراسم 
               عشای ربانی ، بدون درخت کریسمس ، بدون شمعها ، بدون آهنگهای کریسمس ، بدون کادویی برای دادن یا گرفتن.
               دیشب بعد از شام هنگامی که موهایم را مرتب کردم و  لباس پوشیدم "مثل همیشه که بیرون میروم"
               همه متوجه شدند که یک اتفاق مهم برای من اتفاق افتاده است.
               همه آنها مرا ترک کرده بودند ، اما من از خودم پرسیدم آنها چگونه تصور میکنند هنگامی که من شمع های جادویی را که
               در همه جهات میدرخشند را روشن میکنم.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
               تا به امروز من هرگز حس نمیکردم که کریسمس آنقدر برای من مهم بوده است به جز زمانی که
               بچه بودم و بخاطر بابانوئل و کادوها این حس را داشتم.
               اما دیشب من نقش بازی نکردم. من با احساس درمورد خانواده ام ، دوستانم در سواحل رودخانه راین فکر میکردم.
               ممکنه خنده دار به نظر برسه شاید برای اولین بار باشه که به طور ناگهانی متوجه شدم که کریسمس نشاندهنده چیست: پیام عشق (نامه عاشقانه)
               در بحرو بیابان ، در چادر با چهار نفر از طایفه طوارق و شش شتر ، زیر آسمان پرستاره من از تمام اروپایی ها به ریشه های ... نزدیکتر
               هستم. شاید من خودم ، خودم را دچار بحران کوچک دلتنگی خانه کرده ام ، کاملاً احمقانه است
              </Text>

              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
              25 دسامبر ، شب
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
               درست همین حالا ، احمد آشپز ما ، کنجکاوترین و مهربانترین تمام مردهایی که مرا همراهی میکنند
               از من خواست تا برایش جشن کریسمس را توضیح دهم. چه چیزی من به او خواهم گفت ؟
              </Text>
              </Body>
              </CardItem>
              </Card>

        


             

        
          </ScrollView>
      </Container>
    );
  }
}
