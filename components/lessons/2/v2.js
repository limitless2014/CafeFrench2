import React, { Component } from 'react';
import { Container,Text,Header, Item, Icon, Input, Button, Left, Body, Card, CardItem } from 'native-base';
import {FlatList} from 'react-native';
import Tts from 'react-native-tts';
Tts.setDefaultLanguage('fr-FR');
let header=null;

export default class V2 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      vocabs:[{title:'accepter', key: 'accepter',trans:'پذیرفتن ، قبول کردن',ph:'[aksɛpte]',cat:'A'},
      {title:'agir',key:' agir',trans:'عمل کردن ، اقدام کردن',ph:'[aʒiʀ]'},
      {title:'août',key:' août',trans:'اوت ، هشتمین ماه سال میلادی',ph:'[u(t)]'},
      {title:'apéritif',key:'apéritif',trans:'پیش غذا',ph:'[apeʀitif]'},
      {title:'asseoir',key:'asseoir',trans:'نشستن',ph:'[aswaʀ]'},
      {title:'attention',key:'attention',trans:'توجه',ph:'[atɑ̃sjɔ̃]'},
      {title:'attirer',key:'attirer',trans:'توجه کسی را جلب کردن ، جذب کردن',ph:'[atiʀe]'},
      {title:'aujourd’hui',key:'aujourd’hui',trans:'امروز',ph:'[oʒuʀdɥi]'},
      {title:'besoin de',key:'besoin de',trans:'احتیاج داشتن به',ph:'[bəzwɛ̃ də]',cat:'B'},
      {title:'brasserie',key:'brasserie',trans:'آبجو فروشی',ph:'[bʀasʀi]'},
     

      {title:'cœur',key:'cœur',trans:'قلب',ph:'[kœʀ]',cat:'C'},
      {title:'côté ',key:'côté ',trans:'ًکنار ، بغل',ph:'[kɔt]'},
      {title:' dommage',key:' dommage',trans:'حیف',ph:'[dɔmaʒ]',cat:'D'},
      {title:'embêter',key:'embêter',trans:'اذیت کردن',ph:'[ɑ̃bete]',cat:'E'},
      {title:'engager',key:'engager',trans:'استخدام کردن ، معرفی کردن',ph:'[ɑ̃ɡaʒe]'},
      {title:'espérer',key:'espérer',trans:'امید داشتن به',ph:'[ɛspeʀe]'},
      {title:'fâcher',key:'fâcher',trans:'عصبانی شدن ، ناراحت شدن',ph:'[fɑʃe]',cat:'F'},
      {title:'fois',key:'fois',trans:'زمان ، دفعه',ph:'[fwa]'},
      {title:'hésiter',key:'hésiter',trans:'تردید کردن',ph:'[ezite]',cat:'H'},
      {title:'immeuble',key:'immeuble',trans:'ساختمان',ph:'[imœbl]',cat:'I'},
      {title:'inventer',key:'inventer',trans:'ابداع کردن ،اختراع',ph:'[ɛ̃vɑ̃te]'},
      {title:'laisser',key:'laisser',trans:'رها کردن ، ترک کردن',ph:'[lese]',cat:'L'},
      {title:'Mademoiselle',key:'Mademoiselle',trans:'خانم ، دوشیزه',ph:'[madmwazɛl]',cat:'M'},
      {title:'mardi',key:'mardi',trans:'سه شنبه',ph:'[maʀdi]'},
      {title:'nombreux',key:'nombreux',trans:'بسیاری',ph:'[nɔ̃bʀø]',cat:'N'},
      {title:'oser',key:'oser',trans:'جرات کردن ، شهامت داشتن',ph:'[oze]',cat:'O'},
      {title:'ouvertement',key:'ouvertement',trans:'علناً ، آشکارا',ph:'[uvɛʀtəmɑ̃]'},
      {title:'pardonner',key:'pardonner',trans:'بخشیدن',ph:'[paʀdɔne]',cat:'P'},
      {title:'pas',key:'pas',trans:'حرکت ، قدم',ph:'[pɑ]'},
      {title:'passer',key:'passer',trans:'صرف کردن',ph:'[pɑse]'},
      {title:'perdu ',key:'perdu ',trans:'از دست رفته ، گمشده',ph:'[pɛʀdy]'},
      {title:'pot',key:'pot',trans:'نوشیدنی نوشیدن (غیر رسمی)',ph:'[po]'},
      {title:'premier ',key:'premier ',trans:'اولین',ph:'[pʀəmje]'},
      {title:'prendre (un verre)',key:'prendre (un verre)',trans:'نوشیدنی نوشیدن',ph:'[pʀɑ̃dʀ œ̃ vɛʀ]'},
      {title:'ravi',key:'ravi',trans:'خوشحال ،هیجان زده',ph:'[ʀavi]',cat:'R'},
      {title:'reconnaître',key:'reconnaître',trans:'شناسایی ، تشخیص',ph:'[ʀ(ə)kɔnɛtʀ]'},
      {title:'refuser',key:'refuser',trans:'رد کردن',ph:'[ʀ(ə)fyze]'},
      {title:'régulièrement',key:'régulièrement',trans:'معمولاً ،به طور منظم',ph:'[ʀeɡyljɛʀmɑ̃]'},
      {title:'remercier',key:'remercier',trans:'تشکر کردن',ph:'[ʀ(ə)mɛʀsje]'},
      {title:'reprendre',key:'reprendre',trans:'دوباره شروع کردن',ph:'[ʀ(ə)pʀɑ̃dʀ]'},
      {title:'revenir',key:' revenir',trans:'برگشتن',ph:'[ʀ(ə)v(ə)niʀ]'},
      {title:'revoir',key:'revoir',trans:'دوباره دیدن ، دوباره ملاقات کردن',ph:'[ʀ(ə)vwaʀ]'},
      {title:'sentiment',key:'sentiment',trans:'احساس',ph:'[sɑ̃timɑ̃]',cat:'S'},
      {title:'s\'il vous plaît',key:'s\'il vous plaît',trans:'لطفاً',ph:'[s il vu plɛ]'},
      {title:'suffir',key:'suffir',trans:'کافی بودن',ph:'[syfiʀ]'},
      {title:'train',key:'train',trans:'در حال انجام کاری بودن',ph:'[tʀɛ̃]',cat:'T'},
      {title:'tromper',key:'tromper',trans:'اشتباه کردن',ph:'[tʀɔ̃pe]'},
      {title:'volontiers',key:'volontiers',trans:'با کمال میل ، مشتاقانه',ph:'[vɔlɔ̃tje]',cat:'V'},

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
