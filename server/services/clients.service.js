const ClientModel = require("../models/clients.model");

const DEFAULT_LIMIT = 100;
const fetchAllClients = async (page = 0) => {
  try {
    let totalClients = await ClientModel.countDocuments({});
    let totalPages = Math.floor(totalClients / DEFAULT_LIMIT);
    const results = await ClientModel.find({})
      .limit(DEFAULT_LIMIT)
      .skip(DEFAULT_LIMIT * page);
    return { LastPage: totalPages, currentPage: +page, data: results };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const addNewClient = async (clientPayload) => {
  try {
    const client = new ClientModel(clientPayload);
    return await client.save();
  } catch (err) {
    throw err;
  }
};
const deleteClient = async (clientID) => {
  try {
    console.log(clientID);
    return await ClientModel.deleteOne({ id: clientID });
  } catch (err) {
    throw err;
  }
};

const filterClients = async (filterPayload) => {
  try {
    const field = filterPayload.field;
    const value = filterPayload.value;
    const searchPayload = {};
    searchPayload[field] = value;
    console.log(searchPayload);
    return await ClientModel.find(searchPayload);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  fetchAllClients,
  addNewClient,
  deleteClient,
  filterClients,
};
