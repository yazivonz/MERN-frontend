// Menu.jsx
import React from "react";
import img1 from "../assets/img/menu/8.png";
import img2 from "../assets/img/menu/3.png";
import img3 from "../assets/img/menu/4.png";
import img4 from "../assets/img/menu/5.png";
import img5 from "../assets/img/menu/5.png";
import img6 from "../assets/img/menu/7.png";
import MenuCard from "../layouts/MenuCard";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-gradient-to-r from-[#fffdf9] to-[#134278]">
      <h1 className="font-semibold text-center text-4xl mt-24 mb-8">
        Our Menu
      </h1>

      <div className="flex flex-wrap pb-8 gap-8 justify-center">
        <MenuCard img={img1} title="Espresso" price="₱100" rating={4} />
        <MenuCard img={img2} title="Cappuccino" price="₱120" rating={5} />
        <MenuCard img={img3} title="Latte" price="₱130" rating={4} />
        <MenuCard img={img4} title="Americano" price="₱90" rating={3} />
        <MenuCard img={img5} title="Macchiato" price="₱110" rating={5} />
        <MenuCard img={img6} title="Doppio" price="₱140" rating={4} />
      </div>
    </div>
  );
};

export default Menu;
