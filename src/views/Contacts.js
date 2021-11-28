import React from "react";
import Form from "../components/Form";
import Filter from "../components/Filter";
import ContactsList from "components/ContactsList";

export default function Contacts() {
  return (
    <div>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}
