'use strict';
module.exports = function(sequelize, DataTypes) {
  var PriceOption = sequelize.define('PriceOption', {
    'basePrice': DataTypes.INTEGER,
    'numItems': DataTypes.INTEGER
  }, {
    'classMethods': {
        associate: function(models) {
          PriceOption.belongsTo(models.MerchItem);
        }
    }
  });
  return PriceOption;
};