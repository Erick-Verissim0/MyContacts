import { useState, useEffect, useMemo } from 'react';

import {
  Container,
  InputSearchContainer,
  Header,
  ListHeader,
  Card,
  LenghtImg,
} from '../../pages/Home/styles';

import arrow from '../../assets/images/icons/arrow.png';
import edit from '../../assets/images/icons/edit.png';
import trash from '../../assets/images/icons/trash.png';
import Loader from '../../Components/Loader';
import ContactService from '../../services/ContactService';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredContacts = useMemo(
    () =>
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      ),
    [contacts, searchTerm]
  );

  useEffect(() => {
    async function loadContact() {
      try {
        setIsLoading(true);

        const contactsList = await ContactService.listContacts(orderBy);

        setContacts(contactsList);
      } catch (error) {
        console.log('Catch', error);
      } finally {
        setIsLoading(false);
      }
    }
    loadContact();
  }, [orderBy]);

  function handleTogglerOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <InputSearchContainer>
        <input
          value={searchTerm}
          onChange={handleChangeSearchTerm}
          type="text"
          placeholder="Search contact..."
        />
      </InputSearchContainer>

      <Header>
        <strong>
          {filteredContacts.length}{' '}
          {filteredContacts.length == 1 ? 'Contact' : 'Contacts'}
        </strong>
        <a href="/new">New Contact</a>
      </Header>

      {filteredContacts.length > 0 && (
        <ListHeader orderBy={orderBy}>
          <button type="button" onClick={handleTogglerOrderBy}>
            <span>Name</span>
            <LenghtImg>
              <img className="arrow" src={arrow} alt="Arrow" />
            </LenghtImg>
          </button>
        </ListHeader>
      )}

      {filteredContacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong> {contact.name} </strong>

              {contact.category_name && (
                <small> {contact.category_name} </small>
              )}
            </div>
            <span> {contact.email} </span>
            <span> {contact.phone} </span>
          </div>

          <div className="actions">
            <a href={`/edit/${contact.id}`}>
              <LenghtImg>
                <img src={edit} alt="Edit" />
              </LenghtImg>
            </a>
            <button type="button">
              <a href="/">
                <LenghtImg>
                  <img src={trash} alt="Button" />
                </LenghtImg>
              </a>
            </button>
          </div>
        </Card>
      ))}
    </Container>
  );
}
