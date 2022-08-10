import { Form } from './ContactForm/ContactForm';
import Container from './Container/Container';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';
import PacmanLoader from 'react-spinners/PacmanLoader';

export const App = () => {
  const loader = useSelector(state => state.contacts.loading);
  return (
    <div>
      <Container title="Phone book">
        <Form />
      </Container>
      <Container title="Contacts">
        <Filter />
        <ContactList />
        {
          <PacmanLoader
            color={'gray'}
            loading={loader}
            // cssOverride={override}
            size={10}
          />
        }
      </Container>
    </div>
  );
};
