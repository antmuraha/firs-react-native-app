import React from 'react';
import {For, View, Button, Text, StyleSheet, FlatList, TouchableOpacity , Alert} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MyImage from '../components/MyImage';
import FullImage from '../components/FullImage';
import Dimensions from 'Dimensions';
import {SELECT_FULL, DESELECT_FULL} from '../MyReducer/constants';
//import {} from '../MyReducer/constants';
import {actionRetrieveData, actionSelectFull, actionDeselectFull} from '../actions';

class GalleryScreen extends React.Component {
  constructor(props){
    //console.log('GalleryScreen constructor');
    super(props);
    this.calcSizeImage();
  }

  static navigationOptions = {
    title: 'Gallery',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  componentDidMount(){
    //console.log('GalleryScreen:componentDidMount');
    actionRetrieveData(this.props);
  }

  calcSizeImage(){
    let height=Dimensions.get('window').height;
    let width=Dimensions.get('window').width;
    this.width=width;
    //console.log(width);
    let t=100;
    this.numw=(Math.round(width/100));
    this.width=(width)/this.numw-2;
    //console.log(this.width);

    //console.log(height);
    this.height=(height)/(Math.round(height/100))-2;
    //console.log(this.height);
  }

  _imgRender=(item) =>{

    //console.log('item',item.id);
    let data={
      src:item.cover_photo.urls.thumb,
      fullsrc:item.cover_photo.urls.regular,
      key:item.id,
      width:this.width,
      height:this.height,
      dispatch:this.props.navigation.dispatch,
      title:item.title,
      username:item.cover_photo.user.username
    };
    //console.log('GalleryScreen:_imgRender',{...data});
    return <MyImage {...data}/>;
  };

  _keyExtractor = (item, index) => item.id.toString();

  _onHideFullImg=({})=>{
    //this.setState({fullsrc:''})
    //console.log('FullImage:_onHideFullImg');
    this.props.navigation.dispatch({type:DESELECT_FULL});
    //actionDeselectFull();
    //this.props.navigation.dispatch({type:DESELECT_FULL});
    //Alert.alert('You tapped the full image!');
  }

  render() {
    //console.log('GalleryScreen:render');
    //const { data } = this.props;
    let {data} = this.props;
    if(data){
      data = data.results;
    }else{
      data=[];
    }
    const numw=this.numw;
    const {fullsrc}=this.props;
    //let data = [{key:'A'},{key:'B'},{key:'C'}];
    return (
      <View style={styles.gallery}>
      <FlatList horizontal={false}
      style={[styles.flatlist,data?'':styles.hidden,fullsrc?styles.hidden:'']}
      data={data}
      //extraData={data}
      numColumns={numw}
      keyExtractor={this._keyExtractor}
      renderItem={({item}) => this._imgRender(item)}
      removeClippedSubviews={false}
      initialNumToRender={20}
      onEndReached={this.onScrollHandler}
      onEndThreshold={100}
      />
      <FullImage fullsrc={fullsrc} _onHideFullImg={this._onHideFullImg}
      style={[styles.imgfull,fullsrc?'':styles.hidden]}
      />
      <View style={[styles.ooops,data?styles.hidden:'']}>
      <Text>
      Ooops :(
        </Text>
        <Button
        title="Back"
        color="#841584"
        onPress={() => {
          this.props.navigation.navigate('Home',{test:123})
        }}
        />
        </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    gallery: {
      width:'100%',
      height:'100%'
    },
    flatlist: {
      width:'100%',
      zIndex:-1,
      opacity:1
    },
    imgfull: {
      flex:1
    },
    ooops: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    hidden:{
      display:'none'
    }
  });

  function mapStateToProps(state){
    //console.log('GalleryScreen:mapStateToProps');
    return {
      data:state.nav.data,
      src:state.nav.src,
      id:state.nav.id,
      fullsrc:state.nav.fullsrc
    };
    //isLoggedIn: state.auth.isLoggedIn,
  }

  function mapDispatchToProps(dispatch){
    //console.log('GalleryScreen:mapDispatchToProps');
    return {
      actionRetrieveData:bindActionCreators(actionRetrieveData,dispatch),
      actionSelectFull:bindActionCreators(actionSelectFull,dispatch),
      actionDeselectFull:bindActionCreators(actionDeselectFull,dispatch)
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(GalleryScreen);

  //export default GalleryScreen;
