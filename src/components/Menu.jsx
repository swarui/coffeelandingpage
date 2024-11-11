import React from "react";
import Americano from '../assets/Americano.jpeg'
import Breve from '../assets/Breve.png'
import Cappuccino from '../assets/Capucino.jpeg'
import Corado from '../assets/Corado.jpeg'
import Iced from '../assets/Iced.jpeg'
import Latte from '../assets/Latte.jpeg'
import Mocha from '../assets/Mocha.jpeg'
import Ricano from '../assets/Ricano.png'

function MenuItem({ title, description, price, image }) {
  return (
    <>
      <div  style={{fontFamily:'Poppins'}}    className="flex items-center  justify-between p-4 bg-[#804933] rounded-lg shadow-lg">
        {/* Coffee Image */}
        
        <div className="flex items-center gap-4 ">
          <img src={image} alt={title} className="w-16 h-16 border border-black rounded-full" />
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
    <div id="menu" >

    <div className="min-h-screen p-8  ">
       <h1
          style={{ fontFamily: "Poppins" }}
          className="text-center text-3xl mt-10 font-bold text-[#3e2723] "
        >
          Menu
        </h1>
        <h2 style={{ fontFamily: "Poppins" }}
          className="text-center text-lg text-blue-600" >Best Selling</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-10 ">
        {/* Manually defined menu items */}
        <MenuItem  
          title="Breve Coffee"
          description="A blend of Arabica coffee beans."
          price="Ksh 200"
          image={Breve} // Replace with coffee image URL
        />

        <MenuItem
          title="Iced Cold Coffee"
          description="A refreshing cold coffee."
          price="Ksh 250"
          image={Iced}
        />

        <MenuItem
          title="Mocha Coffee Brew"
          description="A strong and rich espresso brew."
          price="Ksh 300"
          image={Mocha}
        />

        <MenuItem
          title="Latte Coffee"
          description="A classic americano coffee ."
          price="Ksh 350"
          image={Latte}
        />
        <MenuItem
          title="Americano Coffee"
          description="A classic americano coffee ."
          price="Ksh 400"
          image={Americano}
        />
        <MenuItem
          title="Corado Coffee"
          description="A classic americano coffee."
          price="Ksh 450"
          image={Corado}
        />
        <MenuItem
          title="Capuccino Coffee"
          description="A classic americano coffee."
          price="Ksh 400"
          image={Cappuccino}
        />
         <MenuItem
          title="Americano Coffee"
          description="A classic americano coffee."
          price="Ksh 400"
          image={Ricano}
        />
      </div>
    </div>
    </div>
  );
}

export default Menu;
