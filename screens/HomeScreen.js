import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,ScrollView
} from 'react-native';

import { Button } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const HomeScreen = () => {
  const navigation = useNavigation();
   

   const handleProfilePress = () => { 
        navigation.dispatch(DrawerActions.openDrawer());
    };
  const recipeNavigationMap = {
    Chole: 'Chole',
    Pizza: 'Pizza',
    Cake: 'Cake',
    IceCream: 'IceCream',
    KajuKatli: 'Kaju',
    MotiChurLaddu: 'Laddu',
  };
  const handleSearchSubmit = () => {
    const screenName = recipeNavigationMap[searchTerm];
    if (screenName) {
      navigation.navigate(screenName);
    } else {
      <Text>show an error message</Text>;
    }
  };
  const handleNotificationsPress = () => {
    navigation.navigate('Notifications');
  };

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (text) => {
    setSearchTerm(text);
  };

 
  const recipeImages = [
    require('./images/chole.jpeg'),
    require('./images/pizza.jpg'),
    require('./images/cake.jpeg'),
    require('./images/ice.jpeg'),
    require('./images/kajju.webp'),
    require('./images/laddu.webp'),
  ];

  return (
    <View style={styles.container}>
    <ScrollView>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleProfilePress}>
          <Image
            source={require('./images/profileIcon.png')}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>UNLEASH THE INNER CHEF!</Text>

        <TouchableOpacity onPress={handleNotificationsPress}>
          <Image
            source={require('./images/Bellicon.png')}
            style={styles.bellIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Recipes"
          onChangeText={handleSearchChange}
          value={searchTerm}
          onSubmitEditing={handleSearchSubmit} 
          returnKeyType="search"
        />
      </View>
     
      <View style={styles.imageContainer}>
        {recipeImages.map((imageSource, index) => (
          <View style={styles.imageButtonCombo} key={index}>
            <Image source={imageSource} style={styles.recipeImage} />
            <Button
              title={
                index === 0
                  ? 'Chole Bhature'
                  : index === 1
                  ? 'Pizza'
                  : index === 2
                  ? 'Cake'
                  : index === 3
                  ? 'Ice Cream'
                  : index === 4
                  ? 'Kaju Katli'
                  : 'Moti Chur Laddu'
              }
              color="black"
              onPress={() =>
                navigation.navigate(
                  index === 0
                    ? 'Chole'
                    : index === 1
                    ? 'Pizza'
                    : index === 2
                    ? 'Cake'
                    : index === 3
                    ? 'IceCream'
                    : index === 4
                    ? 'Kaju'
                    : 'Laddu'
                )
              }
              style={styles.button}
            />
          </View>
        ))}
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f0f0f0', 
  },

  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  bellIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },

  searchBar: {
    width: '90%',
    marginVertical: 2,
    alignSelf: 'center',
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Distribute items evenly
    alignItems: 'center',
    padding: 10,
    flexWrap: 'wrap', // Allow wrapping to a new line
  },
  imageButtonCombo: {
    alignItems: 'center',
    margin: 5, // Space around each combo
  },

  recipeImage: {
    width: 130,
    height: 130,
    margin: 5,
  },

  button: {
    borderRadius: 5,
  },
});

export default HomeScreen;
