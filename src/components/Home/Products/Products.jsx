import React, { useState } from 'react';
import '../../../css/Products/Products.css';

// PRODUCTS
import products from './productsdata.jsx';
// header products
import HeaderProducts from './HeaderProducts';
import ContainsProducts from './ContainsProducts';
function Products() {
  return (
    <div className='container-products'>
      <div className="wrapper-products">
        <div className="header-products">
            <HeaderProducts/>
        </div>
        <div className="contains-products">
          {products.map((product, index) => (
            <ContainsProducts key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
