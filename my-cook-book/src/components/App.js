import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import RecipesPage from "./RecipesPage";
import RecipeForm from "./RecipeForm";
import RecipeList from "./RecipesList";

// index.js
  // App
    // Header
    // NavBar
    // Switch/Route
      // HomePage
      // RecipesPage
        // Filter
        // Sort
        // Switch/Route
          // RecipesList
            // RecipeListings
          // RecipeDetails
      // RecipeForm
        // RecipeFormDetails
        // RecipeFormIngredients
        // RecipeFormDirections

function App() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/recipes")
    .then(r => r.json())
    .then(setRecipes)
  }, [])

  function handleAddRecipe(newRecipe) {
    setRecipes(...recipes, newRecipe)
  }

  return (
    <div>
      <Header />
      <NavBar />
      <Switch>
        <Route path="/recipes">
          <RecipesPage recipes={recipes} />
        </Route>
        <Route path="/add-a-recipe">
          <RecipeForm onAddRecipe={handleAddRecipe} />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
