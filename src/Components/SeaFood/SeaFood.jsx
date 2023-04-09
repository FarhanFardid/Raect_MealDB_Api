import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from '../Food/Food';

const SeaFood = () => {
   const seafoods = useLoaderData();
   const{meals} = seafoods;  
   console.log(meals);
    return (
        <div>
                <h2 className='text-2xl md:text-4xl font-bold text-white text-center p-2 md:p-5 bg-slate-900'>Sea Foods</h2>
           <div className='grid md:grid-cols-3 gap-2 p-2  bg-gray-500'>
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