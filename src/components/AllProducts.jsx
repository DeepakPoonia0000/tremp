import React from 'react';
import { productListData } from './Helper';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const AllProducts = () => {
  const navigate = useNavigate();

    const pageNavig = (productId) => {
      navigate(`/checkout?id=${productId}`);
    };

        return (
          <>
          <div className="all-products">
            <div className="container">
              <h2>All Products</h2>
              
              {productListData.map((category, index) => (
            category.items
              .filter(product => product.price !== 0)
              .map((product, idx) => (
                <div className="col-lg-3 col-md-4 col-sm-6 pt-4" key={idx}>
                  <Carousel data-bs-theme="dark" onClick={()=> pageNavig(product.id)}>
                    {product.images.map((image, imageIdx) => (
                      <Carousel.Item key={imageIdx}>
                        <img
                          className="d-block w-100"
                          src={image}
                          alt={`Slide ${imageIdx}`}
                          style={{ height: "300px" }}
                        />
                        </Carousel.Item>
                    ))}
                  </Carousel>
                  <h5>{product.name}</h5>
                  <p>{product.description}</p>
                  <p className="fs-7 m-0 p-0 mt-2 line-th">{product.mrp}</p>
                  <p className="fs-5 m-0 p-0 mt-3">Rs. {product.price}</p>
                  <p className="fs-6 fw-semibold m-0 p-0">{product.description}</p>
                </div>
              ))
          ))}
          </div>
          </div>
          
          </>
        );
      };
      
      export default AllProducts;