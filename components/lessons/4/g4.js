import React, { Component } from 'react';
import { Container,Header,Left,Button,Icon, Body, Right, Card,CardItem,Text,View, List, ListItem} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import {Animated,Dimensions} from 'react-native'



export default class G3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
   
    
  }


  render() {
    return (
      <Container >
         <Header>
           <Left >
           <Button onPress={()=>this.props.navigation.goBack()} transparent>
            <Icon name="arrow-back" />
            </Button>
            </Left>
            <Body/>
            <Right/>
         </Header>
         <ScrollView >
         <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',borderBottomLeftRadius:50,borderTopRightRadius:50,borderTopLeftRadius:20,borderBottomRightRadius:20}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>صرف فعل : زمان حال شرطی </Text>
              </CardItem>
              <CardItem  style={{flexDirection:'row-reverse'}} >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                   یک جمله شرطی از دو بخش تشکیل شده است جمله شرطی و جمله نتیجه برای مثال جمله زیر را
                  در زبان فارسی در نظر بگیرید "اگر باران ببارد من بیرون نمیروم" جمله اگر باران ببارد جمله شرطی و جمله من بیرون نمیروم جمله
                  نتیجه است برای ساخت جمله شرطی در زمان حال ابتدا ریشه زمان آینده فعل را از جمله جدا میکنیم (برای بدست آوردن ریشه زمان آینده
                  به کافه فرنچ 1 مراجعه شود) و پسوندهای زمان ماضی بعید ( ais , ais , ait , ions , iez , aient)
                  را به ریشه آینده فعل اضافه میکنیم و در ضمن هیچ استثانایی وجود ندارد برای مثال فعل aimer را در نظر بگیرید
                  ریشه آینده آن aimer است حال برای ساخت جمله حال شرطی کافی است پسوند ais را به انتهای آن اضافه کنیم .
                  </Text>
                  
                </Body>
              </CardItem>
           </Card> 
           <Card>
             <CardItem style={{flexDirection:'row',backgroundColor:'lightgreen'}}>
               
               
                    <Body style={{flexDirection:'column',}}>
                    <Text style={{fontWeight:'bold'}}>مصدر زمان حال</Text>
                    <Text>aimer</Text>
                    <Text>être</Text>
                    <Text>aller</Text>
                    <Text>venir</Text>
                    <Text>faire</Text>
                    <Text>vouloir</Text>
                    </Body>
                    <Body style={{flexDirection:'column'}}>
                    <Text style={{fontWeight:'bold'}}>مصدر زمان آینده</Text>
                    <Text>j'aimerai</Text>
                    <Text>tu seras</Text>
                    <Text>il ira</Text>
                    <Text>nous viendrons </Text>
                    <Text>vous ferez</Text>
                    <Text>ils voudront</Text>
                    </Body>
                    <Body style={{flexDirection:'column'}}>
                    <Text style={{fontWeight:'bold'}}>زمان حال شرطی</Text>
                    <Text>j'aimerais</Text>
                    <Text>tu serais</Text>
                    <Text>il/elle irait</Text>
                    <Text>nous viendrions</Text>
                    <Text>vous feriez </Text>
                    <Text>ils voudraient</Text>
                    </Body>
             </CardItem>
           </Card>


           <Card>
              <CardItem >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   از زمان حال شرطی برای موارد زیر استفاده میکنیم
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   یک در خواست مودبانه :
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Tu pourrais m'aider ?
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   میتونید بهم کمک کنید؟
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   بیان کردن یک آرزو:
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  J'aimerais voyager.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من آرزو دارم به مسافرت بروم.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   بیان کردن یک احتمال:
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Un foulard, ça lui ferait plaisir ?
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  یک روسری ، اون رو خوشحال میکنه ؟
                  </Text>
                </Body>
              </CardItem>
           </Card> 



           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',borderBottomLeftRadius:50,borderTopRightRadius:50,borderTopLeftRadius:20,borderBottomRightRadius:20}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>نقل قول غیر مستقیم بخش دوم : تطابق زمانی</Text>
              </CardItem>
              <CardItem  >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  زمانی که بخواهیم جمله ای را که شخصی به ما گفته به شخص دیگری بگوییم از نقل قول غیر مستقیم استفاده میکنیم
                  مثال 
                   Antoine : Est-ce que christine m'aime encore ? آنتوان : آیا کریستین هنوز مرا دوست دارد
                   این جمله ، جمله ای است که توسط شخصی دیگر گفته شده است جمله ای که ما نقل میکنیم به این صورت است
                   Antoine se demande si christine l'aime encore. آنتوان پرسید آیا کریستین هنوز او را دوست دارد
                   در جمله نقل شده قبلی چون زمان وقوع سوال در زمان حال است زمان فعل se demande نیز زمان حال است وتغییری نمیکند.
                   و زمان فعل جمله نقل شده که در اینجا aimer است نیز چون در زمان حال صرف شده تغییری نمیکند
                   مثال بعدی جمله ای است که در زمان حال گفته شده ولی سوال در مورد زمان آینده است 
                   Antoine : Est-ce que christine reviendra ?
                   آنتوان : آیا کریستین برخواهد گشت ؟
                   جمله گفته  شده بالا در زمان حال است اما فعل آن در زمان آینده است به جمله نقل شده توجه کنید 
                   Antoine se demande si christine reviendra. آنتوان پرسید آیا کریستین بازخواهد گشت .
                   در این جمله نقل شده نیز همانند حالت جمله قبل عمل میکنیم و با این تفاوت که اگر فعل جمله گفته شده که
                   در اینجا فعل reviendra است در
                   زمان آینده بود فعل جمله نقل شده نیز در زمان آینده باید صرف شود. اما اگر سوال در زمان گذشته ساده یا گذشته استمراری پرسیده شده باشد
                   و فعل جمله سوال شده در زمان حال باشد فعل se demande در زمان گذشته ساده یا گذشته استمراری (imparfait)
                   صرف میشود و فعل جمله  باید مطابق با زمان ماضی نقلی صرف شود. مثال 
                   Antoine: Est-ce que Christine m'aime encore ? 
                   آنتوان : آیا کریستین هنوز مرا دوست دارد ؟ (سوال در زمان گذشته پرسیده شده مثلاً دیروز پرسیده شده) برای
                   تبدیل این جمله به صورت زیر عمل میکنیم
                   Antoine se demandait/s'est demandé si Christine l'aimait encore.
                   آنتوان پرسید آیا کریستین او را هنوز دوستش داشت
                   در حالت بعدی فعل اصلی جمله گفته شده در زمان آینده است در این حالت فعل se demande مثل حالت قبلی در زمان گذشته ساده یا
                   گذشته استمراری صرف میشود ولی فعل اصلی جمله در زمان شرطی صرف میشود مثال :
                   Antoine: Est-ce que Christine reviendra ?
                   آنتوان : آیا کریستین باز خواهد گشت ؟ (سوال در زمان گذشته پرسیده شده)
                   جمله نقل شده به این صورت است 
                   Antoine se demandait/s'est demandé si Christine reviendrait.
                   آنتوان پرسیده بود آیا کریستین برخواهد گشت.
                  </Text>


                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,fontWeight:'bold',backgroundColor:'red'}}> 
                   نکته : زمان جمله پیرو در جمله نقل شده از زمان فعل اصلی در جمله گفته شده پیروی میکند.
                   </Text>

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end',fontWeight:'bold',backgroundColor:'red'}}>
                  نکته : از زمان شرطی برای بیان آینده در گذشته استفاده میکنیم (جمله آخر)
                  </Text>

                   
                </Body>
              </CardItem>
           </Card> 



           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',borderBottomLeftRadius:50,borderTopRightRadius:50,borderTopLeftRadius:20,borderBottomRightRadius:20}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>ضمایر موصولی مرکب : A qui , Auquel , pour qui , pour lequel ,avec qui</Text>
              </CardItem>
              <CardItem  >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                ضمایر موصولی به منظور وصل کردن دو جمله به یکدیگر استفاده میشوند و در زبان فارسی 
                به معنای که ترجمه میشوند ضمایر موصولی به 2 دسته ساده و مرکب تقسیم میشوند از دسته ساده 
                میتوان ضمیر qui و que را مثال زد اما ضمایر موصولی مرکب از دو قسمت تشکیل شده اند قسمت اول حرف اضافه و قسمت دوم همان ضمایر موصولی ساده میباشد
                مثل A qui , Auquel , ....
                ضمایر موصولی در کل از نظر جنسیت (مذکر، مونث و خنثی) و شمار (مفرد و جمع) با اسمی که جاگزین آن می‌شود، تطابق پیدا می‌کنند مثال
                </Text>


                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  Les amis sont d'accord. J'ai écrit à ces amis.  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  دوستان حالشان خوب است. من به دوستانم نامه نوشتم  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Les amis à qui j'ai écrit sont d'accord. 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   دوستانی که من به آنها نامه نوشتم حالشان خوب است.
                  </Text>

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                   Les amis auxquels j'ai écrit sont d'accord.  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   دوستانی که من به آنها نامه نوشتم حالشان خوب است
                  </Text>
                   
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,fontWeight:'bold',backgroundColor:'red'}}> 
                   نکته : حروف اضافه  À, pour, avec, par, sur,...+ qui فقط برای اشخاص بکار میروند.
                   </Text>
                   <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                   J'ai un cours auquel je dois assister.  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من یک کلاس دارم که باید در آن حضور پیدا کنم.  
                  </Text>

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  C'est une amie pour qui/pour laquelle j'ai beaucoup d'estime.  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  این دوستی است که من برای او احترام زیادی قائل هستم.
                  </Text>

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,fontWeight:'bold',backgroundColor:'red'}}> 
                   نکته : حروف اضافه pour , avec , en , sur + lequel , laquelle , lesquels , lesquelles برای اشیا و ایده ها بکار میروند
                   و همچنین احتمال دارد که برای اشخاص  بکار روند.
                   </Text>
                   <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                   J'ai un cours. Je dois assister à ce cours.  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  من یک کلاس دارم . من باید در این کلاسها حضور داشته باشم.
                  </Text>

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  J'ai un cours auquel je dois assister.  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   من کلاسی دارم که باید در آن حضور پیدا کنم.
                  </Text>



                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  Les lettres venaient de France. J'ai répondu à ces lettres.  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  نامه ها از فرانسه آمدند. من به این نامه ها جواب داده ام.
                  </Text>

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Les lettres auxquelles j'ai répondu venaient de France.  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   نامه هایی که من جواب دادم از فرانسه آمده بودند.
                  </Text>



                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,fontWeight:'bold',backgroundColor:'red'}}> 
                   نکته : À + lequel = auquel, à laquelle, auxquels, auxquelles 
                   باید توجه داشت که از auquel برای مفرد مذکر و auxqueles برای جمع مذکر استفاده میشود و همچنین زمانی که
                   جنسیت مونث بود از  à laquelle برای حالت مفرد و از auxquelles برای حالت جمع استفاده میشود.
                   </Text>
                </Body>
              </CardItem>
           </Card> 

           </ScrollView>
         </Container>
    )
  }
}
