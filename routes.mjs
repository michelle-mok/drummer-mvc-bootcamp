import db from './models/index.mjs';

// import your controllers here
import initDrummersController from './controllers/drummers.mjs';
import initReservationsController from './controllers/reservations.mjs';

export default function bindRoutes(app) {
  // initialize the controller functions here
  // pass in the db for all callbacks

  // define your route matchers here using app
  const DrummersController = initDrummersController(db);
  const ReservationsController = initReservationsController(db);

  app.get('/drummer/:id', DrummersController.oneDrummer);
  app.post('/reservation/:drummer_id', ReservationsController.reservationPost);
  app.get('/reservations/:drummer_id', ReservationsController.drummersReservations);
  app.get('/', DrummersController.allDrummers);
}

// /drummer/:id
// GET
// Render a single drummer. The id param is a primary key from the users table.
// /reservation/:drummer_id
// POST
// Accept a post request to make a reservation with this drummer. The drummer_id param is a primary key from the users table.
// /reservations/:drummer_id
// GET
// Get a list of all reservations for this drummer.
// /
// GET
// Render a list of drummers.
