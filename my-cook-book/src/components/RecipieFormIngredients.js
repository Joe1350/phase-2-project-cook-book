import React from "react";

function RecipieFormIngredients({ ingredientInputList, setIngredientInputList }) {
    function handleIngredientInputChange(e, index) {
        const ingredientsList = [...ingredientInputList]
        ingredientsList[index] = e.target.value
        setIngredientInputList(ingredientsList)
    }

    function handleAddIngredientInputFieldClick(e) {
        e.preventDefault()
        setIngredientInputList([...ingredientInputList, e.target.value])
    }

    // function handleDeleteIngredientInputFieldClick(index) {
    //     const list = [...ingredientInputList]
    //     list.splice(index, 1)
    //     setIngredientInputList(list)
    // }

    return (
        <div id="ingredients">
            <h3>Ingredients</h3>
            <p>
                Use 1 line per ingredient and measurement
                <br></br>
                Example: 1 tablespoon garlic (minced)
            </p>
            {ingredientInputList.map((value, i) => {
                return (
                    <div key={`${i}ingredient`}>
                        <input
                            name="ingredient"
                            value={value}
                            onChange={e => handleIngredientInputChange(e, i)}
                        />
                        {/* {
                            ingredientInputList.length !== 1 ?
                            <button
                                onClick={handleDeleteIngredientInputFieldClick}
                            >
                                Remove
                            </button> :
                            null
                        } */}
                        {
                            ingredientInputList.length - 1 === i ?
                            <button
                                onClick={handleAddIngredientInputFieldClick}
                            >
                                Add Line
                            </button> :
                            null
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default RecipieFormIngredients;
