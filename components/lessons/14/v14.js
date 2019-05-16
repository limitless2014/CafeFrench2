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
      {title:'actif',key:'actif',trans:'فعال ، سرزنده',ph:'[aktif]',cat:'A'},
      {title:'action',key:'action',trans:'عمل ، کنش',ph:'[aksjɔ̃]'},
      {title:'ailleurs',key:'ailleurs',trans:'در جاهای دیگر',ph:'[ajœʀ]'},
      {title:'alsacien',key:'alsacien',trans:'آلزاسی (منطقه ای در فرانسه)',ph:'[alzasjɛ̃]'},
      {title:'arrogant',key:'arrogant',trans:'متکبر ، گستاخ',ph:'[aʀɔɡɑ̃]'},
      {title:'authenticité',key:'authenticité',trans:'صحت ، اعتبار',ph:'[otɑ̃tisite]'},
      {title:'authentique',key:'authentique',trans:'معتبر ، موثق ، اصل',ph:'[otɑ̃tik]'},
      {title:'bête',key:'bête',trans:'ساده ، نادان ، احمقانه',ph:'[bɛt]',cat:'B'},
      {title:'bilingue',key:'bilingue',trans:'دوزبانه',ph:'[bilɛ̃ɡ]'},
      {title:'brillant',key:'brillant',trans:'درخشان ، با استعداد',ph:'[bʀijɑ̃]'},
      {title:'camp(ement)',key:'campement',trans:'اردوگاه',ph:'[kɑ̃pmɑ̃]',cat:'C'},
      {title:'capable',key:'capable',trans:'توانا ، قادر',ph:'[kapabl]'},
      {title:'cercle',key:'cercle',trans:'دایره ، محفل ، گرد',ph:'[sɛʀkl]'},
      {title:'chameau',key:'chameau',trans:'شتر',ph:'[ʃamo]'},
      {title:'chrétien',key:'chrétien',trans:'مسیحی',ph:'[kʀetjɛ̃]'},
      {title:'ciel',key:'ciel',trans:'آسمان',ph:'[sjɛl]'},
      {title:'coiffer ',key:'coiffer ',trans:'مو را مرتب کردن',ph:'[kwafe]'},
      {title:'compétent',key:'compétent',trans:'شایسته ، با صلاحیت',ph:'[kɔ̃petɑ̃]'},
      {title:'connaissance',key:'connaissance',trans:'آشنا ، دانش',ph:'[kɔnɛsɑ̃s]'},
      {title:'contradictoire',key:'contradictoire',trans:'متناقض ، ضد و نقیض',ph:'[kɔ̃tʀadiktwaʀ]'},
      {title:'curieusement',key:'curieusement',trans:'با کنجکاوی ، به طرز عجیبی',ph:'[kyʀjøzmɑ̃]'},
      {title:'désert',key:'désert',trans:'بیابان',ph:'[dezɛʀ]',cat:'D'},
      {title:'doué',key:'doué',trans:'با استعداد',ph:'[dwe]'},
      {title:'dur',key:'dur',trans:'سخت ، سرسخت',ph:'[dyʀ]'},
      {title:'élever',key:'élever',trans:'بالابردن ، بزرگ کردن',ph:'[el(ə)ve]',cat:'E'},
      {title:'empêcher',key:'empêcher',trans:'جلوگیری کردن',ph:'[ɑ̃peʃe]'},
      {title:'enfance',key:'enfance',trans:'دوران بچگی ، کودکی',ph:'[ɑ̃fɑ̃s]'},
      {title:'engagé',key:'engagé',trans:'مرتکب شده ، متعهد ',ph:'[ɑ̃ɡaʒe]'},
      {title:'entêté',key:'entêté',trans:'یک دنده ، سمج',ph:'[ɑ̃tete]'},
      {title:'étincelle',key:'étincelle',trans:'جرقه ، بارقه',ph:'[etɛ̃sɛl]'},
      {title:'étoile',key:'étoile',trans:'ستاره',ph:'[etwal]'},
      {title:'étourdir',key:'étourdir',trans:'بی حس کردن ،بیهوش کردن',ph:'[etuʀdiʀ]'},
      {title:'expérimenté',key:'expérimenté',trans:'باتجربه ، آموخته',ph:'[ɛkspeʀimɑ̃te]'},
      {title:'feignant',key:'feignant',trans:'تنبل',ph:'[fɛɲɑ̃]',cat:'F'},
      {title:'financer',key:'financer',trans:'تامین مالی',ph:'[finɑ̃se]'},
      {title:'franc',key:'franc',trans:'سر راست ، صادق',ph:'[fʀɑ̃]'},
      {title:'fuir',key:'fuir',trans:'فرار کردن از چیزی ، در رفتن از چیزی',ph:'[fɥiʀ]'},
      {title:'gamine',key:'gamine',trans:'دختربچه',ph:'[ɡamɛ̃]',cat:'G'},
      {title:'grossir',key:'grossir',trans:'وزن اضافه کردن',ph:'[ɡʀosiʀ]'},
      {title:'habile',key:'habile',trans:'ماهر ، باهوش ، زرنگ',ph:'[abil]',cat:'H'},
      {title:'humain',key:'humain',trans:'انسان',ph:'[ymɛ̃]'},
      {title:'ignorant',key:'ignorant',trans:'نا آگاه ، نادان',ph:'[iɲɔʀɑ̃]',cat:'I'},
      {title:'imbu de soi-même',key:'imbu de soi-même',trans:'پر مدعا',ph:'[ɛ̃by də swa mɛm]'},
      {title:'incapable',key:'incapable',trans:'ناتوان ، عاجز',ph:'[ɛ̃kapabl ]'},
      {title:'incompétent',key:'incompétent',trans:'فاقد صلاحیت ، بی کفایت',ph:'[ɛ̃kɔ̃petɑ̃]'},
      {title:'increvable',key:'increvable',trans:'خستگی ناپذیر',ph:'[ɛ̃kʀəvabl]'},
      {title:'inexpérimenté',key:'inexpérimenté',trans:'بی تجربه ، تست نشده',ph:'[inɛkspeʀimɑ̃te]'},
      {title:'initier',key:'initier ',trans:'آموزش اولیه دادن',ph:'[inisje]'},
      {title:'insolent',key:'insolent',trans:'گستاخ ، بی ادب',ph:'[ɛ̃sɔlɑ̃]'},
      {title:'inspiré',key:'inspiré',trans:'الهام گرفته از',ph:'[ɛ̃spiʀe]'},
      {title:'interprète',key:'interprète',trans:'مترجم',ph:'[ɛ̃tɛʀpʀɛt]'},
      {title:'mars',key:'mars',trans:'ماه مارس',ph:'[maʀs]',cat:'M'},
      {title:'messe de minuit',key:'messe de minuit',trans:'مناجات شب کریسمس',ph:'[mɛs də minɥi]'},
      {title:'naif',key:'naif',trans:'آدم ساده لوح',ph:'[naif]',cat:'N'},
      {title:'obstiné',key:'obstiné',trans:'لجباز ، معاند ، ستیزه جو',ph:'[ɔpstine]',cat:'O'},
      {title:'œuvre',key:'œuvre',trans:'کار',ph:'[œvʀ]'},
      {title:'orgueilleux',key:'orgueilleux',trans:'مغرور ، متکبر',ph:'[ɔʀɡøjø]'},
      {title:'origine',key:'origine',trans:'منشاً ، مبدا',ph:'[ɔʀiʒin]'},
      {title:'paresseux',key:'paresseux',trans:'تنبل',ph:'[paʀesø]',cat:'P'},
      {title:'poupée',key:'poupée',trans:'عروسک',ph:'[pupe]'},
      {title:'pousser à',key:'pousser à',trans:'هل دادن ، فشار دادن',ph:'[puse]'},
      {title:'pratiquement',key:'pratiquement',trans:'عملاً ، تقریباً',ph:'[pʀatikmɑ̃]'},
      {title:'prétentieux',key:'prétentieux',trans:'ظالمانه ، پرمدعا',ph:'[pʀetɑ̃sjø]'},
      {title:'prix (à tout)',key:'prix (à tout)',trans:'به هرقیمتی که شده',ph:'[pʀi]'},
      {title:'produit',key:'produit',trans:'محصول',ph:'[pʀɔdɥi]'},
      {title:'profiter',key:'profiter',trans:'بهره بردن از',ph:'[pʀɔfite]'},
      {title:'qualifié',key:'qualifié',trans:'واجد شرایط ، شایسته',ph:'[kalifje]',cat:'Q'},
      {title:'récent',key:'récent',trans:'اخیراً ، جدیداً',ph:'[ʀesɑ̃]',cat:'R'},
      {title:'repartir',key:'repartir',trans:'دوباره ترک کردن ، دوباره راهی سفر شدن',ph:'[ʀ(ə)paʀtiʀ]'},
      {title:'ridicule',key:'ridicule',trans:'مسخره ، مضحک',ph:'[rɪdɪkjuːl]'},
      {title:'rougir',key:'rougir',trans:'سرخ شدن از خجالت',ph:'[ʀuʒiʀ]'},
      {title:'saharien',key:'saharien',trans:'صحرایی',ph:'[saharien]',cat:'S'},
      {title:'sans âme',key:'sans âme',trans:'بی روح',ph:'[sænz ɑm]'},
      {title:'sans prétention',key:'sans prétention',trans:'فروتن ، نامتظاهر',ph:'[sænz pʀetɑ̃sjɔ̃]'},
      {title:'sapin',key:'sapin',trans:'درخت کریسمس',ph:'[sapɛ̃]'},
      {title:'séjourner',key:'séjourner',trans:'ماندن',ph:'[seʒuʀne]'},
      {title:'sens',key:'sens',trans:'جهت',ph:'[sɑ̃s]'},
      {title:'sentimental',key:'sentimental',trans:'احساساتی',ph:'[sɑ̃timɑ̃tal]'},
      {title:'se spécialiser',key:'se spécialiser',trans:'متخصص شدن',ph:'[spesjalize]'},
      {title:'tenace',key:'tenace',trans:'مداوم ، مقاوم',ph:'[tənas]',cat:'T'},
      {title:'tenir à',key:'tenir à',trans:'مشتاق بودن به',ph:'[t(ə)niʀ]'},
      {title:'tenir de',key:'tenir de',trans:'از جایی آمدن',ph:'[t(ə)niʀ]'},
      {title:'touareg',key:'touareg',trans:'طَوارِق یکی از اقوام بربر در شمال آفریقا هستند.',ph:'[twaʀɛɡ]'},
      {title:'toucher (un sujet)',key:'toucher (un sujet)',trans:'در مورد موضوعی بودن',ph:'[tuʃe]'},
      {title:'traduction',key:'traduction',trans:'ترجمه',ph:'[tʀadyksjɔ̃]'},
      {title:'traduire',key:'traduire',trans:'ترجمه کردن',ph:'[tʀadɥiʀ]'},
      {title:'volontaire',key:'volontaire',trans:'داوطلبانه',ph:'[vɔlɔ̃tɛʀ]',cat:'V'},
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
