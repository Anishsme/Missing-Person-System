import "../assets/fonts.css"
import { useState } from "react";
const Image_Slider=()=>{
    const slides=[ {url:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"},{url:"https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"},
    {url:"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {url:"https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk="}]
    const [currentIndex,setCurrentIndex]=useState(0)
    // Styles for the slides container
    const containerStyles={width:"700px",height:"320px",margin:"30px auto"};

    const slidesStyles={backgroundImage:`url(${slides[currentIndex].url})`,
    width:'100%',
    height:'100%',
    borderRadius:'10px',
    backgroundPosition:"center",
    backgroundSize:"cover",
};

const sliderStyles={
    height:"100%",
    position:"relative",
    
}

const leftArrowStyles={
    position:'absolute',
    top:'50%',
    transform:'translate(0,-50%)',
    left:'32px',
    fontSize:'45px',
    color:'#fff',
    zIndex:1,
    cursor:'pointer',
}

const rightArrowStyles={
    position:'absolute',
    top:'50%',
    transform:'translate(0,-50%)',
    right:'32px',
    fontSize:'45px',
    color:'#fff',
    zIndex:1,
    cursor:'pointer',
}

const goToPrevious=()=>{
    const isFirstSlide=currentIndex===0;
    const newIndex=isFirstSlide? slides.length-1:currentIndex-1;
    setCurrentIndex(newIndex);
}

const goToNext=()=>{
    const isLastSlide=currentIndex===slides.length-1;
    const newIndex=isLastSlide ?0:currentIndex+1;
    setCurrentIndex(newIndex);
}

const dotStyles={
    display:'flex',
    justifyContent:'center',
}

const goSpecifc=(ind)=>{
    
    setCurrentIndex(ind)
    
}

    return(
        <div style={containerStyles} className="container">
            <div style={sliderStyles}>
                <div style={leftArrowStyles} onClick={goToPrevious}>◀</div>
                <div style={rightArrowStyles} onClick={goToNext}>▶</div>
            <div style={slidesStyles}></div>
            </div>
       <div style={dotStyles}>
        {slides.map((slide,index)=>{
            return(<div style={{cursor:"pointer",paddingTop:"10px"}} onClick={()=>goSpecifc(index)}>⚫ &nbsp;</div>)
        })}
       </div>
        </div>
       
    )
};

export default Image_Slider;