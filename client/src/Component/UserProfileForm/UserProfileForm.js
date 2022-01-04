import React, { useState } from "react";
import "./style.css";

const UserProfileForm = () => {
  const [fullNameInput, setFullNameInput] = useState("");

  const [emailInput, setEmailInput] = useState("");

  console.log(" this is a full name", fullNameInput);

  return (
    <div className= 'user-container'>
      <form className="userForm-container">
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
          <button className="todo-button"> Submit</button>
        </>
      </form>
    </div>
  );
};

export default UserProfileForm;
