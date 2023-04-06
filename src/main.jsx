import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Components/Root/Root'

import Order from './Components/Order/Order'
import SeaFood from './Components/SeaFood/SeaFood'
import Contacts from './Components/Contacts/Contacts'
import Error from './Components/Error/Error'
import Home from './Components/Home/Home'
import Canada from './Components/Canadian/Canada'
import FoodDetails from './Components/FoodDetails/FoodDetails'

const restaurant = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/canadianfood',
        element: <Canada></Canada>,
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
        
      },
    
    {
      path: '/foods/:id',
      element: <FoodDetails></FoodDetails>,
    loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
    },
      {
        path:'/order',
        element: <Order></Order>
      },
      {
        path: "/seafood",
        element: <SeaFood></SeaFood>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')

      },
      {
        path: '/contact',
        element:<Contacts></Contacts>
      },
      {
        path: '*',
        element: <Error></Error>
      }
    ]

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={restaurant}></RouterProvider>
  </React.StrictMode>,
)
