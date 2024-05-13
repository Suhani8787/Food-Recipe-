import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PizzaScreen = () => {
  return (
    <View style={styles.container}>
    <Image
        source={require('./images/S3.png')} 
        style={styles.backgroundImage} 
      />
     
      <Text style={styles.pizzaTitle}>PIZZA</Text>

  
      <Image 
        source={require('./images/pizza.jpg')} 
        style={styles.pizzaImage} 
      />

    
      <Text style={styles.sectionTitle}>Ingredients</Text>
   
      <View style={styles.ingredientsList}>
        <Text style={styles.ingredientItem}>- Dough,Tomato Sauce,Meyoniz</Text>
        <Text style={styles.ingredientItem}>- Cheese Sause,Mozzarella Cheese</Text>
        <Text style={styles.ingredientItem}>- Olive Oil,Toppings (Pepperoni, Mushrooms)</Text> 
      </View> 
    
    <Text style={styles.sectionTitle}>Process</Text>

      
      <View style={styles.process}>
        <Text style={styles.step}>1. Prepare the dough.</Text>
        <Text style={styles.step}>2. Spread tomato sauce.</Text>
        <Text style={styles.step}>3. Add cheese and toppings.</Text>
        <Text style={styles.step}>4. Bake in a preheated oven.</Text>
        <Text style={styles.step}>5. Drizzle with olive oil (optional).</Text>
        <Text style={styles.step}>6. Sprinkle with basil (optional).</Text> 
         <Text  style={styles.step} > Your Dish is Ready </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Center items horizontally
    padding: 15,
    
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
  pizzaTitle: {
    fontSize: 25, // Reduced font size
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 1, 
  },
  pizzaImage: {
    width: 200, // Reduced width
    height: 200, // Reduced height
    marginBottom: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5, 
    textDecorationLine: 'underline',
  },
  
   ingredientsList: {
    marginBottom: 1,
    paddingLeft: 20,
    fontStyle: 'italic', // Indent the list
    
  },
  ingredientItem: { // Style for each ingredient
    marginBottom: 3,
    fontStyle: 'italic',
   
  },
  process: { 

  },
  step: {
    marginBottom:1,
     fontStyle: 'italic',
      
  },
});

export default PizzaScreen;
