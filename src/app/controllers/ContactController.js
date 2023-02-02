class ContactController {
    index(request, response) {
      response.send('Sendo from contact controller')
    } // listar todos os registros
    show() {
        // obter um registro
    }
    store() {
        // criar novo registro
    }
    update() {
        // editar um registro
    }
    delete() {
        // deletar um registro
    }
}

module.exports = new ContactController();
