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
      vocabs:[{title:'attention', key: 'attention',trans:'توجه',ph:'[atɑ̃sjɔ̃]',cat:'A'},
      {title:'bouffe',key:'bouffe',trans:'غذا ، وعده غذایی',ph:'[buf]',cat:'B'},
      {title:'bougie',key:'bougie',trans:'شمع',ph:'[buʒi]'},
      {title:'buffet',key:'buffet',trans:'وعده غذایی سلف سرویس',ph:'[byfɛ]'},
      {title:'célébration',key:'célébration',trans:'جشن',ph:'[selebʀasjɔ̃]',cat:'C'},
      {title:'chéri',key:'chéri',trans:'عزیزم',ph:'[ʃeʀi]'},
      {title:'compter sur',key:'compter sur',trans:'حساب کشیدن روی',ph:'[kɔ̃te syʀ]'},
      {title:'confectionner',key:'confectionner',trans:'آماده کردن',ph:'[kɔ̃fɛksjɔne]'},
      {title:'convier',key:'convier',trans:'دعوت کردن',ph:'[kɔ̃vje]'},
      {title:'douzaine',key:'douzaine',trans:'دوازده عدد ، دوجین',ph:'[duzɛn]',cat:'D'},
      {title:'essentiel',key:'essentiel',trans:'خیلی مهم ، ضروری',ph:'[esɑ̃sjɛl]',cat:'E'},
      {title:'garder',key:'garder',trans:'نگهداری کردن ، حفظ کردن',ph:'[ɡaʀde]',cat:'G'},
      {title:'gastronomique',key:'gastronomique',trans:'آشپزی با کیفیت',ph:'[ɡastʀɔnɔmik]'},
      {title:'indispensable',key:'indispensable',trans:'ضروری ، اساسی',ph:'[ɛ̃dispɑ̃sabl]',cat:'I'},
      {title:'invitation',key:'invitation',trans:'دعوت نامه',ph:'[ɛ̃vitasjɔ̃]'},
      {title:'janvier',key:'janvier',trans:'ماه ژانویه ، اولین ماه سال',ph:'[ʒɑ̃vje]',cat:'J'},
      {title:'joyeux',key:'joyeux',trans:'مبارک',ph:'[ʒwajø]'},
      {title:'lieu(avoir) ',key:'lieu(avoir) ',trans:'اتفاق افتادن',ph:'[ljø]',cat:'L'},
      {title:'merveilleux',key:' merveilleux',trans:'شگفت انگیز ، فوق العاده',ph:'[mɛʀvɛjø]',cat:'M'},
      {title:'mettre (la table) ',key:'mettre (la table) ',trans:'سفره را چیدن',ph:'[mɛtʀ la tabl]'},
      {title:'modestement',key:'modestement',trans:'فروتنانه ، جوانمردانه',ph:'[mɔdɛstəmɑ̃]'},
      {title:'motif',key:'motif',trans:'عذر ، بهانه ، دلیل',ph:'[mɔtif]'},
      {title:'naissance',key:'naissance',trans:'تولد',ph:'[nɛsɑ̃s]',cat:'N'},
      {title:'occuper',key:'occuper',trans:'نگهداری کردن از',ph:'[ɔkype]',cat:'O'},
      {title:'officiel',key:'officiel',trans:'رسمی ، فرمال',ph:'[ɔfisjɛl]'},
      {title:'organiser',key:'organiser',trans:'مدیریت کردن',ph:'[ɔʀɡanize]'},
      {title:'pas du tout',key:'pas du tout',trans:'اصلاً و ابداً ، هرگز',ph:'[pɑ dy tu]'},
      {title:'plein',key:'plein',trans:'پر ، فول ،مملو',ph:'[plɛn]'},
      {title:'prévu',key:'prévu',trans:'برنامه ریزی شده',ph:'[pʀevy]'},
      {title:'privé',key:'privé',trans:'شخصی ، خصوصی',ph:'[pʀive]'},
      {title:'regretter',key:'regretter',trans:'پشیمان شدن',ph:'[ʀ(ə)ɡʀete]',cat:'R'},
      {title:'retenir',key:'retenir',trans:'مانع شدن ، وقفه ایجاد کردن',ph:'[ʀ(ə)t(ə)niʀ]'},
      {title:'roman',key:'roman',trans:'رمان ، مربوط به قرون وسطی در اروپا',ph:'[ʀɔmɑ̃]'},
      {title:'salutations',key:'salutations',trans:'سلام و احوال پرسی',ph:'[salytasjɔ̃]',cat:'S'},
      {title:'servir',key:'servir',trans:'خدمت کردن',ph:'[sɛʀviʀ]'},
      {title:'simplement',key:'simplement',trans:'به سادگی',ph:'[sɛ̃pləmɑ̃]'},
      {title:'souhaiter',key:'souhaiter',trans:'آرزو کردن',ph:'[swete]'},
      {title:'tradition',key:'tradition',trans:'سنت',ph:'[tʀadisjɔ̃]',cat:'T'},
      {title:'traiteur',key:'traiteur',trans:'آشپز',ph:'[tʀɛtœʀ]'},
      {title:'trentaine',key:'trentaine',trans:'حدود 30',ph:'[tʀɑ̃tɛn]'},
      {title:'typique',key:'typique',trans:'معمولی',ph:'[tipik]'},
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
