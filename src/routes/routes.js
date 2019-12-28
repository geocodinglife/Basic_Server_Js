const { Router, request, response } = require('express');

class IndexRoutes {

    constructor() {
        this.router = Router();
        this.config();
    }

    config() {
        this.router.route('/')
            .get((request, response) => {
                response.json({ message: 'Get All Regiters' })
            })
            .post((request, response) => {
                const newRegister = request.body;
                response.json({ message: 'Add New Register', newRegister })
            })
        this.router.route('/:id')
            .get((request, response) => {
                const { id } = request.params;
                response.json({ message: 'Get Register No. ' + id })
            })
            .delete((request, response) => {
                const { id } = request.params;
                response.json({ message: 'Delete Register No. ' + id })
            })
            .put((request, response) => {
                const { id } = request.params;
                response.json({ message: 'Update Register No. ' + id })
            })
    }

}

const indexRoutes = new IndexRoutes();
module.exports = indexRoutes.router;