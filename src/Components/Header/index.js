import { Container } from './styles';
import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts" width="200" />
    </Container>
  );
}
