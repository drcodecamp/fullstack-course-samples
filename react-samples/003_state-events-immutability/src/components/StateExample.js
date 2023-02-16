import { useState } from "react";

const StateExample = () => {
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
  const [userName] = useState("doctor");
  const [userAge, setUserAge] = useState(32);
  const increaseAge = () => {
    setUserAge(userAge + 1);
  };
  return (
    <div>
      Your Profile!
      <div>My Name is : {userName}</div>
      <div>My Age is : {userAge}</div>
      <button onClick={increaseAge}>Increase Age!</button>
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

export default StateExample;
