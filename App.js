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
import List from './components/List';
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
import D5 from './components/lessons/5/d5';
import V5 from './components/lessons/5/v5';
import G5 from './components/lessons/5/g5';
import D6 from './components/lessons/6/d6';
import V6 from './components/lessons/6/v6';
import G6 from './components/lessons/6/g6';
import D7 from './components/lessons/7/d7';
import V7 from './components/lessons/7/v7';
import G7 from './components/lessons/7/g7';
import D8 from './components/lessons/8/d8';
import V8 from './components/lessons/8/v8';
import G8 from './components/lessons/8/g8';
import D9 from './components/lessons/9/d9';
import V9 from './components/lessons/9/v9';
import G9 from './components/lessons/9/g9';
import D10 from './components/lessons/10/d10';
import V10 from './components/lessons/10/v10';
import G10 from './components/lessons/10/g10';
import D11 from './components/lessons/11/d11';
import V11 from './components/lessons/11/v11';
import G11 from './components/lessons/11/g11';
import D12 from './components/lessons/12/d12';
import V12 from './components/lessons/12/v12';
import G12 from './components/lessons/12/g12';
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';



const rootNavigator=createStackNavigator({
   Home:{screen:Home},About:{screen:About},List:{screen:List},
    D1:{screen:D1},V1:{screen:V1},G1:{screen:G1},
    D2:{screen:D2},V2:{screen:V2},G2:{screen:G2},
    D3:{screen:D3},V3:{screen:V3},G3:{screen:G3},
    D4:{screen:D4},V4:{screen:V4},G4:{screen:G4},
    D5:{screen:D5},V5:{screen:V5},G5:{screen:G5},
    D6:{screen:D6},V6:{screen:V6},G6:{screen:G6},
    D7:{screen:D7},V7:{screen:V7},G7:{screen:G7},
    D8:{screen:D8},V8:{screen:V8},G8:{screen:G8},
    D9:{screen:D9},V9:{screen:V9},G9:{screen:G9},
    D10:{screen:D10},V10:{screen:V10},G10:{screen:G10},
    D11:{screen:D11},V11:{screen:V11},G11:{screen:G11},
    D12:{screen:D12},V12:{screen:V12},G12:{screen:G12},
},{headerMode:'none',mode:'modal',transitionConfig: () => ({
  
   screenInterpolator: (sceneProps) => {
      // Disable the transition animation when resetting to the home screen.
      if (
        sceneProps.index === 0 &&
        sceneProps.scene.route.routeName !== 'Home' &&
        sceneProps.scenes.length > 2
      ) return null

      // Otherwise, use the usual horizontal animation.
      return StackViewStyleInterpolator.forHorizontal(sceneProps)}

})
})

export default createAppContainer(rootNavigator);
