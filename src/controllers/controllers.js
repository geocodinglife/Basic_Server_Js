const { request, response } = require('express');

class IndexControllers {

    getAllRegisters(request, response) {
        response.json({ message: 'Get All Regiters' })
    }

    getOneRegister(request, response) {
        const { id } = request.params;
        response.json({ message: 'Get Register No. ' + id })
    }

    addRegister(request, response) {
        const newRegister = request.body;
        response.json({ message: 'Add New Register', newRegister })
    }

    deleteRegister(request, response) {
        const { id } = request.params;
        response.json({ message: 'Delete Register No. ' + id })
    }

    updateRegister(request, response) {
        const { id } = request.params;
        response.json({ message: 'Update Register No. ' + id })
    }

}

const indexControllers = new IndexControllers();
module.exports = indexControllers;