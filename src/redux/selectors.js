export const selectContacts = ({contacts})=> contacts;
export const selectFilter = ({filter}) => filter;


export const selectFilteredContacts = ({contacts, filter}) => {
    if (!filter) {
        return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };