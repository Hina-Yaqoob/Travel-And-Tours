// import React from "react";

// const Rating = () => {
//   return (

//   );
// };

// export default Rating;

// import React from 'react'
// import "./ratingStyle.css"
// import juice from "../assets/juice.jpg"
// import boat from "../assets/boat.jpg"
// import sofa from "../assets/sofa.jpg"
// import climbing from "../assets/climbing.jpg"
// import { useState } from 'react'
// import "./starStyle.css"

// import { FaStar,FaStarHalfAlt  } from "react-icons/fa";
// const Rating=()=> {

//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };
//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   const imageStyle = {

//     ...(isHovered && {

//       transform: "scale(1.1)"
//     }),
//   };

//   // return (
//   //   <img
//   //     src="your_image_url.jpg"
//   //     alt="Your Image"
//   //     style={imageStyle}

//   return (

//     <>

//     <div className='rating'>
// <h2>Top Destination</h2>
// <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo <br></br>odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores <br></br>quis, blanditiis laboriosam alias. Sed.</p>
//    <div className='ratingpics'>

//    <img  src={juice} alt=""   style={imageStyle}   onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}/>
//    <img  src={boat} alt=""  style={imageStyle}   onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}/>
//    <img  src={sofa} alt=""  style={imageStyle}   onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}/>
//    <img  src={climbing} alt=""  style={imageStyle}   onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}/>

//     </div>
//     <div className='descheading'>

//     <h4>Food & Wines</h4>

//     <h4>Resort & Spa</h4>
//     <h4>Hotel Rooms</h4>

//     <h4>Mountain Climbing</h4>
//     </div>

//     <div className='Headstar'>

//     <span className='span0'>
//         <FaStar  className="icon" />
//     <FaStar  className="icon" />
//     <FaStar  className="icon"/>
//     <FaStar  className="icon"/>
//         <FaStarHalfAlt className="icon" />

//         </span>

//      <span className='span1'>
//         <FaStar  className="icon" />
//     <FaStar  className="icon" />
//     <FaStar  className="icon"/>
//     <FaStar  className="icon"/>
//         <FaStarHalfAlt className="icon" />

//         </span>

//         <span className='span2'>
//         <FaStar  className="icon" />
//     <FaStar  className="icon" />
//     <FaStar  className="icon"/>
//     <FaStar  className="icon"/>
//         <FaStarHalfAlt className="icon" />

//         </span>
//         <span className='span3'>
//         <FaStar  className="icon" />
//     <FaStar  className="icon" />
//     <FaStar  className="icon"/>
//     <FaStar  className="icon"/>
//         <FaStarHalfAlt className="icon" />

//         </span>

//         </div>
//     </div>

//       </>
//   )
// }

// export default Rating;

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const images = [
  {
    url: "https://andtour-react.netlify.app/static/media/hotel2.3e4b06c0456866ba2d94.png",
    title: "Beach View",
    width: "30%",
  },
  {
    url: "https://andtour-react.netlify.app/static/media/hotel3.7daea2be758071426c02.png",

    title: "Welcome",
    width: "30%",
  },
  {
    url: "https://andtour-react.netlify.app/static/media/hotel8.980e6eaf416d34809cf6.png",
    title: "International Resort",
    width: "30%",
  },
  {
    url: "https://andtour-react.netlify.app/static/media/hotel6.71ece295cac75a47c576.png",
    title: "Hotel Deluxe",
    width: "30%",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7mDtUST_nGzB9Xfdejb2KsohlrnNE8BqnMH3I9hHvKQ&s",
    // url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS32W3HwAVSUoFiS6-HKfKzn-Xgt0WBygt9Kw&s",
    title: "Mosque",
    width: "30%",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4tVsUMYM_XV8tuXtNabqudNVxE2c_mZSpQ&s",
    title: "Canal View",
    width: "30%",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  // marginLeft: "4rem",

  left: 4,
  right: 7,
  top: 8,
  bottom: 8,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 14px)",
  transition: theme.transitions.create("opacity"),
}));

export default function ButtonBaseDemo() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "2.5rem",
        marginTop: "5rem",
        marginBottom: "1rem",
        minWidth: 300,
        width: "100%",
      }}
    >
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
