'use strict';

const assert = require('chai').assert;
const AtmService = require('./atm-service');
const fixtures = require('./fixtures.json');
const _ = require('lodash');


suite('Atm API tests', function () {

  let atm = fixtures.atms;
  let newAtm = fixtures.newAtm;

  const atmService = new AtmService('http://localhost:3000');

  setup(async function () {
    await atmService.deleteAllAtms();
  });

  teardown(async function () {
    await atmService.deleteAllAtms();
  });

  test('Create an Atm', async function () {
    const returnedAtm = await atmService.createAtm(newAtm);
    assert(_.some([returnedAtm], newAtm), 'returnedAtm must be a superset of newAtm');
    assert.isDefined(returnedAtm._id);
  });

  test('Get atm', async function () {
    const c1 = await atmService.createAtm(newAtm);
    const c2 = await atmService.getAtm(c1._id);
    assert.deepEqual(c1, c2);
  });

  test('Get invalid atm', async function () {
    const c1 = await atmService.getAtm('1234');
    assert.isNull(c1);
    const c2 = await atmService.getAtm('012345678901234567890123');
    assert.isNull(c2);
  });

  test('Get all atms', async function () {
    for (let c of atm) {
      await atmService.createAtm(c);
    }

    const allAtms = await atmService.getAtms();
    assert.equal(allAtms.length, atm.length);
  });

  test('Get Atm detail', async function () {
    for (let c of atm) {
      await atmService.createAtm(c);
    }

    const allAtms = await atmService.getAtms();
    for (var i = 0; i < atm.length; i++) {
      assert(_.some([allAtms[i]], atm[i]), 'returnedAtm must be a superset of newAtm');
    }
  });

  test('Get all Atms empty', async function () {
    const allAtms = await atmService.getAtms();
    assert.equal(allAtms.length, 0);
  });

  test('Delete an Atm', async function () {
    let c = await atmService.createAtm(newAtm);
    assert(c._id != null);
    await atmService.deleteOneAtm(c._id);
    c = await atmService.getAtm(c._id);
    assert(c == null);
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