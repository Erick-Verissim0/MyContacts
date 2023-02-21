import PropTypes from 'prop-types';

import arrow from '../../assets/images/icons/arrow.png';
import { Container } from './styles';

export default function PageHeader({ title }) {
  return (
    <Container>
      <a href="/">
        <img src={arrow} alt="Back" />
        <span>Back</span>
      </a>
      <h1>{title}</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
