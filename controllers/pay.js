const User = require('../models/User');
const fetch = require('node-fetch');
const Product = require('../models/shoppingList')
exports.paying = (req, res, err) => {
  res.render('pay', {
      title: 'Pay',
  });
};

// exports.finish = (req, res, err) => {
//   var url = 'https://sandbox-apigw.koscom.co.kr/v2/market/stocks/{marketcode}/{issuecode}/price'.replace(/{marketcode}/g, encodeURIComponent('kospi')).replace(/{issuecode}/g, encodeURIComponent('005930'));
//   var queryParams = '?' +  encodeURIComponent('apikey') + '=' + encodeURIComponent('l7xx618837e117c34d3abfb3d56431eb1622');
//   const furl = url + queryParams;
//   fetch(furl).then(response=>{
//     if(!response.ok){
//       return;
//     }
//     return response.json()
//     .then(responseJSON=>{
//       const price = responseJSON.result.trdPrc;
//       return price
//     //   res.render('finish', {
//     //     title: 'Finish',
//     //     stockPrice: price,
//     // });

//     })
//     .catch((error) =>{
//       console.log(error)
//     })
//   });
// };

// exports.finishItem = (req, res, err) => {
//   var url = 'https://sandbox-apigw.koscom.co.kr/v2/market/stocks/{marketcode}/{issuecode}/price'.replace(/{marketcode}/g, encodeURIComponent('kospi')).replace(/{issuecode}/g, encodeURIComponent('005930'));
//   var queryParams = '?' + encodeURIComponent('apikey') + '=' + encodeURIComponent('l7xx618837e117c34d3abfb3d56431eb1622');
//   const furl = url + queryParams;
//   var price;
//   const fetch = require('node-fetch');
//   var user1;
//   var test;
//   var points = 0;
//   var num = 0;
//   var rem;

//   console.log("!!!!!!!!!!!!!!")

  // User.find({})
  //   .then((users) => {
  //     const datas = users;
  //     const jsonObject = JSON.stringify(datas)
  //     test = JSON.parse(jsonObject);
  //     user1 = test[0];
  //     points = user1.point;

  //     User.deleteMany({}, (err) => {
  //       if (err) console.log(err)
  //       else {
  //         var user = new User({
  //           email: test[0].email,
  //           password: test[0].password,
  //           point: points,
  //           stock: num,
  //         });
  //         console.log("use rem : ", rem);
  //         user.save((err) => {
  //           if (err) console.log(err)
  //           else{
  //             console.log('success')
  //             fetch(furl).then(response => {
  //               return response.json()
  //                 .then(responseJSON => {
  //                   price = responseJSON.result.trdPrc;
  //                   num = parseInt(points / price);
  //                   rem = points - (price * num);
  //                   console.log("rem : ", rem);
  //                   user.save({})
  //                   res.render('finish', {
  //                     title: 'Finish',
  //                     stockPrice: price,
  //                     userPoint: points,
  //                     num: num,
  //                     remind: rem,
  //                   });
  //                 })
  //                 .catch((error) => {
  //                   console.log(error)
  //                 })
  //             });
  //           } 
  //         })
  //       }
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })


  exports.finishItem = (req, res, err) => {
    var url = 'https://sandbox-apigw.koscom.co.kr/v2/market/stocks/{marketcode}/{issuecode}/price'.replace(/{marketcode}/g, encodeURIComponent('kospi')).replace(/{issuecode}/g, encodeURIComponent('005930'));
    var queryParams = '?' +  encodeURIComponent('apikey') + '=' + encodeURIComponent('l7xx618837e117c34d3abfb3d56431eb1622');
    const furl = url + queryParams;
    var price;
    const fetch = require('node-fetch');
    var user1;
    var test;
    var points=0;
    var num=0;
    var rem;
    // var user = new User({
    //   email: test[0].email,
    //   password: test[0].password,
    //   point: points,
    //   stock: num
    // });
    // user.save((err) => {
    //   if(err) console.log(err)
    //   else console.log('success')
    //   res.redirect('/')
    // })
    
    // User.find({})
    // .then((users)=>{
    //   console.log(users);
    // }).catch((error) =>{
    //   console.log(error)
    // })

    Product.findOne({id:req.params.id})
      .then((data) => {
          const abc = data;
          const info = JSON.parse(JSON.stringify(abc))
          //console.log("abc:",abc);
          User.find({})
          .then((users) => {
            console.log(users)
            // console.log(products.toString)
            const datas = users;
            const jsonObject = JSON.stringify(datas)
            test = JSON.parse(jsonObject);
            //console.log("point: " + test[0].point)
            user1=test[0];
            points=user1.point;
            //test[0].upate({email:test[0].email},{point:points, stock:num});
            // users.findOneAndUpdate({email:user1.email}), {$set:{point:points, stock:num}},function(err, doc){
            //   if(err){
            //       console.log("Something wrong when updating data!");
            //   }
          
            //   console.log(doc);}
            console.log(points)
          })
          .catch((err) => {
            console.log(err)
            //console.log('catch')
          })
          fetch(furl).then(response=>{
            if(!response.ok){
              return;
            }
            return response.json()
            .then(responseJSON=>{
              price = responseJSON.result.trdPrc;
              num=parseInt(points/price);
              rem=points-(price*num);
              console.log(num);
              //console.log(test[0].email);
              //User.update({email:test[0].email},{point: points,stock: num});
              res.render('finish', {
                title: 'Finish',
                stockPrice: price,
                userPoint:points,
                num:num,
                product: info,
                remind:rem,
            });
            })
            .catch((error) =>{
              console.log(error)
            })
          });
  
      })
  };


  // exports.finishItem = (req, res, err) => {
  //   var user1;
  //   var test;
  //   var points = 0;
  //   var num = 0;
  //   var rem;
  
  //   if (err) console.log(err)
  
  //   User.find({})
  //   .then((users) => {
  //     const datas = users;
  //     console.log("datas : ", users);
  //     const jsonObject = JSON.stringify(datas)
  //     test = JSON.parse(jsonObject);
  //     user1 = test[0];
  //     console.log("uesr1 : ", user1);
  //     points = user1.point;
      
  //     User.deleteMany({}, (err) => {
  //       if (err) console.log(err)
  //       else {
  //         var user = new User({
  //           email: test[0].email,
  //           password: test[0].password,
  //           point: points,
  //           stock: num,
  //         });
  //         console.log("use rem : ", rem);
  //         user.save((err) => {
  //           if (err) console.log(err)
  //           else{
  //             console.log('success')
  //             fetch(furl).then(response => {
  //               return response.json()
  //                 .then(responseJSON => {
  //                   price = responseJSON.result.trdPrc;
  //                   num = parseInt(points / price);
  //                   rem = points - (price * num);
  //                   console.log("rem : ", rem);
  //                   user.save({})
  //                   res.render('finish', {
  //                     title: 'Finish',
  //                     stockPrice: price,
  //                     userPoint: points,
  //                     num: num,
  //                     remind: rem,
  //                   });
  //                 })
  //                 .catch((error) => {
  //                   console.log(error)
  //                 })
  //             });
  //           } 
  //         })
  //       }
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })



  //   Product.findOne({id:req.params.id})
  //   .then((data) => {
  //     const abc = data;
  //     const info = JSON.parse(JSON.stringify(abc))
  
  //     var url = 'https://sandbox-apigw.koscom.co.kr/v2/market/stocks/{marketcode}/{issuecode}/price'.replace(/{marketcode}/g, encodeURIComponent('kospi')).replace(/{issuecode}/g, encodeURIComponent('005930'));
  //     var queryParams = '?' +  encodeURIComponent('apikey') + '=' + encodeURIComponent('l7xx618837e117c34d3abfb3d56431eb1622');
  //     const furl = url + queryParams;
  //     fetch(furl).then(response=>{
  //       if(!response.ok){
  //         return;
  //       }
  //       return response.json()
  //       .then(responseJSON=>{
  //         const price = responseJSON.result.trdPrc;
  //         res.render('finish', {
  //           title: 'Finish',
  //           product: info,
  //           stockPrice: price,
  //       });
    
  //       })
  //       .catch((error) =>{
  //         console.log(error)
  //       })
  //     });
  
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // };















