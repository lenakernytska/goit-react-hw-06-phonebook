import React, { Component } from "react";
import styles from './ContactForm.module.css'
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import{addContact} from "../redux/actions";

class ContactForm extends Component{
 static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    }

state = {
  name: '',
  number: ''
    }

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    };
    
    handleSubmit = event => {
    event.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({ name: '', number: ''})
  };
    
    render() {
        const { name, number } = this.state;
        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
                    Name
         <input
                className={styles.input}
                type="text"
                name="name"
                value={name}
                autoComplete="off"
                onChange={this.handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
/>
                </label>
                 <label className={styles.label}>
                    Number
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            value={number}
            autoComplete="off"
            onChange={this.handleChange}
          />
        </label>

        <button  className={styles.button} type="submit">Add contact</button>
      </form>
        )
    }
}


const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number)=>dispatch(addContact(name, number))
})

export default connect(null, mapDispatchToProps)(ContactForm);