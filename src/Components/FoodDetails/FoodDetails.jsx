import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FoodDetails = () => {
    const food = useLoaderData();
    const navigate = useNavigate();
    const backMenu = () =>{
        navigate(-1);
    } 

    const{idMeal,strArea,strCategory,strMealThumb,strInstructions,strMeal} = food.meals[0];
    console.log(food.meals); 
       return (
        <div className='text-center '>
              <h1 className="text-2xl md:text-4xl font-bold text-white text-center p-2 md:p-5 bg-slate-900">
         Chefs Table Cuisine's Menu Details
      </h1>
      <div className='bg-zinc-300 border-2 border-gray-900 rounded-md md:p-10 p-3'>
            <div className='h-full'>
                <img  className='w-full p-2 md:h-96 h-60' src={strMealThumb} alt="photo"  />
                </div>
                <h4 className=' text-xs md:text-sm font-normal md:font-semibold text-gray-900 py-2'>Meal Id: {idMeal}</h4>
                <h5 className='text-lg md:text-2xl font-normal md:font-bold text-gray-900 py-2'>Meal Title: {strMeal}</h5>
                <p className='text-sm md:text-lg font-normal md:font-semibold text-gray-900 py-2'>Meal Category: {strCategory}</p>
                <p className='text-sm md:text-lg font-normal md:font-semibold text-gray-900 py-2'>Area: {strArea}</p>
                <p className='text-sm md:text-lg font-normal md:font-semibold text-gray-900 py-2'> <span className='font-bold'>Instructions: </span> {strInstructions}</p>
               <button className='bg-orange-700 border-2 border-black rounded-md p-2 md:w-50 w-25 font-medium text-white md:text-lg md:m-3 text-sm m-1' onClick={backMenu}>Back to Menu</button>
                </div>
        </div>
    );
};

export default FoodDetails;
