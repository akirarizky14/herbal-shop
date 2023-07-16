import React from 'react'

function Cardproducts({ image, title, utility, description, ingredients, indications, references }) {
  return (
    <div className="card-products">
      <div className="pict-products">
        {image && <img className="pict-img-products" src={image} alt={title} />}
      </div>
      <div className="desc-products">
        <div className="title-desc-products">
          <h1>{title}</h1>
          <h3>{utility}</h3>
          <span>{description}</span>
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
  )
}

export default Cardproducts