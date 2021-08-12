const path = require('path');

module.exports = {
  development: {
    sitename: 'Roux Meetups [Development]',
    data: {
      feedback: path.join(__dirname, '../data/feedback.json'),
      serviceRegistryUrl: 'http://localhost:3000',
      serviceVersionIdentifier: '1.x.x',
    },
  },
  production: {
    sitename: 'Roux Meetups',
    data: {
      feedback: path.join(__dirname, '../data/feedback.json'),
      serviceRegistryUrl: 'http://localhost:3000',
      serviceVersionIdentifier: '1.x.x',
    },
  },
};
