import React, { Component } from 'react';
import { Container,Text,Header, Item, Icon, Input, Button, Left, Body, Card, CardItem, Title } from 'native-base';
import {FlatList,View,ListItem} from 'react-native';
import Tts from 'react-native-tts';
Tts.setDefaultLanguage('fr-FR');

export default class V1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vocabs:[{title:'Allo', key: 'allo',trans:'الو',ph:'[bɔ̃ʒuʀ]'},
      {title:'bonsoir',key:'bonsoir',trans:'شب بخیر',ph:'[bɔ̃ʒuʀ]'},
      {title:'bonnuit',key:'bonnuit',trans:'شب بخیر',ph:'[bɔ̃ʒuʀ]'},
      {title:'carnet',key:'carnet',trans:'دفترچه',ph:'[bɔ̃ʒuʀ]'}
    ]
    };
    
  }
  
  render() {

    let speak=(word)=>{
      Tts.speak(word);
   }
  let flag=true;
  let cats=[];
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
           <Input placeholder="Search"/>
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
        let header;
        
        if(!cats.includes(cat))
        {
           header=(
            
            <Text style={{textAlign:'center',fontWeight:'bold',margin:10,borderBottomWidth:2,borderBottomColor:'red',}}>{cat}</Text>
          
          );
          flag=false;
          cats.push(cat);

        }
        else{
           header=null;
        }
    
        
           return(
             <View>
               {header}
          <Card>
           
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
           </View>
           )}}
           />
      </Container>
    );
  }
}
