const fetch = require('node-fetch');
const Product = require('../models/shoppingList')
const User = require('../models/User')
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

exports.paying = (req, res, err) => {
  res.render('pay', {
    title: 'Pay',
  });
};

// function getStock() {
//   var url = 'https://sandbox-apigw.koscom.co.kr/v2/market/stocks/{marketcode}/{issuecode}/price'.replace(/{marketcode}/g, encodeURIComponent('kospi')).replace(/{issuecode}/g, encodeURIComponent('005930'));
//   var queryParams = '?' + encodeURIComponent('apikey') + '=' + encodeURIComponent('l7xx618837e117c34d3abfb3d56431eb1622');
//   const furl = url + queryParams;
//   const price = 0;

//   fetch(furl).then(response => {
//     if (!response.ok) {
//       return;
//     }
//     return response.json()
//       .then(responseJSON => {
//         price = responseJSON.result.trdPrc;
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   })
//   return price;
// }

function getStock() {
  const url = 'https://sandbox-apigw.koscom.co.kr/v2/market/stocks/{marketcode}/{issuecode}/price'.replace(/{marketcode}/g, encodeURIComponent('kospi')).replace(/{issuecode}/g, encodeURIComponent('005930'))
  var queryParams = '?' + encodeURIComponent('apikey') + '=' + encodeURIComponent('l7xx618837e117c34d3abfb3d56431eb1622');
  const furl = url + queryParams;

  const xhr = new XMLHttpRequest();
  xhr.onload = () => {
    if(xhr.status === 200 || xhr.status === 201){
      console.log(" here" + xhr.responseText)
    }
  }
  xhr.onerror = () => {
    console.error(" error: " + xhr.responseText)
  }
  xhr.open('GET', furl)
  xhr.send
  // var url = 'https://sandbox-apigw.koscom.co.kr/v2/market/stocks/{marketcode}/{issuecode}/price'.replace(/{marketcode}/g, encodeURIComponent('kospi')).replace(/{issuecode}/g, encodeURIComponent('005930'));
  // var queryParams = '?' + encodeURIComponent('apikey') + '=' + encodeURIComponent('l7xx618837e117c34d3abfb3d56431eb1622');
  // const furl = url + queryParams;
  // var price = 0;

  // fetch(furl).then(response => {
  //   if (!response.ok) {
  //     return;
  //   }
  //   //console.log("here")
  //   return response.json()
  //     .then(responseJSON => {
  //       price = responseJSON.result.trdPrc;
  //       console.log("price res : ", price);

  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // })
  // console.log("price : ", price);
  // return price;
}

  


exports.finishItem = async (req, res, err) => {

  if (err) console.log(err)

  try {
    // const user = await User.findOne({})
    const stock = 57200;
    const product = await Product.findOne({ id: req.params.id })
    const user = await User.findOne({})
    const acpoint = user.point + product.point
    const rempoint = acpoint - (parseInt(acpoint/stock) * stock)
    const num = parseInt(acpoint/stock)
    const sotckcal = user.stock + num
    const pointUp = await User.update({}, {point:rempoint, stock:sotckcal})

    
    res.render('finish', {
      title: 'Finish',
      product: product,
      acupoint: acpoint,
      rempoint: rempoint,
      stockNum: num,
      stockPrice: stock,
    });
  } catch (err) {
    console.log(err)
  }

  //  var url = 'https://sandbox-apigw.koscom.co.kr/v2/market/stocks/{marketcode}/{issuecode}/price'.replace(/{marketcode}/g, encodeURIComponent('kospi')).replace(/{issuecode}/g, encodeURIComponent('005930'));
  // var queryParams = '?' + encodeURIComponent('apikey') + '=' + encodeURIComponent('l7xx618837e117c34d3abfb3d56431eb1622');
  // const furl = url + queryParams;

  // fetch(furl).then(response => {
  //   if (!response.ok) {
  //     return;
  //   }
  //   //console.log("here")
  //   return response.json()
  //     .then(responseJSON => {
  //       const stockPrice = responseJSON.result.trdPrc;

  //       try {
  //           const product = await Product.findOne({ id: req.params.id })
  //           const pointUp = await User.update({}, {point:88884})
  //           const user = await User.findOne({})
  //           const rempoint = user.point - stockPrice * 1

  //           res.render('finish', {
  //             title: 'Finish',
  //             product: product,
  //             acupoint: user.point,
  //             stockPrice: stockPrice,
  //             rempoint: 52
  //           });
  //         } catch (err) {
  //           console.log(err)
  //         }

  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // })
  // console.log("price : ", price);
  




  
};