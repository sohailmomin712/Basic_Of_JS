import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { Navigate } from "react-router-dom";
const getUserData = (data) => {
  let userData = JSON.stringify(data);
  return fetch('https://reqres.in/api/login', {
    method: "POST",
    headers: {
      'Content-Type': "application/json"
    },
    body: userData

  }).then((res) => res.json()).then(res => res).catch((err) => {
    console.log(err.message)
  })
};

function Login() {
  const { loginUser, isAuth } = useContext(AppContext);

  const formSubmit = (event) => {
    event.preventDefault();
    let email = document.querySelector('input').value;
    let password = document.querySelector('.password').value;
    getUserData({
      email: email,
      password: password
    }).then((res) => {
      // console.log(isAuth)
      loginUser(res.token);
    });

  };
  if (isAuth) {
    return (
      <Navigate to='/dashboard' />
    );
  };

  return (
    <div>
      <form onSubmit={() => formSubmit(event)} data-testid="login-form">
        <div>
          <label>
            Email
            <input data-testid="email-input" name="email" type="email" placeholder="email" />

          </label>
        </div>
        <div>
          <label>
            Password
            <input
              name="password"

              data-testid="password-input"
              type="password"
              placeholder="password"
              className="password"
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
