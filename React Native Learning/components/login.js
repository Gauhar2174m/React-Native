import React from "react";
import { Button,Text,View } from "react-native";

function loginScreen(props) { // component
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>LoginScreen </Text>
        <Button title='go to home screen ' onPress={()=>props.navigation.navigate("Home")}/>
      </View>
    );
  }