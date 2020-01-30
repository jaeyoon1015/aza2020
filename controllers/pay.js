
exports.paying = (req, res, err) => {
  res.render('pay', {
      title: 'Pay',
  });
};
exports.finish = (req, res, err) => {
  var url = 'https://sandbox-apigw.koscom.co.kr/v2/market/stocks/{marketcode}/{issuecode}/price'.replace(/{marketcode}/g, encodeURIComponent('kospi')).replace(/{issuecode}/g, encodeURIComponent('005930'));
  var queryParams = '?' +  encodeURIComponent('apikey') + '=' + encodeURIComponent('l7xx618837e117c34d3abfb3d56431eb1622');
  const furl = url + queryParams;
  const fetch = require('node-fetch');
  fetch(furl).then(response=>{
    if(!response.ok){
      return;
    }
    return response.json()
    .then(responseJSON=>{
      const price = responseJSON.result.trdPrc;
      res.render('finish', {
        title: 'Finish',
        stockPrice: price,
    });
    })
    .catch((error) =>{
      console.log(error)
    })
  });
};