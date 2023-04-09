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
              <h1 className="text-4xl font-bold text-white text-center p-5 bg-slate-900">
         Chefs Table Cuisine's Menu Details
      </h1>
      <div className='bg-zinc-300 border-2 border-gray-900 rounded-md p-10'>
            <div className='h-full'>
                <img  className='w-full p-2 h-96' src={strMealThumb} alt="photo"  />
                </div>
                <h4 className='text-lg font-semibold text-gray-900 py-2'>Meal Id: {idMeal}</h4>
                <h5 className='text-3xl font-extrabold text-gray-900 py-2'>Meal Title: {strMeal}</h5>
                <p className='text-lg font-bold text-gray-900 py-2'>Meal Category: {strCategory}</p>
                <p className='text-lg font-medium text-gray-900 py-2'>Area: {strArea}</p>
                <p className='text-lg font-normal text-gray-900 py-2'> <span className='font-bold'>Instructions: </span> {strInstructions}</p>
               <button className='bg-orange-700 border-2 border-black rounded-md p-2 w-50 font-medium text-white text-lg m-3' onClick={backMenu}>Back to Menu</button>
                </div>
        </div>
    );
};

export default FoodDetails;
