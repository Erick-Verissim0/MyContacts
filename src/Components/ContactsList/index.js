import { Container, Header, ListContainer, Card } from './styles';

import arrow from '../../assets/images/icons/arrow.png';
import edit from '../../assets/images/icons/edit.png';
import trash from '../../assets/images/icons/trash.png';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 Contacts</strong>
        <a href="/">New Contact</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Name</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
        <Card>
          <div className="infor">
            <div className="contact-name">
              <strong>Erick Veríssimo</strong>
              <small>Instagram</small>
            </div>
            <span>erickverissimo.s.a.al@gmail.com</span>
            <span>(82) 99644-3336</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <a href="/">
                <img src={trash} alt="Button" />
              </a>
            </button>
          </div>
        </Card>
        <Card>
          <div className="infor">
            <div className="contact-name">
              <strong>Erick Veríssimo</strong>
              <small>Instagram</small>
            </div>
            <span>erickverissimo.s.a.al@gmail.com</span>
            <span>(82) 99644-3336</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <a href="/">
                <img src={trash} alt="Button" />
              </a>
            </button>
          </div>
        </Card>
        <Card>
          <div className="infor">
            <div className="contact-name">
              <strong>Erick Veríssimo</strong>
              <small>Instagram</small>
            </div>
            <span>erickverissimo.s.a.al@gmail.com</span>
            <span>(82) 99644-3336</span>
          </div>

          <div className="actions">
            <a href="/">
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
