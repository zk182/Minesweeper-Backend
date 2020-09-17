/* eslint-disable no-console */
const http = require('http');
const app = require('../../app');

const config = require('../../config');

const port = config.PORT || '8080';

const server = http.Server(app);

/**
 * Listens the port.
 */
server.listen(port, () => {
	console.log(`App on port ${port}!`);
});
