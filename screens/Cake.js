import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CakeScreen = () => {
  return (
    <View style={styles.container}>
   
     
      <Text style={styles.cakeTitle}>Cake</Text>

  
      <Image 
        source={require('./images/cake.jpeg')} 
        style={styles.cakeImage} 
      />

    
      <Text style={styles.sectionTitle}>Ingredients</Text>
   
      <View style={styles.ingredientsList}>
        <Text style={styles.ingredientItem}>- Flour,Sugar,Butter</Text>
        <Text style={styles.ingredientItem}>- Milk,Baking Powder,Chocaltes,Dips</Text>
        <Text style={styles.ingredientItem}>- Salt,Whipped Cream</Text> 
      </View> 
    
    <Text style={styles.sectionTitle}>Process</Text>

      
      <View style={styles.process}>
        <Text style={styles.step}>1.Preheat your oven and prepare your cake pans .</Text>
        <Text style={styles.step}>2. Whisk together the flour, baking powder, and salt in a bowl.</Text>
        <Text style={styles.step}>3.  In a separate bowl, cream together the butter and sugar until light and fluffy.</Text>
        <Text style={styles.step}>4. dd the dry ingredients.</Text>
        <Text style={styles.step}>5. Pour the batter into your prepared pan(s) and bake according to your recipe's instructions.</Text>
        <Text style={styles.step}>6.  Let the cake cool completely before frosting.</Text> 
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
     backgroundColor: 'lightblue',
    
  },
   
  cakeTitle: {
    fontSize: 25, // Reduced font size
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 1, 
  },
  cakeImage: {
    width: 200, // Reduced width
    height: 200, // Reduced height
    marginBottom: 1,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5, 
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
  process: { 

  },
  step: {
    marginBottom:1,
     fontStyle: 'italic',
      
  },
});

export default CakeScreen;
