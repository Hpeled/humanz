const express = require("express");
const router = express.Router();
const clientService = require("../services/clients.service");

router.get("/clients", async (req, res) => {
  const { page = 0 } = req.query;
  try {
    const clients = await clientService.fetchAllClients(page);
    res.json(clients);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
});
router.post("/clients", async (req, res) => {
  try {
    const payload = req.body;
    const newClient = await clientService.addNewClient(payload);
    res.json(newClient);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
});
router.delete("/clients", async (req, res) => {
  try {
    const clientID = req.body.clientID;
    const result = await clientService.deleteClient(clientID);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
});
router.get("/clients/filter", async (req, res) => {
  try {
    const payload = {
      field: req.query.field,
      value: req.query.value,
    };
    const results = await clientService.filterClients(payload);
    res.json(results);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
});
module.exports = router;
