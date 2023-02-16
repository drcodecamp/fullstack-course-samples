import { useState } from "react";
import styles from "./event-example.module.css";

const EventExample = () => {
  const [isAuth, setAuth] = useState(false);
  const handleLogin = () => {
    setAuth(!isAuth);
  };
  return (
    <div>
      Hello User!
      {isAuth ? (
        <HomePage logout={handleLogin} />
      ) : (
        <LoginPage login={handleLogin} />
      )}
    </div>
  );
};

const HomePage = ({ logout }) => {
  const [userName, setUsername] = useState("doctor");
  const [userAge, setUserAge] = useState(32);

  const handleAgeChange = (e) => {
    const age = e.target.value;
    setUserAge(age);
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    setUsername(name);
  };

  return (
    <div className={styles.container}>
      Your Profile!
      <div className={styles.title}>My Name is : {userName}</div>
      <div className={styles.title}>My Age is : {userAge}</div>
      <input
        onChange={handleAgeChange}
        type="range"
        min="1"
        max="100"
        value={userAge}
        className={styles.slider}
      />
      <input
        onChange={handleAgeChange}
        value={userAge}
        type="number"
        placeholder="Set your age"
      ></input>
      <input
        onChange={handleNameChange}
        value={userName}
        type="text"
        placeholder="Set your name"
      ></input>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const LoginPage = ({ login }) => {
  return (
    <div>
      <div>Please Log in!</div>
      <div></div>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default EventExample;
