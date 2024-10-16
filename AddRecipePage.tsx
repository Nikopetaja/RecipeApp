import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

const AddRecipePage = ({ navigation, addRecipe }) => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleAddRecipe = () => {
        if (title && ingredients && instructions) {
            const newRecipe = {
                name: title,
                ingredients,
                instructions,
            };

            // Add the recipe and navigate back to the recipe list
            addRecipe(newRecipe);
            navigation.goBack();
        }
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Add a New Recipe</Text>

            <TextInput
                placeholder="Recipe Name"
                value={title}
                onChangeText={setTitle}
                style={styles.input}
            />

            <TextInput
                placeholder="Ingredients"
                value={ingredients}
                onChangeText={setIngredients}
                style={styles.input}
                multiline
            />

            <TextInput
                placeholder="Instructions"
                value={instructions}
                onChangeText={setInstructions}
                style={styles.input}
                multiline
            />

            <Button title="Add Recipe" onPress={handleAddRecipe} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});

export default AddRecipePage;
