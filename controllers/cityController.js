const express = require("express");
const cities = express.Router();
const { getAllCities, getOneCity } = require("../queries/city.js");


// INDEX -- all of the cities - /cities

    cities.get("/", async (req, res) => {
      const allCities = await getAllCities();
      if (allCities.length > 0) {
      res.status(200).json(allCities);
      } else {
      res.status(500).json( { error: "server error" } );
      }
    });

// SHOW -- get one city -/cities/:id

  cities.get("/:id", async (req, res) => {
    const id = req.params.id;
    const oneCity = await getOneCity(id);
    if(oneCity) {
    res.status(200).json(oneCity)
    } else {
    res.status(404).json( { error: "Page Not Found"} );
    }
});






module.exports = cities;