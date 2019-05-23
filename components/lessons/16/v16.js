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
      {title:'air',key:'air',trans:'هوا',ph:'[ɛʀ]',cat:'A'},
      {title:'air (de musique)',key:'air (de musique)',trans:'ملودی ، نغمه ، آهنگ',ph:'[ɛʀ]'},
      {title:'aisance',key:'aisance',trans:'سهولت ، آسانی ، راحتی',ph:'[ɛzɑ̃s]'},
      {title:'apparition',key:'apparition',trans:'ظاهر ، ظهور',ph:'[apaʀisjɔ̃]'},
      {title:'atteindre',key:'atteindre',trans:'رسیدن ، برخورد کردن',ph:'[atɛ̃dʀ]'},
      {title:'aussitôt',key:'aussitôt',trans:'به محض اینکه',ph:'[osito]'},
      {title:'baba',key:'baba',trans:'بابا (اسم) ، نوعی شیرینی',ph:'[baba]',cat:'B'},
      {title:'blouse',key:'blouse',trans:'بلوز نوعی لباس گشاد است برای پوشش بالاتنه',ph:'[bluz]'},
      {title:'bouchée',key:'bouchée',trans:'لقمه',ph:'[buʃe]'},
      {title:'bout (au... de)',key:'bout (au... de)',trans:'پس از تمام شدن .. ، بعد از',ph:'[bu]'},
      {title:'bras',key:'bras',trans:'بازو ، دست',ph:'[bʀɑ]'},
      {title:'brise',key:'brise',trans:'نسیم ، باد ملایم',ph:'[bʀiz]'},
      {title:'se cantonner',key:'se cantonner',trans:'محدود کردن',ph:'[kɑ̃tɔne]',cat:'C'},
      {title:'caresser',key:'caresser',trans:'نوازش کردن ، لمس کردن',ph:'[kaʀese]'},
      {title:'chargé',key:'chargé',trans:'پر ، مملو',ph:'[ʃaʀʒe]'},
      {title:'chercher',key:'chercher',trans:'دنبال چیزی گشتن ، جستجو کردن',ph:'[ʃɛʀʃe]'},
      {title:'chou',key:'chou',trans:'کلم ، نوعی کیک',ph:'[ʃu]'},
      {title:'faire connaissance',key:'faire connaissance',trans:'آشناشدن ، دیدارکردن',ph:'[kɔnɛsɑ̃s]'},
      {title:'conter',key:'conter',trans:'داستان سرایی ، گفتن',ph:'[kɔ̃te]'},
      {title:'au contraire',key:'au contraire',trans:'برعکس ، خلاف ، ضد',ph:'[kɔ̃tʀɛʀ]'},
      {title:'crainte',key:'crainte',trans:'ترس',ph:'[kʀɛ̃t]'},
      {title:'douceur',key:'douceur',trans:'نرمی ، شیرینی',ph:'[dusœʀ]',cat:'D'},
      {title:'douter',key:'douter',trans:'شک کردن ، تردید کردن',ph:'[dute]'},
      {title:'droit (avoir ...à)',key:'droit (avoir ...à)',trans:'حق ...به کسی دادن',ph:'[dʀwa]'},
      {title:'éclair',key:'éclair',trans:'نوعی کیک ، روشنایی',ph:'[eklɛʀ]',cat:'E'},
      {title:'éclats (rire aux)',key:'éclats (rire aux)',trans:'با سروصدا خندیدن ، قاه قاه زدن',ph:'[ekla]'},
      {title:'égard (à mon)',key:'égard (à mon)',trans:'درباره من',ph:'[eɡaʀ]'},
      {title:'élancé',key:'élancé',trans:'بلند و باریک ، قلمی ، ضعیف',ph:'[elɑ̃se]'},
      {title:'emmener',key:'emmener',trans:'کسی را به جایی بردن',ph:'[ɑ̃m(ə)ne]'},
      {title:'engloutir',key:'engloutir',trans:'قورت دادن ، بلعیدن',ph:'[ɑ̃ɡlutiʀ]'},
      {title:'ensemble (habit)',key:'ensemble (habit)',trans:'لباس خاص',ph:'[ɑ̃sɑ̃bl]',cat:'E'},
      {title:'espadrille',key:'espadrille',trans:'صندل بند دار',ph:'[ɛspadʀij]'},
      {title:'s\'essayer avec',key:'s\'essayer avec',trans:'قدم اول را برداشتن',ph:'[eseje]'},
      {title:'essuyer',key:'essuyer',trans:'پاک کردن ، نابود کردن ، محو کردن',ph:'[esɥije]'},
      {title:'étincelant',key:'étincelant',trans:'براق ، درخشان',ph:'[etɛ̃s(ə)lɑ̃]'},
      {title:'étonnant',key:'étonnant',trans:'شگفت آور ، محشر ، غافلگیر کننده',ph:'[etɔnɑ̃]'},
      {title:'éveillé',key:'éveillé',trans:'بیدار ، آگاه',ph:'[eveje]'},
      {title:'exubérance',key:'exubérance',trans:'فراوانی ، شور و اشتیاق',ph:'[ɛɡzybeʀɑ̃s]'},
      {title:'falaise',key:'falaise',trans:'صخره ، تخته سنگ',ph:'[falɛz]',cat:'F'},
      {title:'fée',key:'fée',trans:'جن ، پری',ph:'[fe]'},
      {title:'ferme',key:'ferme',trans:'مزرعه',ph:'[fɛʀm]'},
      {title:'férocité',key:'férocité',trans:'وحشیگری ، درنده خویی',ph:'[feʀɔsite]'},
      {title:'fétiche',key:'fétiche',trans:'طلسم',ph:'[fetiʃ]'},
      {title:'finir par',key:'finir par',trans:'در نهایت کاری را انجام دادن',ph:'[finiʀ]'},
      {title:'fixe',key:'fixe',trans:'ثابت ، بی حرکت',ph:'[fiks]'},
      {title:'frais',key:'frais',trans:'سرد',ph:'[fʀɛ]'},
      {title:'friand',key:'friand',trans:'کیک بادام زمینی',ph:'[fʀijɑ̃]'},
      {title:'furieux',key:'furieux',trans:'خشمگین ، عصبانی',ph:'[fyʀjø]'},
      {title:'garçon',key:'garçon',trans:'پسربچه',ph:'[ɡaʀsɔ̃]',cat:'G'},
      {title:'gâteau',key:'gâteau',trans:'کیک',ph:'[ɡɑto]'},
      {title:'glisser',key:'glisser',trans:'لغریدن ، سر خوردن ',ph:'[ɡlise]'},
      {title:'gourmand',key:'gourmand',trans:'حریص ، طمع کار',ph:'[ɡuʀmɑ̃]'},
      {title:'gravité',key:'gravité',trans:'جاذبه',ph:'[ɡʀavite]'},
      {title:'imminent',key:'imminent',trans:'قریب الوقوع ، حتمی',ph:'[iminɑ̃]',cat:'I'},
      {title:'s’inscrire',key:'s’inscrire',trans:'ثبت نام کردن',ph:'[ɛ̃skʀiʀ]'},
      {title:'intérieur',key:'intérieur',trans:'داخلی ، درونی',ph:'[ɛ̃teʀjœʀ]'},
      {title:'irradier',key:'irradier',trans:'تابیدن ، تششع',ph:'[iʀadje]'},
      {title:'jalousie',key:'jalousie',trans:'حسادت',ph:'[ʒaluzi]',cat:'J'},
      {title:'jeter(un regard)',key:'jeter(un regard)',trans:'یک نیم نگاه انداختن',ph:'[ʒ(ə)te]'},
      {title:'joie',key:'joie',trans:'لذت ، شادی',ph:'[ʒwa]'},
      {title:'juste',key:'juste',trans:'منصفانه',ph:'[ʒyst]'},
      {title:'large',key:'large',trans:'بزرگ ، وسیع',ph:'[laʀʒ]',cat:'L'},
      {title:'lenteur',key:'lenteur',trans:'آهسته',ph:'[lɑ̃tœʀ]'},
      {title:'lumineux',key:'lumineux',trans:'نورانی ، درخشان',ph:'[lyminø]'},
      {title:'maîtrise',key:'maîtrise',trans:'تسلط',ph:'[metʀiz]',cat:'M'},
      {title:'avoir mal au coeur',key:'avoir mal au coeur',trans:'احساس مریضی کردن ، احساس دل شکستگی',ph:'[mal]'},
      {title:'manière',key:'manière',trans:'راه ، روش ، شیوه ، منش',ph:'[manjɛʀ]'},
      {title:'manifester (de l\'intérêt)',key:'manifester (de l\'intérêt)',trans:'اشتیاق نشان دادن',ph:'[manifɛste]'},
      {title:'mèche',key:'mèche',trans:'برجستگی (هایلایت) مو',ph:'[mɛʃ]'},
      {title:'mélange',key:'mélange',trans:'مخلوط',ph:'[melɑ̃ʒ]'},
      {title:'mépris',key:'mépris',trans:'تحقیر ، اهانت',ph:'[mepʀi]'},
      {title:'à mi-voix',key:'à mi-voix',trans:'با یک تن صدای پایین',ph:'[mivwa]'},
      {title:'mouvement',key:'mouvement',trans:'حرکت ، جنبش',ph:'[muvmɑ̃]'},
      {title:'nuage',key:'nuage',trans:'ابر',ph:'[nɥaʒ]',cat:'N'},
      {title:'objectif',key:'objectif',trans:'هدف ، مقصود',ph:'[ɔbʒɛktif ]',cat:'O'},
      {title:'obscurité',key:'obscurité',trans:'تاریکی',ph:'[ɔpskyʀite]'},
      {title:'océan',key:'océan',trans:'اقیانوس',ph:'[ɔseɑ̃]'},
      {title:'odeur',key:'odeur',trans:'بو',ph:'[ɔdœʀ]'},
      {title:'oiseau',key:'oiseau',trans:'پرنده',ph:'[wazo]'},
      {title:'pâle',key:'pâle',trans:'رنگ پریده ، کم رنگ',ph:'[pal]',cat:'P'},
      {title:'palmier',key:'palmier',trans:'نوعی شیرنی قلبی شکل',ph:'[palmje]'},
      {title:'paquet',key:'paquet',trans:'بسته',ph:'[pakɛ]'},
      {title:'paraître (=apparaître)',key:'paraître (=apparaître)',trans:'ظاهر شدن',ph:'[paʀɛtʀ]'},
      {title:'parapluie',key:'parapluie',trans:'چتر',ph:'[paʀaplɥi]'},
      {title:'passage',key:'passage',trans:'پاساژ ، گذرگاه ، معبر',ph:'[pɑsaʒ]'},
      {title:'pâtisserie',key:'pâtisserie',trans:'شیرینی فروشی',ph:'[pɑtisʀi]'},
      {title:'se précipiter',key:'se précipiter',trans:'عجله کردن',ph:'[pʀesipite]'},
      {title:'près de',key:'près de',trans:'نزدیک',ph:'[pʀɛ]'},
      {title:'radieux',key:'radieux',trans:'مرتعش ، تابناک ، درخشنده',ph:'[ʀadjø]',cat:'R'},
      {title:'ramener',key:'ramener',trans:'بازگرداندن',ph:'[ʀam(ə)ne]'},
      {title:'réclamer',key:'réclamer',trans:'تقاضا کردن ، پرسیدن',ph:'[ʀeklɑme]'},
      {title:'religieuse',key:'religieuse',trans:'نوعی شیرینی فرانسوی',ph:'[ʀ(ə)liʒjø]'},
      {title:'reprises (à plusieurs)',key:'à plusieurs reprises',trans:'چندین بار',ph:'[ʀ(ə)pʀiz]'},
      {title:'revue',key:'revue',trans:'مرور ، بازبینی',ph:'[ʀ(ə)vy]'},
      {title:'robe',key:'robe',trans:'لباس زنانه',ph:'[ʀɔb]'},
      {title:'rôder',key:'rôder',trans:'پرسه زدن',ph:'[ʀode]'},
      {title:'sentir (le besoin de)',key:'sentir (le besoin de)',trans:'حس کردن',ph:'[sɑ̃tiʀ]',cat:'S'},
      {title:'service',key:'service',trans:'سرویس ، خدمت ، کمک',ph:'[sɛʀvis]'},
      {title:'serviette',key:'serviette',trans:'دستمال سفره',ph:'[sɛʀvjɛt]'},
      {title:'souffler',key:'souffler',trans:'وزیدن',ph:'[sufle]'},
      {title:'souplesse',key:'souplesse',trans:'انعطاف پذیری',ph:'[suplɛs]'},
      {title:'tache',key:'tache',trans:'لکه ، علامت',ph:'[taʃ]',cat:'T'},
      {title:'tendresse',key:'tendresse',trans:'محبت ، مهربانی',ph:'[tɑ̃dʀɛs]'},
      {title:'tiède',key:'tiède',trans:'گرم ، ولرم',ph:'[tjɛd]'},
      {title:'toutefois',key:'toutefois',trans:'به هرحال ، با این حال',ph:'[tutfwa]'},
      {title:'vedette',key:'vedette',trans:'ستاره',ph:'[vədɛt]',cat:'V'},
      {title:'villa',key:'villa',trans:'ویلا',ph:'[vila]'},
      {title:'visage',key:'visage',trans:'صورت',ph:'[vizaʒ]'},
      {title:'volet',key:'volet',trans:'کرکره پنجره',ph:'[vɔlɛ]'},
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
