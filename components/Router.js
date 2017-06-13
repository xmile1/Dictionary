import React from 'react';
import {StackNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

import WordItem from './WordItem';
import main from '../main';


export const NavMenu = StackNavigator({
  Home: { screen: main },
  Details: { screen: WordItem },
});
