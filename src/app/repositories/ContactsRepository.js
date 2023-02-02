const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Erick',
    email: 'erickverissimo.dev@gmail.com',
    phone: '82996443336',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Gisele',
    email: 'gisele@gmail.com',
    phone: '40028922',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) =>
      resolve(contacts.find((contact) => contact.id === id))
    );
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
