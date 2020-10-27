import React,{ useState, useEffect } from 'react';
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
import {addToCart} from '../../store/cart';
import {getRemoteProductData,reduceStockQuantity} from '../../store/actions'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }));
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));
const Products = props => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        props.selectCategory(event.target.textContent)
        setValue(newValue);
    };
    // console.log('props in product', props);
    // let selectedCategory = props.selectCategory;
    // function handleCategoryClick(e) {
    //     // console.log(e.target.textContent);
    //     // selectedCategory = e.target.textContent
    //     selectCategory(e.target.textContent)
    // }
    const handleAddToCart = (product) =>{
        console.log('Add To Cart Product ===== :',product);
        if(product.inStock > 0){
            props.addToCart(product);
            props.reduceStockQuantity(product,product._id);
            // props.getRemoteProductData();
        }else{
            console.log('Add To Cart Product in Stock ===== :',product.inStock);
            alert('No available Items left')
        }

    }
    useEffect(() => {
        console.log('I am Working {Products} !!!!!!!!!!!!!!!!');
        props.getRemoteProductData()
       },[]);
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
                                    <Button onClick={()=>{handleAddToCart(product)}} variant="contained" color="primary">Order</Button>
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
    selectedCategory:state.categories.selectedCategory
}
);

const mapDispatchToProps = { addToCart,getRemoteProductData,reduceStockQuantity };
// no need to add dispatch part (no actions)
export default connect(mapStateToProps,mapDispatchToProps)(Products);