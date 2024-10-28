import React from "react";

function MenuItem({ title, description, price, image }) {
  return (
    <>
      <div  style={{fontFamily:'Poppins'}}    className="flex items-center justify-between p-4 bg-[#804933] rounded-lg shadow-lg">
        {/* Coffee Image */}
        
        <div className="flex items-center gap-4">
          <img src={image} alt={title} className="w-16 h-16 rounded-full" />
          {/* Title and Description */}
          <div>
            <h3 className="text-white font-semibold ">{title}</h3>
            <p className="text-gray-300 text-sm">{description}</p>
          </div>
        </div>
        {/* Price */}
        <div className=" text-white font-bold">{price}</div>
      </div>
    </>
  );
}

function Menu() {
  return (
    <div className="min-h-screen p-8 ">
       <h1
          style={{ fontFamily: "Poppins" }}
          className="text-center text-[1.5em] mt-10 text-black "
        >
          Who are we?
        </h1>
        <h2 style={{ fontFamily: "Poppins" }}
          className="text-center text-[0.8em] text-blue-600" >About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-20 ">
        {/* Manually defined menu items */}
        <MenuItem  
          title="Arabica Roasted Coffee"
          description="A blend of Arabica coffee beans."
          price="Ksh 200"
          image="https://via.placeholder.com/50" // Replace with coffee image URL
        />

        <MenuItem
          title="Macchiato Cold Coffee"
          description="A refreshing cold coffee."
          price="Ksh 250"
          image="https://via.placeholder.com/50"
        />

        <MenuItem
          title="Espresso Coffee Brew"
          description="A strong and rich espresso brew."
          price="Ksh 300"
          image="https://via.placeholder.com/50"
        />

        <MenuItem
          title="Americano Coffee"
          description="A classic americano coffee ."
          price="Ksh 350"
          image="https://via.placeholder.com/50"
        />
        <MenuItem
          title="Americano Coffee"
          description="A classic americano coffee ."
          price="Ksh 400"
          image="https://via.placeholder.com/50"
        />
        <MenuItem
          title="Americano Coffee"
          description="A classic americano coffee."
          price="Ksh 450"
          image="https://via.placeholder.com/50"
        />
        <MenuItem
          title="Americano Coffee"
          description="A classic americano coffee."
          price="Ksh 400"
          image="https://via.placeholder.com/50"
        />
         <MenuItem
          title="Americano Coffee"
          description="A classic americano coffee."
          price="Ksh 400"
          image="https://via.placeholder.com/50"
        />
      </div>
    </div>
  );
}

export default Menu;
