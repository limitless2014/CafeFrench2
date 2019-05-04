/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Container, Header, Title, Button, Left, Right, Body,Icon,Drawer,Text, Card, CardItem,Badge,StyleProvider  } from 'native-base';
import {View,Image,Dimensions,ImageBackground} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import SideBar from './sideBar';
import Carousel,{ Pagination } from 'react-native-snap-carousel';


import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/platform';
import { formatStackTrace } from 'jest-message-util';







const {width} = Dimensions.get('window');







class Home extends Component {
     
    constructor(props){
      super(props);
      this.state=
      {
        entries:[
          {
            text:'Lesson 1',name:'Musiques',image:require('../assets/img/lessons/1.png')
          },
          {
            text:'Lesson 2',name:'Rencontres',image:require('../assets/img/lessons/2.png')
          },
          {
            text:'Lesson 3',name:'Contacts',image:require('../assets/img/lessons/3.jpg')
          },
          {
            text:'Lesson 4',name:'Fetes',image:require('../assets/img/lessons/4.png')
          },
          {
            text:'Lesson 5',name:'Modes de vie',image:require('../assets/img/lessons/5.png')
          },
          {
            text:'Lesson 6',name:'Relation Familiale',image:require('../assets/img/lessons/6.png')
          },
          {
            text:'Lesson 7',name:'Vacances',image:require('../assets/img/lessons/7.png')
          },
          {
            text:'Lesson 8',name:'Travail',image:require('../assets/img/lessons/8.png')
          },
          {
            text:'Lesson 9',name:'Loisirs',image:require('../assets/img/lessons/9.png')
          },
          {
            text:'Lesson 10',name:'états d\'âme',image:require('../assets/img/lessons/10.png')
          },
          {
            text:'Lesson 11',name:'Opinions',image:require('../assets/img/lessons/11.png')
          },
          {
            text:'Lesson 12',name:'En France',image:require('../assets/img/lessons/12.png')
          },
          {
            text:'Lesson 13',name:'Récits de voyage',image:require('../assets/img/lessons/13.png')
          },
          {
            text:'Lesson 14',name:'Autobiographie',image:require('../assets/img/lessons/14.png')
          },
          {
            text:'Lesson 15',name:'Intrigues',image:require('../assets/img/lessons/15.png')
          },
          {
            text:'Lesson 16',name:'Souvenirs',image:require('../assets/img/lessons/16.png')
          }
      
      
      ],
      activeSlide:0,
     
      }
      this.navigate=this.props.navigation.navigate;
      

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


 
  _renderItem=({item, index})=> {
    return (
     
      <Card style={{elevation:4,height:'100%',}}>
     <CardItem>
       <Left>
         <Badge>
           <Text>{index+1}</Text>
         </Badge>
         <Body>
           <Text>{item.text}</Text>
           <Text note>{item.name}</Text>
         </Body>
       </Left>
     </CardItem>
     <CardItem cardBody>
     <Image blurRadius={3} resizeMode="stretch" source={item.image} style={{height:200,flex:1}}/>
     </CardItem>
     <CardItem style={{justifyContent:'center',alignItems:'center'}}>
       <Button onPress={()=>this.navigate('D'.concat(index+1))} rounded  primary>
       <Text>Dialogs</Text>
       </Button>
     </CardItem>
     <CardItem style={{justifyContent:'center',alignItems:'center'}}>
       <Button onPress={()=>this.navigate('V'.concat(index+1))} rounded  danger>
       <Text>Vocabulary</Text>
       </Button>
     </CardItem>
     <CardItem style={{justifyContent:'center',alignItems:'center'}}>
       <Button onPress={()=>this.navigate('G'.concat(index+1))} rounded  success>
       <Text>Grammer</Text>
       </Button>
       
     </CardItem>
     </Card>
     
     
    );
}
  
 









  render() {
    const {navigate}=this.props.navigation;
   
    
    
    return (
      
      <Drawer
      ref={(ref)=>this.drawer=ref}
      content={<SideBar navigate={navigate} swichvalue={()=>this.swichtoggler()}/>}
      side="right"
      onClose={()=>this.closeDrawer()}
      >
      <Container>
      <StyleProvider style={getTheme(material)} >
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
      </StyleProvider>
        <ImageBackground resizeMode="stretch" style={{width:'100%',height:'100%'}} source={require('../assets/img/book.jpg')}>
        <View style={{height:'90%'}}>
            <Carousel 
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={width*80/100}
              onSnapToItem={(index) => this.setState({ activeSlide: index }) }
              showsHorizontalScrollIndicator={true}
              removeClippedSubviews={true}
              enableMomentum={true}
              
              
            />

            
            </View>
           
            </ImageBackground>
      </Container>
      </Drawer>
      
    );
  }
}
export default Home;

