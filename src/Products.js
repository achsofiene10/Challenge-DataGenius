import React, { useState, useEffect, useContext } from 'react'
import globalContext from './context/globalContext';
import {Link} from 'react-router-dom';

const _productsData = [
    { id: 1, name: "Fruit1", description: "description1", price: 12, quantity: 12, image: "images/img-pro-01.jpg", discount: 10, offer: false },
    { id: 2, name: "Fruit2", description: "description1", price: 15, quantity: 10, image: "images/img-pro-02.jpg", offer: true, discount: 10 },
    { id: 3, name: "Vegetable1", description: "description1", price: 17, quantity: 10, image: "images/img-pro-03.jpg", offer: false, discount: 20 }
];

function Products() {
    const [products, setProducts] = useState(null);
    const context = useContext(globalContext)

    useEffect(() => {
        setProducts(_productsData)
    }, [])
    const addProduct = (product) => {
        context.addProductHandler(product);
    }
    return (
        <div>
            <div className="products-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-all text-center">
                                <h1>Fruits &amp; Vegetables</h1>
                            </div>
                        </div>
                    </div>

                    <div className="row special-list">
                        {
                            products && products.map(product => (
                                <div key={product.id} className="col-lg-3 col-md-6 special-grid best-seller">
                                    <div className="products-single fix">
                                        <div className="box-img-hover">
                                            <div className="type-lb">
                                                {product.offer && <p className="sale">2 products + 1 free</p>}
                                                {product.discount > 0 && <p className="sale">{product.discount}%</p>}
                                            </div>
                                            <img src={product.image} className="img-fluid" alt="description" />
                                            <div className="mask-icon">
                                                <Link to="#" className="cart" onClick={() => { addProduct(product) }}>Add to Cart</Link>
                                            </div>
                                        </div>
                                        <div className="why-text">
                                            <h4>{product.name}</h4>
                                            {product.discount > 0 ? <h5><s>{product.price} $</s> {(product.price * (1 - (product.discount / 100))).toFixed(1)} $ </h5> : <h5>{product.price} $ </h5>  }
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;