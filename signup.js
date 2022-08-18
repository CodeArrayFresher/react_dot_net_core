
import React, { useState,Component }from 'react';
import { StyleSheet, Text, View, TextInput,ScrollView ,Button} from 'react-native';

class Signup extends Component {

    constructor(props){
      super(props)
  
      this.state = {
        UserName: '',
        PassWord: '',
      }
    }
     


    sendData(){

    fetch('https://localhost:5001/api/Auth/SignUp', {
    method: 'POST',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.state),
    });
    }

    _handlePress() {
       console.log(this.state.UserName);
       console.log(this.state.PassWord);
       this.sendData()
    }
  
    render() {
      return (
      <ScrollView >
        <View >
  
          <Text >
            Create Account
          </Text>
  
          <Text >
            Name
          </Text>
  
          <TextInput
            
            placeholder="Enter Name"
            returnKeyLabel = {"next"}
            onChangeText={(text) => this.setState({UserName:text})}
          />
  
          <Text >
            password
          </Text>
  
          <TextInput
           
            placeholder="Enter Name"
            returnKeyLabel = {"next"}
            onChangeText={(text) => this.setState({PassWord:text})}
          />
  
          <Button 
            onPress={() => this._handlePress() }
            >
                Submit
          </Button>
  
          </View>
        </ScrollView>
      );
    }
  }


  export default Signup;