import React, { useState } from "react";
import ReactDOM from "react-dom";

const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};

export function PhoneBookForm(props) {
  const defaultEntry = {
    firstname: "John",
    lastname: "Doe",
    phone: "123",
  };git branch -M main

  const [entryState, setEntryState] = useState(defaultEntry);

  const handleInputChange = (event) => {
    setEntryState({
      ...entryState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form validation 
    props.addContact(entryState);
    setEntryState(defaultEntry);
  };

  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        name="firstname"
        type="text"
        value={entryState.firstname}
        onChange={handleInputChange}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        name="lastname"
        type="text"
        value={entryState.lastname}
        onChange={handleInputChange}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        name="phone"
        type="text"
        value={entryState.phone}
        onChange={handleInputChange}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add Contact"
      />
    </form>
  );
}

export function SortButton(props) {
  const sortedContacts = props.contactsArray;
  // Implement alphabetical sorting
  return sortedContacts;
}

export function InformationTable(props) {
  const contacts = props.contacts;

  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {/* Extract to a table generator hook taking array of objects as input */}
        {contacts.map((contact, index) => (
          <tr key={index}>
            <td style={style.tableCell}>{contact.firstname}</td>
            <td style={style.tableCell}>{contact.lastname}</td>
            <td style={style.tableCell}>{contact.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function Application(props) {
  const contactsArray = [];

  const [contacts, setContacts] = useState(contactsArray);

  const addContact = (newContact) => {
    newContact.id = contacts.length + 1;
    // validate for duplicate entries
    setContacts([...contacts, newContact]);
  };

  return (
    <section>
      <PhoneBookForm addContact={addContact} />
      {/* <SortButton contacts={contacts} /> */}
      <InformationTable contacts={contacts} />
    </section>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));
