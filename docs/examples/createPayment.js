'use strict';

var Gerencianet = require('gn-api-sdk-node');
var credentials = require('./credentials');

var options = {
  client_id: credentials.client_id,
  client_secret: credentials.client_secret,
  sandbox: true
}

var paymentInput = {
  charge_id: 223,
  payment: {
    credit_card: {
      parcels: 1,
      payment_token: '6426f3abd8688639c6772963669bbb8e0eb3c319',
      billing_address: {
        street: 'Street 3',
        number: 10,
        neighborhood: 'Bauxita',
        zipcode: '35400000',
        city: 'Ouro Preto',
        state: 'MG'
      }
    }
  }
}

var gerencianet = new Gerencianet(options);

gerencianet
  .createPayment(paymentInput)
  .then(function (payment) {
    console.log('Payment:', payment);
  })
  .catch(function (err) {
    console.log('Error:', err);
  });