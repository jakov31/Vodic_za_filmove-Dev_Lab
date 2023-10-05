const MovieSlider = ({slides})=>{
    const [currentSlide, setCurrentSlide] = useState(0);

    function handlePrevSlide (){
        setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slides.length - 1 : prevSlide - 1
      );
    };

    function handleNextSlide(){
        setCurrentSlide((prevSlide)=>(prevSlide+1)<slides.length);
    };

return <>
    <div id="slider" className="">
        

    </div>


    </>

}


export default MovieSlider;