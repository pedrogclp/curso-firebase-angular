'use strict'

function route(app){
  app.use('/api/test', require('./api/test'));
}

module.exports = route;
