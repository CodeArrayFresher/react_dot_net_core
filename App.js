import React, { useState } from 'react';
import { View, Text } from "react-native";

import StateEx from './reactExamples/stateExample'; 

import InputExample from './reactExamples/InputExample'; 

import List_example from './reactExamples/list_example'; 

import Touchable_example from './reactExamples/touchable_example'; 

import Signup from './reactExamples/signup';

export default function App() {




  // fetch('https://localhost:5001/api/Auth/SignUp', {
  //   method: 'POST',
  //   headers: {
  //   Accept: 'application/json',
  //   'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //   UserName: 'Value',
  //   PassWord: 'OtherValue',
  //   }),
  //   });

  return(
   
      <View>
 
  
     
  <Signup></Signup>



      </View>
  );
}
