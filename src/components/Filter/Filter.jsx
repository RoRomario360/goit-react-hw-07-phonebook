import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/contacts-actions';
import s from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.contacts.filter);

  const handlerFilterUsers = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <label className={s.form__label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="name"
        value={name}
        onChange={handlerFilterUsers}
      />
    </label>
  );
}
