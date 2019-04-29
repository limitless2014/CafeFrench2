import React, { Component } from 'react';
import {StyleSheet,Image,BackHandler,Share,Linking} from 'react-native';
import {Container,Content,List,ListItem,Left,Right,Text, Button, Icon, Footer,Switch} from 'native-base';




export default class SideBar extends Component {
  


  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'سلام شما با استفاده از لینک زیر میتوانید اپلیکیشن کافه فرنج 2 را نصب کنید \n https://cafebazaar.ir/app/com.example.android.cafecreme/?l=en',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

toggleHandler=(amount)=>{
  console.log('value from swich button',amount)
  let value=this.state.toggleswich;
  this.setState({...this.state,toggleswich:amount})
  this.props.onChangeSwitchValue(amount);
  this.props.swichvalue();

}





  render() {
    
    return (
      <Container style={styles.containerStyle}>
          <Content style={styles.content}>
          <Image style={{width:'100%'}} source={require('../assets/img/drawer.png')} resizeMode= 'stretch'/>
          <List>
          <ListItem style={{borderBottomWidth:1,borderBottomColor:'blue'}} onPress={()=>this.props.navigate('About')}>
            <Left style={{flex:1,flexDirection:'row-reverse'}}>
            <Text >درباره اپلیکیشن</Text>
            </Left>
            <Right>
              <Button transparent>
                <Icon type="Entypo" name="info"/>
              </Button>
            </Right>
          </ListItem>
          <ListItem style={{borderBottomWidth:1,borderBottomColor:'blue'}} onPress={this.onShare}>
            <Left style={{flex:1,flexDirection:'row-reverse'}}>
            <Text >به اشتراک گذاری لینک اپلیکیشن</Text>
            </Left>
            <Right>
              <Button transparent>
                <Icon type="Entypo" name="share"/>
              </Button>
            </Right>
          </ListItem>
          <ListItem style={{borderBottomWidth:1,borderBottomColor:'blue'}} onPress={()=>BackHandler.exitApp()}>
          <Left style={{flex:1,flexDirection:'row-reverse'}}>
            <Text >خروج</Text>
            </Left>
            <Right>
              <Button transparent>
                <Icon type="MaterialIcons" name="exit-to-app"/>
              </Button>
            </Right>
          </ListItem>
        </List>

        
          </Content>
         
          <Footer style={{alignItems:'center',justifyContent:'space-around',backgroundColor:'white'}}>
            
            
            <Icon type="FontAwesome" name="instagram" style={{color:'red'}} onPress={()=>Linking.openURL("https://www.instagram.com/limitless2014/")}/>
            
            <Icon type="FontAwesome" name="whatsapp"  onPress={()=>Linking.openURL("https://api.whatsapp.com/send?phone=989167359331")} style={{color:'green'}}/>
           
            <Icon type="FontAwesome" name="telegram" onPress={()=>Linking.openURL("https://t.me/limitless2014")}   />
            
          </Footer>
          


      </Container>
    )
  }
}

const styles=StyleSheet.create({
    containerStyle:{
        flex:1,
        backgroundColor:'#fff'
    },
    content:{
      width:'100%',
        flexDirection:'column'
      
    }
})