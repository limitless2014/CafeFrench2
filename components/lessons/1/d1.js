import React, { Component } from 'react';
import {Image} from 'react-native'
import { Container,Text, Card, CardItem, Header, Icon, Left, Body, Right, Button,  } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Tts from 'react-native-tts';
Tts.setDefaultLanguage('fr-FR');


export default class D1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button onPress={()=>this.props.navigation.goBack()} transparent>
            <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body/>
          <Right/>
        </Header>
        <ScrollView>
          <Card>
          <CardItem header>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>Les Francofolies</Text>
            </CardItem>
          <CardItem>
            <Body>
              <Text  style={{padding:5,textAlign:'justify'}}>
              Tous Les ans,au mois de juillet,le festival de la chanson francophone,les FrancoFolies,réunit à La Rochelle des artistes que tous le monde connaît et des jeunes qui débutent.
              Le public qu'on y rencontre est jeune et international. Plus de 100 000 personnes assistent aux différents spectacles.
              Tous les styles musicaux sont présents. c'est la féte dans toute la ville pendent une semaine.
              </Text>
              <Button  transparent>
              <Icon type="AntDesign" name="sound"/>
              </Button>
               <Image style={{width:'100%'}} source={require('../../../assets/img/lessons/lesson1/d1.png')}/>
            </Body>
          </CardItem>
          </Card>
          <Card>
          <CardItem header style={{flexDirection:'row-reverse'}}>
          <Icon type="FontAwesome" name="coffee"/>
          <Text>فرانکوفولیها (نام یک فستیوال موسیقی)
          </Text>
            </CardItem>
          

          <CardItem>
            <Body>
              <Text  style={{direction:"rtl",padding:5,textAlign:'justify'}}>
              هرساله در ماه ژوئیه طرفداران فستیوال موسیقی فرانسوی زبانان به نام فرانکوفولیها  در شهر روشل گرد هم می آیند. عموم مردمی که در آنجا گرد هم می آیند جوان و از ملتهای مختلف هستند. بالای 100 هزار نفر در قسمتهای مختلف این فستیوال مثل تئاتر سینما و ... شرکت میکنند تمام استایلهای موسیقی اجرا میشوند. این جشن در سراسر شهر بمدت یک هفته برگزار میشود.
              </Text>
            </Body>
          </CardItem>


          </Card>
          </ScrollView>
      </Container>
    );
  }
}
