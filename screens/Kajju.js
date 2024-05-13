import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const KajjuScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./images/S3.png')}
        style={styles.backgroundImage}
      />

      <Text style={styles.kajjuTitle}>Cake</Text>

      <Image
        source={require('./images/kajju.webp')}
        style={styles.kajjuImage}
      />

      <Text style={styles.sectionTitle}>Ingredients</Text>

      <View style={styles.ingredientsList}>
        <Text style={styles.ingredientItem}>Cashew Nuts,Milk,Ghee </Text>
        <Text style={styles.ingredientItem}>
          Cardamom Powde,Saffron (optional)
        </Text>
        <Text style={styles.ingredientItem}>
          Edible Silver Leaf / Varq (optional)
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Process</Text>

      <View style={styles.process}>
        <Text style={styles.step}>
          1Grind the cashews into a very fine powder. Ensure there are no coarse
          bits. .
        </Text>
        <Text style={styles.step}>
          2. Make a one-thread consistency sugar syrup (this means when you take
          a drop between your fingers, it forms a single string).
        </Text>
        <Text style={styles.step}>
          3. Add cashew powder to the syrup, cook on low heat until it forms a
          smooth dough.
        </Text>
        <Text style={styles.step}>
          4. Add ghee, cardamom (and saffron if using). Allow the mixture to
          cool slightly but still pliable.
        </Text>
        <Text style={styles.step}>
          5. Knead, Roll & Cut Knead the dough until smooth. Roll it out on a
          greased surface, and cut it into diamond or square shapes.
        </Text>
        <Text style={styles.step}>
          6. Decorate with edible silver leaf if desired
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
     backgroundColor: 'lightgrey',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  kajjuTitle: {
    fontSize: 25, // Reduced font size
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 1,
  },
  kajjuImage: {
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

export default KajjuScreen;
