import React from 'react';
import '../../../css/Home/Home.css';
import Hero from './Hero';
import Explanation from './Explanation';
import Contactus from '../Contactus/Contactus';
import Video from './Video.jsx';
function Home() {
  return (
    <div className='container-home'>
        <Hero/>
        <Explanation/>
        <Video/>
        <Contactus/>
    </div>
  ) 
}
export default Home