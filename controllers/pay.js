
exports.paying = (req, res, err) => {
    res.render('pay', {
        title: 'Pay',
    });
  };

  exports.finish = (req, res, err) => {
    res.render('finish', {
        title: 'Finish',
    });
  };