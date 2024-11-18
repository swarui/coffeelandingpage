import React from "react";
import Americano from "../assets/Americano.jpeg";
import Cappuccino from "../assets/Capucino.jpeg";
import Corado from "../assets/Corado.jpeg";
import Iced from "../assets/Iced.jpeg";
import Latte from "../assets/Latte.jpeg";
import Brew from "../assets/Brew.jpeg";
import Ricano from "../assets/Ricano.png";

function MenuItem({ title, description, price, image }) {
  return (
    <>
      <div
        style={{ fontFamily: "Poppins" }}
        className="flex items-center  justify-between p-4 bg-[#804933] rounded-lg shadow-lg"
      >
        {/* Coffee Image */}

        <div className="flex items-center gap-4 ">
          <img
            src={image}
            alt={title}
            className="w-16 h-16 border border-black rounded-full object-cover"
          />
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
    <div id="menu">
      <div className="min-h-screen p-8  ">
        <h1
          style={{ fontFamily: "Poppins" }}
          className="text-center text-3xl mt-10 font-bold text-[#3e2723] "
        >
          Menu
        </h1>
        <h2
          style={{ fontFamily: "Poppins" }}
          className="text-center text-md text-[#804933]"
        >
          Best Selling
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-10 ">
          {/* Manually defined menu items */}
          <MenuItem
            title="Breve Coffee"
            description="A blend of Arabica coffee beans."
            price="Ksh 200"
            image={Brew} // Replace with coffee image URL
          />

          <MenuItem
            title="Ice Cold "
            description="A refreshing cold coffee."
            price="Ksh 250"
            image={Iced}
          />

          <MenuItem
            title="Mocha Brew"
            description="A strong and rich espresso brew."
            price="Ksh 300"
            image={Brew}
          />

          <MenuItem
            title="Latte"
            description="A robust, aromatic escape in every cup."
            price="Ksh 350"
            image={Latte}
          />
          <MenuItem
            title="Americano"
            description="A harmonious blend for a perfect brew."
            price="Ksh 400"
            image={Americano}
          />
          <MenuItem
            title="Corado"
            description="Pure coffee bliss, brewed just for you."
            price="Ksh 450"
            image={Corado}
          />
          <MenuItem
            title="Capuccino"
            description="Expertly roasted for a full-bodied taste."
            price="Ksh 400"
            image={Cappuccino}
          />
          <MenuItem
            title="Americano"
            description="A symphony of flavor, brewed to perfection."
            price="Ksh 400"
            image={Ricano}
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;
