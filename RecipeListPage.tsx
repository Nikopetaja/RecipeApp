import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const RecipeListPage = ({ navigation, recipes }) => {

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
                Recipe List
            </Text>

            <FlatList
                data={recipes}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={{ marginBottom: 20 }}>
                        <Text style={{ fontSize: 18 }}>{item.name}</Text>
                        <Text>Ingredients: {item.ingredients}</Text>
                        <Text>Instructions: {item.instructions}</Text>
                    </View>
                )}
            />

            <Button
                title="Add Recipe"
                onPress={() => navigation.navigate('AddRecipe')}
            />
        </View>
    );
};

export default RecipeListPage;
