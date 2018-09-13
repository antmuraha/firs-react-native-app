/* @flow */
import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

class PreviewScreen extends React.Component {
  constructor() {
    //console.log('PreviewScreen constructor');
    super();
  }
  static navigationOptions = {
    title: "Details",
    headerRight: (
      <Button
        onPress={() => alert("This is a button!")}
        title="Info"
        color="#fff"
        value="123ewd"
      />
    )
  };
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam("test", "ooo");

    return (
      <View style={styles.preview}>
        <Text>DetailsScreen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Button
          title="Go..."
          onPress={() => {
            this.props.navigation.navigate("Home");
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default PreviewScreen;
