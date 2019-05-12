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
      {title:'banque',key:'banque',trans:'بانک',ph:'[bɑ̃k]',cat:'B'},
      {title:'capital',key:'capital',trans:'سرمایه ، پایتخت',ph:'[kapital]',cat:'C'},
      {title:'célèbre',key:'célèbre',trans:'مشهور ، معروف',ph:'[selɛbʀ]'},
      {title:'changer',key:'changer',trans:'عوض کردن ، تغییر دادن',ph:'[ʃɑ̃ʒe]'},
      {title:'chien',key:'chien',trans:'سگ',ph:'[ʃjɛ̃]'},
      {title:'chose',key:'chose',trans:'چیزی',ph:'[ʃoz]'},
      {title:'commun',key:'commun',trans:'مشترک ، رایج',ph:'[kɔmœ̃]'},
      {title:'décider',key:'décider',trans:'تصمیم گرفتن',ph:'[deside]',cat:'D'},
      {title:'déménagement',key:'déménagement',trans:'اسباب کشی(اسم)',ph:'[demenaʒmɑ̃]'},
      {title:'déménager',key:'déménager',trans:'اسباب کشی کردن (فعل)',ph:'[demenaʒe]'},
      {title:'doux',key:'doux',trans:'خوشایند',ph:'[du]'},
      {title:'échanger',key:'échanger',trans:'مبادله کردن(فعل)',ph:'[eʃɑ̃ʒe]',cat:'E'},
      {title:'élevé',key:'élevé',trans:'بالا ، زیاد',ph:'[el(ə)ve]'},
      {title:'ennuyer',key:'ennuyer',trans:'اذیت کردن ، خسته شدن',ph:'[ɑ̃nɥije]'},
      {title:'forêt',key:'forêt',trans:'جنگل',ph:'[fɔʀɛ]',cat:'F'},
      {title:'gagner',key:'gagner',trans:'بدست آوردن ، برنده شدن',ph:'[ɡaɲe]',cat:'G'},
      {title:'horreur de (avoir)',key:'horreur de (avoir)',trans:'متنفر بودن',ph:'[ɔʀœʀ]',cat:'H'},
      {title:'idéal',key:'idéal',trans:'ایده آل ،دلخواه',ph:'[ideal]',cat:'I'},
      {title:'logement',key:'logement',trans:'مسکن',ph:'[lɔʒmɑ̃]',cat:'L'},
      {title:'loyer',key:'loyer',trans:'اجاره کردن',ph:'[lwaje]'},
      {title:'minute',key:'minute',trans:'دقیقه',ph:'[minyt]',cat:'M'},
      {title:'numéro spécial',key:'numéro spécial',trans:'موضوع خاص، شماره ویژه',ph:'[nymeʀo spesjal]',cat:'N'},
      {title:'offre',key:'offre',trans:'پیشنهاد دادن ، پیشنهاد',ph:'[ɔfʀ]',cat:'O'},
      {title:'pied',key:'pied',trans:'پا',ph:'[pje]',cat:'P'},
      {title:'place (sur)',key:'place (sur)',trans:'در محل ، محلی',ph:'[plas syʀ]'},
      {title:'plaindre',key:'plaindre',trans:'شکایت کردن ، نالیدن',ph:'[plɛ̃dʀ]'},
      {title:'prendre (le temps de) ',key:'prendre ',trans:'وقت گرفتن',ph:'[pʀɑ̃dʀ]'},
      {title:'privilégié',key:'privilégié',trans:'مرفه',ph:'[pʀivileʒje]'},
      {title:'promotion',key:'promotion',trans:'ترویج ، ارتقا',ph:'[pʀɔmosjɔ̃]'},
      {title:'rechercher',key:'rechercher',trans:'جستجو کردن برای',ph:'[ʀ(ə)ʃɛʀʃe]',cat:'R'},
      {title:'redire',key:'redire',trans:'دوباره گفتن',ph:'[ʀ(ə)diʀ]'},
      {title:'réécouter',key:'réécouter',trans:'دوباره گوش کردن ، دوباره پخش کردن',ph:'[ʀe ekute]'},
      {title:'refaire',key:'refaire',trans:'دوباره انجام دادن',ph:'[ʀ(ə)fɛʀ]'},
      {title:'réorganiser',key:'réorganiser',trans:'دوباره سازماندهی کردن ، سازماندهی مجدد',ph:'[ʀeɔʀɡanize]'},
      {title:'retirer',key:'retirer',trans:'پاک کردن ، برداشتن',ph:'[ʀ(ə)tiʀe]'},
      {title:'retraite',key:'retraite',trans:'بازنشستگی ، عقب نشینی',ph:'[ʀ(ə)tʀɛt ]'},
      {title:'rivière',key:'rivière',trans:'رودخانه',ph:'[ʀivjɛʀ ]'},
      {title:'route',key:'route',trans:'جاده ، مسیر',ph:'[ʀut]'},
      {title:'rural',key:'rural',trans:'روستایی ، حومه',ph:'[ʀyʀal]'},

      {title:'souriant',key:'souriant',trans:'خندان',ph:'[suʀjɑ̃]',cat:'S'},

      {title:'témoignage',key:'témoignage',trans:' شهادت ، مدرک ، گزارش',ph:'[ʀut]',cat:'T'},

      {title:'terrain',key:'terrain',trans:'زمین',ph:'[teʀɛ̃]'},

      {title:'transports en commun',key:'transports en commun',trans:'حمل و نقل عمومی',ph:'[tʀɑ̃spɔʀ ɑ̃ kɔmœ̃]'},

      {title:'urbain',key:'urbain',trans:'شهری',ph:'[yʀbɛ̃]',cat:'U'},

      {title:'VTT',key:'VTT',trans:'دوچرخه کوهستان',ph:'[vetete]'},

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
