import React from "react";
import { useState } from "react";

const MutateExample = () => {
  const [user, setUser] = useState({
    name: "doctor",
    age: 22,
  });

  // 1st Wrong way to update the state! if we do so age property
  // Will be gone!

  /*  const handleNameChange = (e) => {
    setUser({
      name: e.target.value,
    })
  }*/

  // 2nd Wrong way to update the state! we must do it and return NEW OBJECT!

  /*  const handleNameChange = (e) => {
    user.name = e.target.value
  }*/

  // The right way to update the state
  const handleNameChange = (e) => {
    const name = e.target.value;
    setUser({
      ...user,
      name,
    });
  };

  return (
    <div>
      <div>user name is : {user.name} </div>
      <div>user age is : {user.age} </div>
      <input
        onChange={handleNameChange}
        value={user.name}
        type="text"
        placeholder="Set your name"
      ></input>
    </div>
  );
};
export default MutateExample;
