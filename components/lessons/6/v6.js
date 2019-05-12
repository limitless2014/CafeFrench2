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
      {title:'accès',key:'accès',trans:'دسترسی',ph:'[aksɛ]',cat:'A'},
      {title:'adapté',key:'adapté',trans:'وقف داده شده ، مناسب',ph:'[adapte]'},
      {title:'affaires',key:'affaires',trans:'متعلقات',ph:'[afɛʀ]'},
      {title:'allumer',key:'allumer',trans:'روشن کردن',ph:'[alyme]'},
      {title:'apprécier',key:'apprécier',trans:'دوست داشتن',ph:'[apʀesje]'},
      {title:'argent de poche',key:'argent de poche',trans:'پول تو جیبی',ph:'[aʀʒɑ̃ də pʀɔʃ]'},
      {title:'auto-stop',key:'auto-stop',trans:'سفر با وسایل نقلیه به صورت رایگان',ph:'[otostɔp]'},
      {title:'autoritaire',key:'autoritaire',trans:'اقتدارگرا',ph:'[ɔtɔʀitɛʀ]'},
      {title:'blouson',key:'blouson',trans:'ژاکت',ph:'[bluzɔ̃]',cat:'B'},
      {title:'cacher',key:'cacher',trans:'مخفی شدن',ph:'[kaʃe]',cat:'C'},
      {title:'calmement',key:'calmement',trans:'آرامش',ph:'[kalməmɑ̃]'},
      {title:'chacun',key:'chacun',trans:'هر',ph:'[ʃakœ̃]',cat:'E'},
      {title:'compagniee(en ... de)',key:'compagnie ',trans:'همراهی کردن',ph:'[kɔ̃paɲi]'},
      {title:'compliqué',key:'compliqué',trans:'پیچیده ، بغرنج',ph:'[kɔ̃plike]'},
      {title:'compréhensif',key:'compréhensif',trans:'فهمیده ، باهوش',ph:'[kɔ̃pʀeɑ̃sif]'},
      {title:'compter (=avoir de l\'importance)',key:'compter',trans:'حساب کردن روی',ph:'[kɔ̃te]'},
      {title:'conseil',key:'conseil',trans:'نصیحت ، مشاوره',ph:'[kɔ̃sɛj]'},
      {title:'crise',key:'crise',trans:'بحران',ph:'[kʀiz]'},
      {title:'curiosité',key:'curiosité',trans:'حس کنجکاوی',ph:'[kyʀjozite]'},
      {title:'décider(se...à)',key:'décider',trans:'تصمیم گرفتن',ph:'[deside]',cat:'D'},
      {title:'dispute',key:'dispute',trans:'نزاع ، مشاجره',ph:'[dispyt]'},
      {title:'droit de (avoir le)',key:'droit de',trans:'حق داشتن ، اجازه داشتن',ph:'[dʀwa]'},
      {title:'embrasser',key:'embrasser',trans:'بوسیدن',ph:'[ɑ̃bʀase]'},
      {title:'encore',key:'encore',trans:'هنوز ، دوباره',ph:'[ɑ̃kɔʀ]',case:'E'},
      {title:'énervé',key:'énervé',trans:'عصبی',ph:'[enɛʀve]'},
      {title:'ennuyer',key:'ennuyer',trans:'اذیت کردن',ph:'[ɑ̃nɥije]'},
      {title:'étonner',key:'étonner',trans:'شگفت زده شدن ، متعجب شدن',ph:'[etɔne]'},
      {title:'examiner',key:'examiner',trans:'معاینه کردن ، امتحان کردن ، بررسی کردن',ph:'[ɛɡzamine]'},
      {title:'expliquer',key:'expliquer',trans:'بیان کردن ، توضیح دادن',ph:'[ɛksplike]'},
      {title:'hiérarchie',key:'hiérarchie',trans:'سلسه مراتب',ph:'[ˈjeʀaʀʃi]',cat:'H'},
      {title:'ignorer',key:'ignorer',trans:'نایده گرفتن',ph:'[iɲɔʀe]',cat:'I'},
      {title:'insistance',key:'insistance',trans:'پافشاری کردن ، اصرار',ph:'[ɛ̃sistɑ̃s]'},
      {title:'interrogatoire',key:'interrogatoire',trans:'بازجویی کردن ، بازخواست',ph:'[ɛ̃teʀɔɡatwaʀ]'},
      {title:'isoler',key:'isoler',trans:'جداکردن ، منزوی کردن',ph:'[izɔle]'},
      {title:'jamais',key:'jamais',trans:'هرگز',ph:'[ʒamɛ]',cat:'J'},
      {title:'jusque',key:'jusque',trans:'تازمانی که ، تا مکانی',ph:'[ʒysk]'},
      {title:'liberté',key:'liberté',trans:'آزادی های فردی',ph:'[libɛʀte]',cat:'L'},
      {title:'marcher',key:'marcher',trans:'کارکردن',ph:'[maʀʃe]',cat:'M'},
      {title:'matinal',key:'matinal',trans:'سحرخیز',ph:'[matinal]'},
      {title:'mêler',key:'mêler',trans:'مخلوط کردن',ph:'[mele]'},
      {title:'mignon',key:'mignon',trans:'جذاب',ph:'[miɲɔ̃]'},
      {title:'négociation',key:'négociation',trans:'مذاکره',ph:'[neɡɔsjasjɔ̃]',cat:'N'},
      {title:'négocier',key:'négocier',trans:'مذاکره',ph:'[neɡɔsje]'},
      {title:'note(scolaire)',key:'note',trans:'یادداشت',ph:'[yʀbɛ̃]',cat:'N'},
      {title:'octobre',key:'octobre',trans:'ماه اکتبر',ph:'[ɔktɔbʀ]',cat:'O'},
      {title:'optimiste',key:'optimiste',trans:'خوش بین',ph:'[ɔptimist]'},
      {title:'panique',key:'panique',trans:'ترس ناگهانی همراه با وحشت',ph:'[panik]',cat:'P'},
      {title:'pareil',key:'pareil',trans:'یکسان ، مانند',ph:'[paʀɛj ]'},
      {title:'partie',key:'partie',trans:'بخش',ph:'[paʀti]'},
      {title:'précis',key:'précis',trans:'دقیق',ph:'[pʀesi]'},
      {title:'prêter',key:'prêter',trans:'قرض دادن',ph:'[pʀete]'},
      {title:'prétexte',key:'prétexte',trans:'بهانه',ph:'[pʀetɛkst]'},
      {title:'privilégié',key:'privilégié',trans:'مرفه',ph:'[pʀivileʒje]'},
      {title:'proposition',key:'proposition',trans:'پیشنهاد',ph:'[pʀɔpozisjɔ̃]'},
      {title:'questionner',key:'questionner',trans:'سوال کردن',ph:'[kɛstjɔne]',cat:'Q'},
      {title:'racheter',key:'racheter',trans:'دیگری را خریدن ، بازخرید',ph:'[ʀaʃ(ə)te]',cat:'R'},
      {title:'raison',key:'raison',trans:'دلیل',ph:'[ʀɛzɔ̃]'},
      {title:'ranger',key:'ranger',trans:'مرتب کردن ، کنارگذاشتن',ph:'[ʀɑ̃ʒe]'},
      {title:'réengager',key:'réengager',trans:'دوباره انجام دادن',ph:'[ʀɑ̃ɡaʒe]'},
      {title:'réfléchir',key:'réfléchir',trans:'فکر کردن',ph:'[ʀefleʃiʀ]'},
      {title:'réfugier',key:'réfugier',trans:'پناه گرفتن',ph:'[ʀefyʒje]'},
      {title:'rendre',key:'rendre',trans:'رفتن به',ph:'[ʀɑ̃dʀ]'},
      {title:'reparler',key:'reparler',trans:'دوباره صحبت کردن',ph:'[ʀ(ə)paʀle]'},
      {title:'rester',key:'rester',trans:'ماندن',ph:'[ʀɛste]'},
      {title:'résultat',key:'résultat',trans:'نتیجه ، عاقبت',ph:'[ʀezylta]'},
      {title:'scène',key:'scène',trans:'صحنه',ph:'[sɛn]',cat:'S'},
      {title:'sévère',key:'sévère',trans:'سخت ، شدید',ph:'[sevɛʀ]'},
      {title:'silence',key:'silence',trans:'سکوت',ph:'[silɑ̃s]'},
      {title:'superbe',key:'superbe',trans:'عالی ، فوق العاده',ph:'[sypɛʀb]'},
      {title:'surlendemain',key:'surlendemain',trans:'دو روز بعد',ph:'[syʀlɑ̃d(ə)mɛ̃]'},
      {title:'surtout',key:'surtout',trans:'غالباً ، عمدتاً',ph:'[syʀtu]'},
      {title:'suspecter',key:'suspecter',trans:'مضنون شدن ، مشکوک شدن',ph:'[syspɛkte]'},
      {title:'temps-ci',key:'temps-ci',trans:'اخیراً',ph:'[tɑ̃ si]',cat:'T'},
      {title:'terrible',key:'terrible',trans:'وحشتناک ، ترسناک',ph:'[ʀɑ̃ʒe]'},
      {title:'traditionnel',key:'traditionnel',trans:'مرسوم ، سنتی',ph:'[tʀadisjɔnɛl]'},
      {title:'trajet',key:'trajet',trans:'مسیر ، سفر کوتاه',ph:'[tʀaʒɛ]'},
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
