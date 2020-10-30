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
    console.log('My product details ptops', props.product);

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
            <div className="">
                <div style={{ display: 'flex' }}>
                    <div style={{ border: '1px solid black', width: 'fit-content', padding: '10px', margin: '10px' }}>
                        <h3 id='productName'>{props.product.name}</h3>
                        <img id='productImg' src={`${props.product.img}`} style={{ width: '15rem' }}></img>
                        <p>in stok : <strong>{props.product.inStock}</strong></p>
                        <p>price : <strong id='producPrice'>{props.product.price}</strong></p>
                        <Button onClick={() => { handleAddToCart(props.product) }} variant="contained" color="primary">Order</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
// we only care about state from the store, no actions needed
const mapStateToProps = state => (
    {
        product: state.productDtl.product
    }
);

const mapDispatchToProps = { addToCart, getProduct, putProduct };
// no need to add dispatch part (no actions)
export default connect(mapStateToProps, mapDispatchToProps)(ProductDtl);