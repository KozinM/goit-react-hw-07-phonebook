
import styles from './style.module.css';
import ContactItem from './ContactItem/contactItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

const ContactList = () => {
  const getVisibleContacts = useSelector(selectFilteredContacts);
  return (
    <div>
      <ul className={styles.contactsList}>
        {getVisibleContacts.map(({ id, name, number }) => {
          return (
            <ContactItem 
             key={id}
             id={id}
             name={name} 
             number={number}
             />
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;