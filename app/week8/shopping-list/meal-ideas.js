import { useEffect } from "react";
import { useState } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas(ingredient) {
        try {
            if (ingredient === "") {
                return;
            }

            const data = await fetchMealIdeas(ingredient);
            if (data && data.length > 0) {
                setMeals(data);
            }
        } catch (error) {
            console.error("Error fetching meals:", error);
        }
    }

    useEffect(() => {
        loadMealIdeas(ingredient);
    }, [ingredient]); // Run the effect when 'ingredient' changes

    return (
        <div>
            {meals.map((item) => (
                <div key={item.idMeal}>
                    <h1>{item.strMeal}</h1>
                    <img src={item.strMealThumb} alt={item.strMeal} />
                </div>
            ))}
        </div>
    );
}

async function fetchMealIdeas(ingredient) {
    try {
        console.log("Fetching meals for", ingredient);
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        console.log("Fetched meals for", ingredient, data);
        return data.meals || []; // Return an empty array if 'data.meals' is undefined
    } catch (error) {
        console.error("Error fetching meals:", error);
        return [];
    }
}
