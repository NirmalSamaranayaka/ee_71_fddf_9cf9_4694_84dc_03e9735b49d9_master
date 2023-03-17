import React,{useState} from 'react';

function Slides({slides}) {

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const restartSlides = () => {
    setCurrentSlide(0);
  };

  const { title, text } = slides[currentSlide];
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined"
                 onClick={restartSlides}
                 disabled={currentSlide === 0}>Restart</button>
                <button data-testid="button-prev" className="small"
                 onClick={prevSlide}
                 disabled={currentSlide === 0}
                 >Prev</button>
                <button data-testid="button-next" className="small"
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{title}</h1>
                 <p data-testid="text">{text}</p>
            </div>
        </div>
    );

}

export default Slides;
