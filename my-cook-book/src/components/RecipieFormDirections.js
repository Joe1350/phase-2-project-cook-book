import React from "react";

function RecipieFormDirections({ directionsInputList, setDirectionsInputList }) {
    function handleDirectionInputChange(e, index) {
        const directionsList = [...directionsInputList]
        directionsList[index] = e.target.value
        setDirectionsInputList(directionsList)
    }

    function handleAddDirectionInputFieldClick(e) {
        e.preventDefault()
        setDirectionsInputList([...directionsInputList, e.target.value])
    }

    // function handleDeleteDirectionInputFieldClick(index) {
    //     const list = [...directionsInputList]
    //     list.splice(index, 1)
    //     setDirectionsInputList(list)
    // }

    return (
        <div id="directions">
            <h3>Directions</h3>
            <p>Add one step per line</p>
            {directionsInputList.map((value, i) => {
                return (
                    <div key={`${i}direction`}>
                        <textarea
                            name="directions"
                            value={value}
                            onChange={e => handleDirectionInputChange(e, i)}
                        >
                        </textarea>
                        {/* {
                            directionsInputList.length !== 1 ?
                            <button
                                onClick={handleDeleteDirectionInputFieldClick}
                            >
                                Remove
                            </button> :
                            null
                        } */}
                        {
                            directionsInputList.length - 1 === i ?
                            <button
                                onClick={handleAddDirectionInputFieldClick}
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

export default RecipieFormDirections;
