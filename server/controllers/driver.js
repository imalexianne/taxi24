import model from '../models';

const { Driver } = model;

class Drivers {
  static signUp(req, res) {
    const { name, username, email, password,location,closestdrivers } = req.body
      return Driver
        .create({
          name,
          username,
          email,
          password,
          location,
          closestdrivers
        })
        .then(driverData => res.status(201).send({
          success: true,
          message: 'Driver successfully created',
          driverData
        }))
    }

    static list(req, res) {
        return Driver
          .findAll()
          .then(drivers => res.status(200).send(drivers));
      }
      static get(req, res) {
        return Driver
          .findByPk(req.params.driverId)
          .then(drivers => res.status(200).send(drivers));
      }
      

      static find(req, res) {
        return Driver
          .findByPk(req.params.driverLocation)
          .then(drivers => res.status(200).send(drivers));
      }

      
      static modify(req, res) {
        const { name, username, email, password,location,closestdrivers } = req.body
        return Driver
          .findByPk(req.params.driverId)
          .then((driver) => {
            driver.update({
              name: name || driver.name,
              username: username || driver.username,
              email: email || driver.email,
              password: password || driver.password,
              location: location || driver.location,
              closestdrivers: closestdrivers || driver.closestdrivers
            })
            .then((updatedDriver) => {
              res.status(200).send({
                message: 'Driver updated successfully',
                data: {
                  name: name || updatedDriver.name,
                  username: username || updatedDriver.username,
                  email: email || updatedDriver.email,
                  password: password || updatedDriver.password,
                  location: location || updatedDriver.location,
                  closestdrivers: closestdrivers || updatedDriver.closestdrivers
                }
              })
            })
            .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
      }
      static delete(req, res) {
        return Driver
          .findByPk(req.params.driverId)
          .then(driver => {
            if(!driver) {
              return res.status(400).send({
              message: 'Driver Not Found',
              });
            }
            return driver
              .destroy()
              .then(() => res.status(200).send({
                message: 'Driver successfully deleted'
              }))
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error))
      }
}

export default Drivers;