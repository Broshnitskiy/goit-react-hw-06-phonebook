import PropTypes from 'prop-types';
import { ListItem } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import contactsActions from '../../redux/contacts-actions';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = contactId =>
    dispatch(contactsActions.deleteContact(contactId));

  return (
    <ListItem>
      &#9742; {name}: {number};
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
