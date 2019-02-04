require('dotenv').load();
module.exports = { 
  port: process.env.PORT,
  secret: process.env.SECRET,
}

