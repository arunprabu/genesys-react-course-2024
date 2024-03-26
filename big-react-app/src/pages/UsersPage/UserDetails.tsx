import React from "react";
import { Link } from "react-router-dom";

const UserDetails: React.FC = () => {
  return (
    <>
      <h1>User Details</h1>
      <Link to="/users" className="btn btn-link">
        Go Back
      </Link>
      <div className="card">
        <div className="card-header">You are seeing details of User ID: 1</div>
        <div className="card-body">
          <h5 className="card-title">Name: John</h5>
          <p className="card-text">E-Mail: j@k.com</p>
          <p className="card-text">Phone: 435678945</p>

          <div>
            <Link to="edit" className="btn btn-primary">
              Edit
            </Link>
            <button
              type="button"
              className="btn btn-outline-danger"
              data-bs-toggle="modal"
              data-bs-target="#deleteUserModal"
            >
              Delete (TODO)
            </button>
            <div
              className="modal fade"
              id="deleteUserModal"
              tabIndex={-1}
              aria-labelledby="deleteUserModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Delete User
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <p>Are you sure you want to delete the User?</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      No
                    </button>
                    <button type="button" className="btn btn-danger">
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
