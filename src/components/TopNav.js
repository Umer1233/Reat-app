import React, { useState } from "react";

const TopNav = () => {
  let cssClass = "form-control";
  const [getForm, setForm] = useState({
    form1: {
      name: "Amir LAi",
      email: "gmail@mss",
    },
    form2: {
      age: 0,
      salary: 1000,
    },
  });

  const onValuesChanges = (formName, e) => {
    const { name, value } = e.target;    
    setForm((p) => ({
        ...p, 
        [formName] : {...p[formName] 
            , [name]: value 
        }
    }));
  };

  const handleSubmitEve = (event, formName) => {
    console.log(getForm[formName]);
    
  };

  return (
    <>
      <div className="row">
        
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Log</h5>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    value={getForm.form1.name}
                    name="name"
                    className={cssClass}
                    onChange={(e) => {
                      onValuesChanges("form1", e);
                    }}
                  />
                </div>
                <div className="form-group ">
                  <label>email</label>
                  <input
                    type="email"
                    value={getForm.form1.email}
                    name="email"
                    className={cssClass}
                    onChange={(e) => {
                      onValuesChanges("form1", e);
                    }}
                  />
                </div>
                <div className="form-group mt-1">
                  <button
                    className="btn btn-primary"
                    onClick={(e) => {
                      handleSubmitEve(e, "form1");
                    }}
                  >
                    Submit 1{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Form 2 */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Salary</h5>

                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="number"
                    value={getForm.form2.salary}
                    name="salary"
                    className={cssClass}
                    onChange={(e) => {
                      onValuesChanges("form2", e);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="number"
                    value={getForm.form2.age}
                    name="age"
                    className={cssClass}
                    onChange={(e) => {
                      onValuesChanges("form2", e);
                    }}
                  />
                </div>
                <div className="form-group mt-1">
                  <button
                    className="btn btn-primary"
                    onClick={(e) => {
                      handleSubmitEve(e, "form2");
                    }}
                  >
                    Submit 2{" "}
                  </button>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </>
  );
};

export default TopNav;
