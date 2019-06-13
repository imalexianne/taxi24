
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


