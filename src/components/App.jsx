
//components
import { ContactForm } from './ContactForm/contactForm';
import ContactList from './ContactList/contactList';
import Filter from './ContactFilter/contactFilter';
import styles from './style.module.css';



export const App = () => {

  return (
    <div className={styles.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList/>
    </div>
  );
};
