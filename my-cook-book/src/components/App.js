import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import RecipiesPage from "./RecipiesPage";
import RecipieForm from "./RecipieForm";

// index.js
  // App
    // Header
    // NavBar
    // Switch/Route
      // HomePage
      // RecipiesPage
        // Filter
        // Sort
        // Switch/Route
          // RecipiesList
            // RecipieListings
          // RecipieDetails
      // RecipieForm
        // RecipieFormDetails
        // RecipieFormIngredients
        // RecipieFormDirections

function App() {
  const [recipies, setRecipies] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/recipies")
    .then(r => r.json())
    .then(setRecipies)
  }, [])

  return (
    <div>
      <Header />
      <NavBar />
      <Switch>
        <Route path="/recipies">
          <RecipiesPage recipies={recipies} />
        </Route>
        <Route path="/add-a-recipie">
          <RecipieForm setRecipies={setRecipies} />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
