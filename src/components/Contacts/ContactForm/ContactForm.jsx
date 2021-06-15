import React, { Component } from "react";
import PropTypes from "prop-types";
import css from "./ContactForm.module.css";


class AddForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <>
        <form className={css.form} onSubmit={this.onSubmit}>
          <label htmlFor={css.labelStyles}>Name</label>
          <input
            name="name"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label htmlFor={css.labelStyles}>Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleChange}
            value={this.state.number}
          />
          <button type="submit" className={css.btnStyle}>
            Add
          </button>
        </form>
      </>
    );
  }
}

export default AddForm;
