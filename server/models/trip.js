// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Trip = sequelize.define('Trip', {
//     name: DataTypes.STRING,
//     startingtime: DataTypes.STRING,
//     completetime: DataTypes.STRING,
//     driverId: DataTypes.INTEGER
//   }, {});
//   Trip.associate = function(models) {
//     // associations can be defined here
//     Trip.hasMany(models.Rider, {
//       foreignKey: 'tripId',
//     });
//     Trip.belongsTo(models.Driver, {
//       foreignKey: 'driverId',
//       onDelete: 'CASCADE'
//     });
  
//   };

//   return Trip;
// };

export default (sequelize, DataTypes) => {
  const Trip = sequelize.define('Trip', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the name (start point-end point) for the trip'
      }
    },
    startingtime: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter a starttime'
      }
    },
    completetime: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Pease input a complete time'
      }
    },
   
    driverId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Driver',
        key: 'id',
        as: 'driverId',
      }
    }
  }, {});

  
  Trip.associate = function(models) {
    // associations can be defined here
    Trip.hasMany(models.Rider, {
      foreignKey: 'tripId',
    });
    Trip.belongsTo(models.Driver, {
      foreignKey: 'driverId',
      onDelete: 'CASCADE'
    });
  
  };

  return Trip;
};
  // Trip.associate = (models) => {
  //   // associations can be defined here
  // };

//   Trip.associate = (models) => {
//     // associations can be defined here
//     Trip.hasMany(models.Rider, {
//       foreignKey: 'tripId',
//     });
//   };
//   return Trip;
// };

// Trip.associate = (models) => {
//   // associations can be defined here
//   Trip.belongsTo(models.Driver, {
//     foreignKey: 'driverId',
//     onDelete: 'CASCADE'
//   });
// };
// return Driver;
