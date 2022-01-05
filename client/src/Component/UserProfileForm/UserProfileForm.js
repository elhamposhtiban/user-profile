import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const UserProfileForm = () => {
  const [fullNameInput, setFullNameInput] = useState("");

  const [emailInput, setEmailInput] = useState("");
  const [descriptionInput, setDescriptioninput] = useState("");

  // console.log(" this is a full name", fullNameInput);
  // console.log("email", emailInput);
  // console.log(" description", descriptionInput);

  useEffect(() => {}, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      UserName: fullNameInput,
      email: emailInput,
      description: descriptionInput,
    };
    setFullNameInput("");
    setEmailInput("");
    setDescriptioninput("");
    console.log("I am here and this is the data", userData);
    try {
      await axios.post("/api", userData);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="user-container">
      <form className="userForm-container" onSubmit={submitHandler}>
        <>
          <input
            type="text"
            className="user-input edit"
            placeholder="Full name!"
            value={fullNameInput}
            name="text"
            onChange={(e) => setFullNameInput(e.target.value)}
          />
          <input
            type="email"
            className="user-input"
            placeholder="Email"
            value={emailInput}
            name="text"
            onChange={(e) => setEmailInput(e.target.value)}
          />

          <textarea
            type="text"
            className="user-input"
            placeholder=" Tell me about yourself!"
            value={descriptionInput}
            name="text"
            onChange={(e) => setDescriptioninput(e.target.value)}
          />
          <button className="todo-button"> Submit</button>
        </>
      </form>
    </div>
  );
};

export default UserProfileForm;
