import React, { Component } from 'react';
import { Container,Header,Left,Button,Icon, Body, Right, Card,CardItem,Text} from 'native-base';
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
              <Text style={{paddingRight:10,fontSize:20}}>ضمیر ربطی : چه کسی ، که</Text>
              </CardItem>
              <CardItem  style={{flexDirection:'row-reverse'}} >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>ضمایر ربطی (چه کسی ، که) برای ربط دادن دو جمله استفاده میشوند  در این نوع جملات ضمیر qui نقش فاعل را در جمله دوم ایفا میکند
                    و ضمیر que نقش ضمیر مفعولی مستقیم  را درجمله دوم دارد.
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
           </ScrollView>
         </Container>
    )
  }
}
