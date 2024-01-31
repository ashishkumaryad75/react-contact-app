import { React, useState } from "react";
import nextId from "react-id-generator";

export default function AddContact(props) {
  const [users, setUsers] = useState({
    name: "",
    email: "",
    id: "",
  });
  const htmlId = nextId();

  const submitHandler = (e) => {
    e.preventDefault();
    if (users.name === "" || users.email === "") {
      alert("All the fields are mandatory");
      return;
    }
    console.log("user data ==>", users);
    props.addContactHandler(users);
    setUsers({ name: "", email: "" });
  };

  return (
    <div className="ui main width-form">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={submitHandler}>
        <div className="field">
          <label htmlFor={htmlId}>Name</label>
          <input
            type="text"
            name="name"
            id={htmlId}
            placeholder="Enter Name"
            value={users.name}
            onChange={(e) => {
              setUsers({ ...users, name: e.target.value, id: e.target.id });
            }}
          />
        </div>
        <div className="ui field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            value={users.email}
            onChange={(e) => {
              setUsers({ ...users, email: e.target.value });
            }}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
}
