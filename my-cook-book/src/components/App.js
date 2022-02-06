import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import RecipiesList from "./RecipiesList";
import RecipieForm from "./RecipieForm";

// things to do
  // break the form up into components
    // maybe useContext on the form, depends on how component breakup goes
  // figure out why I can't refresh RecipieDetails
  // make document title change
    // make the document title dynamic with a custom hook
    // figure out why when you click on a recipie, and then change back to the list the title doesn't change
  // add recipie redirect works, but it won't load
  // set styles
    // fix links
    // fix inputs

// might not happen right now
  // add a category feature to the recipie list to filter by category, maybe a sort as well
  // gonna need a patch request and input field for notes

// probably not going to happen right now

// not gonna happen right now
  // duplicate recipies
  // edit recipies
  // maybe add a (pseudo)login feature
  // I'd like to turn the navbar into a square with three lines that opens the navbar

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
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
