import React from "react";
import PetCare from "../../assets/Image/PetCare.png";
import PharmacyCare from "../../assets/Image/pharmacyCare.png";
import BabyCare from "../../assets/Image/babyCare.png";
import "./SubMainBanner.css";

const SubMainBanner = () => {
  return (
    <div className="banner-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <img src={PetCare} alt="Pet Care" className="rounded-image w-full h-auto object-cover" />
      <img src={PharmacyCare} alt="Pharmacy Care" className="rounded-image w-full h-auto object-cover" />
      <img src={BabyCare} alt="Baby Care" className="rounded-image w-full h-auto object-cover" />
    </div>
  );
};

export default SubMainBanner;
