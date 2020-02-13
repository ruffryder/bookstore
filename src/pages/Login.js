import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import registerUser from "../strapi/registerUser";
import loginUser from "../strapi/loginUser";

export default function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("default");
  const [isMember, setIsMember] = useState(true);

  let isEmpty = !email || !password || !username;

  const toggleMember = () => {
    setIsMember(prevState => {
      let isMember = !prevState;
      isMember ? setUsername("default") : setUsername("");
      return isMember;
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    let response;
    if (isMember) {
      // response = await loginUser
    } else {
      // response = await registerUser
    }
    if (response) {
    } else {
      // show alert
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
