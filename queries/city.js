const db = require("../db/dbConfig.js");


const getAllCities = async () => {
    try{
      const allCities = await db.any("SELECT * FROM cities");
      return allCities;
    } catch(error) {
      return error;
   }
};

const getOneCity = async (id) => {
   try{ 
      const oneCity = await db.one("SELECT * FROM cities WHERE id=$1", id)
      return oneCity //
    } catch(error) {
      return error;
   }
};


module.exports = { getAllCities, getOneCity };