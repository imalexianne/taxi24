
export default (sequelize, DataTypes) => {
  const Rider = sequelize.define('Rider', {
    name: {
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
  Rider.associate = function(models) {
    // associations can be defined here
    Rider.belongsTo(models.Driver, {
      foreignKey: 'driverId',
      onDelete: 'CASCADE'
    });
    Rider.belongsTo(models.Trip, {
      foreignKey: 'tripId',
      onDelete: 'CASCADE'
    });
  
  };

  return Rider;
};

