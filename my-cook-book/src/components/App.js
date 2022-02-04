import React, { useEffect, useState } from "react";

function App() {
  const [recipies, setRecipies] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/recpies")
    .then(r => r.json())
    .then(data => setRecipies(data.recipies))
  }, [])
  
  return (
    <div>
      <h1>placeholder</h1>
    </div>
  );
}

export default App;
