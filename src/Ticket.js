import html2canvas from "html2canvas";
import pdfMake from "pdfmake/build/pdfmake";
import React, { useContext } from 'react';
import globalContext from './context/globalContext';
import './Ticket.css';
import axios from 'axios';

/* Print the ticket and send it to Backend to save a ticket pdf file*/

function printToPdf() {
    html2canvas(document.getElementById("print_to_pdf")).then(canvas => {
        var data = canvas.toDataURL();
        var pdfExportSetting = {
            content: [
                {
                    image: data,
                    width: 500
                }
            ]
        };
        pdfMake.createPdf(pdfExportSetting).print();
        const pdfDocGenerator = pdfMake.createPdf(pdfExportSetting);
        pdfDocGenerator.getBlob((blob) => {
           let formdata= new FormData();
           formdata.append('ticket', blob);
           axios.post("http://127.0.0.1:8000/addticket",formdata)
        });
    });
};



function Ticket() {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const context = useContext(globalContext);
    return (
        <span>
            <table className="body-wrap-ticket" >
                <tbody><tr>
                    <td />
                    <td className="container-ticket" width={600} >
                        <div className="content-ticket">
                            <table className="main-ticket" width="100%" cellPadding={0} cellSpacing={0}>
                                <tbody id="print_to_pdf"><tr>
                                    <td className="content-wrap-ticket aligncenter">
                                        <table width="100%" cellPadding={0} cellSpacing={0}>
                                            <tbody><tr>
                                                <td className="content-block-ticket" align="center">
                                                    <h2>DataGenius challenge ticket</h2>
                                                </td>
                                            </tr>
                                                <tr>
                                                    <td className="content-block-ticket">
                                                        <table className="invoice">
                                                            <tbody><tr>
                                                                <td>{date}-{time} </td>
                                                            </tr>
                                                                <tr>
                                                                    <td>
                                                                        {context.cart && context.cart.items.map((item, index) =>
                                                                            <Item element={item} key={index} ></Item>)}
                                                                        <div align="right">
                                                                            Subtotal   $ {context.cart && context.cart.subtotal ? context.cart.subtotal.toFixed(1) : 0}</div>
                                                                        <div align="right">
                                                                            Discount   $ {context.cart && context.cart.subtotal ? (context.cart.subtotal - context.cart.total).toFixed(1) : 0}</div>
                                                                        <div align="right">
                                                                            Total   $ {context.cart && context.cart.total ? context.cart.total.toFixed(1) : 0}</div>
                                                                    </td>
                                                                </tr>
                                                            </tbody></table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center" className="content-block-ticket">
                                                        <a onClick={() => printToPdf()} href="# "><u>Print ticket</u></a>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                    </td>
                                </tr>
                                </tbody></table>
                        </div>
                    </td>
                </tr>
                </tbody></table>
        </span>
    );
}

/*Component Item to render all product details in the ticket*/ 
const Item = (props) => {
    return (
        <table className="invoice-items" cellPadding={0} cellSpacing={0}>
            <tbody>
                {props.element.product.discount > 0 ?
                    <tr>
                        <td>{props.element.quantity_to_buy} X {props.element.product.name} <br /> Discount : {props.element.product.discount}%    </td>
                        <td className="alignright-ticket"><s>$ {props.element.product.price * props.element.quantity_to_buy}</s><br /> $ {props.element.Total_product}</td></tr>
                    :
                    <tr>
                        <td>{props.element.quantity_to_buy} X {props.element.product.name} </td>
                        <td className="alignright-ticket">$ {props.element.product.price * props.element.quantity_to_buy}</td> </tr>}
                {props.element.product.offer && props.element.quantity_to_buy >= 2 ? <p> + {Math.trunc(props.element.quantity_to_buy / 2)} for free </p> : null}
            </tbody></table>
    )
}

export default Ticket;
