import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddRecipePage = ({ navigation, route }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddRecipe = () => {
    if (title && description) {
      // Call the addRecipe function from props or navigation
      route.params.addRecipe({ id: Date.now().toString(), title, description });
      navigation.goBack(); // Return to the RecipeListPage
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Add Recipe" onPress={handleAddRecipe} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 12,
    borderRadius: 4,
  },
});

export default AddRecipePage;
