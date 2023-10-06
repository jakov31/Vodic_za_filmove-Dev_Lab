  
  // Slider.js
import React, { useState, useEffect } from 'react';

const MovieSlider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slidesToShow = 3;
  const totalSlides = data.length

  // Calculate the start and end indices for the visible slides
  const startIndex = currentIndex % totalSlides;
  const endIndex = (startIndex + slidesToShow) % totalSlides;

  const visibleSlides = data.slice(startIndex, endIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, totalSlides]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - slidesToShow + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + slidesToShow) % totalSlides);
  };

  return (
    <div className="flex flex-row justify-center items-center relative">
      <button className="absolute left-5" onClick={handlePrev}>&lt;</button>
      {visibleSlides.map((slide, index) => (
        <div key={index} className="flex flex-col">
          <img className='px-4 h-[150px] w-[150px] ' src={slide.image} alt={slide.name} />
          <h3 className='text-center'>{slide.name}</h3>
          <p className='text-center'>{slide.species}</p>
          <button className='bg-red-500 hover:bg-red-800 text-white font-semibold py-1 px-6 rounded-full mt-1'>Read More</button>
        </div>
      ))}
      <button className="absolute right-5" onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default MovieSlider;

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // const MovieSlider = ({slides})=>{
//     const [currentSlide, setCurrentSlide] = useState(0);

//     function handlePrevSlide (){
//         setCurrentSlide((prevSlide) =>
//         prevSlide === 0 ? slides.length - 1 : prevSlide - 1
//       );
//     };

//     function handleNextSlide(){
//         setCurrentSlide((prevSlide)=>(prevSlide+1)<slides.length);
//     };

// return <div className="slider">
// <button onClick={handlePrevSlide}>&lt;</button>
// {slides.map((slide, index) => (
//   <div key={index} className="slide">
//     <img src={slide.image} alt={slide.name} />
//     <h3>{slide.name}</h3>
//     <p>{slide.species}</p>
//     <button>Read More</button>
//   </div>
// ))}
// <button onClick={handleNextSlide}>&gt;</button>
// </div>

// }


// export default MovieSlider;