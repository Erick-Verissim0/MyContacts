import { useState, useEffect } from 'react';

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

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');

  useEffect(() => {
    fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
      .then(async (resp) => {
        const json = await resp.json();
        setContacts(json);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }, [orderBy]);

  function handleTogglerOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Search contact..." />
      </InputSearchContainer>

      <Header>
        <strong>
          {contacts.length} {contacts.length == 1 ? 'Contact' : 'Contacts'}
        </strong>
        <a href="/new">New Contact</a>
      </Header>

      <ListHeader orderBy={orderBy}>
        <button type="button" onClick={handleTogglerOrderBy}>
          <span>Name</span>
          <LenghtImg>
            <img className="arrow" src={arrow} alt="Arrow" />
          </LenghtImg>
        </button>
      </ListHeader>

      {contacts.map((contact) => (
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
