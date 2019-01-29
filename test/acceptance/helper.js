
// const LocalService = require('./local-service.js');

// const localService = new LocalService();
const Server = require('../../src/server/main');
let server;
before(() => {

  const newServer = new Server();
  server = newServer.start();
});

after(() => {
  console.log(1111, server);
  
  server.close();
});
