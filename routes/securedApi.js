const express = require("express");
const router = express.Router();
const SecuredMiddleware = require("../middleware/authMiddleware");
const TeachersController = require("../controllers/api/secured/Teachers");
const ClientsController = require("../controllers/api/secured/Clients");
const CoursesController = require("../controllers/api/secured/Courses");
const ChartsController = require("../controllers/api/secured/Charts");
const DealsController = require("../controllers/api/secured/Deals");

// Routers
// =============================================================================
router.use(SecuredMiddleware);
router.get('/', (req, res) => res.json({ msg: "Hi!" }));

//Deals
router.get('/deals', (req, res) => DealsController.getAll(req, res));
router.get('/deals/:id', (req, res) => DealsController.getById(req, res));
router.post('/deals', (req,res) => DealsController.add(req,res));

//Teachers
router.get('/teachers', (req, res) => TeachersController.getAll(req, res));
router.post('/teachers', (req, res) => TeachersController.add(req, res));
//Clients
router.get('/clients', (req, res) => ClientsController.getAll(req, res));
router.post('/clients', (req, res) => ClientsController.add(req, res));
router.delete('/clients', (req, res) => ClientsController.delete(req, res));
//Courses
router.get('/courses', (req, res) => CoursesController.getAll(req, res));
//Charts
router.get('/charts', (req, res) => ChartsController.getAll(req,res));
// =============================================================================

module.exports = router;