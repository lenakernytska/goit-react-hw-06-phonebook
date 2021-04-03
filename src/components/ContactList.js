import React from "react";
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { connect } from "react-redux";
import {deleteContact} from "../redux/actions"


const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={styles.list}>
        {
            contacts.map(({ id, name, number }) => (
                <li
                    className={styles.item}
                    key={id}
                >{name}: {number}
                <button className={styles.button} type="button" onClick={()=>onDeleteContact(id)}>Delete</button>
                </li>
            ))
        }
    </ul>
);

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//     })).isRequired,
//     onDeleteContact: PropTypes.func.isRequired,
// };

const getVisibleContacts = (allContacts, filter) => {
const normalizedFilter = filter.toLowerCase();
    return allContacts.filter(contact=>contact.name.toLowerCase().includes(normalizedFilter))
  }

const mapStateToProps = (state) => {
    const {items, filter } = state.contacts;
    const visibleContacts = getVisibleContacts(items, filter);
    return {contacts: visibleContacts}
}

const mapDispatchToProps = dispatch => ({
    onDeleteContact: id=>dispatch(deleteContact(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);