import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const RecipeListPage = ({ navigation }) => {
  const [recipes, setRecipes] = useState([
    { id: '1', title: 'Spaghetti Bolognese', description: 'A classic Italian dish' },
    { id: '2', title: 'Chicken Curry', description: 'A spicy and delicious meal' },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.recipeItem}>
            <Text style={styles.recipeTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate('RecipeDetails', { recipe: item })}
            />
          </View>
        )}
      />
      <Button title="Add Recipe" onPress={() => navigation.navigate('AddRecipe')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  recipeItem: {
    marginBottom: 20,
  },
  recipeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RecipeListPage;
