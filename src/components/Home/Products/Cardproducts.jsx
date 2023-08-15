import React from 'react'

function Cardproducts({ image, title, utility, description, ingredients, indications, references,Dosageandconsumption }) {
  return (
    <div className="card-products">
      <div className="pict-products">
        {image && <img className="pict-img-products" src={image} alt={title} />}
      </div>
      <div className="desc-products">
        <div className="title-desc-products">
          <h1>{title}</h1>
          <span>{description}</span>
          <div className='desc-bottom-products'>
            <h3 className='utility'>
                {utility.map((utility) => (
                  <li key={utility.number}>
                    {utility.desc}
                  </li>
                ))}
            </h3>
            <div>
              <span>{ingredients}</span>
              <span>{indications}</span>
              <span>
                <ol>
                  {references.map((reference) => (
                    <li key={reference.number}>
                      {reference.number}. {reference.desc}
                    </li>
                  ))}
                </ol>
              </span> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cardproducts