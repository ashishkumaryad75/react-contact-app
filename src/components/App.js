import { React, useState, useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import AddContact from "./AddContact.js";
import ContactList from "./ContactList.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  function addContactHandler(contact) {
    setContacts([...contacts, contact]);
    console.log("contact----->", contact);
  }

  function removeContactHandler(id) {
    const newContactList = contacts.filter((contact) => {
      return contact.id != id;
    });
    setContacts(newContactList);
  }

  useEffect(() => {
    const retirvedContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retirvedContacts) {
      setContacts(retirvedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    // localStorage.clear();
  }, [contacts]);

  return (
    <>
      <div className="ui container">
        <Router>
          <Header />
          <Route path="/" element={<ContactList />} />
          {/* <Route index element={<Home />} /> */}
          <Route path="add" element={<AddContact />} />

          {/* <Routes path="/add" navigate={AddContact} />
            <Routes path="/" navigate={ContactList} /> */}
          {/* </Route> */}
          {/* <AddContact addContactHandler={addContactHandler} />
          <ContactList
            contacts={contacts}
            getContactId={removeContactHandler}
          /> */}
        </Router>
      </div>
    </>
  );
}

export default App;
