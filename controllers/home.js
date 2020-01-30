const User = require('../models/User');
const Product = require('../models/shoppingList')

/**
 * GET /
 * Home page.
 */

exports.index = (req, res) => {

  Product.find({})
  .then((products) => {
    // console.log(products)
    // console.log(products.toString)
    const datas = products;
    const jsonObject = JSON.stringify(datas)
    const test = JSON.parse(jsonObject);
    //console.log(" price: " + test[0].price)
    res.render('home', {
      title: 'Home',
      products : test
    });
    
  })
  .catch((err) => {
    console.log(err)
  })


};

exports.dbtest = (req, res) => {

};


