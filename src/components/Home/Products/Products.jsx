import React from 'react';
import '../../../css/Products/Products.css';
import amla from '../../../assets/Home/Home/amla.jpg';
import products from './products.json';
import ashwaganda from '../../../assets/Home/Home/ashwaganda.jpg';
import arjuna from '../../../assets/Home/Home/arjuna.jpg';
import brahmi from '../../../assets/Home/Home/brahmi.jpg';
import giloy from '../../../assets/Home/Home/giloy.jpg';
import gokshuru from '../../../assets/Home/Home/gokshuru.jpg';
import karela from '../../../assets/Home/Home/karela.jpg';
import lakhsuna from '../../../assets/Home/Home/lakhsuna.jpg';
import moringa from '../../../assets/Home/Home/moringa.jpg';
function Products() {
    const product = products[0];
    const product1 = products[1];
    const product2 = products[2];
    const product3 = products[3];
    const product4 = products[4];
    const product5 = products[5];
    const product6 = products[6];
    const product7 = products[7];
    const product8 = products[8];
  return (
    <div className='container-products'>
      <div className="wrapper-products">
        <div className="title-products">
          <h1>Наши Продукты</h1>
        </div>
        <div className="card-products">
          <div className="pict-products">
            <img className='pict-img-products' src={amla} alt="Amla" />
          </div>
          <div className="desc-products">
            <div className="title-desc-products">
              <h1>{product.title}</h1>
              <h3>{product.utility}</h3>
              <span>{product.description}</span>
                <span>
                {product.ingridients}
                </span>
                <span>{product.indications}</span>
                <span>
                    <ol>
                    {product.references.map((reference) => (
                    <li key={reference.number}>{reference.number}. {reference.desc}</li>
                    ))}
                    </ol>
                </span>          
            </div>
          </div>
        </div>
        <div className="card-products">
          <div className="pict-products">
            <img className='pict-img-products' src={ashwaganda} alt="Amla" />
          </div>
          <div className="desc-products">
            <div className="title-desc-products">
              <h1>{product1.title}</h1>
              <h3>{product1.utility}</h3>
              <span>{product1.description}</span>
                <span>
                {product1.ingridients}
                </span>
                <span>{product1.indications}</span>
                <span>
                    <ol>
                    {product1.references.map((reference) => (
                    <li key={reference.number}>{reference.number}. {reference.desc}</li>
                    ))}
                    </ol>
                </span>          
            </div>
          </div>
        </div>
        <div className="card-products">
          <div className="pict-products">
            <img className='pict-img-products' src={arjuna} alt="Amla" />
          </div>
          <div className="desc-products">
            <div className="title-desc-products">
              <h1>{product2.title}</h1>
              <h3>{product2.utility}</h3>
              <span>{product2.description}</span>
                <span>
                {product2.ingridients}
                </span>
                <span>{product2.indications}</span>
                <span>
                    <ol>
                    {product2.references.map((reference) => (
                    <li key={reference.number}>{reference.number}. {reference.desc}</li>
                    ))}
                    </ol>
                </span>          
            </div>
          </div>
        </div>
        <div className="card-products">
          <div className="pict-products">
            <img className='pict-img-products' src={brahmi} alt="Amla" />
          </div>
          <div className="desc-products">
            <div className="title-desc-products">
              <h1>{product3.title}</h1>
              <h3>{product3.utility}</h3>
              <span>{product3.description}</span>
                <span>
                {product3.ingridients}
                </span>
                <span>{product3.indications}</span>
                <span>
                    <ol>
                    {product3.references.map((reference) => (
                    <li key={reference.number}>{reference.number}. {reference.desc}</li>
                    ))}
                    </ol>
                </span>          
            </div>
          </div>
        </div>
        <div className="card-products">
          <div className="pict-products">
            <img className='pict-img-products' src={giloy} alt="Amla" />
          </div>
          <div className="desc-products">
            <div className="title-desc-products">
              <h1>{product4.title}</h1>
              <h3>{product4.utility}</h3>
              <span>{product4.description}</span>
                <span>
                {product4.ingridients}
                </span>
                <span>{product4.indications}</span>
                <span>
                    <ol>
                    {product4.references.map((reference) => (
                    <li key={reference.number}>{reference.number}. {reference.desc}</li>
                    ))}
                    </ol>
                </span>          
            </div>
          </div>
        </div>
        <div className="card-products">
          <div className="pict-products">
            <img className='pict-img-products' src={gokshuru} alt="Amla" />
          </div>
          <div className="desc-products">
            <div className="title-desc-products">
              <h1>{product5.title}</h1>
              <h3>{product5.utility}</h3>
              <span>{product5.description}</span>
                <span>
                {product5.ingridients}
                </span>
                <span>{product5.indications}</span>
                <span>
                    <ol>
                    {product5.references.map((reference) => (
                    <li key={reference.number}>{reference.number}. {reference.desc}</li>
                    ))}
                    </ol>
                </span>          
            </div>
          </div>
        </div>
        <div className="card-products">
          <div className="pict-products">
            <img className='pict-img-products' src={karela} alt="Amla" />
          </div>
          <div className="desc-products">
            <div className="title-desc-products">
              <h1>{product6.title}</h1>
              <h3>{product6.utility}</h3>
              <span>{product6.description}</span>
                <span>
                {product6.ingridients}
                </span>
                <span>{product6.indications}</span>
                <span>
                    <ol>
                    {product6.references.map((reference) => (
                    <li key={reference.number}>{reference.number}. {reference.desc}</li>
                    ))}
                    </ol>
                </span>          
            </div>
          </div>
        </div>
        <div className="card-products">
          <div className="pict-products">
            <img className='pict-img-products' src={lakhsuna} alt="Amla" />
          </div>
          <div className="desc-products">
            <div className="title-desc-products">
              <h1>{product7.title}</h1>
              <h3>{product7.utility}</h3>
              <span>{product7.description}</span>
                <span>
                {product7.ingridients}
                </span>
                <span>{product7.indications}</span>
                <span>
                    <ol>
                    {product7.references.map((reference) => (
                    <li key={reference.number}>{reference.number}. {reference.desc}</li>
                    ))}
                    </ol>
                </span>          
            </div>
          </div>
        </div>
        <div className="card-products">
          <div className="pict-products">
            <img className='pict-img-products' src={moringa} alt="Amla" />
          </div>
          <div className="desc-products">
            <div className="title-desc-products">
              <h1>{product8.title}</h1>
              <h3>{product8.utility}</h3>
              <span>{product8.description}</span>
                <span>
                {product8.ingridients}
                </span>
                <span>{product8.indications}</span>
                <span>
                    <ol>
                    {product8.references.map((reference) => (
                    <li key={reference.number}>{reference.number}. {reference.desc}</li>
                    ))}
                    </ol>
                </span>          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
