import React, { Component } from 'react';
import { Container,Text,Header, Item, Icon, Input, Button, Left, Body, Card, CardItem, Title } from 'native-base';
import {FlatList,View,ListItem} from 'react-native';
import Tts from 'react-native-tts';
Tts.setDefaultLanguage('fr-FR');
let header=null;
export default class V1 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      vocabs:[{title:'adresser', key: 'adresser',trans:'اطلاعات از کسی گرفتن، ارتباط برقرار کردن',ph:'[adʀese]'},
      {title:'assister à',key:'assister à',trans:'حضور داشتن در ، رفتن به',ph:'[asiste]'},
      {title:'carnet',key:'carnet',trans:' دفترچه یادداشت',ph:'[kaʀnɛ]'},
      {title:'certain',key:'certain',trans:'برخی افراد ، قطعاً',ph:'[sɛʀtɛ̃]'},
      {title:'chant',key:'chant',trans:'خوانندگی، سرود خواندن',ph:'[ʃɑ̃]'},
      {title:'chœur',key:'chœur',trans:'گروه کُر(مذکر)',ph:'[kœʀ]'},
      {title:'chorale',key:'chorale',trans:' گروه کُر (مونث) ',ph:'[kɔʀal]'},
      {title:'classique',key:'classique',trans:'کلاسیک ، قدیمی',ph:'[klasik]'},
      {title:'contemporain',key:'contemporain',trans:'قرن معاصر',ph:'[kɔ̃tɑ̃pɔʀɛ̃]'},
      {title:'critiquer',key:'critiquer',trans:'انتقاد کردن',ph:'[kʀitike]'},
      {title:'débuter',key:'débuter',trans:'شروع کردن',ph:'[debyte]'},
      {title:'dessus',key:'dessus',trans:'بالا',ph:'[d(ə)sy]'},
      {title:'différent',key:'différent',trans:'مختلف ، متفاوت',ph:'[difeʀɑ̃]'},
      {title:'enregistrer',key:'enregistrer',trans:'رکورد ، ثبت کردن',ph:'[ɑ̃ʀ(ə)ʒistʀe]'},
      {title:'entier',key:'entier',trans:'کامل ، پر',ph:'[ɑ̃tje]'},
      {title:'falloir',key:'falloir',trans:'باید ، لازم بودن',ph:'[falwaʀ]'},
      {title:'feuille',key:'feuille',trans:'ورقه ، برگه',ph:'[fœj]'},
      {title:'français',key:'français',trans:'فرانسوی',ph:'[fʀɑ̃sɛ]'},
      {title:'francophone',key:'francophone',trans:'فرانسوی زبان',ph:'[fʀɑ̃kɔfɔn]'},
      {title:'image',key:'image',trans:'تصویر',ph:'[imaʒ]'},
      {title:'imiter',key:'imiter',trans:'تقلید کردن ، کپی کردن',ph:'[imite]'},
      {title:'interprète',key:'interprète',trans:'مترجم',ph:'[ɛ̃tɛʀpʀɛt]'},
      {title:'juillet',key:'juillet',trans:'ماه ژوییه ، جولای',ph:'[ʒɥijɛ]'},
      {title:'juin',key:'juin',trans:'ماه ژوئن ',ph:'[ʒɥɛ̃]'},
      {title:'lien',key:'lien',trans:'پیوند ، ارتباط',ph:'[ljɛ̃]'},
      {title:'lundi',key:'lundi',trans:'دوشنبه',ph:'[lœ̃di]'},
      {title:'mettre',key:'mettre',trans:'قراردادن ، پوشیدن',ph:'[mɛtʀ]'},
      {title:'montrer',key:'montrer',trans:'نمایش دادن',ph:'[mɔ̃tʀe]'},
      {title:'mot',key:'mot',trans:'کلمه ، واژه',ph:'[mo]'},
      {title:'musical',key:'musical',trans:'موزیکال ، موسیقیایی',ph:'[myzikal]'},
      {title:'musique',key:'musique',trans:'موزیک ، موسیقی',ph:'[myzik]'},
      {title:'naître',key:'naître',trans:'متولد شدن',ph:'[nɛtʀ]'},
      {title:'noter',key:'noter',trans:'یادداشت کردن',ph:'[nɔte]'},
      {title:'nouvelle',key:'nouvelle',trans:'خبر',ph:'[nuvɛl]'},
      {title:'papier',key:'papier',trans:'کاغذ',ph:'[papje]'},
      {title:'parisien',key:'parisien',trans:'پاریسی',ph:'[paʀizjɛ̃]'},
      {title:'paroles',key:'paroles',trans:'کلمات ، اشعار',ph:'[paʀɔl]'},
      {title:'participer',key:'participer',trans:'شرکت کردن در',ph:'[paʀtisipe]'},
      {title:'phrase',key:'phrase',trans:'جمله ، عبارت',ph:'[fʀɑz]'},
      {title:'poser ',key:'poser ',trans:'سوال پرسیدن',ph:'[poze]'},
      {title:'présent',key:'présent',trans:'زمان حال ، افراد حاضر',ph:'[pʀezɑ̃]'},
      {title:'province',key:'province',trans:'استان',ph:'[pʀɔvɛ̃s]'},
      {title:'public',key:'public',trans:'عموم مردم ، عامه',ph:'[pyblik]'},
      {title:'quelqu\'un',key:'quelquun',trans:'کسی (مذکر)',ph:'[kɛlkœ̃]'},
      {title:'quelque',key:'quelque',trans:'برخی ، بعضی',ph:'[kɛlk]'},
      {title:'relations',key:'relations',trans:'روابط',ph:'[ʀ(ə)lasjɔ̃]'},
      {title:'réunir',key:'réunir',trans:'جمع آوری کردن',ph:'[ʀeyniʀ]'},
      {title:'sentir',key:'sentir',trans:'احساس کردن',ph:'[sɑ̃tiʀ]'},
      {title:'stressé',key:'stressé',trans:'استرس ، تاکید',ph:'[stʀɛse]'},
      {title:'syndicat d\'initiative',key:'syndicat d\'initiative',trans:'دفتر توریستی',ph:'[sɛ̃dika də inisjativ ]'},
      {title:'tenir',key:'tenir',trans:'نگه داشتن',ph:'[t(ə)niʀ  ]'},
      {title:' tout le monde',key:' tout le monde',trans:'همه',ph:'[tü-lə-mōⁿd]'},
      {title:'vers',key:'vers',trans:'درباره ، حدود ، سطر',ph:'[vɛʀ]'},
    ],
    search:[],
    cats:[],
    edited:false
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
        cats:[],vocabs: this.state.search,edited:true
      })
      return;
    }
    let newData = this.state.vocabs.filter((text)=> {
      let title=[];
      title=text.title;
      if(title.includes(txt.toLowerCase())){
        text=title;
        return text.indexOf(text) > -1; 
      }
    })
    this.setState({vocabs:newData})
    
   }
   

  endEditing=()=>{
    
    this.setState({edited:true})
    this.setState({cats:[],vocabs:this.state.search})
    
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
              let title=item.title.toUpperCase();
              let cat=title.slice(0,1);
              
              if(!this.state.cats.includes(cat)||this.state.edited)
              {
                
               
                header=(<Text style={{textAlign:'center',fontSize:25,margin:10,borderBottomWidth:2,borderBottomColor:'red',}}>{cat}</Text>);
                this.state.cats.push(cat);
                
                
              }
              else {
                header=null;
              }
              
    
        
           return(    
          <Card>
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
