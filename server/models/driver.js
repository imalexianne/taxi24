// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Driver = sequelize.define('Driver', {
//     name: DataTypes.STRING,
//     username: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//     location: DataTypes.STRING,
//     closestdrivers: DataTypes.STRING
//   }, {});
//   Driver.associate = function(models) {
//     Driver.hasMany(models.Trip, {
//       foreignKey: 'driverId',
//     });
//     Driver.hasMany(models.Rider, {
//       foreignKey: 'driverId',
//     });
  
//     // associations can be defined here
//   };
//   return Driver;
// };
export default (sequelize, DataTypes) => {
  const Driver = sequelize.define('Driver', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your username'
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your email address'
      },
      unique: {
        args: true,
        msg: 'Email already exists'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Please enter a valid email address'
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter a password'
      },
      validate: {
        isNotShort: (value) => {
          if (value.length < 8) {
            throw new Error('Password should be at least 8 characters');
          }
        },
      },
    },
  location:{
    type: DataTypes.STRING,
    allowNull: {
      args: false,
      msg: 'Please enter your location'
    }
  },
  closestdrivers:{
    type: DataTypes.STRING,
    allowNull: {
      args: false,
      msg: 'Please enter your closest drivers'
    }
  }, });
  Driver.associate = function(models) {
    Driver.hasMany(models.Trip, {
      foreignKey: 'driverId',
    });
    Driver.hasMany(models.Rider, {
      foreignKey: 'driverId',
    });
  };
  return Driver;
};

//   Driver.associate = (models) => {
//     // associations can be defined here
//     Driver.hasMany(models.Trip, {
//       foreignKey: 'driverId',
//     });
//     Driver.hasMany(models.Rider, {
//       foreignKey: 'driverId',
//     });
//   };
//   // Driver.associate = (models) => {
//   //   // associations can be defined here
//   //   Driver.hasMany(models.Rider, {
//   //     foreignKey: 'driverId',
//   //   });
//   // };

//   return Driver;

