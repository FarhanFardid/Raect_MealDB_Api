import React from 'react';
import { Link } from 'react-router-dom';

const Food = ({meal}) => {
    const {idMeal,strMeal,strMealThumb} = meal;
    return (
        <div className='border-2 border-gray-950 rounded-lg bg-slate-400 text-center '>
            <img className='w-full p-1' src={strMealThumb} alt="" />
            <h4 className='text-2xl text-center py-2'>Meal Id: {idMeal}</h4>
            <h2 className='text-3xl text-center py-1'>Meal Title:  {strMeal}</h2>
           <Link to ={`/foods/${idMeal}`}> <button className='bg-amber-600 font-extrabold p-3  w-full border-2 rounded-lg mt-4  bottom-1'>Show Details</button></Link>

        </div>
    );
};

export default Food;