'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rider = sequelize.define('Rider', {
    name: DataTypes.STRING,
    driverid: DataTypes.INTEGER,
    tripid: DataTypes.INTEGER
  }, {});
  Rider.associate = function(models) {
    // associations can be defined here
  };
  return Rider;
};

export default (sequelize, DataTypes) => {
  const Rider = sequelize.define('Rider', {
    title: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the name'
      }
    },
   
   
    
    driverId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Driver',
        key: 'id',
        as: 'driverId',
      }
    },
    tripId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Trip',
        key: 'id',
        as: 'tripId',
      }
    }
  }, 
  {});
  Rider.associate = (models) => {
    // associations can be defined here
  };
  return Rider;
}

Rider.associate = (models) => {
  // associations can be defined here
  Rider.belongsTo(models.Driver, {
    foreignKey: 'driverId',
    onDelete: 'CASCADE'
  });
};
return Driver;

Rider.associate = (models) => {
  // associations can be defined here
  Rider.belongsTo(models.Trip, {
    foreignKey: 'tripId',
    onDelete: 'CASCADE'
  });
};
return Trip;