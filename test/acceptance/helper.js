const Server = require('../../src/server/main');

let testServer;
before(async () => {
  const s = new Server();
  testServer = await s.start();
});

after(() => {
  const { server, sequelize } = testServer;
  
  server.close();
  sequelize.close();
});
