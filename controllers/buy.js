const Product = require('../models/shoppingList')

exports.click = (req, res, err) => {
  console.log(err)
  res.render('buy', {
    title: 'Buy',
  });
};

exports.clickItem = (req, res, err) => {
  if (err) console.log(err)
  console.log('check id' + req.params.id)

  Product.findOne({id:req.params.id})
  .then((data) => {
    const abc = data;
    const info = JSON.parse(JSON.stringify(abc))

    console.log(info.explanation1)
    res.render('buy', {
      title:'Buy',
      product: info
    })
  })
  .catch((error) => {
    console.log(error)
  })
};

exports.payItem = (req, res, err) => {
  if (err) console.log(err)
  
  Product.findOne({id:req.params.id})
  .then((data) => {
    const abc = data;
    const info = JSON.parse(JSON.stringify(abc))

    console.log(info.explanation1)
    res.render('pay', {
      title:'Pay',
      id: req.params.id
    })
  })
  .catch((error) => {
    console.log(error)
  })
};



exports.showCart = (req, res, err) => {
  console.log(err)
  res.render('cart', {
    title: 'Cart',
  });
};