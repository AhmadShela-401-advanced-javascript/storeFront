let initalState = {
    products : [
        {name: 'chooclate cake', price: 10, cat:'cake',img:'https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Choc-Fudge-Cake-b2d1909.jpg?quality=90&resize=768%2C574',inStok:'5'},
        {name: 'cheese cake', price: 20, cat:'cake',img:'https://www.onceuponachef.com/images/2017/12/NY-Cheesecake.jpg',inStok:'5'},
        {name: 'premume cake', price: 30, cat:'cake',img:'https://midnightcake.com/Attachment/PackMst/Pack-947-1-260118.jpg',inStok:'20'},
        {name: 'pepci', price: 40,cat:'drinks',img:'https://www.pepsi.com/en-us/uploads/images/nfl2020_cans.png',inStok:'3'},
        {name: 'seven', price: 50,cat:'drinks',img:'https://media.officedepot.com/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,h_1665,q_auto,w_1250/c_pad,h_1665,w_1250/v1/products/208255/208255_p?pgw=1&pgwact=1',inStok:'2'},
        {name: 'mansaf', price: 60,cat:'food',img:'https://alchetron.com/cdn/mansaf-dee1212c-669a-4486-9430-57851ca8743-resize-750.jpeg',inStok:'0'},
        {name: 'pizza', price: 70,cat:'food',img:'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1-500x500.jpg',inStok:'1'}
    ]
};
// reducer
export default (state = initalState) => {
    // update the state based on an action
    let products = state.products;
    console.log('products',products);
    return {products};
}