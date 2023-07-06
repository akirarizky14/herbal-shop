import React from 'react';
import '../../../css/Home/Home.css';
import Hero from './Hero';
import Explanation from './Explanation';
import Contactus from '../Contactus/Contactus';
function Home() {
  return (
    <div className='container-home'>
        <Hero/>
        <Explanation/>
        <Contactus/>
    </div>
  ) 
}

export default Home