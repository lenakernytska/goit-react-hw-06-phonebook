import React, { Component } from "react";
import ContactForm from "./components/ContactForm"
import ContactList from "./components/ContactList"
import Filter from "./components/Filter";


class App extends Component {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  // addContact = ({ name, number }) => {
  //   const newContact = {
  //     id: shortid.generate(),
  //     name,
  //     number
  //   }
  //   const repeatedContact = this.state.contacts.find(contact => contact.name === newContact.name);
  //   const invalidContact = newContact.name.length === 0 || newContact.number.length === 0;
  //   if (repeatedContact) {
  //     alert(`${newContact.name} is already in contacts!`)
  //   } else if (invalidContact) {
  //     alert("Fill empty fields!");
  //   } else {
  //     this.setState(prevState => ({ contacts: [newContact, ...prevState.contacts] }));
  //   }
    
  // }


  // deleteContact = (contactId) => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact=>contact.id !== contactId),
  //   }))
  // }

  // changeFilter = (event) => {
  //   this.setState({filter: event.currentTarget.value})
  // }

  // getVisibleContacts = () => {
  //   const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact=>contact.name.toLowerCase().includes(normalizedFilter))
  // }

  // componentDidMount() {
  //   const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  //   }
  
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
  //   }
  // }

  render() {
    // const { filter} = this.state;
    // const visibleContacts = this.getVisibleContacts();

    return (
    <div>
  <h1>Phonebook</h1>
        <ContactForm/>
  <h2>Contacts</h2>
        <Filter/>
        <ContactList />
</div>
  )
}

}

export default App;
