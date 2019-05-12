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
      {title:'accompagnateur',key:'accompagnateur',trans:'همراهی کننده ، راهنما',ph:'[akɔ̃paɲatœʀ]',cat:'A'},
      {title:'admirable',key:'admirable',trans:'قابل تحسین ، تحسین برانگیز',ph:'[admiʀabl]'},
      {title:'approcher',key:'approcher',trans:'آمدن ، نزدیک شدن',ph:'[apʀɔʃe]'},
      {title:'arbre',key:'arbre',trans:'درخت',ph:'[aʀbʀ]'},
      {title:'avance',key:'avance',trans:'ادامه دادن ، پیشرفت',ph:'[avɑ̃s]'},
      {title:'bagages',key:'bagages',trans:'توشه ، بار مسافر',ph:'[baɡaʒ]',cat:'B'},
      {title:'banal',key:'banal',trans:'عادی ، مبتذل',ph:'[banal]'},
      {title:'bateau habitable',key:'bateau habitable',trans:'قایق قابل سکونت ، خانه قایقی',ph:'[bato abitabl]'},
      {title:'bonheur',key:'bonheur',trans:'شادی ، لذت',ph:'[bɔnœʀ]'},
      {title:'camaraderie',key:'camaraderie',trans:'رفاقت ، همراهی',ph:'[kamaʀadʀi]',cat:'C'},
      {title:'canal',key:'canal',trans:'کانال',ph:'[kanal]'},
      {title:'capitale',key:'capitale',trans:'پایتخت ، سرمایه',ph:'[kapital]'},
      {title:'caractère',key:'caractère',trans:'شخصیت',ph:'[kaʀaktɛʀ]'},
      {title:'chambre d\'hôtes',key:'chambre d\'hôtes',trans:'اتاق مهمان',ph:'[ʃɑ̃bʀ de ot]'},
      {title:'charme',key:'charme',trans:'جذاب',ph:'[ʃaʀm]'},
      {title:'chaussure',key:'chaussure',trans:'کفش',ph:'[ʃosyʀ]'},
      {title:'circuit',key:'circuit',trans:'تور ، سفر ، جریان',ph:'[siʀkɥi]'},
      {title:'combattre',key:'combattre',trans:'جنگیدن ، مبارزه کردن',ph:'[kɔ̃batʀ]'},
      {title:'confort',key:'confort',trans:'راحتی ، آسایش',ph:'[kɔ̃fɔʀ]'},
      {title:'dépliant',key:'dépliant',trans:'بروشور ، دفترچه',ph:'[deplijɑ̃]',cat:'D'},
      {title:'échange',key:'échange',trans:'مبادله ، جابجایی',ph:'[eʃɑ̃ʒ]' ,cat:'E'},
      {title:'effort',key:'effort',trans:'تلاش',ph:'[efɔʀ]'},
      {title:'enlever',key:'enlever',trans:'حذف کردن ، برداشتن ، در آوردن',ph:'[ɑ̃l(ə)ve]'},
      {title:'environ',key:'environ',trans:'حدود',ph:'[ɑ̃viʀɔ̃]'},
      {title:'équipement',key:'équipement',trans:'تجهیزات',ph:'[ekipmɑ̃]'},
      {title:'espace',key:'espace',trans:'فضا',ph:'[ɛspas]'},
      {title:'étape',key:'étape',trans:'مرحله ، محل توقف',ph:'[etap]'},
      {title:'fatigue',key:'fatigue',trans:'خسته',ph:'[fatiɡ]',cat:'F'},
      {title:'favoriser',key:'favoriser',trans:'ترویج دادن ، تشویق کردن',ph:'[favɔʀize ]'},
      {title:'gîte',key:'gîte',trans:'خانه',ph:'[ʒit]',cat:'G'},
      {title:'goûter',key:'goûter',trans:'چشیدن ، مزه کردن',ph:'[ɡute]'},
      {title:'hébergement',key:'hébergement',trans:'اقامت ، اسکان',ph:'[ebɛʀʒəmɑ̃]',cat:'H'},
      {title:'impression',key:'impression (avoir 1\'... de)',trans:'تاثیر داشتن ، اثر داشتن',ph:'[ɛ̃pʀesjɔ̃]',cat:'I'},
      {title:'impressionnant',key:'impressionnant',trans:'تاثیر گذار',ph:'[ɛ̃pʀesjɔnɑ̃]'},
      {title:'itinéraire',key:'itinéraire',trans:'مسیر ، برنامه سفر',ph:'[itineʀɛʀ]'},
      {title:'kilomètre',key:'kilomètre',trans:'کیلومتر ، 1000 متر',ph:'[kilɔmɛtʀ]',cat:'K'},
      {title:'lac',key:'lac',trans:'دریاچه',ph:'[lak]',cat:'L'},
      {title:'libérer',key:'libérer',trans:'آزاد کردن ، رها کردن',ph:'[libeʀe]'},
      {title:'location',key:'location',trans:'اجاره ، رزرو',ph:'[lɔkasjɔ̃ ]'},
      {title:'loisir',key:'loisir',trans:'تفریح',ph:'[lwaziʀ]'},
      {title:'luxe',key:'luxe',trans:'لوکس',ph:'[lyks]'},
      {title:'orée',key:'orée',trans:'لبه',ph:'[orée]',cat:'O'},
      {title:'paraître',key:'paraître',trans:'منتشر کردن ، نمایش دادن',ph:'[paʀɛtʀ]',cat:'P'},
      {title:'parcourir',key:'parcourir',trans:'پوشاندن ، سفر کردن',ph:'[paʀkuʀiʀ]'},
      {title:'partager',key:'partager',trans:'به اشتراک گذاشتن',ph:'[paʀtaʒe]'},
      {title:'paysage',key:'paysage',trans:'منظره ، چشم انداز',ph:'[peizaʒ]'},
      {title:'pédestre',key:'pédestre',trans:'پیاده ، پا',ph:'[pedɛstʀ]'},
      {title:'peine',key:'peine',trans:'ناراحتی ، غمگینی ، به ندرت',ph:'[pɛn]'},
      {title:'physique',key:'physique',trans:'جسمی ، بدنی ، فیزیکی',ph:'[fizik]'},
      {title:'pittoresque',key:'pittoresque',trans:'زیبا ، خوش منظره',ph:'[pitɔʀɛsk]'},
      {title:'plein (en ...)',key:'plein',trans:'در وسط ، میانه',ph:'[plɛn]'},
      {title:'pollution',key:'pollution',trans:'آلودگی',ph:'[pɔlysjɔ̃]'},
      {title:'prestigieux',key:'prestigieux',trans:'با اعتبار ، پرستیژ دار',ph:'[pʀɛstiʒjø]'},
      {title:'randonneur',key:'randonneur',trans:'کسی که در طبیعت پیاده روی میکند ، توریست',ph:'[ʀɑ̃dɔnœʀ]',cat:'R'},
      {title:'redécouvrir',key:'redécouvrir',trans:'دوباره کشف کردن',ph:'[ʀ(ə)dekuvʀiʀ]'},
      {title:'ruine',key:'ruine',trans:'خراب کردن',ph:'[ʀɥin]'},
      {title:'rythme',key:'rythme',trans:'ریتم ، سرعت',ph:'[ʀitm]'},
      {title:'sembler',key:'sembler',trans:'به نظر رسیدن',ph:'[sɑ̃ble]',cat:'S'},
      {title:'sentier',key:'sentier',trans:'مسیر پیاده روی',ph:'[sɑ̃tje]'},
      {title:'site',key:'site',trans:'سایت ، محل',ph:'[sit]'},
      {title:'solidarité',key:'solidarité',trans:'اتحاد ، همبستگی',ph:'[sɔlidaʀite]'},
      {title:'sommet',key:'sommet',trans:'قله ، بالا',ph:'[sɔmɛ]'},
      {title:'sûrement',key:'sûrement',trans:'قطعاً',ph:'[syʀmɑ̃]'},
      {title:'tour (faire un)',key:'tour (faire un)',trans:'به یک تور رفتن ، به گردش رفتن',ph:'[tuʀ]',cat:'T'},
      {title:'vallée',key:'vallée',trans:'دره',ph:'[vale]',cat:'V'},
      {title:'variété',key:'variété',trans:'تنوع ، انواع مختلف',ph:'[vaʀjete]'},
      {title:'vignoble',key:'vignoble',trans:'تاکستان ، باغ انگور',ph:'[viɲɔbl]'},
      {title:'vitesse',key:'vitesse',trans:'سرعت',ph:'[vitɛs]'},
     
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
