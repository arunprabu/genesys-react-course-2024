import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IUser } from "../../models/UserTypes";

const UserDetails: React.FC = () => {
  // TODO: implement loader and error handling
  const [user, setUser] = useState<IUser>();
  // Let's read the url param using react-router-dom
  const { userId } = useParams();
  // Let's read the query param
  // const [queryParams] = useSearchParams();
  // console.log(queryParams.get('ref'));

  const getUserDetails = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      // Handle errors
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("Inside useEffect");

    getUserDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>User Details</h1>
      <Link to="/users" className="btn btn-link">
        Go Back
      </Link>
      <div className="card">
        <div className="card-header">
          You are seeing details of User ID: {user?.id}
        </div>
        <div className="card-body">
          <h5 className="card-title">Name: {user?.name}</h5>
          <p className="card-text">E-Mail: {user?.email}</p>
          <p className="card-text">Phone: {user?.phone}</p>

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
