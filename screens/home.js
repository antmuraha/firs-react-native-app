import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {CLEAN_CACHE} from '../MyReducer/constants';
import {actionClearCache, actionExistCache} from '../actions';


class HomeScreen extends React.Component {
  constructor(props){
    //console.log('HomeScreen constructor');
    super(props);
  }

  static navigationOptions = {
    title: 'Gallery images from unsplash.com',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  componentWillMount(){
    //console.log('HomeScreen:componentWillMount');
  }
  componentDidMount(){
    //console.log('HomeScreen:componentDidMount');
    actionExistCache(this.props);
  }

  render() {
    //console.log('HomeScreen:render');

    //console.log('NAV', this.props);
    const {cache} =this.props;

    return (
      <View style={styles.home}>
      <Button
      title="Show images"
      onPress={() => {this.props.navigation.navigate('Gallery')}}
        />

        <Button
        title="Clear cache"
        color="#841584"
        onPress={this.props.actionClearCache}
        disabled={cache?false:true}
        />
        <Text style={{height:cache?20:0}}>
        {cache} Json Data cached from unsplash.com (not images)
        </Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    home: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around'
    },
  });

  function mapStateToProps(state){
    //console.log('HomeScreen:mapStateToProps');
    return {
      cache:state.nav.cache
    };
    //isLoggedIn: state.auth.isLoggedIn,
  }

  function mapDispatchToProps(dispatch){
    //console.log('HomeScreen:mapDispatchToProps');
    return {
      actionClearCache:bindActionCreators(actionClearCache,dispatch),
      actionExistCache:bindActionCreators(actionExistCache,dispatch)
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

  //export default HomeScreen;
