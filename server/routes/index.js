import Drivers from '../controllers/driver';

export default (app) => {

    app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the taxi24 API!',
    }));

    app.post('/api/drivers', Drivers.signUp); // API route for driver to signup
    app.get('/api/drivers', Drivers.list); // API route to get all drivers in the database
    app.put('/api/drivers/:driverId', Drivers.modify); // API route to edit a driver
    app.delete('/api/drivers/:driverId', Drivers.delete); // API route for user to delete a driver
};

import Riders from '../controllers/riders';

export default (app) => {

    app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the taxi24 API!',
    }));

    app.post('/api/riders', Riders.signUp); // API route for rider to signup
    app.get('/api/riders', Riders.list); // API route to get all riders in the database
    app.put('/api/riders/:riderId', Riders.modify); // API route to edit a rider
    app.delete('/api/riders/:riderId', Riders.delete); // API route for to delete a rider
};
import Trips from '../controllers/trip';

export default (app) => {

    app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the taxi24 API!',
    }));

    app.post('/api/trips', Trips.signUp); // API route for rider to signup
    app.get('/api/trips', Trips.list); // API route to get all riders in the database
    app.put('/api/riders/:riderId', Trips.modify); // API route to edit a rider
    app.delete('/api/riders/:riderId', Trips.delete); // API route to delete a rider
};
