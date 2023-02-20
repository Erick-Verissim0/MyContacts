import { Form, ButtonContainer } from './styles';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import PropTypes from 'prop-types';
import { useState, useRef } from 'react';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const emailInput = useRef(null);

  function handleClick() {
    console.log(emailInput.current.value);
  }

  return (
    <Form>
      <button type="button" onClick={handleClick}>
        Loggin emailInput
      </button>

      <FormGroup>
        <Input
          value={name}
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Email" ref={emailInput} />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Phone" />
      </FormGroup>

      <Select>
        <option value="instagram">Instagram</option>
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
