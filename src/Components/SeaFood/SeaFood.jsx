import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from '../Food/Food';

const SeaFood = () => {
   const seafoods = useLoaderData();
   const{meals} = seafoods;  
   console.log(meals);
    return (
        <div>
                <h2 className='text-6xl font-extrabold text-center text-slate-900 bg-gray-400 p-5 '>Sea Foods</h2>
           <div className='grid md:grid-cols-3 gap-2 p-2'>
            {
                meals.map(meal => <Food
                    key={meal.idMeal}
                    meal ={meal}></Food>)
            }
            </div>
        </div>
    );
};

export default SeaFood;