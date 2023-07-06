import { useState, useEffect } from 'react';
import '../../../css/Home/Hero.css';
import slider from '../../../assets/Home/Home/slider-bg.jpg';
import { Link } from 'react-router-dom';
import data from './herodata.json';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
    }, 2000);

    return () => {
      clearTimeout(interval);
    };
  }, [currentSlide]);

  const handleSlideClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className='container-hero'>
      <div className='wrapper-hero'>
        <img className='slider-img' src={slider} alt='slider' />
        <div className='slider-written'>
          {data.map((item, index) => (
            <div
              key={index}
              className={`slide-item ${currentSlide === index ? 'active' : 'inactive'}`}
            >
              {currentSlide === index && (
                <div className='slider-title'>
                  <h3 className='title-slider'>{item.title}</h3>
                  <h1 className='subtitle-slider'>{item.subtitle}</h1>
                  <span className='desc-slider'>{item.description}</span>
                </div>
              )}
            </div>
          ))}
          <div className='button-hero'>
            <div className="wrapper-rm">
                <Link className='read-more'>Read More</Link>
            </div>
            <div className="wrapper-cu">
                <Link className='contact-us'>Contact Us</Link>
            </div>
          </div>
          <div className='button-anim-hero'>
            {data.map((item, index) => (
              <Link className='.wrapper-button-anim' key={index} onClick={() => handleSlideClick(index)}>
                <button className='button-details-hero'></button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
