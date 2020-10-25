import React from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../store/votes'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { left } from '@popperjs/core';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

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

const Status = props => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        props.selectCategory(event.target.textContent)
        setValue(newValue);
    };

    console.log('----', props);
    // let selectedCategory = props.selectCategory;
    // function handleCategoryClick(e) {
    //     // console.log(e.target.textContent);
    //     // selectedCategory = e.target.textContent
    //     selectCategory(e.target.textContent)
    // }
    return (
        <>
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        {props.categories.map((category, idx) => {
                            return <Tab key={idx} label={category} {...a11yProps(idx)} />
                        })}

                        {/* <Tab label="Item Two" {...a11yProps(1)} /> */}
                        {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
                    </Tabs>
                </AppBar>
                <div style={{ display: 'flex'}}>
                {props.products.map((product, idx) => {
                    if (product.cat == props.slsectedCat) {
                        console.log('>>>>>>>>>>>>>', idx);

                        return (
                            <div key={idx} style={{ border:'1px solid black',width:'fit-content',padding:'10px',margin:'10px'}}>
                                <h3>{product.name}</h3>
                                <img src={`${product.img}`} style={{ width: '15rem'}}></img>
                        <p>in stok : {product.inStok}</p>
                        <p>price : {product.price}</p>
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
const mapStateToProps = state => ({
    categories: state.votes.categories,
    products: state.votes.products,
    slsectedCat: state.votes.selectedCategory
});

const mapDispatchToProps = { selectCategory };

// no need to add dispatch part (no actions)
export default connect(mapStateToProps, mapDispatchToProps)(Status);

