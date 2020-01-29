
exports.click = (req, res, err) => {
    console.log(err)
    res.render('buy', {
        title: 'Buy',
    });
  };

  exports.showCart = (req, res, err) => {
    console.log(err)
    res.render('cart', {
        title: 'Cart',
    });
  };