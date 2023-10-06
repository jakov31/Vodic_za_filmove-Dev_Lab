  
import React, { useState} from 'react';
import ModalWindow from '../UI/ModalWindow';

const MovieSlider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);


  const slidesToShow = 3;
  const startIndex=currentIndex;
  const totalSlides = data.length <=10 ? data.length : data.length=10;
  const endIndex=Math.min(currentIndex+slidesToShow, totalSlides);

  const visibleSlides = data.slice(startIndex, endIndex);
  
  const handlePrevSlide = () => {
    const isFirstSlide = currentIndex===0;
    const newIndex= isFirstSlide ? totalSlides-1 : currentIndex-1;
    setCurrentIndex(newIndex);
    
  };

  const handleNextSlide = () => {
    const isLastSlide=currentIndex===totalSlides-1;
    const newIndex = isLastSlide ? 0 : currentIndex+1;
    setCurrentIndex(newIndex);    
  };

  const handleReadMore = (movie)=>{
    setSelectedMovie(movie)
    setIsModalOpen(true);

  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 37) {
    
      handlePrevSlide();
    } else if (e.keyCode === 39) {
      
      handleNextSlide();
    }
  };

  

  return (
    <div className="flex flex-row justify-center items-center relative mb-8">
      <button className="absolute -translate-x-0 translate-y-[-50%] left-5 cursor-pointer" onClick={handlePrevSlide} onKeyDown={handleKeyDown}>&lt;</button>
      {visibleSlides.map((slide, index) => (
        <div  key={index} className="flex flex-col">
          <img className='px-4 h-[150px] w-[150px] ' src={slide.image} alt={slide.name} />
          <h3 className='text-center'>{slide.name}</h3>
          <p className='text-center'>{slide.species}</p>
          <button onClick={() => handleReadMore(slide)} className='bg-red-500 hover:bg-red-800 text-white font-semibold py-1 px-6 rounded-full mt-1'>Read More</button>
        </div>
      ))}
      <button className="absolute -translate-x-0 translate-y-[-50%] right-5 cursor-pointer" onClick={handleNextSlide} onKeyDown={handleKeyDown}>&gt;</button>
      <ModalWindow isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}  movie={selectedMovie}/>
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