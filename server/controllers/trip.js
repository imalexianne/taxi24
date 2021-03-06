import model from '../models';

const { Trip } = model;

class Trips {
  static signUp(req, res) {
    const { name, startingtime, completetime,driverId } = req.body
      return Trip
        .create({
          name,
          startingtime,
          completetime,
          driverId
           })
        .then(tripData => res.status(201).send({
          success: true,
          message: 'Trip successfully created',
          tripData
        }))
      }

    static list(req, res) {
        return Trip
          .findAll()
          .then(trips => res.status(200).send(trips));
      }

      static get(req, res) {
        return Trip
          .findByPk(req.params.tripId)
          .then(trips => res.status(200).send(trips));
      }

      static modify(req, res) {
        const { name, startingtime, completetime, driverId } = req.body
        return Trip
          .findByPk(req.params.tripId)
          .then((trip) => {
            trip.update({
              name: name || trip.name,
              startingtime: startingtime || trip.startingtime,
              completetime: completetime || trip.completetime,
              driverId:driverId || trip.driverId
              
            })
            .then((updatedTrip) => {
              res.status(200).send({
                message: 'Trip updated successfully',
                data: {
                  name: name || updatedTrip.name,
                  startingtime: startingtime || updatedTrip.startingtime,
                  completetime: completetime || updatedTrip.completetime,
                  driverId: driverId || updatedTrip.driverId
                }
            })
          })
          .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    }
    static delete(req, res) {
        return Trip
          .findByPk(req.params.tripId)
          .then(trip => {
            if(!trip) {
              return res.status(400).send({
              message: 'Trip Not Found',
              });
            }
            return trip
              .destroy()
              .then(() => res.status(200).send({
                message: 'Trip successfully deleted'
              }))
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error))
      }
}

export default Trips;