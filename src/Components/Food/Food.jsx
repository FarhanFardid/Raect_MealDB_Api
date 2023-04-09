import React from 'react';
import { Link } from 'react-router-dom';

const Food = ({meal}) => {
    const {idMeal,strMeal,strMealThumb} = meal;
    return (
        <div className='border-2 border-gray-950 rounded-lg bg-slate-400 text-center relative'>
          <div className='mb-16'>  <img className='w-full p-1' src={strMealThumb} alt="" />
            <h4 className='text-xs md:text-sm text-center py-2'>Meal Id: {idMeal}</h4>
            <h2 className='md:text-lg text-sm text-center py-1'>Meal Title:  {strMeal}</h2></div>

           <div className='absolute bottom-0 md:ml-32 ml-28'><Link to ={`/foods/${idMeal}`}> <button className='bg-amber-600 font-bold md:font-extrabold p-2  m-2 w-full border-2 rounded-lg '>Show Details</button></Link></div>

        </div>
    );
};

export default Food;