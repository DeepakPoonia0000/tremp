import React from "react";
import { productListData } from "../Helper";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Men = ({ selectedDivision }) => {

    const navigate = useNavigate();
    

    const pageNavig = (productId) => {
      navigate(`/checkout?id=${productId}`);
    };
    return (

    <div className="container text-center pb-5">
      <h2 className=" men_text pt-4 pt-sm-5 ">Mens Clothing</h2>
      <div className="row  justify-content-center w-100 flex-lg-row">
        {(selectedDivision!=='')?
          productListData.map((category, index) => (
            category.items
              .filter(product => product.category === "men" && product.division === selectedDivision)
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
                  <p className="fs-7 m-0 p-0 mt-2" style={{ textDecoration: "line-through" }}>{product.mrp}</p>
                  <p className="fs-5 m-0 p-0 mt-3">Rs. {product.price}</p>
                  <p className="fs-6 fw-semibold m-0 p-0">{product.description}</p>
                </div>
              ))
          )):


          productListData.map((category, index) => (
            category.items
              .filter(product => product.category === "men")
              .map((product, idx) => (
                <div className="col-lg-3 col-md-4 col-sm-6 pt-4" key={idx}>
                  <Carousel data-bs-theme="dark">
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
                  {/* <h5>{product.name}</h5> */}
                  <p>{product.description}</p>
                  <p className="fs-7 m-0 p-0 mt-2" style={{ textDecoration: "line-through" }}>Mrp {product.mrp}</p>
                  <p className="fs-5 m-0 p-0 mt-3">Our Price  {product.price}</p>
                  <p className="fs-6 fw-semibold m-0 p-0">{product.description}</p>
                </div>
              ))
          ))
        }
      </div>

    </div>


  );
};

export default Men;
