import React, { useState } from "react";

const LogIn = () => {
  const [isValidate, setvalidate] = useState("form-control");
  const [logIn, setLogIn] = useState({
    name: "",
    email: "",
  });

  const [getTax, setTax] = useState({
    salary: 0,basicSalary :0
  });

  const handleSumbited = (e) => {
    alert("sumbited values");
  };

  const onValuesChanges = (e) => {
    const { name, value } = e.target;
    let hasValue = checkValidation(value);
    if (!hasValue) {
      setvalidate("form-control is-invalid");
    } else {
      setvalidate("form-control");
    }

    setLogIn((preValues) => ({
      ...preValues,
      [name]: value,
    }));

    setTax((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };

  const checkValidation = (value) => {
    return value <= 0 ? false : true;
  };

  return (
    <>
      <div className="row ">
        <div className="col-md-6">
          <h1>Sign In</h1>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="User name"
              value={logIn.name}
              onChange={(e) => onValuesChanges(e)}
              name="name"
            />
            <label>User name</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              placeholder="email@magl.com"
              value={logIn.email}
              onChange={(e) => onValuesChanges(e)}
              name="email"
            />
            <label>email</label>
          </div>
          <div className="form-group">
            <button className="btn btn-primary mt-2" onClick={handleSumbited}>
              Sumbit{" "}
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <h1>Tax Calculator</h1>
          <div className="form-floating">
            <input
              type="number"
              value={getTax.salary}
              name="salary"
              placeholder="enter salary"
              className={isValidate}
              onChange={(e) => {
                onValuesChanges(e);
              }}
            />            
          </div>
          <div className="form-group">
          <label>Basic Salary</label>
          <input type="number" value={getTax.basicSalary} name="basicSalary" onChange={(e) => {onValuesChanges(e)}} className={isValidate} />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
