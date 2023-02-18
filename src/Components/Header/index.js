import { Container, InputSearchContainer } from './styles';
import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts" width="200" />
      <InputSearchContainer>
        <input type="text" placeholder='Search contact...'/>
      </InputSearchContainer>
    </Container>
  );
}
