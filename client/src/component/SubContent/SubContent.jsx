import React, { useState } from "react";
import Mothertoned from "../../assets/Image/MotherToned.png";
import Amulbutter from "../../assets/Image/Amulbutter.png";
import AmulCow from "../../assets/Image/AmulCowMilk.png";
import Amuldahi from "../../assets/Image/Amuldahi.png";
import AmulTaza from "../../assets/Image/AmulTaza.png";
import AmulGold from "../../assets/Image/AmulGold.png";
import "./SubContent.css";

const SubContent = () => {
  const [cart, setCart] = useState([]); // State to track cart items

  const collections = [
    { id: 1, title: "Amul Taaza Toned Fresh Milk", image: AmulTaza, description: "1ltr", price: 56 },
    { id: 2, title: "Amul Gold Toned Full Cream Fresh Milk", image: AmulGold, description: "500ml", price: 34 },
    { id: 3, title: "Amul Masti Curd", image: Amuldahi, description: "400g", price: 35 },
    { id: 4, title: "Amul Salty Butter", image: Amulbutter, description: "100g", price: 60 },
    { id: 5, title: "Mother Dairy Cow Fresh Milk", image: AmulCow, description: "500ml", price: 29 },
    { id: 6, title: "Mother Dairy Toned Fresh Milk", image: Mothertoned, description: "500ml", price: 28 },
  ];

  // Function to handle adding items to the cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div>
      <div className="sub-content-container">
        {collections.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
              <div className="card-footer">
                <span className="card-price">₹{item.price}</span>
                <button className="add-button" onClick={() => addToCart(item)}>
                  ADD
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Display */}
      {/* <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.title} - ₹{item.price}
              </li>
            ))}
          </ul>
        )}
      </div> */}
    </div>
  );
};

export default SubContent;
