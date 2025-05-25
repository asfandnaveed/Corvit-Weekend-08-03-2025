import React from "react";



function Food() {


    return (
        <>
            <div className="container my-5">
                <div className="card shadow-lg">
                    <div className="row g-0">
                        <div className="col-md-5">
                            <img
                                src="https://www.themealdb.com/images/media/meals/uryqru1511798039.jpg"
                                className="img-fluid rounded-start h-100 object-fit-cover"
                                alt="White chocolate creme brulee"
                            />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h3 className="card-title fw-bold">White Chocolate Creme Brulee</h3>
                                <p className="mb-2">
                                    <span className="badge bg-warning text-dark me-2">Dessert</span>
                                    <span className="badge bg-secondary">French</span>
                                </p>
                                <p className="card-text">
                                    <strong>Instructions:</strong>
                                    <br />
                                    Heat the cream, chocolate and vanilla pod in a pan until the
                                    chocolate has melted. Take off the heat and allow to infuse for 10
                                    mins...
                                </p>
                                <div className="mb-3">
                                    <h6 className="fw-bold">Ingredients:</h6>
                                    <ul className="list-group list-group-flush small">
                                        <li className="list-group-item">568ml Double Cream</li>
                                        <li className="list-group-item">100g White Chocolate Chips</li>
                                        <li className="list-group-item">Pod of Vanilla</li>
                                        <li className="list-group-item">6 Egg Yolks</li>
                                        <li className="list-group-item">2 tbs Caster Sugar</li>
                                        <li className="list-group-item">Top Caster Sugar</li>
                                    </ul>
                                </div>
                                <div className="d-flex gap-2">
                                    <a
                                        href="https://www.youtube.com/watch?v=LmJ0lsPLHDc"
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
            </div>


        </>
    );
}


export default Food;