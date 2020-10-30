import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { selectCategory } from '../../store/products'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { left } from '@popperjs/core';
import Button from '@material-ui/core/Button';
import { addToCart } from '../../store/cart';
import { getProduct, putProduct } from '../../store/products'
import superagent from 'superagent';
import { reduceStockQuantity } from '../../store/actions'


const ProductDtl = props => {
    console.log('My product ptops', props);

    // function reduceStockQuantity(body) {
    //     let productsApi = 'http://api-testtt.herokuapp.com/api/v1/products';
    //         let api =`${productsApi}/${body._id}`
    //         // return a fucntion that will call superagent API
    //         console.log(`---------------${body._id}`,body);
    //         let myBody = {
    //         _id: body._id,
    //          name: body.name, 
    //          category: body.category, 
    //          price: body.price, 
    //          inStock: body.inStock - 1 }

    //         // let myBody = body
    //         // myBody.inStock = 10;
    //         superagent.put(api)
    //         .send(myBody)
    //         .then(data=> {
    //             // call my action after getting the API response.
    //             console.log('====Updated===',data.body);
    //             props.putProduct(body._id);
    //         });
    //     }

    const handleAddToCart = async (product) => {
        console.log('Add To Cart Product ===== :', product);
        if (product.inStock > 0) {
            props.addToCart(product);
            await reduceStockQuantity(product)
            props.putProduct(product._id);
            // props.getRemoteProductData();
        } else {
            console.log('Add To Cart Product in Stock ===== :', product.inStock);
            alert('No available Items left')
        }

    }
    return (
        <>
            <div className={classes.root}>
                <div style={{ display: 'flex' }}>
                    {props.products.map((product, idx) => {
                        if (product.category == props.selectedCategory) {
                            console.log('>>>>>>props.selectedCategory>>>>>>>', props.selectedCategory);
                            return (
                                <div key={idx} style={{ border: '1px solid black', width: 'fit-content', padding: '10px', margin: '10px' }}>
                                    <h3 id='productName'>{product.name}</h3>
                                    <img id='productImg' src={`${product.img}`} style={{ width: '15rem' }}></img>
                                    <p>in stok : <strong>{product.inStock}</strong></p>
                                    <p>price : <strong id='producPrice'>{product.price}</strong></p>
                                    <Button onClick={() => { handleAddToCart(product) }} variant="contained" color="primary">Order</Button>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </>
    )
}
// we only care about state from the store, no actions needed
const mapStateToProps = state => (
    {
        products: state.products.products,
        selectedCategory: state.categories.selectedCategory
    }
);

const mapDispatchToProps = { addToCart, getProduct, putProduct };
// no need to add dispatch part (no actions)
export default connect(mapStateToProps, mapDispatchToProps)(ProductDtl);