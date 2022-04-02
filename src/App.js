import { useEffect, useRef } from 'react';
import { ContactList } from './components/ContactList/ContactList';
import { Filter } from './components/Filter/Filter';
import { ContactForm } from './components/ContactForm/ContactForm';
import { GlobalStyle } from './components/GlobalStyles';
import toast, { Toaster } from 'react-hot-toast';
import contactsActions from './redux/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current === true) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
    isMounted.current = true;
  }, [contacts]);

  const handleChange = e => {
    dispatch(contactsActions.changeFilter(e.target.value));
  };

  const onSubmitContact = (newContact, resetInput) => {
    const isExistContact = contacts.find(
      contact =>
        contact.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase()
    );

    if (isExistContact) {
      toast.error(`${newContact.name} is already in contacts`);
    } else {
      dispatch(contactsActions.addContact(newContact));
      resetInput();
    }
  };

  const deleteContact = contactId =>
    dispatch(contactsActions.deleteContact(contactId));

  const normalizedFilter = filter.toLowerCase();
  const findContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <GlobalStyle />
      <Toaster />
      <section style={{ padding: '20px' }}>
        <h1 style={{ marginBottom: '20px' }}>Phonebook</h1>
        <ContactForm onSubmitContact={onSubmitContact} />
        <div>
          <h2>Contacts</h2>
          <Filter value={filter} handleChange={handleChange} />
          <ContactList
            contacts={findContacts}
            onDeleteContact={deleteContact}
          />
        </div>
      </section>
    </>
  );
}

export default App;
