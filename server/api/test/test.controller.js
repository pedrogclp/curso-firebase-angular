'use strict'

module.exports = {
  test: function(req, res){
    res.send({
      mensaje : 'API funcionando, test exitoso.'
    })
  }
}
