import React, { Component } from 'react';
import { Container,Header,Left,Button,Icon, Body, Right, Card,CardItem,Text,View} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class G1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
         <Header>
           <Left >
           <Button onPress={()=>this.props.navigation.goBack()} transparent>
            <Icon name="arrow-back" />
            </Button>
            </Left>
            <Body/>
            <Right/>
         </Header>
         <ScrollView>
         <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,borderRadius:50,backgroundColor:'green'}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20}}>ضمایر موصولی Qui و Que</Text>
              </CardItem>
              <CardItem  style={{flexDirection:'row-reverse'}} >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  ضمایر موصولی  برای ربط دادن دو جمله استفاده میشوند  در این نوع جملات ضمیر qui میتواند نقش فاعل را و
                  همچنین نقش مفعول غیر مستقیم را در جمله دوم ایفا کند.
                    و ضمیر que میتواند نقش مفعول مستقیم را در جمله بگیرد.
                    ضمایر موصولی در زبان فارسی که معنی میشوند.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>Le festival réunit des artistes. Ces artistes ont du succès.</Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  فستیوال هنرمندان را دورهم جمع میکند. این هنرمندان موفق هستند  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Le festival réunit des artistes qui ont du succès. </Text>
                 
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  فستیوال هنرمندانی را دورهم جمع میکند که موفق هستند  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>Le festival réunit des artistes. Les jeunes aiment beaucoup ces artistes.
                  
                 </Text>
                 <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Le festival réunit des artistes que les jeunes aiment 
                  beaucoup.
                   </Text>

                 <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>فستیوال هنرمندان را دورهم جمع میکند . جوانان خیلی این هنرمندان را دوست دارند 

                 </Text>
                 <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                 فستیوال هنرمندانی را دورهم جمع میکند که جوانان دوست دارند
                 </Text>
                </Body>
              </CardItem>
           </Card> 





           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,borderRadius:50,backgroundColor:'green'}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20}}>ضمایر تاکیدی: این ... کسی ، این ... که</Text>
              </CardItem>
              <CardItem  style={{flexDirection:'row-reverse'}} >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  از ضمایر تاکیدی برای برجسته ساختن نقش یک شخص یا شی در جمله استفاده میشود به مثالهای زیر توجه کنید.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>Qui écrit les paroles : Nicola ou Dominique ?</Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  چه کسی شعرها را نوشته است : نیکلا یا دومنیک؟  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  C'est Nicola qui écrit les paroles </Text>
                 
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  این نیکلا است که شعرها را نوشته است  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Quel groupe est-ce que tu je préfères ? 
                 </Text>
                 <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  چه گروه موسیقی ای را تو به من پیشنهاد میدهی؟  
                  </Text>

                 <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  C'est le groupe Indochine que je préfère
                   </Text>

                 <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                 من به شخصه گروه اندوشن را ترجیح میدهم
                 </Text> 

                </Body>
              </CardItem>
           </Card> 








           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,borderRadius:50,backgroundColor:'green'}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20}}>سوالی کردن با جابجایی فاعل و فعل</Text>
              </CardItem>
              <CardItem  style={{flexDirection:'row-reverse'}} >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1,flexDirection:'column',justifyContent:'space-evenly',alignItems:'flex-end'}}>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                   سوال کردن با جابجایی فاعل و فعل اکثر مواقع در نوشتار استفاده میشود.
                    ما همچنین از این روش زمانی که سوالها کوتاه هستند در گفتار استفاده میکنیم.

                   </Text>
                  
                  <Text style={{padding:8,lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Aimez-vous votre métier ? </Text>
                 
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  آیا حرفه خودتان را دوست دارید؟  
                  </Text>
                  
                 <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  از روش فوق در سوال های جامع استفاده میکنیم (برای پرسیدن سوالاتی که با بله یا نه پاسخ داده میشوند)  
                  </Text>

                 <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Où trouvez-vous l'inspiration ? 
                   </Text>

                 <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                 از کجا شما الهام گرفته اید ؟
                 </Text> 

                 <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Pourquoi vous appelez-vous indochine ? 
                   </Text>
                   <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                   چرا شما را اندوشن می نامند ؟
                   </Text> 
                   <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                  Comment avez-vous découvert la musique rock ?  
                   </Text>
                   <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                   چگونه شما با موسیقی راک آشنا شدید ؟
                   </Text> 
                   <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                   از روش فوق در سوالات جزیی استفاده میشود (یک کلمه سوالی قبل از فعل می آید).
                   </Text> 
                  
                  <View style={{flexDirection:'row-reverse',alignItems:'center'}}>
                  <Icon name="hand-point-left" type="FontAwesome5" style={{fontSize:15,marginRight:4}} />
                   <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  ضمیر فاعلی قبل از فعل می آید. 
                   </Text>
                   </View>
                   <View style={{flexDirection:'row-reverse',alignItems:'center'}}>
                  <Icon name="hand-point-left" type="FontAwesome5" style={{fontSize:15,marginRight:4}} />
                   <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                   همیشه یک خط تیره بین فعل و ضمیر شخصی آید.
                   </Text>
                   </View>

                   <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                    Aimes-tu le jazz ?   
                   </Text>
                   <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                   تو موسیقی جاز را دوست داری؟
                   </Text> 


                   <View style={{flexDirection:'row-reverse',alignItems:'center',justifyContent:'space-around'}}>
                  <Icon name="hand-point-left" type="FontAwesome5" style={{fontSize:15,marginRight:4,paddingLeft: 8}} />
                   <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                   زمانی که فعل با یک حرف صدادار به اتمام میرسد و ضمیر شخصی با یک حرف صدادار شروع میشود حرف t را بین فعل و ضمیر شخصی اضافه میکنیم.
                   </Text>
                   </View>



                   <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                    Quel temps a-t-il fait hier?   
                   </Text>
                   <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                   دیروز هوا چطور بود ؟
                   </Text> 


                   <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                    Quel temps fera-t-il demain?   
                   </Text>
                   <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                   فردا آب و هوا چطور است ؟
                   </Text> 


                   <View style={{flexDirection:'row-reverse',alignItems:'center',justifyContent:'space-around'}}>
                  <Icon name="hand-point-left" type="FontAwesome5" style={{fontSize:15,marginRight:4,paddingLeft: 8,}} />
                   <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                   زمانی که فاعل یک اسم است ، ضمیر متناسب با فاعل را بعد از فعل قرار میدهیم.
                   </Text>
                   </View>


                   <Text style={{padding:8,textAlign:'justify',lineHeight:30}}> 
                  <Icon name="arrow-forward" style={{fontSize:15,marginRight:4}} />
                   Vos amis aiment-ils le rock ?    
                   </Text>
                   <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                   دوستان شما موسیقی را را دوست دارند؟
                   </Text> 

                </Body>
              </CardItem>
           </Card> 
           </ScrollView>
         </Container>
    )
  }
}
