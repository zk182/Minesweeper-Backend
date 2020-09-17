const { Router } = require('express');
const swaggerUi = require('swagger-ui-express');
const { swaggerOptions } = require('../lib');

const healthCheckRoute = require('./healthCheckRoute');
const errorsRoute = require('../middlewares/errorsRoute');
const boardRoute = require('../components/board/boardRoute');

const swaggerSpec = swaggerOptions;

// Router
const router = new Router();

// Swagger
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Health Route for load balancers
router.use(healthCheckRoute);

// Models
router.use('/board', boardRoute);

// Errors
router.use(errorsRoute);

module.exports = router;
