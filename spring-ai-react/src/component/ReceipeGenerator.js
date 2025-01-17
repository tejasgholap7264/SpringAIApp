import React, { useState } from 'react'

function ReceipeGenerator() {

    const [ingredients, setIngredients] = useState('');
    const [cuisine, setCuisine] = useState('any');
    const [dietaryRestrictions, setDietaryRestrictions] = useState('');
    const [recipe, setRecipe] = useState('');

    const createReceipe = async() => {
        try {
            const response = await fetch(`http://localhost8080:recipe-creator?ingredients=${ingredients}&dietaryRestrictions=${dietaryRestrictions}&cuisine=${cuisine}`);
            const data = await response.text();
            console.log(data);
            setRecipe(data);
        } catch (error) {
            console.error("Error generating recipe : ", error)
        }
    }


  return (
    <div>
        <h2>Create a Recipe</h2>

        <input 
            type='text'
            value={ingredients}
            onChange={(e)=>setIngredients(e.target.value)}
            placeholder="Enter ingredients (comma seperated)"
        />
        <input 
            type='text'
            value={cuisine}
            onChange={(e)=>setCuisine(e.target.value)}
            placeholder="Enter ingredients (comma seperated)"
        />
        <input 
            type='text'
            value={dietaryRestrictions}
            onChange={(e)=>setDietaryRestrictions(e.target.value)}
            placeholder="Enter ingredients (comma seperated)"
        />

        <button onClick={createReceipe}>Create Receipe</button>

        <div className="output">
            <pre className="recipe-text">{recipe}</pre>
        </div>
    </div>
  )
}

export default ReceipeGenerator