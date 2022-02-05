import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import RecipiesList from "./RecipiesList";
import RecipieForm from "./RecipieForm";

// things to do
// maybe useContext on the form
// break the form up into components
// get RecipieDetails component written and set up
  // making onClick work in recipieListings
  // figure out the route and path change
// make the document title dynamic with a custom hook
// write home page
// enter a couple more recipies
// set styles
// I'd like to turn the navbar into a square with three lines that opens the navbar
// maybe add a (pseudo)login feature
// add a category feature to the recipie list to filter by category, maybe a sort as well
// gonna need a patch request for notes

function App() {
  const [recipies, setRecipies] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/recipies")
    .then(r => r.json())
    .then(setRecipies)
  }, [])

  function handleSetRecipies(newRecipie) {
    setRecipies(...recipies, newRecipie)
  }

  return (
    <div>
      <Header />
      <NavBar />
      <Switch>
        <Route path="/recipies">
          <RecipiesList recipies={recipies} />
        </Route>
        <Route path="/add-a-recipie">
          <RecipieForm onSetRecipies={handleSetRecipies} />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
