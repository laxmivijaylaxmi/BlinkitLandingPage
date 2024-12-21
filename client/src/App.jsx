import React from "react";
import Header from "./component/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./component/footer/Footer";

const App = () => {
  return (
   <>
   <Header/>
     <main className="flex flex-col min-h-screen">
   <Outlet/>
    </main>
    <Footer/>
   </>
  );
};

export default App;
