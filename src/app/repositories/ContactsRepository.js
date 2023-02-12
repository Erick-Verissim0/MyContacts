const { v4 } = require('uuid');

const db = require('../../database');

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
  async findAll() {
    const rows = await db.query('SELECT * FROM contacts')
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [id])
    return row;
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [email])
    return row;
  }

  async create({ name, email, phone, category_id }) {
    const [row] = await db.query(
      `
    INSERT INTO contacts(name, email, phone, category_id)
    VALUES($1, $2, $3, $4)
    RETURNING *`,
      // estou me referindo ao dolar 1 como name e assim vai... Poderia ser utilizado uma interpolação de dados, mas ficaria sucetivo à uma SQL Injection
      [name, email, phone, category_id]);
    return row;
  }

  update(id, { name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };
      contacts = contacts.map((contact) =>
        contact.id === id ? updatedContact : contact
      );

      resolve(updatedContact);
    });
  }
}

module.exports = new ContactsRepository();
