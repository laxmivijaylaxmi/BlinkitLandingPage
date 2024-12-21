import React from 'react'
import "./SubContent2.css";
import rolling from "../../assets/Image/rolling.png"
import paperrolles from "../../assets/Image/paperrolles.png";
import perfectRolles from "../../assets/Image/perfectRolles.png";
import RollingPaper from "../../assets/Image/RollingPaper.png"
import Tips from "../../assets/Image/Tips.png"
import ultimatedRolles from "../../assets/Image/ultimatedRolles.png"


const SubContent2 = () => {
    const collections = [
        { id: 1, title: "Brown Ripper Rolling Paper 32 Leaves + 32..", image: rolling, description: "1 pack (64 pieces)", price: "MRP ₹120" },
        { id: 2, title: "Perfect Rolling Paper (Pink) - Bongchie", image: paperrolles, description: "3 pack", price:"MRP ₹45" },
        { id: 3, title: "Perfect Rolled Cones (Natural) - Bongchie", image: perfectRolles, description: "3 pack", price:"MRP ₹45"  },
        { id: 4, title: "Ultimate Rolling Paper with Filter Tips & Crushing...-", image: RollingPaper, description: "1 pack (32 pieces)", price: "MRP ₹90" },
        { id: 5, title: "Perforated Wide Tips Roach - Raw", image: Tips, description: "1 pack (50 pieces)", price: "MRP ₹50" },
        { id: 6, title: "Ultimate Rolling Paper with Filter Tips.. ", image: ultimatedRolles, description: "1 pack (32 Leaves)", price: "MRP ₹80" },
      ];
    
      const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
      };
    
  return (
    <div >
     <div className="sub-content-container mt-4">
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
      
    </div>
  )
}

export default SubContent2
