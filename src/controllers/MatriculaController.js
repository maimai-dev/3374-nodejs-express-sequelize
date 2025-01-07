const Controller = require('./Controller.js');
const MatriculaServices = require('../services/MatriculaServices.js');

const matriculaServices = new MatriculaServices();

class PessoaController extends Controller{
  constructor(){
    super(matriculaServices);
  }
}

module.exports = PessoaController;