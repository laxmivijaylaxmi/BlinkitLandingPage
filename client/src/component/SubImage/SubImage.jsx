import React from "react";

// Import images
import PaanCorner from "../../assets/Image/paanCorner.png";
import Slice2 from "../../assets/Image/Slice-2.png";
import Slice3 from "../../assets/Image/Slice-3.png";
import Slice4 from "../../assets/Image/Slice-4.png";
import Slice5 from "../../assets/Image/Slice-5.png";
import Slice6 from "../../assets/Image/Slice-6.png";
import Slice7 from "../../assets/Image/Slice-7.png";
import Slice8 from "../../assets/Image/Slice-8.png";
import Slice9 from "../../assets/Image/Slice-9.png";
import Slice10 from "../../assets/Image/Slice-10.png";
import Slice11 from "../../assets/Image/Slice-11.png";
import Slice12 from "../../assets/Image/Slice-12.png";
import Slice13 from "../../assets/Image/Slice-13.png";
import Slice14 from "../../assets/Image/Slice-14.png";
import Slice15 from "../../assets/Image/Slice-15.png";
import Slice16 from "../../assets/Image/Slice-16.png";
import Slice17 from "../../assets/Image/Slice-17.png";
import Slice18 from "../../assets/Image/Slice-18.png";
import Slice19 from "../../assets/Image/Slice-19.png";
import Slice20 from "../../assets/Image/Slice-20.png";
import "./SubImage.css"

const SubImage = () => {

  const images = [
    PaanCorner, Slice2, Slice3, Slice4, Slice5,
    Slice6, Slice7, Slice8, Slice9, Slice10,
    Slice11, Slice12, Slice13, Slice14, Slice15,
    Slice16, Slice17, Slice18, Slice19, Slice20,
  ];

  return (
    <div
      className="grid grid-cols-10 gap-4 mt-3"
      style={{
        gridTemplateColumns: "repeat(10, 101px)", 
        gridAutoRows: "150px",                 
        gap: "10px",                          
        justifyContent: "center",              
      }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          style={{
            width: "101px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      ))}
    </div>
  );
};

export default SubImage;
