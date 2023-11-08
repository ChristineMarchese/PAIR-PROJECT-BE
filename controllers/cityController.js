const express = require("express");
const cities = express.Router();
const { getAllCities, getOneCity, newCity, deleteCity, updateCity } = require("../queries/city.js");
const { checkName, checkCurrency, checkBoolean } = require("../validations/checkCities")


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
    const id = Number(req.params.id);
    const oneCity = await getOneCity(id);
    if(oneCity) {
    res.status(200).json(oneCity)
    } else {
    res.status(404).json( { error: "Page Not Found"} );
    }
});

// POST -- create a new city - /cities

  cities.post("/", express.json(), checkName, checkCurrency, checkBoolean, async (req, res) => {
     const body = req.body;
     const city = await newCity(body);
     res.status(200).json(city);
  });

//DELETE -- delete a city - /cities/:id

cities.delete('/:id', async(req, res) => {
     const id = Number(req.params.id);
     const deletedCity = await deleteCity(id)
       if(deletedCity.id) {
         res.status(200).json(deletedCity)
       } else {
         res.status(404).json( {error: "Page Not Found"} )
       }
});

// PUT -- updata a city - /cities/:id

cities.put('/:id', express.json(), checkName, checkCurrency, checkBoolean, async (req, res) => {
     const id = Number(req.params.id);
     const body = req.body;
     const updatedCity = await updateCity(id, body)
       if(updatedCity.id) {
        res.status(200).json(updatedCity)
       } else {
        res.status(404).json( { error: "Page Not Found"})
       }
})


module.exports = cities;