'use strict';

const assert = require('chai').assert;
const AtmService = require('./atmservice');
const fixtures = require('./fixtures.json');
const _ = require('lodash');

suite('Atm API tests', function () {

  let atm = fixtures.atms;
  let newAtm = fixtures.newAtm;

  const atmService = new AtmService('http://localhost:3000');

  //  V3
  test('Create an atm', async function () {
    const returnedAtm = await atmService.createAtm(newAtm);
    assert(_.some([returnedAtm], newAtm),  'returnedAtm must be a superset of newAtm');
    assert.isDefined(returnedAtm._id);
  });
});

  //  V2
  // test('create a candidate', async function () {
  //   const returnedAtm = await atmService.createAtm(newAtm);
  //   assert.equal(returnedAtm, newAtm);
  //   assert.isDefined(returnedAtm._id);
  // });


  //  V1
  // test('create an atm', async function () {
  //   const returnedAtm = await atmService.createAtm(newAtm);
  //   assert.equal(returnedAtm.name, newAtm.name);
  //   assert.equal(returnedAtm.category, newAtm.category);
  //   assert.equal(returnedAtm.description, newAtm.description);
  //   assert.isDefined(returnedAtm._id);
  // });


  //  V0
// 'use strict';
//
// const assert = require('chai').assert;
// const axios = require('axios');
//
// suite('ATM API tests', function () {
//
//   test('get atmapi', async function () {
//     const response = await axios.get('http://localhost:3000/api/atmapi');
//     console.log(response.data);
//     const atmapi = response.data;
//     //assert.equal(12, atmapi.length);
//
//     assert.equal(atmapi[0].name, 'Enniscorthy BTC 1');
//     assert.equal(atmapi[0].category, 'Bitcoin only');
//     assert.equal(atmapi[0].description, 'Yellow');
//
//     assert.equal(atmapi[1].name, 'Enniscorthy BTC 2');
//     assert.equal(atmapi[1].category, 'Multiple cryptocurrencies');
//     assert.equal(atmapi[1].description, 'Green');
//
//     assert.equal(atmapi[2].name, 'Enniscorthy BTC 3');
//     assert.equal(atmapi[2].category, 'Bitcoin only');
//     assert.equal(atmapi[2].description, 'White');
//   });
//   test('get one atm', async function () {
//     let response = await axios.get('http://localhost:3000/api/atmapi');
//     const atmapi = response.data;
//     //assert.equal(12, atmapi.length);
//
//     const oneAtmUrl = 'http://localhost:3000/api/atmapi/' + atmapi[0]._id;
//     response = await axios.get(oneAtmUrl);
//     const oneAtmz = response.data;
//
//     assert.equal(oneAtmz.name, 'Enniscorthy BTC 1');
//     assert.equal(oneAtmz.category, 'Bitcoin only');
//     assert.equal(oneAtmz.description, 'Yellow');
//   });
//   test('create an atm', async function () {
//     const atmUrl = 'http://localhost:3000/api/atmapi';
//     const newAtm = {
//       name: 'Wexford Btc 1',
//       category: 'Bitcoin only',
//       description: 'Black',
//     };
//
//     const response = await axios.post(atmUrl, newAtm);
//     const returnedAtm = response.data;
//     assert.equal(201, response.status);
//
//     assert.equal(returnedAtm.name, 'Wexford Btc 1');
//     assert.equal(returnedAtm.category, 'Bitcoin only');
//     assert.equal(returnedAtm.description, 'Black');
//   });
// });