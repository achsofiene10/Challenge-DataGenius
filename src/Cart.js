import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import globalContext from './context/globalContext';

function Cart() {
    const context = useContext(globalContext);
    
    const deleteProduct=(product)=>{
        context.deleteProductHandler(product);
    }

    return (
        <div>
            <div className="cart-box-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="table-main table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Images</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                            {
                                context.cart && context.cart.items.map((item,index)=>(
                                    <tr key={index}>
                                    <td className="thumbnail-img">
                                        <a href="# ">
                                            <img className="img-fluid" src={item.product.image} alt="description" />
                                        </a>
                                    </td>
                                    <td className="name-pr">
                                        <a href="# ">
                                            {item.product.name}
                                    </a>
                                    </td>
                                    <td className="price-pr">
                                        <p>{item.product.discount >0 ? (item.product.price* (1 - (item.product.discount / 100))).toFixed(1) : item.product.price }$</p>
                                    </td>
                                    <td className="quantity-box">  { item.product.offer && item.quantity_to_buy>=2 ? <p> {item.quantity_to_buy} + {item.quantity_to_buy/2} free </p> : <p> {item.quantity_to_buy}</p>  }</td>
                                    <td className="total-pr">
                                        <p>{item.Total_product.toFixed(1)}$</p>  
                                    </td>
                                    <td className="remove-pr">
                                        <Link to="#"onClick={()=>{deleteProduct(item)}}>
                                            <i className="fas fa-times" />
                                        </Link>
                                    </td>
                                </tr>
                                ))
                            }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row my-5">
                        <div className="col-lg-8 col-sm-12" />
                        <div className="col-lg-4 col-sm-12">
                            <div className="order-box">
                                <h3>Order summary</h3>
                                <div className="d-flex">
                                    <h4>Sub Total</h4>
                                    <div className="ml-auto font-weight-bold"> {context.cart && context.cart.subtotal ? context.cart.subtotal.toFixed(1) : 0 }$ </div>
                                </div>
                                <div className="d-flex">
                                    <h4>Discount</h4>
                                    <div className="ml-auto font-weight-bold"> {context.cart && context.cart.subtotal ? (context.cart.subtotal-context.cart.total).toFixed(1) : 0 }$ </div>
                                </div>
                               
                                <hr />
                                <div className="d-flex gr-total">
                                    <h5>Grand Total</h5>
                                    <div className="ml-auto h5"> {context.cart && context.cart.total ? context.cart.total.toFixed(1) : 0 }$ </div>
                                </div>
                                <hr /> </div>
                        </div>
                        <div className="col-12 d-flex shopping-box"><a href="checkout.html" className="ml-auto btn hvr-hover">Checkout</a> </div>
                    </div>
                </div>
            </div>
            {/* End Cart */}

        </div>
    )
}

export default Cart;