import React, { Component } from 'react';
import { Container,Text,Header, Item, Icon, Input, Button, Left, Body, Card, CardItem,StyleProvider } from 'native-base';
import {FlatList} from 'react-native';
import Tts from 'react-native-tts';

import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/platform';



Tts.setDefaultLanguage('fr-FR');
let header=null;

export default class V3 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      vocabs:[
      {title:'abattre',key:'abattre',trans:'تضعیف روحیه کردن ، تسلیم شدن ، مغلوب شدن',ph:'[abatʀ]',cat:'A'},
      {title:'acceptable',key:'acceptable',trans:'قابل قبول ، پذیرفتنی',ph:'[aksɛptabl]'},
      {title:'adorable',key:'adorable',trans:'ستودنی ، لذت بخش ، دلپذیر',ph:'[adɔʀabl]'},
      {title:'argument',key:'argument',trans:'بحث و جدل',ph:'[aʀɡymɑ̃]'},
      {title:'se arranger',key:'se arranger',trans:'توافق کردن ، ردیف کردن',ph:'[aʀɑ̃ʒe]'},
      {title:'arriver à',key:'arriver à',trans:'مدیریت کردن ، انجام دادن',ph:'[aʀive a]'},
      {title:'attendre',key:'attendre',trans:'صبرکردن',ph:'[atɑ̃dʀ]'},
      {title:'autobus',key:'autobus',trans:'اتوبوس',ph:'[otobys]'},
      {title:'banderole',key:'banderole',trans:'باندرول (پرچمی پهن که قبلاً توسط شوالیه هااستفاده میشد)',ph:'[bɑ̃dʀɔl]',cat:'B'},
      {title:'bout (être à)',key:'bout (être à)',trans:'خسته بودن',ph:'[bu]'},
      {title:'se calmer',key:'se calmer',trans:'آرام شدن',ph:'[kalme]',cat:'C'},
      {title:'clientèle',key:'clientèle',trans:'مشتریان',ph:'[klijɑ̃tɛl]'},
      {title:'commerçant',key:'commerçant',trans:'مغازه دار',ph:'[kɔmɛʀsɑ̃]'},
      {title:'commerce',key:'commerce',trans:'تجارت',ph:'[kɔmɛʀs]'},
      {title:'compliquer',key:'compliquer',trans:'پیچیده کردن',ph:'[kɔ̃plike]'},
      {title:'confidence',key:'confidence',trans:'راز کوچک ، ارتباط محرمانه',ph:'[kɔ̃fidɑ̃s]'},
      {title:'confident',key:'confident',trans:'اعتماد به نفس',ph:'[kɔ̃fidɑ̃]'},
      {title:'confier (se)',key:'confier (se)',trans:'اعتراف کردن',ph:'[kɔ̃fje]'},
      {title:'considérer',key:'considérer',trans:'در نظر گرفتن',ph:'[kɔ̃sideʀe]'},
      {title:'craindre',key:'craindre',trans:'ترسیدن',ph:'[kʀɛ̃dʀ]'},
      {title:'craquer',key:'craquer',trans:'شکاف برداشتن ، ترک برداشتن',ph:'[kʀake]'},
      {title:'danger',key:'danger',trans:'خطر',ph:'[dɑ̃ʒe]',cat:'D'},
      {title:'débarrasser',key:'débarrasser',trans:'خلاص شدن از ، تمیز کردن',ph:'[debaʀɑse]'},
      {title:'déçu',key:'déçu',trans:'نا امید',ph:'[desy]'},
      {title:'défenseur',key:'défenseur',trans:'مدافع ، دفاع',ph:'[defɑ̃sœʀ]'},
      {title:'délicat',key:'délicat',trans:'حساس ، ظریف',ph:'[ɑ̃sɑ̃bl]'},
      {title:'déplacement',key:'déplacement',trans:'سفر ، جابجایی',ph:'[deplasmɑ̃]'},
      {title:'dépression',key:'dépression',trans:'افسردگی',ph:'[depʀesjɔ̃]'},
      {title:'dramatique',key:'dramatique',trans:'دراماتیک ، نمایشی',ph:'[dʀamatik]'},
      {title:'drôle',key:'drôle',trans:'خنده دار ، سرگرم کننده',ph:'[dʀol]'},
      {title:'énerver',key:'énerver',trans:'آزار دادن ، بر روی اعصاب کسی راه رفتن ،تحریک کردن',ph:'[enɛʀve]',cat:'E'},
      {title:'entraîner',key:'entraîner',trans:'تمرین کردن',ph:'[ɑ̃tʀene]'},
      {title:'erreur',key:'erreur',trans:'خطا ، اشتباه',ph:'[eʀœʀ]'},
      {title:'faute',key:'faute',trans:'اشتباه ، تقصیر',ph:'[fot]',cat:'F'},
      {title:'faux-frère',key:'faux frère',trans:'خائن',ph:'[fo fʀɛʀ]'},
      {title:'génial',key:'génial',trans:'عالی ، خارق العاده',ph:'[ʒenjal]',cat:'G'},
      {title:'gentillesse',key:'gentillesse',trans:'مهربانی',ph:'[ʒɑ̃tijɛs]'},
      {title:'guitare',key:'guitare',trans:'گیتار',ph:'[ɡitaʀ]'},
      {title:'hésitation',key:'hésitation',trans:'تردید ، تامل',ph:'[ezitasjɔ̃]',cat:'H'},
      {title:'inadmissible',key:'inadmissible',trans:'غیر قابل قبول',ph:'[inadmisibl]',cat:'I'},
      {title:'incompris',key:'incompris',trans:'سوء تفاهم',ph:'[ɛ̃kɔ̃pʀi]'},
      {title:'injust',key:'injust',trans:'غیر عادلانه ، غیر منصفانه',ph:'[ɛ̃ʒyst]'},
      {title:'insupportable',key:'insupportable',trans:'غیر قابل تحمل',ph:'[ɛ̃sypɔʀtabl]'},
      {title:'joueur',key:'joueur',trans:'بازیکن ، بازیگر',ph:'[ʒwœʀ]',cat:'J'},
      {title:'jusqu’à présent',key:'jusqu’à présent',trans:'تاکنون ، تا به حال',ph:'[ʒyska a pʀezɑ̃]'},
      {title:'justifier',key:'justifier',trans:'توجیه کردن',ph:'[ʒystifje]'},
      {title:'malchance',key:'malchance',trans:'بدشانس',ph:'[malʃɑ̃s]',cat:'M'},
      {title:'malheureux',key:'malheureux',trans:'بدبخت ، بدشانس ، ناراضی ، ناخشنود',ph:'[maløʀø]'},
      {title:'manifester',key:'manifester',trans:'نمایش دادن ، اشاره کردن',ph:'[manifɛste]'},
      {title:'en avoir marre de',key:'en avoir marre de',trans:'خسته شدن از',ph:'[ɑ̃ avwaʀ maʀ də]'},
      {title:'mécontent',key:'mécontent',trans:'ناراضی ، ناکام ، ناخشنود',ph:'[mekɔ̃tɑ̃]'},
      {title:'métro',key:'métro',trans:'مترو',ph:'[metʀo]'},
      {title:'morosité',key:'morosité',trans:'یاس و ناامیدی',ph:'[mɔʀozite]'},
      {title:'mort',key:'mort',trans:'مرگ',ph:'[mɔʀ]'},
      {title:'être sur les nerfs',key:'être sur les nerfs',trans:'نگران بودن ، عصبی بودن',ph:'[ɛtʀ syʀ le nɛʀ]',cat:'N'},
      {title:'n’importe qui',key:'n’importe qui',trans:'هرکسی ، کس و ناکس',ph:'[pɔlaʀ]'},
      {title:'oreille ',key:'oreille',trans:'گوش',ph:'[ɔʀɛj]',cat:'O'},
      {title:'partir (à...de)',key:'partir',trans:'شروع کردن از',ph:'[paʀtiʀ]',cat:'P'},
      {title:'passer de',key:'passer de',trans:'حرکت از',ph:'[pɑse]'},
      {title:'pénible',key:'pénible',trans:'سخت',ph:'[penibl ]'},
      {title:'pluie',key:'pluie',trans:'باران',ph:'[plɥi ]'},
      {title:'promeneur',key:'promeneur',trans:'پیاده رو',ph:'[pʀɔm(ə)nœʀ]'},
      {title:'râler',key:'râler',trans:'ناله کردن',ph:'[ʀɑle]',cat:'R'},
      {title:'ras-le-bol',key:'ras-le-bol',trans:'خسته ،بیزار',ph:'[ʀɑ l bɔl]'},
      {title:'réconforter',key:'réconforter',trans:'تسهیل کردن ، راحت کردن ، آسایش دادن',ph:'[ʀekɔ̃fɔʀte]'},
      {title:'repérer',key:'repérer',trans:'پیدا کردن',ph:'[ʀ(ə)peʀe]'},
      {title:'reproche',key:'reproche',trans:'سرزنش ، سرکوفت',ph:'[reproche]'},
      {title:'ridiculiser',key:'ridiculiser',trans:'مسخره کردن',ph:'[ʀidikylize]'},
      {title:'rouspéter',key:'rouspéter',trans:'ناله کردن ، گله کردن ، غر زدن',ph:'[ʀuspete]'},
      {title:'sans arrêt',key:'sans arrêt',trans:'بی نهایت ، بدون توقف ، مداوم',ph:'[sɑ̃ aʀɛ]',cat:'S'},
      {title:'s’en sortir',key:'s’en sortir',trans:'پشت سر گذاشتن ، خارج شدن',ph:'[s ɑ̃ sɔʀtiʀ]'},
      {title:'supporter',key:'supporter',trans:'سر کردن ، تحمل کردن',ph:'[sypɔʀtœʀ]'},
      {title:'tellement',key:'tellement',trans:'خیلی ، پس',ph:'[tɛlmɑ̃]',cat:'T'},
      {title:'s’en tenir',key:'s’en tenir',trans:'جایگاه کسی را دانستن ، پیروی کردن از',ph:'[s ɑ̃ t(ə)niʀ]'},
      {title:'transformation',key:'transformation',trans:'دگرگونی ، تغییر ، تحول',ph:'[tʀɑ̃sfɔʀmasjɔ̃]'},
      {title:'avoir de la veine',key:'avoir de la veine',trans:'خوش شانس بودن',ph:'[vɛn]',cat:'V'},

    ],
    search:[],
    };
    
    
  }
  componentDidMount(){
    this.setState({search:this.state.vocabs})
  }

  
  
 
 
  
  
  render() {

    let speak=(word)=>{
      Tts.speak(word);
   }
   
   





   search=(txt)=>{

    this.setState({searchTerm:txt});
      if (!txt || txt === '') {
      this.setState({
        vocabs: this.state.search
      })
      return;
    }
    let newData = this.state.vocabs.filter((text)=> {
      let title=[];
      title=text.title;
      if(title.includes(txt.toLowerCase())){
        text=title;
        return text; 
      }
    })
    this.setState({vocabs:newData})
    
   }
   

  endEditing=()=>{
    
   
    this.setState({vocabs:this.state.search})
    
  }
  
   



 
 
    return (
      <Container>
         <StyleProvider style={getTheme(material)} >
         <Header searchBar rounded>
           <Left >
           <Button onPress={()=>this.props.navigation.goBack()} transparent>
            <Icon name="arrow-back" />
            </Button>
            </Left>
         <Item>
           <Icon name="ios-search" />
           <Input   onEndEditing={()=>endEditing()}  onChangeText={(text)=>search(text)} placeholder="Search"/>
         </Item>
         <Button transparent>
         <Text>Search</Text>
         </Button>
         </Header>
         </StyleProvider>



         <FlatList 
            data={this.state.vocabs} 
             
            renderItem={({item}) =>
            {
              if(item.cat!==undefined){
                header=(<Text style={{backgroundColor:'red',color:'white',textAlign:'center',fontSize:25,margin:10,borderWidth:2,borderColor:'red',borderBottomLeftRadius:50,borderTopRightRadius:50,borderTopLeftRadius:20,borderBottomRightRadius:20}}>{item.cat}</Text>);
              }
              else{
                header=null;
              }
              
             
              
             
              
                
                
                
          
             
              
    
        
           return(    
          <Card style={{borderBottomColor:'blue',borderBottomWidth:2}}>
           {header}
           <CardItem>
              <Body>
              <Text>{item.title}</Text>
              </Body>
            </CardItem>
            <CardItem>
             <Text >{item.ph}</Text>
             <Button onPress={()=>speak(item.title)}  transparent> 
              <Icon type="AntDesign" name="sound"/>
              </Button>
              </CardItem>
             <Text style={{paddingRight:10,paddingBottom:10}}>{item.trans}</Text>
           </Card> 
           )}}
           />
      </Container>
    );
  }
}
