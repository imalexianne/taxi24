// import model from '../models';

// const { Trip } = model;

// class Trips {
//   static create(req, res) {
//     const { name, startingtime, completetime, driverId } = req.body
//     const { driverId } = req.params
//     return Trip
//       .create({
//         name,
//         startingtime,
//         completetime,
//         driverId
//       })
//       .then(trip => res.status(201).send({
//         message: `Your trip with the name ${name} has been created successfully `,
//         trip
//       }))
//     }
// }

// export default Trips

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

      static modify(req, res) {
        const { name, startingtime, completetime, driverId } = req.body
        return Trip
          .findById(req.params.tripId)
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
                  name: name || updatedRider.name,
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
          .findById(req.params.tripId)
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