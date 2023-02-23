// React Modules
import { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from '../Button';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';

// Custom Hooks
import useErrors from '../../hooks/UseErrors';

// Utilitarys
import formatPhone from '../../utils/formatPhone';
import isEmailValid from '../../utils/isEmailValid';

// Styles
import { Form, ButtonContainer } from './styles';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const { errors, setError, removeError, getErrorMessageByFildName } =
    useErrors();

  const isFormValid = name && errors.length === 0;

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Name is required.' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'Email is required.' });
    } else {
      removeError('email');
    }
  }

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value));
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log({ name, email, phone: phone.replace(/\D/g, ''), category });
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFildName('name')}>
        <Input
          error={getErrorMessageByFildName('name')}
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFildName('email')}>
        <Input
          type="email"
          error={getErrorMessageByFildName('email')}
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          maxLength="15"
          placeholder="Phone"
          value={phone}
          onChange={handlePhoneChange}
        />
      </FormGroup>

      <Select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="">Category</option>
        <option value="instagram">Instagram</option>
        <option value="discord">Discord</option>
      </Select>

      <ButtonContainer>
        <Button disabled={!isFormValid} type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.prototypes = {
  buttonLabel: PropTypes.string.isRequired,
};
