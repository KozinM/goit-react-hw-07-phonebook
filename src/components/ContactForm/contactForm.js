import React, { useState} from 'react';
import { nanoid } from 'nanoid';
import styles from './style.module.css';

//redux's hooks import
import { useDispatch, useSelector } from 'react-redux';
//actions import
import { addContact } from 'redux/contactsSlice';
import { selectContacts } from 'redux/selectors';


export const ContactForm = () => {


const [name, setName] = useState('');
const [number, setNumber] = useState('');

const dispatch = useDispatch();

const handleChangeName = event => {
  setName(event.currentTarget.value);
};

const handleChangeNumber = event => {
  setNumber(event.currentTarget.value);
};

const contacts = useSelector(selectContacts);

const isContactExist = contacts.find(
  contact => contact.name.toLowerCase() === name.toLowerCase()
);

const handleSubmit = event => {
  event.preventDefault();
  if (isContactExist) {
    return alert(`${name} is already in contacts`);
  }
  
  const data = {
    id: nanoid(),
    name,
    number,
  };
  dispatch(addContact(data));
  resetForm();
};

const resetForm = () => {
  setName('');
  setNumber('');
};

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChangeName}
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChangeNumber}
        />
      </label>
      <button type="submit" className={styles.btn}>
        Add contact
      </button>
    </form>
  );

}