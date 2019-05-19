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
      {title:'affolement',key:'affolement',trans:'وحشت ، هراس',ph:'[afɔlmɑ̃]',cat:'A'},
      {title:'agence',key:'agence',trans:'اداره ، آژانس ، نمایندگی',ph:'[aʒɑ̃s]'},
      {title:'agenda',key:'agenda',trans:'دفتر خاطرات ، دستور جلسه',ph:'[aʒɛ̃da]'},
      {title:'amicalement',key:'amicalement',trans:' دوستانه ، مهربان',ph:'[amikalmɑ̃]'},
      {title:'appareil',key:'appareil',trans:'گیرنده ، دستگاه',ph:'[apaʀɛj]'},
      {title:'appétit',key:'appétit',trans:'اشتها ،اشتیاق',ph:'[apeti]'},
      {title:'argent liquide',key:'argent liquide',trans:'پول نقد',ph:'[aʀʒɑ̃ likid]'},
      {title:'assassinat',key:'assassinat',trans:'قاتل ،قتل ، ترور',ph:'[asasina]'},
      {title:'attentionné',key:'attentionné',trans:'محافظه کار ، متفکر',ph:'[atɑ̃sjɔne]'},
      {title:'attester sur l\'honneur',key:'attester sur l\'honneur',trans:'قسم خوردن روی شرافت',ph:'[atɛste]'},
      {title:'auprès',key:'auprès',trans:'با',ph:'[opʀɛ]'},
      {title:'autoroute',key:'autoroute',trans:'بزرگراه',ph:'[otoʀut]'},
      {title:'avis',key:'avis',trans:'نظر ، عقیده',ph:'[avi]'},
      {title:'bistrot',key:'bistrot',trans:'بار ، رستوران',ph:'[bistʀo]',cat:'B'},
      {title:'bouquet',key:'bouquet',trans:'دسته ، دسته گل',ph:'[bukɛ]'},
      {title:'caisse',key:'caisse',trans:'صندوق',ph:'[kɛs]',cat:'C'},
      {title:'cambrioleur',key:'cambrioleur',trans:'سارق منازل و مغازه ها',ph:'[kɑ̃bʀijɔlœʀ]'},
      {title:'carnaval',key:'carnaval',trans:'کارناوال',ph:'[kaʀnaval]'},
      {title:'chargé',key:'chargé',trans:'حامل ، پر از',ph:'[ʃaʀʒe]'},
      {title:'chauffage',key:'chauffage',trans:'سیستم گرمایشی ، حرارت ',ph:'[ʃofaʒ]'},
      {title:'cochon',key:'cochon',trans:'خوک',ph:'[kɔʃɔ̃]'},
      {title:'comptoir',key:'comptoir',trans:'کانتر ، پیشخوان',ph:'[kɔ̃twaʀ]'},
      {title:'concierge',key:'concierge',trans:'سرپرست ، رئیس',ph:'[kɔ̃sjɛʀʒ]'},
      {title:'convenir',key:'convenir',trans:'مناسب بودن',ph:'[kɔ̃vniʀ]'},
      {title:'cours de la monnaie',key:'cours de la monnaie',trans:'نرخ مبادله ، نرخ ارز',ph:'[mɔnɛ]'},
      {title:'crime',key:'crime',trans:'جرم',ph:'[kʀim]'},
      {title:'debout',key:'debout',trans:'ایستاده',ph:'[d(ə)bu]',cat:'D'},
      {title:'décéder',key:'décéder',trans:'فوت کردن',ph:'[desede]'},
      {title:'décidément',key:'décidément',trans:'قطعاً',ph:'[desidemɑ̃]'},
      {title:'délinquant',key:'délinquant',trans:'بزهکار ، متخلف',ph:'[delɛ̃kɑ̃]'},
      {title:'description',key:'description',trans:'توضیح ، تشریح',ph:'[dɛskʀipsjɔ̃]'},
      {title:'diriger',key:'diriger',trans:'مدیریت کردن ، نظارت کردن',ph:'[diʀiʒe]'},
      {title:'domicile',key:'domicile',trans:'خانه ، وطن ، میهن',ph:'[dɔmisil]'},
      {title:'s’écrouler',key:'s’écrouler',trans:'سقوط کردن ، فروپاشی شدن',ph:'[ekʀule]',cat:'E'},
      {title:'efficacité',key:'efficacité',trans:'بازده ، بهره',ph:'[efikasite]'},
      {title:'ennui',key:'ennui',trans:'خستگی',ph:'[ɑ̃nɥi]'},
      {title:'entretien',key:'entretien',trans:'گفتگو ، مصاحبه',ph:'[ɑ̃tʀətjɛ̃]'},
      {title:'éparpillé',key:'éparpillé',trans:'پخش شده ، پراکنده شده',ph:'[epaʀpije]'},
      {title:'exploiter',key:'exploiter',trans:'بهره برداری کردن ، استثمار کردن',ph:'[ɛksplwate]'},
      {title:'faire part (de)',key:'faire part (de)',trans:'کسی را مطلع کردن ، اعلام کردن به کسی',ph:'[paʀ]',cat:'F'},
      {title:'fleur',key:'fleur',trans:'گل',ph:'[flœʀ]'},
      {title:'fleuriste',key:'fleuriste',trans:'گلفروش',ph:'[flœʀist]'},
      {title:'frais (aux ...de)',key:'frais (aux ...de)',trans:'مخارج برعهده کسی بودن ، به خرج کسی ',ph:'[fʀɛ]'},
      {title:'lassitude',key:'lassitude',trans:'خستگی ، بیزاری ، ضعف',ph:'[lɑsityd]',cat:'L'},
      {title:'liaison',key:'liaison',trans:'ارتباط ، لینک ، پیوند',ph:'[ljɛzɔ̃]'},
      {title:'livrer',key:'livrer',trans:'تحویل دادن',ph:'[livʀe]'},
      {title:'main',key:'main',trans:'دست',ph:'[mɛ̃]',cat:'M'},
      {title:'être mal à l’aise',key:'être mal à l’aise',trans:'ناراحت بودن',ph:'[ɛz]'},
      {title:'marié',key:'marié',trans:'متاهل',ph:'[maʀje]'},
      {title:'masque',key:'masque',trans:'ماسک ، نقاب',ph:'[mask]'},
      {title:'méchant',key:'méchant',trans:'تند و زننده ، کثیف ، بدجنس',ph:'[meʃɑ̃]'},
      {title:'meurtre',key:'meurtre',trans:'قتل ، کشتن',ph:'[mœʀtʀ]'},
      {title:'nécessaire',key:'nécessaire',trans:'لازم ، ضروری',ph:'[nesesɛʀ]',cat:'N'},
      {title:'nièce',key:'nièce',trans:'دختر خواهر ، دختر برادر',ph:'[njɛs]'},
      {title:'panique',key:'panique',trans:'ترس ، وحشت ، هراس',ph:'[panik]',cat:'P'},
      {title:'petit noir',key:'petit noir',trans:'اسپرسو',ph:'[p(ə)ti nwaʀ]'},
      {title:'poursuivre',key:'poursuivre',trans:'تعقیب کردن',ph:'[puʀsɥivʀ]'},
      {title:'préférable',key:'préférable',trans:'برتر ، قابل ، ارجح',ph:'[pʀefeʀabl]'},
      {title:'propriété',key:'propriété',trans:'مالکیت ، ملک',ph:'[pʀɔpʀijete]'},
      {title:'prototype',key:'prototype',trans:'نمونه اولیه',ph:'[pʀɔtɔtip]'},
      {title:'raccrocher',key:'raccrocher',trans:'تلفن را قطع کردن',ph:'[ʀakʀɔʃe]',cat:'R'},
      {title:'ravissant',key:'ravissant',trans:'لذت بخش ، دلپذیر ، خشنود',ph:'[ʀavisɑ̃]'},
      {title:'se refaire',key:'se refaire',trans:'شخصیت کسی را عوض کردن',ph:'[ʀ(ə)fɛʀ]'},
      {title:'remarquer',key:'remarquer',trans:'متوجه شدن ، اظهار نظرکردن',ph:'[ʀ(ə)maʀke]'},
      {title:'réservé',key:'réservé',trans:'رزرو شده',ph:'[ʀezɛʀve]'},
      {title:'résister',key:'résister',trans:'مقاومت کردن ، مخالفت کردن',ph:'[ʀeziste]'},
      {title:'rose',key:'rose',trans:'گل رز ، صورتی',ph:'[ʀoz]'},
      {title:'sale',key:'sale',trans:'کثیف',ph:'[sal]',cat:'S'},
      {title:'sauter',key:'sauter',trans:'پریدن',ph:'[sote]'},
      {title:'septembre',key:'septembre',trans:'ماه سپتامبر',ph:'[sɛptɑ̃bʀ]'},
      {title:'société',key:'société',trans:'شرکت ، جامعه',ph:'[sɔsjete]'},
      {title:'square',key:'square',trans:'میدان',ph:'[skwaʀ]'},
      {title:'vendange',key:'vendange',trans:'برداشت انگور ، چیدن انگور',ph:'[vɑ̃dɑ̃ʒ]',cat:'V'},
      {title:'vendangeur',key:'vendangeur',trans:'کسی که انگور را میچیند',ph:'[vɑ̃dɑ̃ʒœʀ ]'},
      {title:'visite',key:'visite',trans:'دیدار',ph:'[vizit]'},
      {title:'vouloir (en ... à)',key:'vouloir (en ... à)',trans:'کینه کسی را داشتن ، چیزی را خواستن',ph:'[vulwaʀ]'},
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
