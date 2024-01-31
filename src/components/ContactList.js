import React from "react";
import ContactCard from "./ContactCard.js";
export default function ContactList(props) {
  function deleteContactHandler(id) {
    props.getContactId(id);
  }

  const contacts = [{ id: "1", name: "sharma", email: "sharma12@gmail.com" }];

  console.log(props);

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        clickHandler={deleteContactHandler}
      />
    );
  });

  return <div className="ui celled list">{renderContactList}</div>;
}
