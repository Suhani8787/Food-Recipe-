import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

const recipes = [/* your recipe data */];

function DesertScreen() {
  return (
    <FlatList
      data={recipes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <Image source={{ uri: item.image }} style={{ width: 200, height: 200 }} />
          <Text>{item.title}</Text>
          {/* Add more details about the recipe */}
        </View>
      )}
    />
  );
}
