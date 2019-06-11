import Drivers from '../controllers/driver';
import Riders from '../controllers/riders';
import Trips from '../controllers/trip';

export default (app) => {

    app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the taxi24 API!',
    }));

    app.post('/api/drivers', Drivers.signUp); // API route for driver to signup
    app.get('/api/drivers', Drivers.list); // API route to get all drivers in the database
    app.put('/api/drivers/:driverId', Drivers.modify); // API route to edit a driver
    app.delete('/api/drivers/:driverId', Drivers.delete); // API route for user to delete a driver
    app.post('/api/riders', Riders.signUp); // API route for rider to signup
    app.get('/api/riders', Riders.list); // API route to get all riders in the database
    app.put('/api/riders/:riderId', Riders.modify); // API route to edit a rider
    app.delete('/api/riders/:riderId', Riders.delete); // API route for to delete a rider
    app.post('/api/trips', Trips.signUp); // API route for trip to be created
    app.get('/api/trips', Trips.list); // API route to get all trips in the database
    app.put('/api/trips/:tripId', Trips.modify); // API route to edit a trip
    app.delete('/api/trips/:tripId', Trips.delete); // API route to delete a trip
    app.get('/api/drivers/:driverId', Drivers.get); // API route for user to get driver by id in the database
    app.get('/api/riders/:riderId', Riders.get); // API route for user to get driver by id in the database
};

// import Riders from '../controllers/riders';

// export default (app) => {

//     app.get('/api', (req, res) => res.status(200).send({
//     message: 'Welcome to the taxi24 API!',
//     }));

//     app.post('/api/riders', Riders.signUp); // API route for rider to signup
//     app.get('/api/riders', Riders.list); // API route to get all riders in the database
//     app.put('/api/riders/:riderId', Riders.modify); // API route to edit a rider
//     app.delete('/api/riders/:riderId', Riders.delete); // API route for to delete a rider
// };
// import Trips from '../controllers/trip';

// export default (app) => {

//     app.get('/api', (req, res) => res.status(200).send({
//     message: 'Welcome to the taxi24 API!',
//     }));

//     app.post('/api/trips', Trips.signUp); // API route for trip to be created
//     app.get('/api/trips', Trips.list); // API route to get all trips in the database
//     app.put('/api/trips/:tripId', Trips.modify); // API route to edit a trip
//     app.delete('/api/trips/:tripId', Trips.delete); // API route to delete a trip
// };
