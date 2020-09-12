'use strict';

const axios = require('axios');
const baseUrl = 'http://localhost:3000';

class AtmService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getAtms() {
    const response = await axios.get(this.baseUrl + '/api/atmapi');
    return response.data;
  }

  async getAtm(id) {
    try {
      const response = await axios.get(this.baseUrl + '/api/atmapi/' + id);
      return response.data;
    } catch (e) {
      return null;
    }
  }

  async createAtm(newAtm) {
    const response = await axios.post(this.baseUrl + '/api/atmapi', newAtm);
    return response.data;
  }

  async deleteAllAtms() {
    const response = await axios.delete(this.baseUrl + '/api/atmapi');
    return response.data;
  }


  async deleteOneAtm(id) {
    const response = await axios.delete(this.baseUrl + '/api/atmapi/' + id);
    return response.data;
  }

  async getUsers() {
    const response = await axios.get(this.baseUrl + '/api/users');
    return response.data;
  }

  async getUser(id) {
    try {
      const response = await axios.get(this.baseUrl + '/api/user/' + id);
      return response.data;
    } catch (e) {
      return null;
    }
  }

  async createUser(newUser) {
    const response = await axios.post(this.baseUrl + '/api/users', newUser);
    return response.data;
  }
}

module.exports = AtmService;