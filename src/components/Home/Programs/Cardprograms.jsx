import React from 'react';
import '../../../css/Programs/Cardprograms.css'
function Cardprograms(props) {
  const { image, title, description } = props;

  return (
    <div className='container-cardprograms'>
      <div className="wrapper-cardprograms">
        <div className="img-box">
          <div className="img">{image}</div>
        </div>
        <div className="title-cardprograms">
            <h1>{title}</h1>
            <span>{description}</span>
        </div>
      </div>
    </div>
  );
}

export default Cardprograms;
