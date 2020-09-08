'use strict';

const assert = require('chai').assert;
const axios = require('axios');

suite('ATM API tests', function () {

  test('get atmapi', async function () {
    const response = await axios.get('http://localhost:3000/api/atmapi');
    console.log(response.data);
    const atmapi = response.data;
    assert.equal(12, atmapi.length);

    assert.equal(atmapi[0].name, 'Enniscorthy BTC 1');
    assert.equal(atmapi[0].category, 'Bitcoin only');
    assert.equal(atmapi[0].description, 'Yellow');

    assert.equal(atmapi[1].name, 'Enniscorthy BTC 2');
    assert.equal(atmapi[1].category, 'Multiple cryptocurrencies');
    assert.equal(atmapi[1].description, 'Green');

    assert.equal(atmapi[2].name, 'Enniscorthy BTC 3');
    assert.equal(atmapi[2].category, 'Bitcoin Only');
    assert.equal(atmapi[2].description, 'White');
  });
});