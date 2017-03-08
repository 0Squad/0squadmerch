'use strict';

const config = require('../config');
const store = require('../store');

const getProducts = function (){
  return $.ajax({
    url: config.apiOrigin + '/products',
    method: 'GET',
  });
};

// const signIn = function (data){
//   return $.ajax({
//     url: config.apiOrigin + '/sign-in',
//     method: 'POST',
//     data,
//   });
// };
//
// const changePassword = function (data) {
//   return $.ajax({
//     url: `${config.apiOrigin}/change-password/${store.user.id}`,
//     method: 'PATCH',
//     headers: {
//       Authorization: `Token token=${store.user.token}`,
//     },
//     data,
//   });
// };
//
// const signOut = function () {
//   return $.ajax({
//     url: `${config.apiOrigin}/sign-out/${store.user.id}`,
//     method: 'DELETE',
//     headers: {
//       Authorization: `Token token=${store.user.token}`,
//     },
//   });
// };



module.exports = {
  getProducts,
  // signIn,
  // changePassword,
  // signOut,
};