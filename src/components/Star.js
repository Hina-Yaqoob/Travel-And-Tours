import React from "react";
import "./starStyle.css"
import { FaStar,FaStarHalfAlt  } from "react-icons/fa";
// import { AiOutlineStar } from "react-icons/ai";

const Star = () => {
return(
   <>
          <FaStar className="icon"/>  

        <FaStarHalfAlt className="icon" />
        </>
         
        //   ?(< FaStarHalfAlt className="icon"/>)
        
    );
  };



export default Star;
