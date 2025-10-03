import axios from "axios";

// Backend URL (use localhost for dev)
const API_BASE_URL = "http://localhost:8080/api/contacts";

export const getContacts = () => axios.get(API_BASE_URL);
export const addContact = (contact) => axios.post(API_BASE_URL, contact);
export const deleteContact = (id) => axios.delete(`${API_BASE_URL}/${id}`);
