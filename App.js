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
import D3 from './components/lessons/3/d3';
import V3 from './components/lessons/3/v3';
import G3 from './components/lessons/3/g3';
import D4 from './components/lessons/4/d4';
import V4 from './components/lessons/4/v4';
import G4 from './components/lessons/4/g4';


const rootNavigator=createStackNavigator({
   Home:{screen:Home},About:{screen:About},D1:{screen:D1},V1:{screen:V1},G1:{screen:G1},D2:{screen:D2},V2:{screen:V2},G2:{screen:G2}
   ,D3:{screen:D3},V3:{screen:V3},G3:{screen:G3}
   ,D4:{screen:D4},V4:{screen:V4},G4:{screen:G4}
},{headerMode:'none',mode:'modal'
})

export default createAppContainer(rootNavigator);
