/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {createStackNavigator,createAppContainer} from 'react-navigation';
import Home from './components/home';
import About from './components/About';
import D1 from './components/lessons/1/d1';
import V1 from './components/lessons/1/v1';
import G1 from './components/lessons/1/g1';
import D2 from './components/lessons/2/d2';
import V2 from './components/lessons/2/v2';
import G2 from './components/lessons/2/g2';


const rootNavigator=createStackNavigator({
   Home:{screen:Home},About:{screen:About},D1:{screen:D1},V1:{screen:V1},G1:{screen:G1},D2:{screen:D2},V2:{screen:V2},G2:{screen:G2}
},{headerMode:'none',mode:'modal'
})

export default createAppContainer(rootNavigator);
