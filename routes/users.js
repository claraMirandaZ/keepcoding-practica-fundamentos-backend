const express = require("express");
// import { Router } from "express";
const router = express.Router();

/* GET users listing */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
