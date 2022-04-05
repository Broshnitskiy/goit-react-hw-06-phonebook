import { ContactList } from './components/ContactList/ContactList';
import { Filter } from './components/Filter/Filter';
import { ContactForm } from './components/ContactForm/ContactForm';
import { GlobalStyle } from './components/GlobalStyles';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <GlobalStyle />
      <Toaster />
      <section style={{ padding: '20px' }}>
        <h1 style={{ marginBottom: '20px' }}>Phonebook</h1>
        <ContactForm />
        <div>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </section>
    </>
  );
}

export default App;
