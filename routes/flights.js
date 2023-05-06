const express = require("express");
const router = express.Router();

const { flights } = require("../db/flights");
const { airports } = require("../db/airports");
const { prices } = require("../db/prices");

/* GET Flights and Fares. */
router.get("/", function (req, res) {
  let origin = req.query.origin;
  let destination = req.query.destination;

  if (
    airports.includes(origin.toUpperCase()) &&
    airports.includes(destination.toUpperCase())
  ) {
    let destIdx = airports.indexOf(destination.toUpperCase());
    let price = prices[destIdx];
    let result = flights.reduce((flightFare, name, i) => {
      return { ...flightFare, [name]: price - 249 * i };
    }, {});
    res.json(result);
  } else {
    res.json({ Error: "Airport not found" });
  }
});

module.exports = router;
