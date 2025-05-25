import React, { useEffect, useState } from "react";



function Food() {

    const [meals, setMeals] = useState(null);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then((res) => res.json())
            .then((data) => setMeals(data));
    } , []);


    return (
        <>
            <div className="container my-5">
                {meals ?
                    (meals.meals.map((food) => (
                        <div className="card shadow-lg">
                            <div className="row g-0">
                                <div className="col-md-5">
                                    <img
                                        src={food.strMealThumb}
                                        className="img-fluid rounded-start h-100 object-fit-cover"
                                        alt="White chocolate creme brulee"
                                    />
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h3 className="card-title fw-bold">{food.strMeal}</h3>
                                        <p className="mb-2">
                                            <span className="badge bg-warning text-dark me-2">Dessert</span>
                                            <span className="badge bg-secondary">French</span>
                                        </p>
                                        <p className="card-text">
                                            <strong>Instructions:</strong>
                                            <br />
                                            {food.strInstructions}
                                        </p>
                                        <div className="mb-3">
                                            <h6 className="fw-bold">Ingredients:</h6>
                                            <ul className="list-group list-group-flush small">
                                                <li className="list-group-item">{food.strIngredient1}</li>
                                                <li className="list-group-item">{food.strIngredient2}</li>
                                                <li className="list-group-item">{food.strIngredient3}</li>
                                                <li className="list-group-item">{food.strIngredient4}</li>
                                                <li className="list-group-item">{food.strIngredient5}</li>
                                                <li className="list-group-item">{food.strIngredient6}</li>
                                            </ul>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <a
                                                href={food.strYoutube}
                                                target="_blank"
                                                className="btn btn-danger btn-sm"
                                            >
                                                🍽️ Watch on YouTube
                                            </a>
                                            <a
                                                href="https://www.bbcgoodfood.com/recipes/2540/white-chocolate-crme-brle"
                                                target="_blank"
                                                className="btn btn-outline-secondary btn-sm"
                                            >
                                                🔗 Full Recipe
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                    )
                    :
                    (<p>Loading!!!</p>)
                }
            </div>


        </>
    );
}


export default Food;