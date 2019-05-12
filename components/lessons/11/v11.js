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
      {title:'absent',key:'absent',trans:'غایب ، گمشده',ph:'[apsɑ̃]',cat:'A'},
      {title:'amer',key:'amer',trans:'تلخ',ph:'[amɛʀ]'},
      {title:'anonyme',key:'anonyme',trans:'ناشناس ، ناشناخته',ph:'[anɔnim]'},
      {title:'assez',key:'assez',trans:'کافی ، کاملاً',ph:'[ase]'},
      {title:'automobiliste',key:'automobiliste',trans:'راننده',ph:'[ɔtɔmɔbilist]'},
      {title:'cabinet',key:'cabinet',trans:'دفتر ، مشاوران ، کابینت',ph:'[kabinɛ]',cat:'C'},
      {title:'cependant',key:'cependant',trans:'به هرحال ، با این حال',ph:'[s(ə)pɑ̃dɑ̃]'},
      {title:'chuter',key:'chuter',trans:'سقوط کردن ، پایین آوردن',ph:'[ʃyte]'},
      {title:'code',key:'code',trans:'کد ، رمز',ph:'[kɔd]'},
      {title:'complètement',key:'complètement',trans:'کاملاً ، به طور کامل',ph:'[kɔ̃plɛtmɑ̃]'},
      {title:'composer',key:'composer',trans:'وارد کردن ، ترکیب کردن ، ساختن',ph:'[kɔ̃poze]'},
      {title:'confirmation',key:'confirmation',trans:'تاییدیه',ph:'[kɔ̃fiʀmasjɔ̃]'},
      {title:'confus',key:'confus',trans:'سردرگم ، شرمنده',ph:'[kɔ̃fy]'},
      {title:'copropriétaire',key:'copropriétaire',trans:'شریک ، شریک بخشی از',ph:'[kopʀɔpʀijetɛʀ]'},
      {title:'débordé (être)',key:'débordé (être)',trans:'زیر بار عظیمی از کار ، زیر فشار زیادی بودن',ph:'[debɔʀde]',cat:'D'},
      {title:'déduire',key:'déduire',trans:'کم کردن ، استنتاج',ph:'[dedɥiʀ]'},
      {title:'dépendre de',key:'dépendre',trans:'بستگی داشتن به',ph:'[depɑ̃dʀ]'},
      {title:'discret',key:'discret',trans:'محتاط',ph:'[diskʀɛ ]'},
      {title:'donnée',key:'donnée',trans:'داده ، داده شده',ph:'[dɔne]'},
      {title:'échantillon',key:'échantillon',trans:'نمونه',ph:'[eʃɑ̃tijɔ̃]',cat:'E'},
      {title:'échecs',key:'échecs',trans:'بازی شطرنج',ph:'[eʃɛk]'},
      {title:'élection',key:'élection',trans:'انتخاب',ph:'[elɛksjɔ̃]'},
      {title:'évident',key:'évident',trans:'واضح ، بدیهی ، مشهود',ph:'[evidɑ̃]'},
      {title:'éviter',key:'éviter',trans:'اجتناب کردن ، دوری کردن',ph:'[evite]'},
      {title:'faible',key:'faible',trans:'ضعیف ، کوچک',ph:'[fɛbl]',cat:'F'},
      {title:'faux',key:'faux',trans:'اشتباه ، غلط',ph:'[fo]'},
      {title:'fermeture',key:'fermeture',trans:'بستن ، دستگیره',ph:'[fɛʀmətyʀ]'},
      {title:'fiable',key:'fiable',trans:'قابل اعتماد ، قابل اطمینان',ph:'[fjabl]'},
      {title:'fournir',key:'fournir',trans:'فراهم کردن ، تامین کردن',ph:'[fuʀniʀ]'},
      {title:'foyer',key:'foyer',trans:'خانه داری ، خانواده',ph:'[fwaje]'},
      {title:'graffiti',key:'graffiti',trans:'نقاشی های دیواری ، گرافیتی',ph:'[ɡʀafiti]',cat:'G'},
      {title:'inconvénient',key:'inconvénient',trans:'عیب ، اشکال',ph:'[ɛ̃kɔ̃venjɑ̃]',cat:'I'},
      {title:'indication',key:'indication',trans:'نشانه ، اطلاعات',ph:'[ɛ̃dikasjɔ̃]'},
      {title:'intention (avoir l\'... de)',key:'intention (avoir 1\'... de)',trans:'قصد داشتن به',ph:'[ɛ̃tɑ̃sjɔ̃]'},
      {title:'interphone',key:'interphone',trans:'تلفن داخلی',ph:'[ɛ̃tɛʀfɔn]'},
      {title:'interpréter',key:'interpréter',trans:'تفسیر کردن ، ترجمه کردن',ph:'[ɛ̃tɛʀpʀete]'},
      {title:'joindre',key:'joindre',trans:'ارتباط برقرارکردن ، ضمیمه کردن',ph:'[ʒwɛ̃dʀ]',cat:'J'},
      {title:'locataire',key:'locataire',trans:'مستاجر',ph:'[lɔkatɛʀ]',cat:'L'},
      {title:'magazine',key:'magazine',trans:'مجله ، خشاب',ph:'[maɡazin]',cat:'M'},
      {title:'match',key:'match',trans:'مسابقه',ph:'[matʃ]'},
      {title:'modeste',key:'modeste',trans:'متواضع',ph:'[mɔdɛst]'},
      {title:'nul',key:'nul',trans:'هیچ ، بی استفاده ، ناامید ، خوب نبودن در چیزی',ph:'[nyl]',cat:'N'},
      {title:'opinion',key:'opinion',trans:'نظر ، عقیده',ph:'[ɔpinjɔ̃]',cat:'O'},
      {title:'ouverture',key:'ouverture',trans:'افتتاحیه',ph:'[uvɛʀtyʀ]'},
      {title:'parti',key:'parti',trans:'حزب ، بخش',ph:'[paʀti]',cat:'P'},
      {title:'plusieurs',key:'plusieurs',trans:'چندین ، مختلف',ph:'[plyzjœʀ]'},
      {title:'population',key:'population',trans:'جمعیت',ph:'[pɔpylasjɔ̃]'},
      {title:'pose',key:'pose',trans:'تاسیسات ، نصب',ph:'[poz]'},
      {title:'pourtant',key:'pourtant',trans:'با این حال ، اما',ph:'[puʀtɑ̃]'},
      {title:'professionnel',key:'professionnel',trans:'حرفه ای',ph:'[pʀɔfesjɔnɛl ]'},
      {title:'programme',key:'programme',trans:'برنامه ، برنامه تلویزیونی',ph:'[pʀɔɡʀam]'},
      {title:'proportion',key:'proportion',trans:'نسبت ، قسمت ، میزان',ph:'[pʀɔpɔʀsjɔ̃]'},
      {title:'prudent',key:'prudent',trans:'محتاط',ph:'[pʀydɑ̃]'},
      {title:'puis',key:'puis',trans:'سپس ، بعد',ph:'[pɥi]'},
      {title:'réaliser',key:'réaliser',trans:'پیش بردن ، بدست آوردن ، تحقق بخشیدن',ph:'[ʀealize]',cat:'R'},
      {title:'regrouper',key:'regrouper',trans:'باهم یک گروه را تشکیل دادن ، تجدید قوا',ph:'[ʀ(ə)ɡʀupe]'},
      {title:'relié ',key:'relié',trans:'متصل ، لینک شده',ph:'[ʀəlje]'},
      {title:'représentatif',key:'représentatif',trans:'نمایانگر ، نشان دهنده',ph:'[ʀ(ə)pʀezɑ̃tatif ]'},
      {title:'résoudre',key:'résoudre',trans:'حل کردن',ph:'[ʀezudʀ]'},
      {title:'reste',key:'reste',trans:'بقیه ، باقی',ph:'[ʀɛst]'},
      {title:'saison',key:'saison',trans:'فصل',ph:'[sɛzɔ̃]',cat:'S'},
      {title:'sélectionner',key:'sélectionner',trans:'انتخاب کردن',ph:'[selɛksjɔne]'},
      {title:'selon',key:'selon',trans:'مطابق با ، بر اساس',ph:'[s(ə)lɔ̃]'},
      {title:'sérieux',key:'sérieux',trans:'جدی',ph:'[seʀjø]'},
      {title:'servir à',key:'servir à',trans:'مفید بودن برای',ph:'[sɛʀviʀ]'},
      {title:'signer',key:'signer',trans:'امضا کردن',ph:'[siɲe]'},
      {title:'sondage',key:'sondage',trans:'نظر سنجی ، تحقیق',ph:'[sɔ̃daʒ]'},
      {title:'sondé',key:'sondé',trans:'رای دهنده',ph:'[sɔ̃de ]'},
      {title:'stable',key:'stable',trans:'ثابت ، پایدار',ph:'[stabl]'},
      {title:'suivant',key:'suivant',trans:'بعدی ، متعاقب',ph:'[sɥivɑ̃]'},
      {title:'syndic',key:'syndic',trans:'مشاور املاک',ph:'[sɛ̃dik]'},
      {title:'système',key:'système',trans:'سیستم ، نظام',ph:'[sistɛm]'},
      {title:'télécopie',key:'télécopie',trans:'فکس',ph:'[telekɔpi]',cat:'T'},
      {title:'utile',key:'utile',trans:'مفید',ph:'[ytil]',cat:'U'},
      {title:'vérité',key:'vérité',trans:'حقیقت ، واقعیت',ph:'[veʀite]',cat:'V'},
      {title:'visiteur',key:'visiteur',trans:'بازدید کننده',ph:'[vizitœʀ]'},
      {title:'vol',key:'vol',trans:'سرقت ، دزدی ، پرواز',ph:'[vɔl]'},
      {title:'voleur',key:'voleur',trans:'دزد ، سارق',ph:'[vɔlœʀ]'},
      {title:'vote',key:'vote',trans:'رأی',ph:'[vɔt ]'},
      {title:'zapper',key:'zapper',trans:'عوض کردن کانال تلویزیون',ph:'[zape]',cat:'Z'},
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
