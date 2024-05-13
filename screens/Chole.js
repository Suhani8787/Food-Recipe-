import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CholeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.choleBhatureTitle}>Chole Bhature</Text>
      

      <Image
        source={require('./images/chole.jpeg')} // Your image
        style={styles.choleBhatureImage}
      />

      <Text style={styles.sectionTitle}>Ingredients</Text>

      <View style={styles.ingredientsList}>
        <Text style={styles.ingredientItem}>- Chickpeas (soaked and boiled)</Text>
        <Text style={styles.ingredientItem}>- Onions,Tomatoes,Ginger-Garlic Paste</Text>
        <Text style={styles.ingredientItem}>- Spices (Coriander Powder,Turmeric,Red Chili Powder</Text>
      </View>

      <Text style={styles.sectionTitle}>Process</Text>

      <View style={styles.process}>
        <Text style={styles.step}>1. Prepare the onion-tomato base.</Text>
        <Text style={styles.step}>2. Add spices and chickpeas.</Text>
        <Text style={styles.step}>3. Cook until desired consistency.</Text>
        <Text style={styles.step}>4. Bhature: Make Dough,Roll and shape .</Text>
        <Text style={styles.step}>5.Deep Fry.</Text>
        <Text  style={styles.step} > Your Dish is Ready </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
   
 
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'lightpink',
  },
  choleBhatureTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontStyle:'italic',
    marginBottom: 1,
  },
  choleBhatureImage: {
    width: 200,
    height: 200,
    marginBottom: 1,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 1,
    textDecorationLine: 'underline',
  },
    ingredientsList: {
    marginBottom: 1,
    paddingLeft: 20,
    fontStyle: 'italic',
  },
  ingredientItem: {
    marginBottom: 3,
    fontStyle: 'italic',
  },
  process: {},
  step: {
    marginBottom: 1,
    fontStyle: 'italic',
  },
});

export default CholeScreen;
