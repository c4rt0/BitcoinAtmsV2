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
    try {
      const response = await axios.get(this.baseUrl + '/api/users');
      return response.data;
    } catch (e) {
      return null;
    }
  }

  async getUser(id) {
    try {
      const response = await axios.get(this.baseUrl + '/api/users/' + id);
      return response.data;
    } catch (e) {
      return null;
    }
  }

  async createUser(newUser) {
    try {
      const response = await axios.post(this.baseUrl + '/api/users', newUser);
      return response.data;
    } catch (e) {
      return null;
    }
  }

  async deleteAllUsers() {
    try {
      const response = await axios.delete(this.baseUrl + '/api/users');
      return response.data;
    } catch (e) {
      return null;
    }
  }

  async deleteOneUser(id) {
    try {
      const response = await axios.delete(this.baseUrl + '/api/users/' + id);
      return response.data;
    } catch (e) {
      return null;
    }
  }
}

module.exports = AtmService;