import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import RecipieListings from "./RecipieListings";
import RecipieDetails from "./RecipieDetails";

function RecipiesList({ recipies }) {
    const match = useRouteMatch()

    return (
        <div style={{ marginTop: "25px" }}>
            <Route exact path="/recipies">
                <RecipieListings recipies={recipies} />
            </Route>
            <Route path={`${match.url}/:recipieId`}>
                <RecipieDetails recipies={recipies} />
            </Route>
        </div>
    )
}

export default RecipiesList;
