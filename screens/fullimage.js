import React, { Component } from 'react';
import {Modal, View, Image, Text, StyleSheet,TouchableOpacity, Alert} from 'react-native';
import PropTypes from 'prop-types';
import {DESELECT_FULL} from '../MyReducer/constants';

class FullImage extends Component {
  constructor(props){
    super(props);
    this.state = {fullsrc: ''};
    //console.log('FullImage:constructor',this.state);
  }

  static navigationOptions = {

  };

    _onHideFullImg=({})=>{
      this.props.navigation.navigate('Gallery');
    }

    _onRequestClose=({})=>{
      this.props.navigation.navigate('Gallery');
    }

  render() {

    const { navigation } = this.props;
    const fullsrc = navigation.getParam('fullsrc', false);

    return (
      <Modal
        animationType="fade"
          transparent={false}
          visible={true}
          onRequestClose={this._onRequestClose}>
      <TouchableOpacity activeOpacity = { .5 } onPress={this._onHideFullImg}
        style={styles.imgContainer}>
        {fullsrc?<Image source={{uri: fullsrc}} style={styles.img}></Image>:null}
      </TouchableOpacity>
      </Modal>
    );
  }
}


FullImage.propTypes =
{
  fullsrc: PropTypes.string
}

FullImage.defaultProps =
{
  fullsrc: ''
}



const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    alignItems: 'stretch'
  },
  img: {
    flex: 1,
  }
});

export default FullImage;
