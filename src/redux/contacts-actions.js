import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contact/add');

const deleteContact = createAction('contact/delete');

const changeFilter = createAction('contact/changeFilter');

const contactsActions = {
  addContact,
  deleteContact,
  changeFilter,
};

export default contactsActions;
