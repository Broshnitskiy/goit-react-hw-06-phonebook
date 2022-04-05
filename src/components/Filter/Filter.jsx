import { useSelector, useDispatch } from 'react-redux';
import { Label } from './Filter.styled';
import contactsActions from '../../redux/contacts-actions';
import { getFilter } from '../../redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(contactsActions.changeFilter(e.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        placeholder="contact name"
      />
    </Label>
  );
};
