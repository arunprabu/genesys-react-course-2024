import { Link } from "react-router-dom";

const UsersPage: React.FC = () => {
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

        <div className="text-center">
          <div className="spinner-border text-success" role="status"></div>
          <p>Please wait while we load users</p>
        </div>

        <div className="alert alert-danger">
          Some Error occurred! Try again later!
        </div>

        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">John</h5>
              <p className="card-text">Email: j@k.com</p>
              <p className="card-text">Phone: 23456478</p>
              <Link to={`/users/1`}>View Details</Link>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">John</h5>
              <p className="card-text">Email: j@k.com</p>
              <p className="card-text">Phone: 23456478</p>
              <Link to={`/users/1`}>View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
