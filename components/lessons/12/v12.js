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
      {title:'actuel',key:'actuel',trans:'جاری ، فعلی',ph:'[aktɥɛl]',cat:'A'},
      {title:'administration',key:'administration',trans:'خدمات اجتماعی',ph:'[administʀasjɔ̃]'},
      {title:'agriculture',key:'agriculture',trans:'کشاورزی',ph:'[aɡʀikyltyʀ]'},
      {title:'avoir l’air de ...',key:'avoir l’air de ...',trans:'به نظر رسیدن',ph:'[avwaʀ l ɛʀ]'},
      {title:'s’apercevoir de',key:'s’apercevoir de',trans:'متوجه شدن',ph:'[apɛʀsəvwaʀ]'},
      {title:'être attaché à',key:'être attaché à',trans:'متصل بودن به',ph:'[ɛtʀ ataʃ ]'},
      {title:'autonome',key:'autonome',trans:'خودمختار ، مستقل',ph:'[ɔtɔnɔm]'},
      {title:'autonomie',key:'autonomie',trans:'خودمختاری ، استقلال',ph:'[ɔtɔnɔmi]'},
      {title:'basque',key:'basque',trans:'باسکی',ph:'[bask]',cat:'B'},
      {title:'boîte à gant',key:'boîte à gant',trans:'محفظه دستکش',ph:'[bwat a ɡɑ̃]'},
      {title:'boulevard',key:'boulevard',trans:'بلوار',ph:'[bulvaʀ]'},
      {title:'breton',key:'breton',trans:'برتونی',ph:'[bʀətɔ̃]'},
      {title:'casser',key:'casser',trans:'شکستن',ph:'[kɑse]',cat:'C'},
      {title:'catalan',key:'catalan',trans:'کاتالان',ph:'[katalɑ̃]'},
      {title:'centralisme',key:'centralisme',trans:'متمرکز',ph:'[sɑ̃tʀalism]'},
      {title:'commissariat',key:'commissariat',trans:'کلانتری ، اداره پلیس',ph:'[kɔmisaʀja]'},
      {title:'commune',key:'commune',trans:'شهر ، دهکده',ph:'[kɔmyn]'},
      {title:'constater',key:'constater',trans:'یادداشت کردن',ph:'[kɔ̃state]'},
      {title:'consulat',key:'consulat',trans:'کنسولگری',ph:'[kɔ̃syla]'},
      {title:'copie',key:'copie',trans:'کپی ، رونوشت',ph:'[kɔpi]'},
      {title:'correspondre à',key:'correspondre à',trans:'مکاتبه با ، مطابقت با، ارتباط برقرار کردن با',ph:'[kɔʀɛspɔ̃dʀ]'},
      {title:'être au courant de',key:'être au courant de',trans:'درمورد چیزی دانستن',ph:'[kuʀɑ̃]'},
      {title:'création',key:'création',trans:'خلقت ، ایجاد',ph:'[kʀeasjɔ̃]'},
      {title:'cuir',key:'cuir',trans:'چرم',ph:'[kɥiʀ]'},
      {title:'décision',key:'décision',trans:'تصمیم',ph:'[desizjɔ̃]',cat:'D'},
      {title:'dedans',key:'dedans',trans:'درون ، داخل',ph:'[dədɑ̃]'},
      {title:'dégât',key:'dégât',trans:'آسیب ، خسارت',ph:'[deɡɑ]'},
      {title:'département',key:'département',trans:'دپارتمان ، بخش',ph:'[depaʀtəmɑ̃]'},
      {title:'diviser',key:'diviser',trans:'تقسیم کردن',ph:'[divize]'},
      {title:'dominer',key:'dominer',trans:'تسلط پیدا کردن ، کنترل کردن',ph:'[dɔmine]'},
      {title:'emploi',key:'emploi',trans:'استفاده ، کاربرد',ph:'[ɑ̃plwa]',cat:'E'},
      {title:'enseignement',key:'enseignement',trans:'آموزش و پروش ، تعلیم و تربیت',ph:'[ɑ̃sɛɲ(ə)mɑ̃]'},
      {title:'enseigner',key:'enseigner',trans:'آموزش ، یاد دادن',ph:'[ɑ̃seɲe]'},
      {title:'entre',key:'entre',trans:'بین ، میان',ph:'[ɑ̃tʀ]'},
      {title:'équilibre',key:'équilibre',trans:'تعادل ، تراز',ph:'[ekilibʀ]'},
      {title:'exactement',key:'exactement',trans:'دقیقاً',ph:'[ɛɡzaktəmɑ̃ ]'},
      {title:'exécuter',key:'exécuter',trans:'انجام دادن ، پیش بردن ، اجرا کردن',ph:'[ɛɡzekyte]'},
      {title:'en face de',key:'en face de',trans:'مقابل ، مخالف ، روبرو',ph:'[fas]',cat:'F'},
      {title:'flamand',key:'flamand',trans:'فلاندرز',ph:'[flamɑ̃]'},
      {title:'de force',key:'de force',trans:'به زور',ph:'[fɔʀs]'},
      {title:'forme',key:'forme',trans:'فرم ، شکل',ph:'[fɔʀm]'},
      {title:'garder',key:'garder',trans:'نگه داشتن ، حفظ کردن',ph:'[ɡaʀde]',cat:'G'},
      {title:'garer',key:'garer',trans:'پارک کردن',ph:'[ɡaʀe]'},
      {title:'se généraliser',key:'se généraliser',trans:'تعمیم دادن ، گسترش دادن ، عمومی کردن',ph:'[ʒeneʀalize]'},
      {title:'harmonisation',key:'harmonisation',trans:'هماهنگی ، هماهنگ',ph:'[hɑːʳmənaɪˈzeɪʃən]',cat:'H'},
      {title:'immatriculation',key:'immatriculation',trans:'ثبت نام، نام نویسی',ph:'[imatʀikylasjɔ̃]',cat:'I'},
      {title:'industrie',key:'industrie',trans:'صنعت',ph:'[ɛ̃dystʀi]'},
      {title:'jumelles',key:'jumelles',trans:'دوربین دو چشمی',ph:'[ʒymɛl]',cat:'J'},
      {title:'lointain',key:'lointain',trans:'دور ، دور دست',ph:'[lwɛ̃tɛ̃]',cat:'L'},
      {title:'lunettes',key:'lunettes',trans:'عینک',ph:'[lynɛt]'},
      {title:'se moderniser',key:'moderniser',trans:'مدرنیزه کردن ، نوین کردن',ph:'[mɔdɛʀnize]',cat:'M'},
      {title:'normalement',key:'normalement',trans:'به طور معمول ، در حالت عادی',ph:'[nɔʀmalmɑ̃]',cat:'N'},
      {title:'de nouveau',key:'de nouveau',trans:'دوباره',ph:'[nuvo]'},
      {title:'obligatoire',key:'obligatoire',trans:'اجباری',ph:'[ɔbliɡatwaʀ]',cat:'O'},
      {title:'occitan',key:'occitan',trans:'اکسیتان',ph:'[ɔksitɑ̃]'},
      {title:'officier',key:'officier',trans:'افسر',ph:'[ɔfisje]'},
      {title:'ordre',key:'ordre',trans:'سفارش ، دستور',ph:'[ɔʀdʀ]'},
      {title:'paire',key:'paire',trans:'جفت',ph:'[pɛʀ]',cat:'P'},
      {title:'papiers',key:'papiers',trans:'کاغذها',ph:'[papje]'},
      {title:'périphérique',key:'périphérique',trans:'جانبی ، پیرامونی ، اطراف',ph:'[peʀifeʀik]'},
      {title:'perte',key:'perte',trans:'زیان ، ضرر ، از دست داده',ph:'[pɛʀt]'},
      {title:'plupart',key:'plupart',trans:'اکثریت',ph:'[plypaʀ]'},
      {title:'portefeuille',key:'portefeuille',trans:'کیف پول',ph:'[pɔʀtəfœj]'},
      {title:'portière',key:'portière',trans:'درب',ph:'[pɔʀtjɛʀ]'},
      {title:'posséder',key:'posséder',trans:'مالک شدن ، صاحب شدن',ph:'[pɔsede]'},
      {title:'profondément',key:'profondément',trans:'عمیقاً',ph:'[pʀɔfɔ̃demɑ̃]'},
      {title:'provisoire',key:'provisoire',trans:'موقتی',ph:'[pʀɔvizwaʀ]'},
      {title:'relativement',key:'relativement',trans:'نسبتاً ، به نسبت',ph:'[ʀ(ə)lativmɑ̃]',cat:'R'},
      {title:'roi',key:'roi',trans:'پادشاه',ph:'[ʀwa]'},
      {title:'sac',key:'sac',trans:'کیف ، کیسه ، ساک',ph:'[sak]',cat:'S'},
      {title:'siècle',key:'siècle',trans:'قرن ، سده',ph:'[sjɛkl]'},
      {title:'signature',key:'signature',trans:'امضا',ph:'[siɲatyʀ]'},
      {title:'supprimer',key:'supprimer',trans:'سرکوب کردن ، حذف شدن ، ناپدید شدن',ph:'[sypʀime]'},
      {title:'temps',key:'temps',trans:'زمان ، آب و هوا',ph:'[tɑ̃]'},
      {title:'territoire',key:'territoire',trans:'محدوده ، قلمرو ، سرزمین',ph:'[teʀitwaʀ]',cat:'T'},
      {title:'se transformer',key:'se transformer',trans:'تبدیل شدن ، دگرگون شدن',ph:'[tʀɑ̃sfɔʀme]'},
      {title:'valise',key:'valise',trans:'چمدان',ph:'[valiz]',cat:'V'},
      {title:'victime',key:'victime',trans:'قربانی',ph:'[viktim]'},
      {title:'vide',key:'vide',trans:'خالی',ph:'[vid ]'},
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
