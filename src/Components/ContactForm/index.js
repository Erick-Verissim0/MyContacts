import { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, ButtonContainer } from './styles';

import isEmailValid from '../../utils/isEmailValid';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState([]);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'name', message: 'Name is required.' },
      ]);
    } else {
      setErrors((prevState) =>
        prevState.filter((error) => error.field !== 'name')
      );
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      const errorAlreadyExists = errors.find(
        (error) => error.field === 'email'
      );

      if (errorAlreadyExists) {
        return;
      }

      setErrors((prevState) => [
        ...prevState,
        { field: 'email', message: 'Email is required.' },
      ]);
    } else {
      setErrors((prevState) =>
        prevState.filter((error) => error.field !== 'email')
      );
    }
  }

  function getErrorMessageByFildName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log({ name, email, phone, category });
  }

  return (
    <Form onSubmit={handleSubmit}>
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
          error={getErrorMessageByFildName('email')}
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
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
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.prototypes = {
  buttonLabel: PropTypes.string.isRequired,
};
