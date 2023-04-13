import React, { useState, Fragment, useRef } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import classes from './AddUser.module.css'

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState(null);

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title:"Invalid Input", 
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if(+enteredAge < 1) {
      setError({
        title:"Invalid Age", 
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onNewUser({name: enteredUsername, age: enteredAge, id: Math.random().toString()});
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  }

  const errorClickHandler = () => {
    setError(null);
  }

  return (
    <Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onClick={errorClickHandler}/> }
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input 
            id="username" 
            type="text" 
            ref={nameInputRef}
          />

          <label htmlFor="age">Age (Years)</label>
          <input 
            id="age" 
            type="number" 
            min={0} 
            step={1} 
            ref={ageInputRef}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
}

export default AddUser;