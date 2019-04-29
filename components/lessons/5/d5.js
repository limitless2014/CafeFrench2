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
          <Text>La ville aujourd'hui</Text>
            </CardItem>
            <CardItem>
                <Body>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Aujourd'hui, les grandes villes de plus de 200 ООО habitants gagnent  des habitants et du terrain.
                 Tout le monde se plaint de la pollution, du stress, du temps perdu dans les transports en commun, des loyers trop élevés,
                  et pourtant trois Français sur quatre habitent 
                en zone urbaine. Quand on est jeune et qu'on veut travailler, 
                on n'a pas le choix : les emplois se trouvent en ville, pas en zone   
                rurale. Plus tard, parce qu'on a des enfants et qu'on ne veut pas être 
                trop loin du collège ou du lycée, on décide de rester. Dès qu'on est 
                à la retraite et qu'on pourrait enfin se retirer à la campagne, 
                on s'aperçoit qu'il est trop tard pour changer : on a ses amis, 
                ses habitudes. Peu de personnes choisissent librement le lieu 
                où elles vivent ! 
                </Text>
                <Image style={{width:'100%'}} resizeMode='stretch' source={require('../../../assets/img/lessons/lesson5/d51.png')}/>
                </Body>
            </CardItem>
          </Card>





          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
          شهر امروزی 
          </Text>
            </CardItem>
          
          <CardItem>
            <Body >
              
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              امروزه ، شهرهایی با جمعیت بیش از 200 هزار نفر مناطق مسکونی و زمین بیشتری تصرف میکنند.
              همه از آلودگی هوا ، استرس ، وقت تلف شده در حمل و نقل عمومی ، نرخ اجاره بالا شکایت دارند.
              و با این حال سه چهارم فرانسوی ها در مناطق شهری زندگی میکنند.
              زمانی که ما جوان هستیم و میخواهیم کار کنیم ما چاره دیگری نداریم :
              کارفرمایان در شهر بدنبال نیروی کار میگردند ، نه در مناطق روستایی.
              بعداً چون فرزند داریم و نمیخواهیم آنها خیلی دور از مدرسه یا دانشگاه باشند
              تصمیم میگیریم که آنجا بمانیم. زمانی که بازنشستگی ما فرا میرسد و ما تصمیم میگریم که بازنشستگی
              خود را در حومه شهر سپری کنیم ، متوجه میشویم که برای تغییر و تحول خیلی دیر شده است.
              ما دوستانی داریم ، عاداتی داریم. تعداد کمی از افراد آزادانه تصمیم میگیرند که کجا زندگی کنند.
              </Text>
              

              </Body>
              </CardItem>
              </Card>


        <Card>
          <CardItem header>
             <Icon type="FontAwesome" name="coffee"/>
             <Text>Vivre en province aujourd'hui </Text>
          </CardItem>
          <CardItem>
            <Body> 
            <Text style={{padding:5,textAlign:'justify',fontWeight:'bold',color:'blue'}}>
            Text A     
             </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                L'expérience de Pierre B. 
                « La vie y est bien plus douce, plus facile », répètent les 
                Parisiens qui annoncent leur déménagement en province. 
                Les embouteillages sont rares. Les gens sont souriants. Le 
                travail est moins stressant. Pierre est parti, il y a trois ans. 
                il rêvait d'une grande maison à dix minutes de la forêt, de 
                promenades au bord de la rivière... Cet été, Pierre a déci
                dé de rentrer. Où ? À Paris, bien sûr ! Problèmes de bou
                lot ? Non. il s'ennuie. Ses amis de la capitale viennent trop 
                rarement. Et, sur place, il ne s'est pas fait un seul vrai ami. 
                Il parlait de qualité de vie. Il parle maintenant de qualité 
                de relation. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold',color:'blue'}}>
                Text B     
                </Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Le témoignage de Marcel M. 
                Je vis dans le Gers. Je suis employé de banque. Le soir, 
                après le travail, je fais du vélo sur les petites routes. Les 
                gens ici prennent le temps de vivre. Et puis, il y a plein de 
                choses à faire dans une petite ville. À Marciac, pas loin 
                d'ici, il y a un des plus célèbres festivals de jazz de France. 
                Je me sens un privilégié. Je ne voudrais pas vivre dans une 
                grande ville. 
                </Text>
            </Body>
            </CardItem>
        </Card>

          
          


          

        <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
          زندگی در پرووانس (اسم یک شهر در فرانسه) امروزی
          </Text>
            </CardItem>
          
          <CardItem>
            <Body >
              <Text  style={{direction:"rtl",padding:5,fontWeight:'bold',color:'blue',alignSelf:'flex-end'}}>
              متن اول
              </Text>
              <Text  style={{direction:"rtl",padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
              تجربه پییر ب .
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              زندگی در آنجا خیلی با نشاط تر ، ساده تر است.
              این جمله را پاریسی هایی تکرار میکنند که با پرووانس اسباب کشی میکنند.
              ترافیک خیلی کم است. مردم خندان هستند. کار استرس کمتری دارد. پییر 3 سال است که نقل مکان کرده است.
              او رویای داشتن خانه ای را داشت که از جنگل ده دقیقه فاصله دارد.
              مسیر پیاده روی آن در امتداد رودخانه باشد... .
              این تابستان ، پییر تصمیم گرفته است که برگردد. کجا ؟ به پاریس ، البته!
              مشکلات شغلی ؟ نه او خسته شده است.
              دوستانش در پایتخت خیلی کم می آیند. و علاوه بر این او یک دوست واقعی پیدا نکرده است.
              او از کیفیت زندگی میگفت ، حالا او از کیفیت روابط میگوید.

              </Text>
              <Text  style={{direction:"rtl",padding:5,fontWeight:'bold',color:'blue',alignSelf:'flex-end'}}>
              متن دوم
              </Text>
              <Text  style={{direction:"rtl",padding:5,fontWeight:'bold',alignSelf:'flex-end'}}>
               گزارش مارسل ام.
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              من در مرکز شهر زندگی میکنم. من کارمند بانک هستم ، شبها 
              بعد از کارم در مسیرهای کوتاه دوچرخه سواری میکنم.
              مردم اینجا در لحظه زندگی میکنند.
              و همچنین ، چیزهای زیادی برای انجام دادن در یک شهر کوچک وجود دارد
              در شهر مارسیاک ، که خیلی از اینجا دور نیست ، یکی از فستیوال های معروف جاز در فرانسه برگزار میشود.
              من احساس رفاه میکنم ، من نمیخواهم درون یک شهر بزرگ زندگی کنم
              </Text>
              </Body>
              </CardItem>
              </Card>






              <Card>
          <CardItem header>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>Discussion en famille</Text>
            </CardItem>
            <CardItem>
            <Body>
            <Text  style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
            Les personnages :
            </Text>
            <Text  style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
            Sandrine, la mère : Robert, le père 
            </Text>
            <Text  style={{padding:5,textAlign:'justify',lineHeight:30,fontWeight:'bold'}}>
            Mathilde, la fille : Antonin, le fils 
            </Text>
            <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>SANDRINE :</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Allez, asseyez-vous. Votre père et moi, on a quelque chose à vous annoncer. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>ROBERT :</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Voilà, il s'agit de mon travail.
                </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>MATHILDE :</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Tu n'es pas au chômage, j'espère !
                </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>ROBERT :</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Non, mon directeur me propose une promotion et une augmentation de salaire.
                </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>MATHILDE :</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Chic, on va pouvoir s'acheter des VTT ! 
                </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>ROBERT :</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Attends, Mathilde. Le travail qu'on me propose n'est pas à Paris. il est à Auch. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>MATHILDE :</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Mais c'est très loin ! 
                </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>ROBERT :</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Ah oui ! Je ne peux pas rentrer le soir. Donc, si j'accepte la promotion, il faut déménager. 
                </Text>
               <Image style={{width:'100%'}} resizeMode='stretch' source={require('../../../assets/img/lessons/lesson5/d53.png')}/>
               <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>ANTONIN :</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                C'est-à-dire quitter le quartier ? 
                </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>SANDRINE :</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Oui, il faut quitter Paris.
                </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>MATHILDE :</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Ah bon, mais j'ai horreur de la campagne, moi, et puis si on déménage, je ne serai plus avec Nathalie et tous les copains. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>ANTONIN :</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Moi, je veux bien quitter mon collège. Le problème, c'est l'équipe de basket. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>SANDRINE :</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                À Auch, on habitera dans une maison avec un jardin. Les prix sont moins élevés qu'à Paris. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>MATHILDE :</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Si on a un jardin, on pourra avoir un chien ! 
                </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>SANDRINE :</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Oui, c'est possible. 
                </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>ROBERT :</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Votre mère et moi, on aura plus de temps pour être avec vous.
                </Text>
                <Text style={{padding:5,textAlign:'justify',fontWeight:'bold'}}>ANTONIN :</Text>
                <Text style={{padding:5,textAlign:'justify',lineHeight:30}}>
                Mais dans les petites villes il n'y a rien à faire. Tout le monde s'ennuie... 
                </Text>
            </Body>
          </CardItem>
          </Card>



          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>
           مشاجره خانوادگی
          </Text>
            </CardItem>
          
            <CardItem>
            <Body style={{flexDirection:'column',justifyContent:'space-evenly',alignItems:'flex-end'}} >
              <Text  style={{padding:5,fontWeight:'bold',}}>
              شخصیتها :
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              ساندرین مادر خانواده ، رابرت پدر خانواده
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              ماتیلد دختر خانواده ، آنتوان پسر خانواده
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              ساندرین :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              بروید ، بنشینید ، من و پدر شما چیزی را میخواهیم به شما اعلام کنیم.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              رابرت :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              بفرما ، در مورد کار منه
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              ماتیلد :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              امیدوارم کارت رو از دست نداده باشی !
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              رابرت :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              نه ، رئیس من به من پیشنهاد ترفیع کاری و افزایش حقوق را داد.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              ماتیلد :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              چه خوب ، میتوانیم دوچرخه کوهستان بخریم.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              رابرت :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              تند نرو ماتیلد ، کاری که به من پیشنهاد شده در پاریس نیست ، در شهر اوش است.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              ماتیلد :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              ولی خیلی دورتر از اینجاست.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              رابرت :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
             بله! من نمیتونم شبها برگردم ، خب ، اگر من ترفیع را قبول کنم باید اسباب کشی کنیم.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              آنتوان :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              به عبارتی ترک کردن این محله ؟
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              ساندرین :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              بله ، باید از پاریس خارج شویم.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              ماتیلد :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              آره خوب ، اما من از حومه خیلی متنفرم ، بعداً اگر اسباب کشی کنیم من نمیتونم با ناتالی و بقیه دوستام باشم.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              آنتوان:
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              من ، میخواهم دانشگاهم را ترک کنم ، مشکلم ، تیم بسکتبال است.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              ساندرین :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              در شهر اوش ، ما در خانه ای که یک باغ دارد زندگی میکنیم ، هزینه ها کمتر از پاریس هستند.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              ماتیلد :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              اگر یک باغ داشته باشیم میتوانیم یک سگ هم داشته باشیم!
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              ساندرین :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              بله ، این کار شدنی است.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              رابرت :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              مادر شما و من ، وقت بیشتری داریم تا با شما سپری کنیم.
              </Text>
              <Text  style={{padding:5,fontWeight:'bold',}}>
              آنتوان :
              </Text>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify',lineHeight:30}}>
              اما در شهرهای کوچک ، سرگرمی زیادی وجود ندارد ، همه حوصله اشون سر میره... .
              </Text>
              </Body>
              </CardItem>
              </Card>
              




          </ScrollView>
      </Container>
    );
  }
}
