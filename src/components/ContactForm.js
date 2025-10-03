import React, { useState } from "react";
import { addContact } from "../api";

const ContactForm = ({ fetchContacts }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addContact({ name, email, phone });
    setName(""); setEmail(""); setPhone("");
    fetchContacts();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} required />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
