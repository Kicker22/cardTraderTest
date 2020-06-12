const Sequelize = require('sequelize')



// postgres db conection 
module.exports = new Sequelize('cardTraderdb', 'postgres', 'kicker22', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases:false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle:10000
  
    },
});