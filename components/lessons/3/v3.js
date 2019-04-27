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
      vocabs:[{title:'abord', key: 'abord',trans:'اولین',ph:'[abɔʀ]',cat:'A'},
      {title:'actualité',key:'actualité',trans:'اخبار ، رویدادهای فعلی',ph:'[aktɥalite]'},
      {title:'association',key:'association',trans:'اتحادیه ، همکاری',ph:'[asɔsjasjɔ̃]'},
      {title:'auditeur',key:'auditeur',trans:'شنونده',ph:'[oditœʀ]'},
      {title:'avril',key:'avril',trans:'ماه آوریل',ph:'[avʀil]'},
      {title:'bloqué',key:'bloqué',trans:'مسدود',ph:'[blɔke]',cat:'B'},
      {title:'bord',key:'bord',trans:'ساحل رودخانه',ph:'[bɔʀ]'},
      {title:'boulanger',key:'boulanger',trans:'نانوا',ph:'[bulɑ̃ʒe]'},
      {title:'boulangerie',key:'boulangerie',trans:'نانوا',ph:'[bulɑ̃ʒʀi]'},
      {title:'chaque',key:'chaque',trans:'هرکدام',ph:'[ʃak]',cat:'C'},
      {title:'comptable',key:'comptable',trans:'حسابدار',ph:'[kɔ̃tabl]'},
      {title:'débat',key:'débat',trans:'مناظره ، بحث و جدل',ph:'[deba]',cat:'D'},
      {title:'début',key:'début',trans:'شروع ، آغاز',ph:'[deby]'},
      {title:'décembre',key:'décembre',trans:'ماه دسامبر',ph:'[desɑ̃bʀ]'},
      {title:'déclaration',key:'déclaration',trans:'اظهار ، بیان',ph:'[deklaʀasjɔ̃]'},
      {title:'dialogue',key:'dialogue',trans:'مکالمه ، گفتگو',ph:'[djalɔɡ]'},
      {title:'émission',key:'émission',trans:'برنامه رادیویی ، برنامه تلویزیونی',ph:'[emisjɔ̃]',cat:'E'},
      {title:'enregistrement',key:'enregistrement',trans:'ثبت کردن',ph:'[ɑ̃ʀ(ə)ʒistʀəmɑ̃]'},
      {title:'ensemble',key:'ensemble',trans:'با همدیگر',ph:'[ɑ̃sɑ̃bl]'},
      {title:'façon',key:'façon',trans:'راه ، روش ، شیوه',ph:'[fasɔ̃]',cat:'F'},
      {title:'Fidèle',key:'Fidèle',trans:'با ایمان ، مومن',ph:'[fidɛl]'},
      {title:'geste',key:'geste',trans:'ژست ، حالت چهره ، حرکت',ph:'[ʒɛst]',cat:'G'},
      {title:'grâce',key:'grâce',trans:'به لطف ، با تشکر از',ph:'[ɡʀɑs]'},
      {title:'gratuit',key:'gratuit',trans:'رایگان',ph:'[ɡʀatɥi]'},
      {title:'hasard',key:'hasard',trans:'شانسی ، اتفاقی',ph:'[ˈazaʀ]',cat:'H'},
      {title:'hebdomadaire',key:'hebdomadaire',trans:'هفتگی',ph:'[ɛbdɔmadɛʀ]'},
      {title:'information',key:'information',trans:'آیتم خبری',ph:'[ɛ̃fɔʀmasjɔ̃]',cat:'I'},
      {title:'interne',key:'interne',trans:'داخلی',ph:'[ɛ̃tɛʀn]'},
      {title:'invite',key:'invite',trans:'مهمان',ph:'[ɛ̃vite]'},
      {title:'langue ',key:'langue ',trans:'زبان',ph:'[lɑ̃ɡ]',cat:'L'},
      {title:'maire',key:'maire',trans:'شهردار',ph:'[mɛʀ]',cat:'M'},
      {title:'malgré ',key:'malgré ',trans:'به رغم ، با وجود',ph:'[malɡʀe]'},
      {title:'marque',key:'marque',trans:'علامت ، نشان ، برند',ph:'[maʀk]'},
      {title:'matinée',key:'matinée',trans:'صبح',ph:'[matine]'},
      {title:'mensuel',key:'mensuel',trans:'ماهیانه',ph:'[mɑ̃sɥɛl]'},
      {title:'moulin',key:'moulin',trans:'آسیاب',ph:'[mulɛ̃]'},
      {title:'préparation',key:'préparation',trans:'آماده سازی',ph:'[pʀepaʀasjɔ̃]',cat:'P'},
      {title:'président',key:'président',trans:'رئیس جمهور',ph:'[pʀezidɑ̃]'},
      {title:'presse',key:'presse',trans:'مطبوعات',ph:'[pʀɛs]'},
      {title:'publicité',key:'publicité',trans:'تبلیغات',ph:'[pyblisite]'},
      {title:'quelque chose',key:'quelque chose',trans:'چیزی',ph:'[kɛlk ʃoz]',cat:'Q'},
      {title:'quotidien',key:'quotidien',trans:'روزانه',ph:'[kɔtidjɛ̃]'},
      {title:'radio-réveil',key:'radio-réveil',trans:'رادیوی ساعت دار',ph:'[ʀadjoʀevɛj]',cat:'R'},
      {title:'reportage',key:'reportage',trans:'گزارش',ph:'[ʀ(ə)pɔʀtaʒ]'},
      {title:'réseau',key:'réseau',trans:'شبکه',ph:'[ʀezo]'},
      {title:'situé',key:'situé',trans:'واقع در',ph:'[sitɥe]',cat:'S'},
      {title:'sommeil',key:'sommeil',trans:'خواب',ph:'[sɔmɛj]'},
      {title:'terre',key:'terre',trans:'زمین',ph:'[tɛʀ]',cat:'T'},
      {title:'tôt',key:'tôt',trans:'زود',ph:'[to]'},
      {title:'village',key:'village',trans:'روستا',ph:'[vilaʒ]',cat:'V'},
  
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
