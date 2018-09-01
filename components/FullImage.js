import React, { Component } from 'react';
import {View, Image, Text, StyleSheet,TouchableOpacity, Alert} from 'react-native';
import PropTypes from 'prop-types';

class FullImage extends Component {
  constructor(props){
    super(props);
    this.state = {fullsrc: ''};
    //console.log('FullImage:constructor',this.state);
  }

  render() {
    const {fullsrc, _onHideFullImg} = this.props;

    return (
      <TouchableOpacity activeOpacity = { .5 } onPress={_onHideFullImg}
      style={styles.imgContainer}>
      {fullsrc?<Image source={{uri: fullsrc}} style={styles.img}></Image>:null}
      </TouchableOpacity>
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
