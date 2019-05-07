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
      {title:'abuser',key:'abuser',trans:'سو استفاده کردن، بدرفتاری کردن',ph:'[abyze]',cat:'A'},
      {title:'ambiance',key:'ambiance',trans:'فضا ، جو ، محیط',ph:'[ɑ̃bjɑ̃s]'},
      {title:'amusant',key:'amusant',trans:'سرگرم کننده ، خنده دار',ph:'[amyzɑ̃]'},
      {title:'autour de',key:'autour de',trans:'دور ، حدود',ph:'[otoʀ də]'},
      {title:'bande dessinée',key:'bande dessinée',trans:'داستان مصور ، کاریکاتور',ph:'[bɑ̃d desine]',cat:'B'},
      {title:'but',key:'but',trans:'هدف ، قصد',ph:'[by(t)]'},
      {title:'cadre',key:'cadre',trans:'چارچوب ، کادر',ph:'[kɑdʀ]',cat:'C'},
      {title:'caméra',key:'caméra',trans:'دوربین',ph:'[kameʀa]'},
      {title:'caméraman',key:'caméraman',trans:'فیلمبردار ، عکاس',ph:'[kameʀaman]'},
      {title:'comédie',key:'comédie',trans:'خنده دار',ph:'[kɔmedi]'},
      {title:'comédien',key:'comédien',trans:'کمدین ، بازیگر فیلم های خنده دار',ph:'[kɔmedjɛ̃]'},
      {title:'comique',key:'comique',trans:'خنده دار ، کمیک',ph:'[kɔmik]'},
      {title:'commande',key:'commande',trans:'سفارش ، دستور',ph:'[kɔmɑ̃d]'},
      {title:'commencer',key:'commencer',trans:'شروع کردن ، آغاز کردن',ph:'[kɔmɑ̃se]'},
      {title:'déclarer',key:'déclarer',trans:'اعلان کردن ، بیان کردن',ph:'[deklaʀe]',cat:'D'},
      {title:'décor',key:'décor',trans:'دکور ، مجموعه ای از آنچه که برای تزیین یک مکان استفاده میشود',ph:'[dekɔʀ]'},
      {title:'se déguiser',key:'se déguiser',trans:'لباس پوشیدن ، مخفی شدن با لباس مبدل',ph:'[sə deɡize]'},
      {title:'détail',key:'détail',trans:'جزئیات',ph:'[detaj]'},
      {title:'devant',key:'devant',trans:'جلوی',ph:'[d(ə)vɑ̃]'},
      {title:'docteur',key:'docteur',trans:'دکتر',ph:'[dɔktœʀ]'},
      {title:'documentaire',key:'documentaire',trans:'مستند',ph:'[dɔkymɑ̃tɛʀ]'},
      {title:'drame',key:'drame',trans:'درام ، یک نمایش غم انگیز',ph:'[dʀam]'},
      {title:'éclairage',key:'éclairage',trans:'روشنایی',ph:'[eklɛʀaʒ]',cat:'E'},
      {title:'écran',key:'écran',trans:'صفحه نمایش',ph:'[ekʀɑ̃]'},
      {title:'émouvant',key:'émouvant',trans:'متحرک',ph:'[emuvɑ̃]'},
      {title:'ensemble',key:'ensemble',trans:'با همدیگر ، همزمان ، تمام ، کامل',ph:'[ɑ̃sɑ̃bl]'},
      {title:'entraînement',key:'entraînement',trans:'تمرین ، تعلیم ، آموزش',ph:'[ɑ̃tʀɛnmɑ̃]'},
      {title:'se éteindre',key:'se éteindre',trans:'خاموش کردن',ph:'[sə etɛ̃dʀ]'},
      {title:'février',key:'février',trans:'ماه فوریه',ph:'[fevʀije]',cat:'F'},
      {title:'filmer',key:'filmer',trans:'فیلمبرداری کردن',ph:'[filme]'},
      {title:'généreux',key:'généreux',trans:'بخشنده ، سخاوتمند',ph:'[ʒeneʀø]',cat:'G'},
      {title:'hélicoptère',key:'hélicoptère',trans:'هلی کوپتر',ph:'[elikɔptɛʀ]',cat:'H'},
      {title:'histoire',key:'histoire',trans:'داستان ، تاریخ',ph:'[istwaʀ]'},
      {title:'horaire',key:'horaire',trans:'برنامه زمانی',ph:'[ɔʀɛʀ]'},
      {title:'imaginaire',key:'imaginaire',trans:'خیالی ، غیرواقعی',ph:'[imaʒinɛʀ]',cat:'I'},
      {title:'insister',key:'insister',trans:'تاکید کردن ، اصرار کردن ، پافشاری کردن',ph:'[ɛ̃siste]'},
      {title:'magique',key:'magique',trans:'جادویی',ph:'[maʒik]',cat:'M'},
      {title:'magnétoscope',key:'magnétoscope',trans:'دستگاه ضبط ویدیو',ph:'[maɲetɔskɔp]'},
      {title:'maladie',key:'maladie',trans:'بیماری',ph:'[maladi]'},
      {title:'manifestation',key:'manifestation',trans:'تظاهر ، نمایش',ph:'[manifɛstasjɔ̃]'},
      {title:'médecine',key:'médecine',trans:'دارو',ph:'[med(ə)sin]'},
      {title:'Micro-trottoir',key:'Micro-trottoir',trans:'خبرنگار سیار',ph:'[mikʀo tʀɔtwaʀ]'},
      {title:'moderne',key:'moderne',trans:'مدرن ، پیشرفته',ph:'[mɔdɛʀn]'},
      {title:'se moquer',key:'se moquer',trans:'مسخره کردن ، تقلید کردن',ph:'[mɔke]'},
      {title:'objectivité',key:'objectivité',trans:'واقعیت ، عینیت ، بی طرف',ph:'[ɔbʒɛktivite]',cat:'O'},
      {title:'paraître',key:'paraître',trans:'به نظر رسیدن',ph:'[paʀɛtʀ]',cat:'P'},
      {title:'paresse',key:'paresse',trans:'تنبلی',ph:'[paʀɛs]'},
      {title:'parmi',key:'parmi',trans:'در بین ، در میان',ph:'[paʀmi]'},
      {title:'particulièrement',key:'particulièrement',trans:'بخصوص',ph:'[paʀtikyljɛʀmɑ̃]'},
      {title:'personnellement',key:'personnellement',trans:'شخصاً',ph:'[pɛʀsɔnɛlmɑ̃]'},
      {title:'perspective',key:'perspective',trans:'چشم انداز ، دورنما ، دیدگاه',ph:'[pɛʀspɛktiv]'},
      {title:'plan',key:'plan',trans:'نقشه ، طرح ، مسطح',ph:'[plɑ̃]'},
      {title:'pleurer',key:'pleurer',trans:'گریه کردن',ph:'[plœʀe]'},
      {title:'plongée, contre-plongée',key:'plongée, contre-plongée',trans:'زاویه بالا ، زاویه پایین',ph:'[plɔ̃ʒe , kɔ̃tʀəplɔ̃ʒe ]'},
      {title:'poétique',key:'poétique',trans:'شاعرانه',ph:'[pɔetik]'},
      {title:'polar',key:'polar',trans:'فیلم جنایی ، پلیسی',ph:'[pɔlaʀ]'},
      {title:'porter(se... bien/mal) ',key:'porter',trans:'خوب شدن ، مریض شدن',ph:'[pɔʀte]'},
      {title:'présidence',key:'présidence',trans:'ریاست ، ریاست جمهوری',ph:'[pʀezidɑ̃s]'},
      {title:'principal',key:'principal',trans:'اصلی',ph:'[pʀɛ̃sipal]'},
      {title:'rappeler',key:'rappeler',trans:'به خاطر آوردن',ph:'[ʀap(ə)le]',cat:'R'},
      {title:'réduction',key:'réduction',trans:'کاهش',ph:'[ʀedyksjɔ̃]'},
      {title:'réforme',key:'réforme',trans:'اصلاح',ph:'[ʀefɔʀm]'},
      {title:'représentation',key:'représentation',trans:'نمایش ، ارائه',ph:'[pɔetik]'},
      {title:'rire',key:'rire',trans:'خندیدن',ph:'[ʀiʀ]'},
      {title:'science-fiction',key:'science-fiction',trans:'علمی  ، تخیلی',ph:'[sjɑ̃sfiksjɔ̃]',cat:'S'},
      {title:'sécurité sociale',key:'sécurité sociale',trans:'سازمان رفاه عمومی فرانسه',ph:'[sekyʀite sɔsjal]'},
      {title:'sensibilité',key:'sensibilité',trans:'حساسیت',ph:'[sɑ̃sibilite]'},
      {title:'séquence',key:'séquence',trans:'سکانس ، دنباله ، ترتیب',ph:'[sekɑ̃s]'},
      {title:'servante',key:'servante',trans:'خدمتکار زن',ph:'[sɛʀvɑ̃t]'},
      {title:'sincère',key:'sincère',trans:'صادق ، بی ریا',ph:'[sɛ̃sɛʀ]'},
      {title:'sombre',key:'sombre',trans:'تاریک ، تیره',ph:'[sɔ̃bʀ]'},
      {title:'sortie',key:'sortie',trans:'خروجی',ph:'[sɔʀti]'},
      {title:'spectateur',key:'spectateur',trans:'تماشاگر ، شنونده ، شاهد',ph:'[spɛktatœʀ]'},
      {title:'superficiel',key:'superficiel',trans:'سطحی',ph:'[sypɛʀfisjɛl]'},
      {title:'tendre',key:'tendre',trans:'سرشار از محبت ، کم رنگ',ph:'[tɑ̃dʀ]',cat:'T'},
      {title:'théâtral',key:'théâtral',trans:'تئاتری',ph:'[teɑtʀal]'},
      {title:'triste',key:'triste',trans:'غمگین ، ناراحت',ph:'[tʀist ]'},
      {title:'truc',key:'truc',trans:'حقه ، فوت و فن ، چیز',ph:'[tʀyk]'},
      {title:'valoir mieux',key:'valoir mieux',trans:'بهتر است انجام بدهی ...',ph:'[valwaʀ mjø]',cat:'V'},

    ],
    search:[],
    };
    
    
  }
  componentWillMount(){
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
