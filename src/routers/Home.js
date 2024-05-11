import React from "react";
import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
import {countries} from "../components/Data.js"

import "./HomeStyle.css";
import Welcom from "../components/Welcom";
import Facilities from "../components/Facilities";

import Footer from "../components/Footer";
import Rating from "../components/Rating";
import Fronttext from "../components/Fronttext";
import Corousel from "../components/Corousel";
import Abc from "../components/Abc.js";
// import BgVideo from "../assets/BgVideo.mp4"; 


const Home = () => {
  return (
    <>
      <Navbar />
      <div className="background-img">
        <Fronttext />
      </div>
      <Abc/>
      <Rating />
      <Welcom />
      <Facilities />

      <Corousel images={countries} />

      <Footer />
    </>
  );};  




export default Home;
