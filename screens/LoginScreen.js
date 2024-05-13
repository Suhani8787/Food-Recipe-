import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    console.log('Login Submitted:', email, password); 
    navigation.navigate('Home'); // Navigate  Home after login
  };
    const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}> 
      <Image
        source={require('./images/S3.png')} 
        style={styles.backgroundImage} 
      />
      <View style={styles.content}> 
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
        placeholder="Email Id"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        />
        <TextInput
         style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        />
        <Button title="Login" onPress={handleLogin} /> 
        <Text 
          style={styles.forgotPasswordText} 
          onPress={handleForgotPassword}
        >
          Forgot Password?
        </Text> 
      </View>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1 
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)' 
  },
 title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white' // Text color changed to white
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    width: '80%',
    borderRadius: 5,
    color: 'white', // Text color for input fields
    placeholderTextColor: 'white'

  }, 
  forgotPasswordText: {
     
    marginTop: 15, 
    color: 'white'
  }
});

export default LoginScreen;
