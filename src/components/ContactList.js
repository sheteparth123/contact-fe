import React from "react";
import { deleteContact } from "../api";

const ContactList = ({ contacts, fetchContacts }) => {
  const handleDelete = async (id) => {
    await deleteContact(id);
    fetchContacts();
  };

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} - {contact.email} - {contact.phone}
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
