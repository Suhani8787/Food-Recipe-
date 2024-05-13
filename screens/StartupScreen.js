import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const StartupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}> 
      <Image
        source={require('./images/R1-removebg-preview.png')} 
        style={styles.backgroundImage} 
      />
      <View style={styles.content}> 
        <Image
          source={require('./images/R4.png')} 
          style={styles.image}
        />
        <View style={styles.buttonRow}>
          <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} />
          <Button title="Login" onPress={() => navigation.navigate('Login')} />
        </View>
      </View>
    </View> 
  );
};

const styles = StyleSheet.create({
  image: {
    width: 230,  // Increased width
    height: 200, // Increased height
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%', 
  },
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Or 'stretch', 'contain', etc.
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
    backgroundColor: 'rgba(0,0,0,0.5)' // Semi-transparent overlay
  },
  // ... your other styles (title, image, buttonRow)
});

export default StartupScreen;
