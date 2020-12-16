import React, { useState, useEffect } from 'react';
import globalContext from './globalContext';

const _cart = {
    items: [
    ],
    total: 0,
    subtotal: 0,
};

export default function AppContext(props) {
    const [cart, setCart] = useState(null)
    useEffect(() => {
        setCart(_cart)
    }, [])
    
    const addProductHandler = (product) => {
        let _cart = { ...cart };
        const index=_cart.items.findIndex(item => item.product.id === product.id);
        if ( index >= 0) {
                if (_cart.items[index].product.quantity > 0) {
                    _cart.items[index].product.quantity -= 1
                    _cart.items[index].quantity_to_buy++;
                    if(product.discount>0){
                        _cart.items[index].Total_product = _cart.items[index].quantity_to_buy * _cart.items[index].product.price* (1 - (product.discount / 100))
                    }
                    else{
                        _cart.items[index].Total_product = _cart.items[index].quantity_to_buy * _cart.items[index].product.price
                    }
                }
                else {
                    alert("no stock left for this product ");
                }
        }
        else {
            if(product.discount>0){
                _cart.items.push({ product, quantity_to_buy: 1, Total_product: product.price* (1 - (product.discount / 100)) });
            }
            else{
                _cart.items.push({ product, quantity_to_buy: 1, Total_product: product.price });
            }
            _cart.items[_cart.items.length - 1].product.quantity -= 1
        }
        _cart.total=0;
        _cart.items.forEach(item => {
            _cart.total += item.Total_product
        });
        _cart.subtotal=0;
        _cart.items.forEach(item => {
            _cart.subtotal += item.product.price*item.quantity_to_buy
        });
        console.log(_cart)
        setCart(_cart);
    }

    const deleteProductHandler = (_prod) => {
        let _cart = {...cart};
        const index=_cart.items.findIndex(item => item.product.id === _prod.product.id);
        _cart.items.splice(index,1);
        _cart.subtotal=_cart.subtotal-(_prod.product.price * _prod.quantity_to_buy)
        _cart.total = _cart.total - (_prod.Total_product * _prod.quantity_to_buy);
        setCart(_cart);
    }
    return (
        <globalContext.Provider value={{
            cart: cart,
            setCart: setCart,
            addProductHandler: addProductHandler,
            deleteProductHandler: deleteProductHandler
        }}>
            {props.children}
        </globalContext.Provider>
    )
}