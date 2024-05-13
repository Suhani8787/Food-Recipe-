import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const IceCreamScreen = () => {
  return (
    <View style={styles.container}>
      

      <Text style={styles.iceTitle}>Ice Cream</Text>

      <Image source={require('./images/ice.jpeg')} style={styles.iceImage} />

      <Text style={styles.sectionTitle}>Ingredients</Text>

      <View style={styles.ingredientsList}>
        <Text style={styles.ingredientItem}>Heavy Cream,Milk </Text>
        <Text style={styles.ingredientItem}>-Sugar,Toppings</Text>
        <Text style={styles.ingredientItem}>Flavours,Topping Sausce </Text>
      </View>

      <Text style={styles.sectionTitle}>Process</Text>

      <View style={styles.process}>
        <Text style={styles.step}>
          1.Gently heat with milk and cream, stirring constantly until
          thickened.
        </Text>
        <Text style={styles.step}>
          2.Thoroughly chill your custard base or cream/milk mixture in the
          refrigerator.
        </Text>
        <Text style={styles.step}>
          3.Pour the base into an ice cream maker and churn according to the
          manufacturer's instructions. This process incorporates air and freezes
          the mixture.
        </Text>
        <Text style={styles.step}>
          4. During the last few minutes of churning, you can stir in flavors
          like chocolate chips, cookie pieces, or fruit.
        </Text>
        <Text style={styles.step}>
          5.Transfer the churned ice cream to a container and freeze it for
          several hours to firm up to a scoopable consistency.
        </Text>

        <Text style={styles.step}> Your Dish is Ready </Text>
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
 
  iceTitle: {
    fontSize: 25, // Reduced font size
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 1,
  },
  iceImage: {
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
  ingredientItem: {
    // Style for each ingredient
    marginBottom: 3,
    fontStyle: 'italic',
  },
  process: {},
  step: {
    marginBottom: 1,
    fontStyle: 'italic',
  },
});

export default IceCreamScreen;
