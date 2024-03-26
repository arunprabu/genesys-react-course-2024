const HomePage: React.FC = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <img src="" />
      <h1 className="display-5 fw-bold text-body-emphasis">My Big React App!</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, architecto. Similique aliquam, repudiandae exercitationem adipisci ea, asperiores quidem nemo, ratione magni expedita porro. Voluptate similique neque suscipit dolores, eius illum!
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" 
            className="btn btn-primary btn-lg px-4 gap-3">
            Browse Netflix
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
          >
            Manage Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
