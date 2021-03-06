import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import registerUser from "../strapi/registerUser";
import loginUser from "../strapi/loginUser";
import { UserContext } from "../context/user";

export default function Login() {
  const history = useHistory();

  const { userLogin, alert, showAlert } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("default");
  const [isMember, setIsMember] = useState(true);

  let isEmpty = !email || !password || !username || alert.show;

  const toggleMember = () => {
    setIsMember(prevState => {
      let isMember = !prevState;
      isMember ? setUsername("default") : setUsername("");
      return isMember;
    });
  };
  const handleSubmit = async e => {
    showAlert({ message: "Accessing user data. Please wait..." });
    e.preventDefault();
    let response;
    if (isMember) {
      response = await loginUser({ email, password });
    } else {
      response = await registerUser({ email, password, username });
    }
    if (response) {
      const {
        jwt: token,
        user: { username }
      } = response.data;
      const newUser = { token, username };
      userLogin(newUser);
      showAlert({ message: `You logged in successfully as ${username}` });
      history.push("/products");
    } else {
      showAlert({
        message: "There was an error. Please try again...",
        type: "danger"
      });
    }
  };
  return (
    <section className="form section">
      <h2 className="section-title">{isMember ? "Sign in" : "Register"}</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {!isMember && (
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
        )}
        {isEmpty && (
          <p className="form-empty">Please fill out all form fields</p>
        )}
        {!isEmpty && (
          <button
            className="btn btn-primary btn-block"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
        <p className="register-link">
          {isMember ? "Need to register" : "Already a member"}{" "}
          <button type="button" onClick={toggleMember}>
            click here
          </button>
        </p>
      </form>
    </section>
  );
}
