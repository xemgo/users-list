import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
        return ;
    }
    if(+enteredAge < 1) {
        return;
    }
    setEnteredAge("");
    setEnteredUserName("");
   props.onAddUser(enteredUserName, enteredAge)
  };
  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const userageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">username</label>
        <input
          onChange={usernameChangeHandler}
          id="username"
          type="text"
          value={enteredUserName}
        ></input>
        <label htmlFor="age">age (Years)</label>
        <input
          value={enteredAge}
          onChange={userageChangeHandler}
          id="age"
          type="text"
        ></input>
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
