import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from "./contacts-actions";

axios.defaults.baseURL = "https://6197aefa164fa60017c22d4f.mockapi.io/contacts";

// export const fetchContacts = createAsyncThunk(
//   "contacts/fetchContacts",
//   async (_, { rejectWithValue }) => {
//     try {
//       const contacts = await axios.get("./contacts");
//       return contacts.data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

export const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest);

  try {
    const { data } = await axios.get("./contacts");
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }

  //   axios
  //     .get("./contacts")
  //     .then(({ data }) => dispatch(fetchContactsSuccess(data)))
  //     .catch((error) => dispatch(fetchContactsError(error)));
};

export const addContact =
  ({ name, number }) =>
  (dispatch) => {
    const contact = { name, number };

    dispatch(addContactRequest());

    axios
      .post("/contacts", contact)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch((error) => dispatch(addContactError(error)));
  };

// export const addContact = createAsyncThunk(
//   "contacts/addContact",
//   async ({ name, number }, { rejectWithValue }) => {
//     try {
//       const response = await axios.post("/contacts", { name, number });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   "contact/deleteContact",
//   async (contactId, { rejectWithValue }) => {
//     try {
//       const response = await axios.delete(`contacts/${contactId}`);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

export const deleteContact = (contactId) => (dispatch) => {
  dispatch(deleteContactRequest());

  axios
    .delete(`contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch((error) => dispatch(deleteContactError(error)));
};

// const contactsOperations = {
//   fetchContacts,
//   addContact,
//   deleteContact,
// };

// export default contactsOperations;
