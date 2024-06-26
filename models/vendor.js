'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vendor.belongsToMany(models.Hospital, { through: 'HospitalVendor' });
    }
  }
  Vendor.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: `Vendor already exist`
      },
      validate: {
        notEmpty: {
          args: true,
          msg: `Name must be filled`
        }
      }
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: `address must be filled`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Vendor',
  });
  return Vendor;
};