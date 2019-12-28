const { Router, request, response } = require('express');
//Controllers
const indexCtrl = require('../controllers/controllers');

class IndexRoutes {

    constructor() {
        this.router = Router();
        this.config();
    }

    config() {
        this.router.route('/')
            .get(indexCtrl.getAllRegisters)
            .post(indexCtrl.addRegister)
        this.router.route('/:id')
            .get(indexCtrl.getOneRegister)
            .delete(indexCtrl.deleteRegister)
            .put(indexCtrl.updateRegister)
    }

}

const indexRoutes = new IndexRoutes();
module.exports = indexRoutes.router;