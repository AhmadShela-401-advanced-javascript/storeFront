import React, { useState, useEffect }  from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../../store/categories';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { left } from '@popperjs/core';
import Button from '@material-ui/core/Button';
import { getRemoteData } from '../../store/actions'

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

const Status = props => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        console.log('event.target.textContent>>>',event.target);
        // props.selectCategory(event.target.textContent)
        setValue(newValue);
    };

    useEffect(() => {
        console.log('I am Working !!!!!!!!!!!!!!!!');
        props.getRemoteData()
        props.selectCategory()
       },[]);
    //    console.log("props ====> ", props)
    return (
        <>
            <div className={classes.root}>
                <AppBar position="static" style={{ marginTop: '65px' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        {props.categories.map((category, idx) => {
                            return <Tab onClick={()=>{props.selectCategory(category.name)}} key={idx} label={category.display_name} {...a11yProps(idx)} />
                        })}
                    </Tabs>
                </AppBar>
            </div>
        </>
    )
}
// we only care about state from the store, no actions needed
const mapStateToProps = state => ({
    categories: state.categories.categories,
});
const mapDispatchToProps = { selectCategory,getRemoteData };
// no need to add dispatch part (no actions)
export default connect(mapStateToProps, mapDispatchToProps)(Status);