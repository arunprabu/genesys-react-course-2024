import React from "react";
import { Link } from "react-router-dom";

const AddUser: React.FC = () => {
  return (
    <div className="row">
      <h1>
        <Link to="/users" className="btn btn-link">
          &lt; Go Back
        </Link>
        Add User
      </h1>
      
      <form className="col-md-6 offset-md-3">
        <div className="form-group row mb-3">
          <label className="col-sm-2 col-form-label" htmlFor="nameInput">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              id="nameInput"
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="phoneInput" className="col-sm-2 col-form-label">
            Phone
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              id="phoneInput"
              className="form-control"
              placeholder="Enter Phone"
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="emailInput" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              id="emailInput"
              className="form-control"
              placeholder="Enter Email"
            />
          </div>
        </div>

        <div className="alert alert-success">Saved Successfully</div>

        <div className="alert alert-danger">
          Some Error Occurred. Try again later!
        </div>

        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
