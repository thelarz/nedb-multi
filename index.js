const axon = require('axon');
const proxy = require('./lib/dataStoreProxy');

module.exports = (port, host) => {
  const reqSocket = axon.socket('req');
  reqSocket.connect(port, host);

  return proxy.create(reqSocket);
};
