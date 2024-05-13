import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const LadduScreen = () => {
  return (
    <View style={styles.container}>
      

      <Text style={styles.ladduTitle}>MotiChur Laddu</Text>

      <Image
        source={require('./images/laddu.webp')}
        style={styles.ladduImage}
      />

      <Text style={styles.sectionTitle}>Ingredients</Text>

      <View style={styles.ingredientsList}>
        <Text style={styles.ingredientItem}>
          Besan (Gram Flour),Sugar,Saffron
        </Text>
        <Text style={styles.ingredientItem}>Ghee,Cardamom Powder</Text>
        <Text style={styles.ingredientItem}>Food Coloring (Orange),Nuts</Text>
      </View>

      <Text style={styles.sectionTitle}>Process</Text>

      <View style={styles.process}>
        <Text style={styles.step}>
          1.Mix besan with enough water to form a smooth, slightly thick batter
        </Text>
        <Text style={styles.step}>
          2. Heat ghee/oil in a deep pan or kadai.Use a ladle with holes to drop
          the batter into the hot oil, creating tiny droplets that fry until
          golden brown.
        </Text>
        <Text style={styles.step}>
          3. Drain the fried boondi on paper towels.Prepare the Sugar Syrup
        </Text>
        <Text style={styles.step}>
          4. Gently add the warm boondi to the warm sugar syrup. The boondi will
          absorb the syrup.Mix in the desired chopped nuts
        </Text>
        <Text style={styles.step}>
          5. Grease your palms with a tiny amount of ghee.Take a small portion
          of the mixture in your hands and gently shape it into a round laddu.
        </Text>
        <Text style={styles.step}>6.Repeat with the remaining mixture.</Text>
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
     backgroundColor: 'lightgrey',
  },
  
  ladduTitle: {
    fontSize: 25, // Reduced font size
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 1,
  },
  ladduImage: {
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

export default LadduScreen;
