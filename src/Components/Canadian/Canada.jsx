import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import { useLoaderData } from 'react-router-dom';

const Canada = () => {
    // const foods = useLoaderData();
    // const {meals} = foods;
    //  console.log(meals);
   const [meals,setMeals] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
        .then(res => res.json())
        .then(data => setMeals(data.meals))

    },[])
    return (
        <div>
               <h2 className='text-4xl font-bold text-white text-center p-5 bg-slate-900 '>Canadian Foods</h2>
           <div className='grid md:grid-cols-3 gap-2 p-2 bg-gray-500'>
            {
                meals.map(meal => <Food
                    key={meal.idMeal}
                    meal ={meal}></Food>)
            }
            </div>
        </div>
    );
};

export default Canada;