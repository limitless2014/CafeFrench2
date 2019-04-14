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
      vocabs:[{title:'allo', key: 'allo',trans:'الو',ph:'[bɔ̃ʒuʀ]'},
      {title:'bonsoir',key:'bonsoir',trans:'شب بخیر',ph:'[bɔ̃ʒuʀ]'},
      {title:'bonnuit',key:'bonnuit',trans:'شب بخیر',ph:'[bɔ̃ʒuʀ]'},
      {title:'carnet',key:'carnet',trans:'دفترچه',ph:'[bɔ̃ʒuʀ]'}
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
