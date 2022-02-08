// future goals
  // add a Footer component
  // duplicate recipies
  // edit recipies
    // maybe any edit makes a duplicate, and then you can delete previous versions later
      // (or, be asked if you want to delete previous version or keep previous version)
      // also, you could use navlinks and routes to display the different versions in RecipieDetails
  // delete recipies
  // add a createdAt key in the db
  // maybe add a (pseudo)login feature
  // add a favorite recipies and implement logic
    // {true ? (
    //   <button className="emoji-button favorite active">★</button>
    // ) : (
    //   <button className="emoji-button favorite">☆</button>
    // )}

    // .emoji-button {
    //     border: none;
    //     background: none;
    //     padding: 0 0.25rem;
    //     cursor: pointer;
    //   }

    //   .emoji-button.favorite {
    //     color: transparent;
    //     text-shadow: 0 0 0 gray;
    //   }

    //   .emoji-button.favorite.active,
    //   .emoji-button.favorite:hover {
    //     text-shadow: 0 0 0 gold;
    //     cursor: pointer;
    //   }
  // I'd like to turn the navbar into a square with three lines that opens the navbar and animates to an x
  // add RecipieNotes component
  // add an area to display notes in state, and a form to add new notes
    // gonna need a patch request and text area for notes on the RecipieDetails
  // add a sort feature
    // sort by name, time, calories, servings
  // useContext on recipies(maybe)
  // figure out why I can't refresh RecipieDetails or go directly there with the link
    // I suspect I need to pass 1 recipie to RecipieDetails
      // but we don't know which recipie to pass until it gets there.
      // maybe useContext will solve this problem
  // Add recipie redirect works, but it won't load(at least partially a state issue)
  // why does remove button submit? (is it because of state rerendering?)