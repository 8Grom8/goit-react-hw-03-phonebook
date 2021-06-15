import { Component } from "react";
import { v4 as uuid } from "uuid";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import List from "./ContactList/ContactList";


class Contact extends Component {
  state = {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  componentDidMount() {
    const items = localStorage.getItem("items");
    if (items) {
      const parsedItems = JSON.parse(items);
      this.setState({ items: parsedItems });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.items !== this.state.items) {
      localStorage.setItem("items", JSON.stringify(this.state.items));
    }
  }
  handleDelete = (id) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => item.id !== id),
    }));
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (term) => {
    const isDuplicate = this.state.items.some(
      (item) => item.name === term.name
    );
    if (isDuplicate) {
      alert("Contact " + term.name);
      return;
    }

    const newContact = {
      id: uuid(),
      name: term.name,
      number: term.number,
    };

    this.setState((prevState) => {
      const newItems = [newContact, ...prevState.items];
      return { items: newItems };
    });
  };

  render() {
    const { items, filter } = this.state;
    const formattedFilter = filter.toLowerCase().trim();
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(formattedFilter)
    );

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={this.handleChange} />
        <List items={filteredItems} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default Contact;
