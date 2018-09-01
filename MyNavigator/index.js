import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import { reduxifyNavigator, createReactNavigationReduxMiddleware,} from 'react-navigation-redux-helpers';

import HomeScreen from '../screens/home';
import GalleryScreen from '../screens/gallery';
import PreviewScreen from '../screens/preview';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const RootNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Gallery:GalleryScreen,
    Preview:PreviewScreen
  },
  {
    initialRouteName: 'Home',
    //mode: 'modal',
    //headerMode: 'none',
  }
);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const MyNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, MyNavigator, middleware};
