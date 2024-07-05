import React from 'react';
import Fotter from './nav-ann-fotr/Fotter';
import { productListData } from './Helper';



const AllProducts = () => {
        return (
          <>
          <div className="all-products">
            <div className="container">
            {productListData.map((category, index) => (
              <div key={index} className="category">
                <h2>{category.name}</h2>
                <div className="row d-flex mt-4 justify-content-center ">
                  {category.items.map((product, idx) => (
                    <div key={idx} className="product-card col-lg-3 col-md-4 col-6 pt-4">
                      <img src={product.image} alt={product.name} className="product-image px-2"/>
                      <h3>{product.name}</h3>
                      <p className=' mb-0'>{product.description}</p>
                      <p className="product-price m-0 p-0" style={{color:"wheat"}}><s>₹1209</s></p>
                      <p className="product-price m-0 p-0">₹{product.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          </div>
          <Fotter/>
          </>
        );
      };
      
      export default AllProducts;