'use strict';

const assert = require('chai').assert;
const AtmService = require('./atm-service');
const fixtures = require('./fixtures.json');
const _ = require('lodash');

suite('User API tests', function () {

  let users = fixtures.users;
  let newUser = fixtures.newUser;

  const atmService = new AtmService(fixtures.atmService);

  setup(async function () {
    await atmService.deleteAllUsers();
  });

  teardown(async function () {
    await atmService.deleteAllUsers();
  });

  test('create a user', async function () {
    const returnedUser = await atmService.createUser(newUser);
    assert(_.some([returnedUser], newUser), 'returnedUser must be a superset of newUser');
    assert.isDefined(returnedUser._id);
  });

  test('get user', async function () {
    const u1 = await atmService.createUser(newUser);
    const u2 = await atmService.getUser(u1._id);
    assert.deepEqual(u1, u2);
  });

  test('get invalid user', async function () {
    const u1 = await atmService.getUser('1234');
    assert.isNull(u1);
    const u2 = await atmService.getUser('012345678901234567890123');
    assert.isNull(u2);
  });


  test('delete a user', async function () {
    let u = await atmService.createUser(newUser);
    assert(u._id != null);
    await atmService.deleteOneUser(u._id);
    u = await atmService.getUser(u._id);
    assert(u == null);
  });

  test('get all users', async function () {
    for (let u of users) {
      await atmService.createUser(u);
    }

    const allUsers = await atmService.getUsers();
    assert.equal(allUsers.length, users.length);
  });

  test('get users detail', async function () {
    for (let u of users) {
      await atmService.createUser(u);
    }

    const allUsers = await atmService.getUsers();
    for (var i = 0; i < users.length; i++) {
      assert(_.some([allUsers[i]], users[i]), 'returnedUser must be a superset of newUser');
    }
  });

  test('get all users empty', async function () {
    const allUsers = await atmService.getUsers();
    assert.equal(allUsers.length, 0);
  });

});