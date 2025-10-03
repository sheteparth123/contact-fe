import React, { useState, useEffect } from "react";
import { getContacts } from "./api";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await getContacts();
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div>
      <h1>Contact Manager</h1>
      <ContactForm fetchContacts={fetchContacts} />
      <ContactList contacts={contacts} fetchContacts={fetchContacts} />
    </div>
  );
}

export default App;
