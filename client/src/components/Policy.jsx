import React, { useState } from "react";
import exhange from "../assets/frontend_assets/exchange_icon.png";
import quality from "../assets/frontend_assets/quality_icon.png";
import support from "../assets/frontend_assets/support_img.png";

const Policy = () => {

const [contact , setContact] = useState("")

const handleSubmit =(e)=>{
  e.preventDefault();
    alert("thanku for contacted me" , {contact});
    setContact("");
}




  return (
    <div>
      <div className="my-20 flex flex-col gap-10 md:gap-0 md:flex-row items-center justify-around ">
        <div className="flex flex-col items-center justify-center">
          <img src={exhange} alt="image" className="w-10" />
          <p className="font-bold">Easy Exhange Policy</p>
          <p className="text-sm font-medium">
            we offer hassle free exchange policy
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img src={quality} alt="image" className="w-10" />
          <p className="font-bold">7days return Policy</p>
          <p className="text-sm font-medium">
            we offer 7days free exchange policy
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img src={support} alt="image" className="w-10" />
          <p className="font-bold">Best Customer Support </p>
          <p className="text-sm font-medium">we offer 24/7 customer support</p>
        </div>
      </div>


      <div className="mb-10 flex flex-col items-center justify-center">

      <p className="font-mono text-2xl">Subscribe now & get 20% off</p>
      <p className="text-slate-800 font-serif text-sm py-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore vero ut quia, officiis odio culpa iste  </p>
      <form onSubmit={handleSubmit} className="max-w-md flex items-center gap-1">
        <input type="email" value={contact || ""}
        onChange={(e)=> setContact(e.target.value)}

        placeholder="enter your email"
        required className="w-full outline outline-gray-700 outline-1 p-2 " />
        <button className="px-6 py-3 bg-black text-white text-sm">
          submit
        </button>
      </form>
      </div>
    </div>
  );
};

export default Policy;
