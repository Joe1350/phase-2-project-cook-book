import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import RecipiesList from "./RecipiesList";
import RecipieForm from "./RecipieForm";

// things I need help with
  // figure out why I can't refresh RecipieDetails or go directly there with the link
    // I suspect I need to pass 1 recipie to RedipieDetails
      // but we don't know which recipie to pass until it gets there.
      // maybe useContext will solve this problem
  // (probably the same problem as ^^^^) add recipie redirect works, but it won't load

// things to do
  // break the form up into components
    // maybe useContext on the form, depends on how component breakup goes
  // add a category feature to the recipie list to filter by category, maybe a sort as well
    // sort by name, time, calories, servings

// future goals
  // duplicate recipies
  // edit recipies
  // delete recipies
  // maybe add a (pseudo)login feature
  // I'd like to turn the navbar into a square with three lines that opens the navbar and animates to an x
  // add notes feature
    // gonna need a patch request and input field for notes

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
          <RecipiesList recipies={recipies} />
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
