import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen';
import LoginPage from './LoginPage';
import RecipeListPage from './RecipeListPage';
import RecipeDetailsPage from './RecipeDetailsPage';
import AddRecipePage from './AddRecipePage';
import ContactPage from './ContactPage';
import { enableScreens } from 'react-native-screens';

enableScreens();
const Stack = createStackNavigator();

function AppNavigator() {
    const [recipes, setRecipes] = useState([]);

    const addRecipe = (newRecipe) => {
        setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
    };

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="RecipeList">
                    {props => (
                        <RecipeListPage {...props} recipes={recipes} />
                    )}
                </Stack.Screen>
                <Stack.Screen name="AddRecipe">
                    {props => (
                        <AddRecipePage {...props} addRecipe={addRecipe} />
                    )}
                </Stack.Screen>
                <Stack.Screen name="RecipeDetails" component={RecipeDetailsPage} />
                <Stack.Screen name="Contact" component={ContactPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;