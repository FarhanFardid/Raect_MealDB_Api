import React from "react";

const Contacts = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold text-white text-center p-2 md:p-5 bg-slate-900">
        Chefs Table Cuisine Contacts{" "}
      </h1>
      <article className="bg-slate-500 text-slate-950 font-normal md:font-medium md:text-2xl md:p-16 text-lg p-5 ">
        <article className="md:p-3 m-1 p-1">Welcome to our restaurant, where we are dedicated to providing our
        guests with an exceptional dining experience. Here's some information
        about us:</article> 
       <article className="md:p-3 m-1 p-1"> Name: Our restaurant is called "The Chefs Table Cuisine". Our focus
        is on serving delicious, high-quality dishes that are bursting with
        flavor and spices from around the world.</article> 
       <article className="md:p-3 m-1 p-1"> Address: We are located at 58,
        Main Street in the heart of downtown. Our restaurant is easily
        accessible by public transportation and there is ample street parking
        available nearby.</article>
       <article className="md:p-3 m-1 p-1">  Our Team: Our team of chefs and servers are passionate
        about food and providing excellent service. We work hard to ensure that
        every guest feels welcome and taken care of from the moment they walk
        through our doors.</article>
        <article className="md:p-3 m-1 p-1"> Our Menu: Our menu features a wide range of dishes
        inspired by cuisines from around the world, including Indian, Thai, and
        Middle Eastern flavors. We use only the freshest ingredients and our
        chefs work hard to ensure that every dish is made to perfection.</article>
       <article className="md:p-3 m-1 p-1"> Atmosphere: Our restaurant is designed to create a warm and welcoming
        atmosphere that is perfect for everything from a casual dinner with
        friends to a special celebration with loved ones. We have both indoor
        and outdoor seating available, so you can enjoy your meal in the way
        that suits you best.</article> 
        Thank you for considering The Chefs Table Cuisine for
        your next dining experience. We look forward to serving you soon!
      </article>
    </div>
  );
};

export default Contacts;
