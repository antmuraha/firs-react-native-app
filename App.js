import React from 'react';
import { View, AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import MyReducer from './MyReducer';
import { MyNavigator, middleware } from './MyNavigator';

const store = createStore(MyReducer, applyMiddleware(middleware));

//console.log('APP.JS');

class MainApp extends React.Component {
  componentDidMount(){
    //console.log('MainApp:componentDidMount');
  }
  render() {
    //console.log('MainApp:render()');
    return (
      <Provider store={store}>
      <MyNavigator />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('myApp', () => MainApp);
export default MainApp;
