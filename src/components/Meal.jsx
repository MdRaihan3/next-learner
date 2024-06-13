'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
const Meal = () => {
    const [search, setSearch] = useState('a')
    const [error, setError] = useState('')
    const [meals, setMeals] = useState([])
    const loadMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
            const data = await res.json()
            console.log(data);
            setMeals(data.meals)
            setError('')
        } catch (error) {
            console.log(error.message);
            setError(error.message)
        }
    }
    const handleSearch = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value);
    }

    console.log(meals);
    useEffect(() => {
        loadMeals()
    }, [])
    return (
        <div>
            <input onChange={handleSearch} className=" text-black p-2" type="text" placeholder="Search Here" />
            <button onClick={() => loadMeals()} className="bg-red-400 p-2 border-2">Search</button>
            <div className=' my-5 grid grid-cols-4 gap-5'>
                {
                    (meals && !error) ?
                        meals.map(meal =>
                            <div className=' p-4 border-2' key={meal?.idMeal}>
                                <div>
                                    <Image
                                        height={50}
                                        width={50}
                                        src={meal?.strMealThumb}
                                        alt={meal?.strMeal}
                                    />
                                </div>
                                <h1>{meal?.strMeal}</h1>
                                <hr />
                                <h1>Category: {meal?.strCategory}</h1>
                            </div>)
                        : <p>{error}</p>
                }
            </div>
        </div>
    );
};

export default Meal;