import React, { useState } from "react";

const LogIn = () => {
  const [logIn, setLogIn] = useState({
    name: "",
    email: "",
  });

  const handleSumbited = (e) => {
    alert("sumbited values");
  };

  const onValuesChanges = (e) => {
    const { name, value } = e.target;
    setLogIn((preLogin) => ({
      ...preLogin,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="form-group">
        <label className="contol-label">User</label>
        <input
          type="text"
          className="form-control"
          placeholder="enter user name"
          value={logIn.name}
          onChange={(e) => onValuesChanges(e)}
          name="name"
        />
      </div>
      <div className="form-group">
        <label className="contol-label">email</label>
        <input
          type="email"
          className="form-control"
          placeholder="email@magl.com"
          value={logIn.email}
          onChange={(e) => onValuesChanges(e)}
          name="email"
        />
      </div>
      <div className="form-group">
        <button className="btn btn-primary" onClick={handleSumbited}>
          Sumbit
        </button>
      </div>
    </>
  );
};

export default LogIn;
