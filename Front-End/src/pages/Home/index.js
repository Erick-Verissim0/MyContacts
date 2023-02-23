import { Link } from 'react-router-dom';

import {
  Container,
  InputSearchContainer,
  Header,
  ListContainer,
  Card,
} from '../../pages/Home/styles';

import arrow from '../../assets/images/icons/arrow.png';
import edit from '../../assets/images/icons/edit.png';
import trash from '../../assets/images/icons/trash.png';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Search contact..." />
      </InputSearchContainer>

      <Header>
        <strong>3 Contacts</strong>
        <a href="/new">New Contact</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Name</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Erick Veríssimo</strong>
              <small>Instagram</small>
            </div>
            <span>erickverissimo.s.a.al@gmail.com</span>
            <span>(82) 99644-3336</span>
          </div>

          <div className="actions">
            <a href="/edit/123">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <a href="/">
                <img src={trash} alt="Button" />
              </a>
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}

fetch('http://localhost:3001/contacts', {
  method: 'DELETE',
  headers: new Headers({
    'X-App-ID': '123',
  }),
})
  .then((resp) => {
    console.log('Response', resp);
  })
  .catch((error) => {
    console.log('Error', error);
  });
