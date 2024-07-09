import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { productListData } from '../Helper';
import './ProductBuy.css'
import { Carousel } from 'react-bootstrap';

const ProductBuyPage = () => {
    const [fullScreen , setFullScreen] = useState(false);
    const [sizeClicked , setSizeClicked] = useState('')
    const handleImageClick = ()=>{
        setFullScreen(!fullScreen)
    }

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    const findProductById = (productId) => {
        for (const category of productListData) {
            const product = category.items.find(item => item.id === productId);
            if (product) {
                return product;
            }
        }
        return null;
    };

    const product = findProductById(id);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className='checkout-container'>
            <div className='checkout-image'>    
            <Carousel data-bs-theme="dark" style={{
            width: fullScreen ? '100%' : '500px',
        }}
            
            >
                    {product.images.map((image, imageIdx) => (
                      <Carousel.Item key={imageIdx} >
                        <img
                          className="d-block"
                          src={image}
                          alt={`Slide ${imageIdx}`}
                          style={{ width:'100%'}}
                          onClick={handleImageClick}
                        />
                        </Carousel.Item>
                    ))}
                  </Carousel>
            </div>
            <div style={{
            display: fullScreen ? 'none' : '',
        }}
        className='checkout-details'
        >
            <h1 style={{fontWeight:'bolder'}}>{product.name}</h1>
            <p style={{}} className='line-th'>MRP: {product.mrp}</p>
            <p style={{fontSize:'30px' , fontWeight:'bolder'}}>Our Price: Rs. {product.price}</p>
            <p>{product.description}</p>
            <h3>Sizes Available</h3>
            <div className='checkout-sizes'>
            {product.size.map((size , index)=>(
                <div className={`checkout-sizes-number ${(sizeClicked==size)?'checkout-sizes-number-clicked':'' }`} onClick={()=>setSizeClicked(size)}>
                    {size}
                </div>
            ))}
            </div>
            <input type="number" name="quantity" id="quantity" style={{marginTop:'50px' , width:'50px'}} min="1" max="10" placeholder='1'/>
            </div>
        </div>
    );
};

export default ProductBuyPage;
