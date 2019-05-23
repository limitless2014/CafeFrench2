import React, { Component } from 'react';
import { Container,Header,Left,Button,Icon, Body, Right, Card,CardItem,Text,StyleProvider} from 'native-base';
import {Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/platform';


export default class G3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
   
    
  }


  render() {
    return (
      <Container >
        <StyleProvider androidStatusBarColor='#000' style={getTheme(material)} >
         <Header>
           <Left >
           <Button onPress={()=>this.props.navigation.goBack()} transparent>
            <Icon name="arrow-back" />
            </Button>
            </Left>
            <Body/>
            <Right/>
         </Header>
         </StyleProvider>
         <ScrollView >
         <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',padding:5}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>حالت مجهول</Text>
              </CardItem>
              <CardItem  style={{flexDirection:'row-reverse'}} >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  جملات از نظر نوع رابطه با فاعل به دو دسته معلوم و مجهول تقسیم میشود.
                   در جملات معلوم فاعل جمله مشخص است اما در جملات مجهول به طور مستقیم به فاعل اشاره نمی‌شود بلکه به طور غیرمستقیم در انتهای جمله به آن اشاره می‌شود. 
                   از جملات مجهول زمانی استفاده میشود که فاعل یا انجام دهنده کار اهمیت چندانی نداشته باشد،
                   ناشناخته باشد و یا اینکه کار انجام شده دارای اهمیت بیشتری باشد.
                   از حالت مجهول در تمام زمانها استفاده میشود برای ساخت جمله مجهول فعل etre را متناسب با زمان
                   دلخواه صرف میکنیم و سپس شکل سوم فعل را می آوریم ، شکل سوم فعل همیشه از فاعل فعل etre پیروی میکند.
                  </Text>
                  

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  présent : Au xviiie siècle, le français est parlé par une petite partie de la population   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  زمان حال : در قرن هجدهم ، در بخش کوچکی از جمعیت فرانسوی صحبت می شد
                  </Text>
                  
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  imparfait : Avant la Révolution, la France était divisée en régions autononnes.   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  گذشته ناتمام : قبل از انقلاب ، فرانسه به بخش های خودمختاری تقسیم شده بود.
                  </Text>

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  futur simple : À Paris, on donne les ordres qui seront exécutés en province.    
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  آینده ساده : در پاریس ، ما دستوراتی را میدهیم که در استانها اجرا خواهند شد .
                  </Text>

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  futur proche : La vie en Europe va être transformée par l'Union européenne.    
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  آینده نزدیک : زندگی در اروپا به وسیله اتحادیه اروپا متحول خواهد شد.
                  </Text>

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  passé récent : Un meilleur équilibre entre la capitale et la province vient d'être trouvé.     
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  زمان گذشته نزدیک : یک توازن بهتر بین پایتخت و استانها به تازگی پیدا شده است.
                  </Text>


                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  passé composé : La France a été profondément transformée au xxe siècle.      
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  ماضی نقلی : در قرن بیستم فرانسه به طور وسیعی متحول شده است.
                  </Text>


                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  conditionnel : Sans l'Europe, le breton serait-il encore parlé aujourd'hui en France ?       
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  شرطی : به جز اروپا ، آیا هنوز برتونی امروزه در فرانسه تکلم میشود ؟
                  </Text>
                   
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  subjonctif : On ne craint plus que les langues régionales soient interdites.       
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  وجه التزامی : ما دیگر از اینکه زبانهای محلی ممنوع باشند نگران نیستیم.
                  </Text>


                  
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
                   نکته : افعال لازم (فعلی است که به مفعول نیازی نداشته باشد ) حالت مجهول ندارند.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold'}}>
                  کاربرد جملات مجهول :
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   برای جلب توجه به عمل یا نتیجه آن به این دلیل که فاعل شناخته شده نیست یا اهمیتی ندارد.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Le territoire national est divisé en départements.        
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  سرزمین ملی به بخشهایی تقسیم میشود.
                  </Text>

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Les langues régionales sont enseignées en France après avoir été souvent interdites        
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  زبانهای محلی بعد از اینکه بارها آموزش آنها در فرانسه ممنوع بود ، آموزش داده میشوند.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   برای نشان دادن انجام دهنده عمل از حرف اضافه par استفاده میکنیم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Au XViiie siècle, le français est parlé par une petite partie de la population seulement.         
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  در قرن هجدهم ، فرانسوی تنها در بخش کوچکی از جمعیت تکلم میشد.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   جملات مجهول اکثراً در زبان نوشتاری استفاده میشوند. در زبان گفتاری گاهی اوقات آن را با یک عبارت غیر شخصی با ضمیر on
                   یا یک فعل دو ضمیره جایگزین میکنیم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Dans le Sud, on parle occitan.         
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  در جنوب ، زبان اکسیتان تکلم میشود.
                  </Text>

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  L'administration se modernise.          
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  دولت مدرنیزه  میشود.
                  </Text>









                </Body>
              </CardItem>
           </Card> 

           

           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',padding:5}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>ضمایر ملکی : LE MIEN</Text>
              </CardItem>
              <CardItem  >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                ضمایر ملکی یا ضمایر ملکی مستقل (به فرانسوی le pronom possessif) به تنهایی (بدون همراهی یک اسم) مورد استفاده قرار میگیرند.
                 معمولا در جملات اسمی که ضمیر به آن اشاره می کند پیشتر مورد اشاره قرار گرفته و حالا با ضمیر جایگزین می شود.
                  این ضمایر نیز با توجه به جنسیت یا مفرد و جمع بودن اسمی که به آن اشاره می کنند تغییر می کنند.  
                  ضمایر ملکی را نباید با صفات ملکی اشتباه گرفت ، صفات ملکی  با اسم همراه هستند ولی ضمایر ملکی به تنهایی معنی میدهند.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  C'est votre numéro direct ? - Non, ce n'est pas le mien (= ce n'est pas mon numéro).    
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  شماره مستقیم شماست ؟ نه مال من نیست (= شماره من نیست).
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Le sien ou le vôtre, pour nous c'est la même chose (= son numéro ou votre numéro, pour nous, c'est la même chose).      
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  مال او یا مال شما ، برای ما فرقی نمیکند (= شماره او یا شماره شما برای ما فرقی نمیکند).
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                   جدول زیر صفات ملکی و ضمایر ملکی را برای حالت های مونث ، مذکر ، جمع ، مفرد نشان میدهد ستون اول از
                   سمت چپ صفات ملکی و ستون دوم و سوم ضمایر ملکی میباشند.
                  </Text>
                  <Image style={{width:'100%'}} resizeMode='stretch' source={require('../../../assets/img/lessons/lesson12/g122.png')}/>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  باید به خاطر داشته باشیم زمانی که notre و votre را به صورت ضمیر ملکی استفاده میکنیم باید
                  از اکسنت سیرکونفلکس روی o آنها استفاده کنیم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  نکته : ضمایر ملکی میتوانند با تمام حروف اضافه استفاده شوند.
                  </Text>
                </Body>
              </CardItem>
           </Card> 




           
           </ScrollView>
         </Container>
    )
  }
}
