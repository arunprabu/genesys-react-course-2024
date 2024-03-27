import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IUser } from "../../models/UserTypes";

const UsersPage: React.FC = () => {
  console.log('1. Program Started');

  // to store users data
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // will be called after initial rendering ONLY
    // not called after state updates
    // ideal place for us to send rest api calls
    console.log("3. Inside useEffect");
    /* 
      How to make REST API calls from the comp?
        1. REST API Endpoint?  https://jsonplaceholder.typicode.com/users
        2. Http Method? GET
        3. REST API Client? fetch api of Native JS, axios [npm i axios] (RECOMMENDED)
    */
    axios
      .get<IUser[]>("https://jsonplaceholder.typicode.com/users")
      .then((res: AxiosResponse<IUser[]>) => {
        // if success
        console.log(res.data);
        // let's update the state
        setUsers(res.data);
      })
      .catch((err) => {
        // if error
        console.log(err);
        setIsError(true);
      })
      .finally( () => {
        console.log('Inside Finally');
        setIsLoading(false);
      });
  }, []); // empty array is a place to have dependency
  //  whenever the dep updated, useEffect will be called

  console.log("2. Paiting UI");
  return (
    <>
      <div className="my-3">
        <div className="position-relative p-2 text-center text-muted bg-body border border-dashed rounded-5">
          <h1 className="text-body-emphasis">User Management App!</h1>
          <p className="col-lg-6 mx-auto mb-4">
            Efficiently manage users with ease using the User Management App!"
          </p>
          <Link className="btn btn-primary px-5 mb-5" to="add">
            Add User
          </Link>
        </div>
      </div>

      <div className="row">
        <h2>List Users</h2>

        {isLoading && (
          <div className="text-center">
            <div className="spinner-border text-success" role="status"></div>
            <p>Please wait while we load users</p>
          </div>
        )}

        {isError && (
          <div className="alert alert-danger">
            Some Error occurred! Try again later!
          </div>
        )}

        {/* lists and keys */}
        {users.map((user: IUser) => {
          return (
            <div className="col-md-3 mt-3" key={user.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">Email: {user.email}</p>
                  <p className="card-text">Phone: {user.phone}</p>
                  <Link to={`/users/${user.id}`}>View Details</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UsersPage;