// exports.finishItem = (req, res, err) => {
//   // var user1;
//   // var test;
//   // var points = 0;
//   // var num = 0;
//   // var rem;

//   if (err) console.log(err)

//   Product.findOne({id:req.params.id})
//   .then((data) => {
//     const abc = data;
//     const info = JSON.parse(JSON.stringify(abc))

//     var url = 'https://sandbox-apigw.koscom.co.kr/v2/market/stocks/{marketcode}/{issuecode}/price'.replace(/{marketcode}/g, encodeURIComponent('kospi')).replace(/{issuecode}/g, encodeURIComponent('005930'));
//     var queryParams = '?' +  encodeURIComponent('apikey') + '=' + encodeURIComponent('l7xx618837e117c34d3abfb3d56431eb1622');
//     const furl = url + queryParams;
//     // fetch(furl).then(response => {
//     //   return response.json()
//     //     .then(responseJSON => {
//     //       price = responseJSON.result.trdPrc;
//     //       num = parseInt(points / price);
//     //       rem = points - (price * num);
//     //       console.log("rem : ", rem);
//     //       user.save({})
//     //       res.render('finish', {
//     //         title: 'Finish',
//     //         stockPrice: price,
//     //         userPoint: points,
//     //         num: num,
//     //         remind: rem,
//     //       });
//     //     })
//     //     .catch((error) => {
//     //       console.log(error)
//     //     })
//     // });
//     fetch(furl).then(response=>{
//       if(!response.ok){
//         return;
//       }
//       return response.json()
//       .then(responseJSON=>{
//         const price = responseJSON.result.trdPrc;
//         res.render('finish', {
//           title: 'Finish',
//           product: info,
//           stockPrice: price,
//       });
  
//       })
//       .catch((error) =>{
//         console.log(error)
//       })
//     });

//     // res.render('finish', {
//     //   title:'Finish',
//     //   product: info,
//     //   stockPrice: this.getStockprice()
//     // })
//   })
//   .catch((error) => {
//     console.log(error)
//   })
// };