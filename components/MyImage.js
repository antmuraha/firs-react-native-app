/* @flow */
import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";
import PropTypes from "prop-types";
import { SELECT_FULL } from "../MyReducer/constants";

class MyImage extends Component<Props, State=void> {
  constructor(props) {
    super(props);
    this.state = { src: "" };
  }

  _tapImage = ({}) => {
    //console.log('MyImage:_tapImage',event, index,this.props);
    //this.props.dispatch({type:SELECT_FULL, fullsrc:this.props.fullsrc});
    this.props._navigation.navigate("FullImage", {
      fullsrc: this.props.fullsrc
    });
    //Alert.alert('You tapped the image!');
  };

  render() {
    //console.log('MyImage:render',this.props);
    const { src, width, height, title, username } = this.props;
    const _tapImage = this._tapImage;

    return (
      <TouchableOpacity activeOpacity={0.5} onPress={this._tapImage}>
        <View style={`width:${width}`}>
          <Image
            source={{ uri: src }}
            style={styles.img}
            width={width}
            height={height}
          />
          <View style={[styles.text]} width={width}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.user}>{username}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

MyImage.propTypes = {
  size: PropTypes.number
};

MyImage.defaultProps = {
  size: 100
};

const styles = StyleSheet.create({
  img: {
    margin: 1
  },
  text: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 40
  },
  title: {
    fontSize: 10,
    fontWeight: "100"
  },
  user: {
    fontSize: 10,
    fontWeight: "700"
  }
});

export default MyImage;
