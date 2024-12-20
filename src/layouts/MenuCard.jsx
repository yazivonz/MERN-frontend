import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import img1 from "../assets/img/menu/8.png";
import img2 from "../assets/img/menu/3.png";
import img3 from "../assets/img/menu/4.png";
import img4 from "../assets/img/menu/5.png";
import img5 from "../assets/img/menu/6.png"; 
import img6 from "../assets/img/menu/7.png";
import CartCard from "../layouts/CartCard"; // Import your CartCard

const MenuCard = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current image index
  const [isCartOpen, setIsCartOpen] = useState(false); // State to track the cart modal visibility

  // Create an array of images to cycle through
  const images = [img1, img2, img3, img4, img5, img6]; // Ensure these images are unique

  const handleImageClick = () => {
    // Cycle to the next image when the current one is clicked
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleCartClick = () => {
    setIsCartOpen(true); // Open the cart modal
  };

  const handleCloseCart = () => {
    setIsCartOpen(false); // Close the cart modal
  };

  return (
    <>
      <div className="w-full lg:w-1/4 bg-white p-3 rounded-lg">
        <div>
          <img
            className="rounded-xl cursor-pointer" 
            src={images[currentIndex]} // Display the current image
            alt={props.title}
            onClick={handleImageClick} // Change image on click
          />
        </div>
        <div className="p-2 mt-5 flex flex-col">
          <h3 className="font-semibold text-xl">{props.title}</h3>
          
          {/* Ratings Section */}
          <div className="flex items-center mt-1">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index} className={index < props.rating ? "text-yellow-500" : "text-gray-300"}>
                ★
              </span>
            ))}
          </div>
          
          {/* Price and Cart Section */}
          <div className="flex justify-between items-center mt-2">
            <h3 className="font-semibold text-xl">{props.price}</h3>
            <span
              className="flex items-center border-white bg-[#e1e7fe] px-3 py-2 rounded-full hover:text-blue-200 cursor-pointer"
              onClick={handleCartClick} // Open cart modal on click
            >
              <FaShoppingCart size={20} />
            </span>
          </div>
        </div>
      </div>
      {/* Include the CartCard modal here */}
      <CartCard
        isOpen={isCartOpen}
        onClose={handleCloseCart}
        title={props.title} // You can pass other props as needed
        images={images} // Pass images or any other necessary data
      />
    </>
  );
};

export default MenuCard;
