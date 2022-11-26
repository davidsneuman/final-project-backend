/*==================================================
/database/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://sawebfilesprod001.blob.core.windows.net/images/Untitled%20design%20(5)-2.png?sv=2017-04-17&sr=b&si=DNNFileManagerPolicy&sig=ckoT07MeavoWWJ5qBso4t0rHKm%2FGXdMWIVa8%2Bt9eRIE%3D" 
  }
});

// Export the campus model
module.exports = Campus;