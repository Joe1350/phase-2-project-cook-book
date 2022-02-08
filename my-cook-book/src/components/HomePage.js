import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

function HomePage() {
    useDocumentTitle("My Cook Book | Home")

    return (
        <div id="home-page">
            <img id="home-page-image" src="https://www.lanascooking.com/wp-content/uploads/2014/01/spanish-rice-and-chicken-soup-feature.jpg"/>
            <p>
                Thank you for checking out My Cook Book web application. This website is a list of my favorite recipes and recipes that I want to try. 
            </p>
        </div>
        
    )
}

export default HomePage;
