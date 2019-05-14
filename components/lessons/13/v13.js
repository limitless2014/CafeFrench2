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
      {title:'adaptation',key:'adaptation',trans:'انطباق ، اقتباس',ph:'[adaptasjɔ̃]',cat:'A'},
      {title:'s\'adapter à',key:'s\'adapter à',trans:'انطباق با',ph:'[adapte]'},
      {title:'arrière a l\'... de',key:'arrière a l\'... de',trans:'پشت سر',ph:'[aʀjɛʀ]'},
      {title:'attraper',key:'attraper',trans:'گرفتن ، صید کردن',ph:'[atʀape]'},
      {title:'aucun',key:'aucun',trans:'هیچکدام ، هیچ یک',ph:'[okœ̃]'},
      {title:'auparavant',key:'auparavant',trans:'قبلاً ، سابقاً',ph:'[opaʀavɑ̃]'},
      {title:'avancer',key:'avancer',trans:'پیشرفت کردن ، سفر کردن',ph:'[avɑ̃se]'},
      {title:'biplace',key:'biplace',trans:'دو نفره ، دو سرنشینه',ph:'[biplas]',cat:'B'},
      {title:'bois',key:'bois',trans:'چوب',ph:'[bwɑ ]'},
      {title:'brochure',key:'brochure',trans:'بروشور',ph:'[bʀɔʃyʀ]'},
      {title:'cabane',key:'cabane',trans:'کابین ، کلبه',ph:'[kaban]',cat:'C'},
      {title:'camper',key:'camper',trans:'چادر زدن ، کمپ زدن',ph:'[kɑ̃pe]'},
      {title:'céder',key:'céder',trans:'تسلیم شدن ، راه دادن ، فروختن',ph:'[sede]'},
      {title:'cheval',key:'cheval',trans:'اسب',ph:'[ʃ(ə)val]'},
      {title:'construction',key:'construction',trans:'ساخت و ساز ، ساختمان',ph:'[kɔ̃stʀyksjɔ̃]'},
      {title:'couchage',key:'couchage',trans:'خواب ، رخت خواب ، کیسه خواب',ph:'[kuʃaʒ]'},
      {title:'au cours de',key:'au cours de',trans:'درطول ، مدت',ph:'[kuʀ]'},
      {title:'décharger',key:'décharger',trans:'بارخالی کردن ، تخلیه کردن',ph:'[deʃaʀʒe]',cat:'D'},
      {title:'découragement',key:'découragement',trans:'دل شکسته ، سرخورده',ph:'[dekuʀaʒmɑ̃]'},
      {title:'dissuasif',key:'dissuasif',trans:'بازدارنده',ph:'[disɥazif]'},
      {title:'dos',key:'dos',trans:'پشت ، عقب ، کمر',ph:'[do]'},
      {title:'effectivement',key:'effectivement',trans:'به طور موثری',ph:'[efɛktivmɑ̃]',cat:'E'},
      {title:'entouré',key:'entouré',trans:'محصور',ph:'[ɑ̃tuʀe]'},
      {title:'entreprendre',key:'entreprendre',trans:'انجام دادن ، تقبل کردن',ph:'[ɑ̃tʀəpʀɑ̃dʀ]'},
      {title:'épuisant',key:'épuisant',trans:'طاقت فرسا ، خسته کننده',ph:'[epɥizɑ̃]'},
      {title:'fabriquer',key:'fabriquer',trans:'تولید کردن ، ساختن',ph:'[fabʀike]',cat:'F'},
      {title:'feu',key:'feu',trans:'آتش',ph:'[fø]'},
      {title:'filiale',key:'filiale',trans:'شرکت تابعه ، فرزندی',ph:'[filjal]'},
      {title:'fleuve',key:'fleuve',trans:'رودخانه ، بی پایان',ph:'[flœv]'},
      {title:'glace',key:'glace',trans:'یخ',ph:'[ɡlas]',cat:'G'},
      {title:'glacier',key:'glacier',trans:'یخچال طبیعی',ph:'[ɡlasje]'},
      {title:'hydravion',key:'hydravion',trans:'هواپیمای دریایی',ph:'[idʀavjɔ̃]',cat:'H'},
      {title:'immense',key:'immense',trans:'عظیم ، وسیع',ph:'[i(m)mɑ̃s]',cat:'I'},
      {title:'inconscience',key:'inconscience',trans:'بی پروا ، ناخودآگاه',ph:'[ɛ̃kɔ̃sjɑ̃s]'},
      {title:'jeter',key:'jeter',trans:'پرتاب کردن',ph:'[ʒ(ə)te]',cat:'J'},
      {title:'juste avant',key:'juste avant',trans:'درست قبل از',ph:'[ʒyst avɑ̃]'},
      {title:'miracle',key:'miracle',trans:'معجزه',ph:'[miʀɑkl]',cat:'M'},
      {title:'montagne',key:'montagne',trans:'کوه ، کوهستان',ph:'[mɔ̃taɲ]'},
      {title:'monter (la tente)',key:'monter (la tente)',trans:'برپا کردن چادر',ph:'[mɔ̃te]'},
      {title:'nomade',key:'nomade',trans:'خانه بدوش',ph:'[nɔmad]',cat:'N'},
      {title:'obéir',key:'obéir',trans:'اطلاعت کردن',ph:'[ɔbeiʀ]',cat:'O'},
      {title:'observer',key:'observer',trans:'مشاهده کردن',ph:'[ɔpsɛʀve]'},
      {title:'ours',key:'ours',trans:'خرس',ph:'[uʀs]'},
      {title:'outre-mer',key:'outre-mer',trans:'خارج از کشور ، آن ور آب',ph:'[utʀəmɛʀ]'},
      {title:'participation',key:'participation',trans:'مشارکت',ph:'[paʀtisipasjɔ̃ ]',cat:'P'},
      {title:'passionné',key:'passionné',trans:'مشتاق ، پرشور',ph:'[pasjɔne]'},
      {title:'pêcher',key:'pêcher',trans:'ماهیگیری کردن',ph:'[peʃe]'},
      {title:'pleinement',key:'pleinement',trans:'کاملاً ، به طور کامل',ph:'[plɛnmɑ̃]'},
      {title:'pousser',key:'pousser',trans:'فشاردادن',ph:'[puse]'},
      {title:'précédent',key:'précédent',trans:'قبلی',ph:'[pʀesedɑ̃]'},
      {title:'prendre pour',key:'prendre pour',trans:'به جای کسی گرفتن',ph:'[pʀɑ̃dʀ]'},
      {title:'progressivement',key:'progressivement',trans:'به تدریج',ph:'[pʀɔɡʀesivmɑ̃]'},
      {title:'ralentir',key:'ralentir',trans:'کم کردن سرعت ، آهسته کردن',ph:'[ʀalɑ̃tiʀ]',cat:'R'},
      {title:'ramassage',key:'ramassage',trans:'مجموعه ، کلکسیون ، رساندن',ph:'[ʀamɑsaʒ]'},
      {title:'rassurer',key:'rassurer',trans:'قوت قلب دادن ، اطمینان دادن',ph:'[ʀasyʀe]'},
      {title:'réaction',key:'réaction',trans:'واکنش',ph:'[ʀeaksjɔ̃]'},
      {title:'réagir',key:'réagir',trans:'واکنش نشان دادن',ph:'[ʀeaʒiʀ]'},
      {title:'réflexion',key:'réflexion',trans:'انعکاس ، بازتاب',ph:'[ʀeflɛksjɔ̃]'},
      {title:'renverser',key:'renverser',trans:'واژگون کردن ، سرنگون کردن',ph:'[ʀɑ̃vɛʀse]'},
      {title:'repérage',key:'repérage',trans:'موقعیت یابی',ph:'[ʀ(ə)peʀaʒ ]'},
      {title:'séjour',key:'séjour',trans:'ماندن',ph:'[seʒuʀ]',cat:'S'},
      {title:'selle',key:'selle',trans:'زین اسب',ph:'[sɛl]'},
      {title:'sensible',key:'sensible',trans:'حساس',ph:'[sɑ̃sibl]'},
      {title:'serein',key:'serein',trans:'بی سروصدا ، آرام',ph:'[səʀɛ̃]'},
      {title:'solitude',key:'solitude',trans:'تنهایی',ph:'[sɔlityd]'},
      {title:'stagiaire',key:'stagiaire',trans:'کارآموز',ph:'[staʒjɛʀ]'},
      {title:'tirer',key:'tirer',trans:'کشیدن',ph:'[tiʀe]',cat:'T'},
      {title:'traîneau',key:'traîneau',trans:'سورتمه',ph:'[tʀɛno]'},
      {title:'trou',key:'trou',trans:'سوراخ ، حفره',ph:'[tʀu]'},
      {title:'tuer',key:'tuer',trans:'کشتن',ph:'[tɥe]'},
      {title:'véritable',key:'véritable',trans:'واقعی ، حقیقی',ph:'[veʀitabl]',cat:'V'},
      {title:'virus',key:'virus',trans:'ویروس',ph:'[viʀys]'},
      {title:'vitre',key:'vitre',trans:'پانل شیشه ای که باز میشود ، پنجره ماشین',ph:'[vitʀ]'},
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
