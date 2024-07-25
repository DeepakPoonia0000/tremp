import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { productListData } from '../Helper';
import './ProductBuy.css'
import { Carousel } from 'react-bootstrap';
import WhatsAppLink from '../WhatsAppLink';

const ProductBuyPage = () => {
    const [fullScreen, setFullScreen] = useState(false);
    const [sizeClicked, setSizeClicked] = useState('')
    const [quantity, setQuantity] = useState('1')
    const handleImageClick = () => {
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
        <>
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
                                    style={{ width: '100%' }}
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
                    <h1 style={{ fontWeight: 'bolder' }}>{product.name}</h1>
                    <p style={{}} className='line-th'>MRP: {product.mrp}</p>
                    <p style={{ fontSize: '30px', fontWeight: 'bolder' }}>Our Price: Rs. {product.price}</p>
                    <p>{product.description}</p>
                    <h3>Sizes Available</h3>
                    <div className='checkout-sizes'>
                        {product.size.map((size, index) => (
                            <div className={`checkout-sizes-number ${(sizeClicked === size) ? 'checkout-sizes-number-clicked' : ''}`} onClick={() => setSizeClicked(size)}>
                                {size}
                            </div>
                        ))}
                    </div>
                    <h4 style={{ marginTop: '50px' }}>Quantity</h4>
                    <select
                        name="quantity"
                        id="quantity"
                        style={{ width: '70px' }}
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    >
                        {[...Array(10).keys()].map(num => (
                            <option key={num + 1} value={num + 1}>{num + 1}</option>
                        ))}
                    </select>
                </div>
            </div>
            {sizeClicked !== '' && (
                <WhatsAppLink
                    message={[
                        product.name,
                        `\nRs. ${product.price * quantity} `,
                        `\nSize-${sizeClicked}`,
                        `\nQuantity-${quantity}`
                    ]}
                    amount={product.price * quantity}
                />
            )}
            </>
    );
};

export default ProductBuyPage;
