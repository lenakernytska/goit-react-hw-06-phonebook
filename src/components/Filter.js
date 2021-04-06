import React from "react";
import styles from './Filter.module.css';
import { connect } from "react-redux";
import { changeFilter } from "../redux/actions";




const Filter = ({ value, onFilterContact }) => {
  return (  <label className={styles.label}>
          Find contacts by Name
          <input className={styles.input}
            type="text"
            value={value}
            onChange={onFilterContact}
          />
    </label>)
}

const mapStateToProps = state => ({
  value: state.contacts.filter
})

const mapDispatchToProps = dispatch => ({
  onFilterContact: (event)=>dispatch(changeFilter(event.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);