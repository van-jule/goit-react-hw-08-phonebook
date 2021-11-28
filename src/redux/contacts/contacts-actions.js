// import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

export const fetchContactsRequest = createAction(
  "contacts/fetchContactRequest"
);
export const fetchContactsSuccess = createAction(
  "contacts/fetchContactSuccess"
);
export const fetchContactsError = createAction("contacts/addContactError");

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactError = createAction("contacts/addContactError");

export const deleteContactRequest = createAction(
  "contacts/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "contacts/deleteContactSuccess"
);
export const deleteContactError = createAction("contacts/deleteContactError");

// const deleteContact = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
// });

export const changeFilter = createAction("contacts/Filter");

// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });
