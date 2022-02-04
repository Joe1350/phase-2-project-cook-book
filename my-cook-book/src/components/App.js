import React, { useEffect, useState } from "react";
import RecipiesList from "./RecipiesList";

function App() {
  const [recipies, setRecipies] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/recipies")
    .then(r => r.json())
    .then(setRecipies)
  }, [])

  return (
    <div>
      <RecipiesList recipies={recipies} />
    </div>
  );
}

export default App;
