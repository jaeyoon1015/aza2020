const User = require('../models/User');
const Product = require('../models/shoppingList')

/**
 * GET /
 * Home page.
 */

exports.index = (req, res) => {

  //   shoppingList.insert({ id:'1', image:'1.jpg', price: 1000, explanation1: 'hi',explanation2: 'ho', point: 100}).then(function(results) {
  //     // console.log('== Resolved\n', results);
  //     console.log('Promise Based Insert Result : ', results);
  //  }, function(err) {
  //     console.log('== Rejected\n', err);      
  //  });

  //   shoppingList.find().toArray(function (err, docs) {
  //     if(err) console.log(err + " home.js ");
  //     console.log('docs: ' + docs);
  //  });

  Product.find({})
  .then((products) => {
    console.log(products)
    console.log(products.toString)
    const datas = products;
    const jsonObject = JSON.stringify(datas)
    const test = JSON.parse(jsonObject);
    //console.log(" price: " + test[0].price)
    res.render('home', {
      title: 'Home',
      products : jsonObject
    });
    
  })
  .catch((err) => {
    console.log(err)
  })


};

exports.dbtest = (req, res) => {


  // User.find({})
  //   .then((users) => {
  //     console.log(users)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })

  Product.find({})
  .then((products) => {
    console.log(products)
    console.log(products.toString)
    const datas = products;
    const jsonObject = JSON.stringify(datas)
    const test = JSON.parse(jsonObject);
    console.log(" price: " + test[0].price)
    
  })
  .catch((err) => {
    console.log(err)
  })

  res.render('home', {
    title: 'Home'
  });
};


