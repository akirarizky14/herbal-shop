import React, { useState } from 'react';
import '../../../css/Products/Products.css';
import products from './products.json';
import amla from '../../../assets/Home/Home/amla.jpg';
import ashwaganda from '../../../assets/Home/Home/ashwaganda.jpg';
import arjuna from '../../../assets/Home/Home/arjuna.jpg';
import brahmi from '../../../assets/Home/Home/brahmi.jpg';
import giloy from '../../../assets/Home/Home/giloy.jpg';
import gokshuru from '../../../assets/Home/Home/gokshuru.jpg';
import karela from '../../../assets/Home/Home/karela.jpg';
import lakhsuna from '../../../assets/Home/Home/lakhsuna.jpg';
import moringa from '../../../assets/Home/Home/moringa.jpg';
import punarnava from '../../../assets/Home/Home/Punarnava.jpg';
import shatavari from '../../../assets/Home/Home/SHATAVARI.jpg';
import triphala from '../../../assets/Home/Home/triphala.jpg';
import turmeric from '../../../assets/Home/Home/Turmeric.jpg';
import tulsi from '../../../assets/Home/Home/TULSI.jpg';
import livosil from '../../../assets/Home/Home/LIVOSIL.png';
import shilajeet from '../../../assets/Home/Home/shilajeet.jpg';
import Cardproducts from './Cardproducts';

function Products() {
  const defaultProduct = products[0];
  const [selectedProduct, setSelectedProduct] = useState(defaultProduct);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  const getImageByProduct = (product) =>{
    switch (product.title) {
      case 'АМЛА':
        return amla;
      case 'ПОРОШОК АШВАГАНДЫ':
        return ashwaganda;
      case 'АРДЖУНА':
        return arjuna;
      case 'БРАХМИ':
        return brahmi;
      case 'ГИЛОЙ':
        return giloy;
      case 'ГОКШУРУ':
        return gokshuru;
      case 'КАРЕЛА':
        return karela;
      case 'ЛАХСУНА':
        return lakhsuna;
      case 'МОРИНГА':
        return moringa;
      case 'ПУНАРНАВА':
        return punarnava;
      case 'ШАТАВАРИ':
        return shatavari;
      case 'ТРИФАЛА':
        return triphala;
      case 'ПОРОШОК ТРИФАЛЫ':
        return triphala;
      case 'КУРКУМА':
        return turmeric;
      case 'ТУЛСИ':
        return tulsi;
      case 'ЛИВОСИЛ':
        return livosil;
      case 'ЭКО КАБЗ':
        return shilajeet;
      default:
        return amla;
    }
  }

  return (
    <div className='container-products'>
      <div className="wrapper-products">
        <div className="title-products">
          <h1>Наши Продукты</h1>
        </div>
        <div className="products">
          <div className="products-name">
          {products.map((product, index) => (
            <h1 className={`title-products-list ${selectedProduct === product ? 'selected' : ''}`} key={product.id} onClick={() => handleProductClick(product)} style={{ display: 'inline-block' }}>
              {product.title}{index !== products.length - 1 ? '' : ' '}
            </h1>
          ))}
          </div>
          <div className="products-desc">
            {selectedProduct && (
              <Cardproducts
                image={getImageByProduct(selectedProduct)}
                title={selectedProduct.title}
                utility={selectedProduct.utility}
                description={selectedProduct.description}
                ingredients={selectedProduct.ingredients}
                indications={selectedProduct.indications}
                references={selectedProduct.references}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
