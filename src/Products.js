import React, { useState, useEffect, useContext } from 'react'
import globalContext from './context/globalContext';
import {Link} from 'react-router-dom';
import axios from 'axios';


function Products() {
    const [products, setProducts] = useState(null);
    const context = useContext(globalContext)

    /* When component is mounted*/ 
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/getallproducts").then(res => {
            setProducts(res.data.products)
                }).catch(err => console.log(err));
        
    }, [])

    /* add product to cart variable in context */ 
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