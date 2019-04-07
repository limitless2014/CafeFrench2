/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Container, Header, Title, Button, Left, Right, Body,Icon,Drawer,Text, List, ListItem, DeckSwiper, Card, CardItem, Thumbnail, Item,   } from 'native-base';
import {View,Image} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import SideBar from './components/sideBar';

const cards=[
  {
    text:'Lesson 1',name:'Musiques',image:require('./assets/img/lessons/1.png')
  },
  {
    text:'Lesson 2',name:'Rencontres',image:require('./assets/img/lessons/2.png')
  },
  {
    text:'Lesson 3',name:'Contacts',image:require('./assets/img/lessons/3.jpg')
  },
  {
    text:'Lesson 4',name:'Fetes',image:require('./assets/img/lessons/4.png')
  }
]
export default class App extends Component {

    constructor(props){
      super(props);
    }


   closeDrawer=()=>{
   this.drawer._root.close();
   }

   openDrawer=()=>{
    this.drawer._root.open();
   }

  componentDidMount() {
    SplashScreen.hide()
  }


  render() {
    return (
      <Drawer
      ref={(ref)=>this.drawer=ref}
      content={<SideBar/>}
      side="right"
      onClose={()=>this.closeDrawer()}
      >
      <Container>
        <Header>
          <Left style={{flex:1}}/>
          <Body style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
            <Title>Cafe French 2</Title>
            </Body>
          <Right style={{flex:1}}>
              <Button onPress={()=>this.openDrawer()} transparent>
              <Icon  name='menu' />
              </Button>
            </Right>
        </Header>
      <View style={{height:'100%',}}>
       <DeckSwiper  dataSource={cards} renderItem={Item=>
         <Card style={{elevation:3}}>
         <CardItem>
           <Left>
             <Thumbnail source={Item.image}/>
             <Body>
               <Text>{Item.text}</Text>
               <Text note>{Item.name}</Text>
             </Body>
           </Left>
         </CardItem>
         <CardItem cardBody>
         <Image blurRadius={3} resizeMode="stretch" source={Item.image} style={{height:200,flex:1}}/>
         </CardItem>
         <CardItem style={{justifyContent:'center',alignItems:'center'}}>
           <Button rounded  primary>
           <Text>Dialogs</Text>
           </Button>
         </CardItem>
         <CardItem style={{justifyContent:'center',alignItems:'center'}}>
           <Button rounded  danger>
           <Text>Vocabulary</Text>
           </Button>
         </CardItem>
         <CardItem style={{justifyContent:'center',alignItems:'center'}}>
           <Button rounded  success>
           <Text>Grammer</Text>
           </Button>
         </CardItem>
         </Card>
       }
       />
      </View>
      </Container>
      </Drawer>
    );
  }
}


