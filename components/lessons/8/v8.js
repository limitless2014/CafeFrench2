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
      {title:'acquérir',key:'acquérir',trans:'بدست آوردن',ph:'[akeʀiʀ]',cat:'A'},
      {title:'actuellement',key:'actuellement',trans:'اکنون ، در حال حاضر',ph:'[aktɥɛlmɑ̃]'},
      {title:'agréable',key:'agréable',trans:'خوشایند ، دلپذیر',ph:'[aɡʀeabl]'},
      {title:'amitié',key:'amitié',trans:'دوستی',ph:'[amitje]'},
      {title:'amour',key:'amour',trans:'عشق',ph:'[amuʀ]'},
      {title:'avantage',key:'avantage',trans:'مزیت ، سود ، آوانتاژ',ph:'[avɑ̃taʒ]'},
      {title:'boîte',key:'boîte',trans:'جعبه ، قوطی',ph:'[bwat]',cat:'B'},
      {title:'carrière',key:'carrière',trans:'حرفه',ph:'[kaʀjɛʀ]',cat:'C'},
      {title:'centre',key:'centre',trans:'مرکز',ph:'[sɑ̃tʀ]'},
      {title:'changement',key:'changement',trans:'تغییر ، تحول',ph:'[ʃɑ̃ʒmɑ̃]'},
      {title:'chômeur',key:'chômeur',trans:'بیکار',ph:'[ʃomœʀ]'},
      {title:'commercial',key:'commercial',trans:'تجاری ، بازرگانی',ph:'[kɔmɛʀsjal]'},
      {title:'compétition',key:'compétition',trans:'رقابت',ph:'[kɔ̃petisjɔ̃]'},
      {title:'consommer',key:'consommer',trans:'مصرف کردن',ph:'[kɔ̃sɔme]'},
      {title:'contre',key:'contre',trans:'بر علیه ، خلاف',ph:'[kɔ̃tʀ]'},
      {title:'côté',key:'côté',trans:'کنار ، بغل',ph:'[kote]'},
      {title:'demandeur d\'emploi',key:'demandeur d\'emploi',trans:'کارجو',ph:'[d(ə)mɑ̃dœʀ d ɑ̃plwa]',cat:'D'},
      {title:'différence',key:'différence',trans:'تفاوت',ph:'[difeʀɑ̃s]'},
      {title:'s\'entendre bien/mal avec quelque un(e)',key:'entendre',trans:'کنار امدن با کسی ، بد بودن با کسی',ph:'[s ɑ̃tɑ̃dʀ bjɛ̃]' ,cat:'E'},
      {title:'essence',key:'essence',trans:'بنزین',ph:'[esɑ̃s]'},
      {title:'études supérieures',key:'études supérieures',trans:'تحصیلات عالی',ph:'[etyd sypeʀjœʀ]'},
      {title:'garantie',key:'garantie',trans:'ضمانت ، گاارنتی',ph:'[ɡaʀɑ̃ti]',cat:'G'},
      {title:'grand mère',key:'grand-mère',trans:'مادربزرگ',ph:'[ɡʀɑ̃mɛʀ]'},
      {title:'importance',key:'importance',trans:'اهمیت',ph:'[ɛ̃pɔʀtɑ̃s]',cat:'I'},
      {title:'intérêt',key:'intérêt',trans:'بهره ، سود ، علاقه',ph:'[ɛ̃teʀɛ]'},
      {title:'inutile',key:'inutile',trans:'بی استفاده ، بی اهمیت',ph:'[inytil]'},
      {title:'justement',key:'justement',trans:'در واقع ، دقیقاً',ph:'[ʒystəmɑ̃]',cat:'J'},
      {title:'lecteur',key:'lecteur',trans:'خواننده',ph:'[lɛktœʀ]',cat:'L'},
      {title:'lecture',key:'lecture',trans:'خواندن ، قرائت',ph:'[lɛktyʀ]'},
      {title:'lent',key:'lent',trans:'آهسته ، کند',ph:'[lɑ̃]'},
      {title:'marché',key:'marché',trans:'مغازه ، فروشگاه ، بازار',ph:'[maʀʃe]',cat:'M'},
      {title:'mettre',key:'mettre',trans:'قراردادن ، پوشیدن',ph:'[mɛtʀ]'},
      {title:'mode de vie',key:'mode de vie',trans:'روش زندگی',ph:'[mɔd də vi]'},
      {title:'montre',key:'montre',trans:'ساعت مچی',ph:'[kilɔmɛtʀ]',cat:'K'},
      {title:'panne',key:'panne',trans:'از کارافتادن ، خراب شدن',ph:'[pan]',cat:'P'},
      {title:'parole',key:'parole',trans:'سخن ، صحبت',ph:'[paʀɔl]'},
      {title:'passer',key:'passer',trans:'تبدیل شدن ، شدن',ph:'[pɑse]'},
      {title:'poste',key:'poste',trans:'موقعیت ، شغل',ph:'[pɔst]'},
      {title:'pouvoir',key:'pouvoir',trans:'قدرت',ph:'[puvwaʀ]'},
      {title:'premier classe',key:'premier',trans:'شش کلاس ابتدایی',ph:'[pʀəmje klɑs]'},
      {title:'présenter',key:'présenter',trans:'تقدیم کردن ، معرفی کردن',ph:'[pʀezɑ̃te]'},
      {title:'prêt',key:'prêt',trans:'آماده',ph:'[pʀɛ]'},
      {title:'réalité',key:'réalité',trans:'در واقع',ph:'[ʀealite]',cat:'R'},
      {title:'remarier',key:'remarier',trans:'دوباره ازدواج کردن',ph:'[ʀ(ə)maʀje]'},
      {title:'remplacer',key:'remplacer',trans:'جایگزین کردن',ph:'[ʀɑ̃plase]'},
      {title:'responsabilités',key:'responsabilités',trans:'مسئولیتها',ph:'[ʀɛspɔ̃sabilite]'},
      {title:'réussir',key:'réussir',trans:'موفق شدن',ph:'[ʀeysiʀ]'},
      {title:'réussite',key:'réussite',trans:'موفقیت',ph:'[ʀeysit]'},
      {title:'sacrifier',key:'sacrifier',trans:'فداکاری تسلیم شدن',ph:'[sakʀifje]',cat:'S'},
      {title:'sans doute',key:'sans doute',trans:'بدون شک',ph:'[sɑ̃ dut]'},
      {title:'sports d\'hiver',key:'sports d\'hiver',trans:'ورزش های زمستانی',ph:'[spɔʀ d ivɛʀ]'},
      {title:'supérieur',key:'supérieur',trans:'برتر ، بالاتر',ph:'[sypeʀjœʀ]'},
      {title:'supérieur',key:'supérieurn',trans:'ارشد ، رئیس',ph:'[sypeʀjœʀ]'},
      {title:'terminale classe',key:'terminale classe',trans:'شش کلاس بعد از ابتدایی',ph:'[tɛʀminal klɑs]',cat:'T'},
      {title:'valeur',key:'valeur',trans:'ارزش ، بها',ph:'[valœʀ]',cat:'V'},
     
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
