import axios from 'axios';
import { useState } from 'react';
import FormInput from '../commons/FormInput';

import './Login.css';

function Login() {
  const [user, setUser] = useState({
    nickname: '',
    password: '',
  });

  const handelSubmit = (event) => {
    event.preventDefault();
    console.log('proc', process.env.REACT_APP_BACKEND_URL);
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/auth/signup`, user)
      .then((response) => {
        alert(JSON.stringify(response));
      })
      .catch((error) => alert(JSON.stringify(error)));
  };

  return (
    <form onSubmit={handelSubmit}>
      <FormInput
        label="Nickname"
        name="nickname"
        type="text"
        value={user}
        setValue={setUser}
      />
      <FormInput
        label="Password"
        name="password"
        type="password"
        value={user}
        setValue={setUser}
      />

      <input className="btn-form" type="submit" value="Envoyer" />
    </form>
  );
}

export default Login;
