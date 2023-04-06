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
              <h1 className="text-5xl font-extrabold text-white text-center p-5 bg-slate-900">
         Chefs Table Cuisine's Menu Details
      </h1>
      <div className='bg-zinc-300 border-2 border-gray-900 rounded-md p-10'>
            <div className='h-full'>
                <img  className='w-full p-2 h-96' src={strMealThumb} alt="photo"  />
                </div>
                <h4 className='text-2xl font-semibold text-gray-900 py-2'>Meal Id: {idMeal}</h4>
                <h5 className='text-4xl font-extrabold text-gray-900 py-2'>Meal Title: {strMeal}</h5>
                <p className='text-3xl font-bold text-gray-900 py-2'>Meal Category: {strCategory}</p>
                <p className='text-2xl font-medium text-gray-900 py-2'>Area: {strArea}</p>
                <p className='text-3xl font-normal text-gray-900 py-2'>Instructions: {strInstructions}</p>
               <button className='bg-orange-700 border-2 border-black rounded-md p-3 w-50 font-extrabold text-white text-2xl m-3' onClick={backMenu}>Back to Menu</button>
                </div>
        </div>
    );
};

export default FoodDetails;
