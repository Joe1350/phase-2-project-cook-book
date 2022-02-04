import React, { useEffect, useState } from "react";
import RecipiesList from "./RecipiesList";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import RecipieForm from "./RecipieForm";

function App() {
  const [recipies, setRecipies] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/recipies")
    .then(r => r.json())
    .then(setRecipies)
  }, [])

  return (
    <Switch>
      <Route path="/recipies">
        <RecipiesList recipies={recipies} />
      </Route>
      <Route path="/add-a-recipie">
        <RecipieForm />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}

export default App;
