import "./CorouselStyles.css"
import React from 'react'


const Corousel = ({data}) => {

  return (
  
    <div>
        {data.map[(item,idx) => {
        return <img src={item.src} alt={item.alt} key={idx} />
        
        }]}
    </div>
  )
}

export default Corousel


// import React from 'react'



// function Corousel() {
// //     const slides=[
// //         {url:"https://preview.colorlib.com/theme/hepta/images/slider-1.jpg" ,title:"beach"},
// //         {url:"https://preview.colorlib.com/theme/hepta/images/slider-2.jpg" ,title:"plain"},
// //         {url:"https://preview.colorlib.com/theme/hepta/images/slider-3.jpg" ,title:"sea"},
// //         {url:"https://preview.colorlib.com/theme/hepta/images/slider-4.jpg" ,title:"road"},
// //         {url:"https://preview.colorlib.com/theme/hepta/images/slider-5.jpg" ,title:"pool"},
// //         {url:"https://preview.colorlib.com/theme/hepta/images/slider-6.jpg" ,title:"juice"},
// //     ];
//     const contaierStyles={
//         width:'500px',
//         height:'280px',
//         margin:'0 auto'
//     }
//   return (
//     <>
//     <div className='heading'>
//     <h1>International Tour</h1>
//     <h1> Management.</h1>
//     <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
//   <div style={contaierStyles}>

 
//   </div>
 
  
//     </div>
//     </>
//   )
// }

// export default Corousel