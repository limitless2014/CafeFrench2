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
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>نقل قول : قسمت سوم نقل قول مستقیم و غیر مستقیم</Text>
              </CardItem>
              <CardItem  style={{flexDirection:'row-reverse'}} >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   نقل قول مستقیم به حالتی میگوییم که شخص نقل کننده صحبت های فرد دیگری را بدون اینکه آنها را تغییر دهد مستقیماً بگوید مثال
                  </Text>
                  

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Les enfants ont dit : « Odile, nous avons droit à deux gâteaux aujourd'hui. »  
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  بچه ها گفتند : "اودیل ما امروز حق داریم که دو کیک بخریم".
                  </Text>
                  
                   
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  نقل قول غیر مستقیم به حالتی میگوییم که شخصی صحبتهای شخصی دیگر را چند روز بعد نقل کند در این حالت تمام
                  کلمات مرجع زمانی (hier , demain , la semaine prochaine ...) که مربوط به روز گفتگو هستند به همراه شخص گوینده باید تغییر کنند.
                  نقل قول غیرمستقیم بستگی به فعل معرفی گر دارد فعلهای معرفی گر عبارتند از : dire , demander , affirmer , répéter , ajouter, ... .
                  </Text>
                  
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Les enfants ont dit à Odile qu'ils avaient droit à deux gâteaux ce jour-là.        
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   بچه ها به اودیل گفتند که آنها حق دارند آن روز دو کیک بخرند.
                  </Text>
                 

                </Body>
              </CardItem>
           </Card> 

           

           <Card>
           <CardItem Header style={{flexDirection:'row-reverse',borderWidth:2,backgroundColor:'green',padding:5}}>
              <Icon type="FontAwesome" name="book"/>
              <Text style={{paddingRight:10,fontSize:20,color:'white'}}>نقل قول مستقیم و غیر مستقیم قسمت چهارم</Text>
              </CardItem>
              <CardItem  >
                <Body style={{borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  زمانی که ما نقل قول مستقیم را به غیر مستقیم تبدیل میکنیم چه چیزی تغییر میکند ؟
                 زمان افعال جمله نقل شده تغییر میکند در حالتی که شخص در زمان حال صحبت کند برای نقل قول غیر مستقیم ، فعلهای جمله نقل شونده
                 را برای تبدیل به نقل قول غیر مستقیم در زمان گذشته کامل صرف میکنیم.
                 زمانی که جمله شخص در زمان حال کامل باشد برای نقل غیر مستقیم فعلهای آن را در زمان ماضی بعید صرف میکنیم.
                 زمانی که جمله نقل شونده در زمان آینده باشد برای تبدیل آن به نقل قول غیر مستقیم فعل های آن را در حالت شرطی حال صرف میکنیم.
                 زمانی که جمله نقل شونده در زمان کامل باشد برای تبدیل به نقل قول غیر مستقیم فعلهای جمله را در زمان گذشته شرطی صرف میکنیم.
                 باید توجه داشته باشیم که برای تبدیل جملاتی که در زمان ماضی بعید هستند یا شرطی هستند یا در وجه التزامی هستند برای
                 تبدیل به نقل قول غیر مستقیم تغییر زمانی ندارند. 
                  </Text>
                  
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   کلماتی که اشاره به مکان یا زمان دارند در جملات نقل قول مستقیم به غیر مستقیم تغییر میکنند
                   مثلاً کلمه hier به معنی دیروز تبدیل به کلمه La veille به معنی روز قبل میشود.
                   کلمه demain به معنی فردا تبدیل به کلمه Le lendemain به معنی روز آینده میشود.
                   کلمه il y a an تبدیل به un an aupravant میشد که هردو در فارسی سال قبل معنی میشوند
                   کلمه ce matin به تبدیل به کلمه ce matin la میشود که هردو به معنی امروز صبح  در فارسی هستند.
                   کلمه aujourd'hui تبدیل به ce jour-la میشود که در فارسی هردو به معنی امروز هستند.
                   کلمه la semaine prochaine تبدیل به la semaine suivante یا la semaine d'apres میشود که به معنی هفته آینده است.
                   کلمه la semaine derniere تبدیل به la semaine prècèdente یا la semaine d'avant میشود که هردو به معنی هفته گذشته میباشند.
                   کلمه ici که به معنی اینجاست تبدیل به کلمه La به معنی آنجا میشود.
                  </Text>

                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  il y a 15 jours, il m'avait dit : « Je pars demain par le train de midi et je serai chez toi le soir. »      
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  پانزده روز قبل او به من گفت : "من فردا با قطار ظهر حرکت میکنم و تا شب به خانه ات میرسم". (نقل قول مستقیم)
                  </Text>
                   
 
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  il y a 15 jours, il m'avait dit qu'il partait le lendemain par le train de midi et qu'il serait chez moi le soir     
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   پانزده روز است که او به من گفته است فردا با قطار ظهر حرکت میکنم و تا شب به خانه ات میرسم. (نقل قول غیر مستقیم).
                  </Text>
                  
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                  ضمایر شخصی و صفات ملکی برای تبدیل نقل قول مستقیم به غیر مستقیم تغییر میکنند.
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  François a demandé à Odile : « Je peux vous raccompagner chez vous ? »   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   فرانسوا از اودیل پرسید : "آیا میتوانم تو را تا خانه ات همراهی کنم". (نقل مستقیم).
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  François a demandé à Odile s'il pouvait la raccompagner chez elle.   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   فرانسوا از اودیل پرسید آیا او (فرانسوا) میتواند او (اودیل) را تا خانه اش همراهی کند. (نقل غیر مستقیم)
                  </Text>




                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Elle m'a demandé : « Tu pourras surveiller mon magasin pendant mon absence ? » 
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                   او از من پرسید : "میتوانی زمانی که من نیستم مراقب مغازه ام باشی ؟" (نقل مستقیم)
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30}}>
                  Elle m'a demandé si je pourrais surveiller son magasin pendant son absence.   
                  </Text>
                  <Text style={{padding:8,textAlign:'justify',lineHeight:30,alignSelf:'flex-end'}}>
                    او از من پرسید آیا میتوانم مراقب مغازه اش باشم زمانی که او اینجا نیست. (نقل غیر مستقیم).
                  </Text>
                </Body>
              </CardItem>
           </Card> 




           
           </ScrollView>
         </Container>
    )
  }
}
