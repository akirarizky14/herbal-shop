import { useState, useEffect } from 'react';
import '../../../css/Home/Hero.css';
import slider from '../../../assets/Home/Home/slider-bg.jpg';
import slider2 from '../../../assets/Home/Home/slider2.png';
import slider3 from '../../../assets/Home/Home/slider3.png';
import slider4 from '../../../assets/Home/Home/slider4.png';

import { Link } from 'react-router-dom';
import data from './herodata.json';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
    }, 3000); // Mengubah interval menjadi 2 detik (2000 ms)

    return () => {
      clearTimeout(interval);
    };
  }, [currentSlide]);

  return (
    <div className='container-hero'>
      <div className='wrapper-hero'>
        <img className='slider-img' src={getSliderImage(currentSlide)} alt='slider' />
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
              <Link className='.wrapper-button-anim' key={index} onClick={() => setCurrentSlide(index)}>
                <button className='button-details-hero'></button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function getSliderImage(index) {
  switch (index) {
    case 0:
      return slider;
    case 1:
      return slider2;
    case 2:
      return slider3;
    case 3:
      return slider4;
    default:
      return slider;
  }
}

export default Hero;
