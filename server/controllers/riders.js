// import model from '../models';

// const { Rider } = model;

// class Riders {
//   static create(req, res) {
//     const { name, driverId, tripId,} = req.body
//     const { driverId } = req.params
//     const { tripId } = req.params
//     return Rider
//       .create({
//         name,
//         driverId,
//         tripId,
//       })
//       .then(rider => res.status(201).send({
//         message: `The rider with the name ${name} has been created successfully `,
//         rider
//       }))
//     }
// }

// export default Riders

import model from '../models';

const { Rider } = model;

class Riders {
  static signUp(req, res) {
    const { name, driverId, tripId } = req.body
      return Rider
        .create({
          name,
          driverId,
          tripId
          
        })
        .then(riderData => res.status(201).send({
          success: true,
          message: 'Rider successfully created',
          riderData
        }))
    }

    static list(req, res) {
        return Rider
          .findAll()
          .then(riders => res.status(200).send(riders));
      }

      static get(req, res) {
        return Rider
          .findByPk(req.params.riderId)
          .then(riders => res.status(200).send(riders));
      }

      static modify(req, res) {
        const { name, driverId, tripId } = req.body
        return Rider
          .findByPk(req.params.riderId)
          .then((rider) => {
            rider.update({
              name: name || rider.name,
              driverId: driverId || rider.driverId,
              tripId: tripId || rider.tripId
              
            })
            .then((updatedRider) => {
              res.status(200).send({
                message: 'Rider updated successfully',
                data: {
                  name: name || updatedRider.name,
                  driverId: driverId || updatedRider.driverId,
                  tripId: tripId || updatedRider.tripId,
                  
                }
              })
            })
            .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
      }
      static delete(req, res) {
        return Rider
          .findByPk(req.params.riderId)
          .then(rider => {
            if(!rider) {
              return res.status(400).send({
              message: 'Rider Not Found',
              });
            }
            return rider
              .destroy()
              .then(() => res.status(200).send({
                message: 'Rider successfully deleted'
              }))
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error))
      }
}

export default Riders;