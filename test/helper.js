
const LocalService = require('./local-service.js');

const localService = new LocalService();

before(() => localService.start());

after(() => localService.stop());
