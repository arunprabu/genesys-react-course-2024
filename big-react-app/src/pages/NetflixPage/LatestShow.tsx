interface LatestShowProps {
  title: string;
  thumbnailUrl: string;
  category: string;
  publishedOn: string;
  children: string;
}

const LatestShow: React.FC<LatestShowProps> = (props) => {
  // receiving the data from parent component
  console.log(props);
  /* 
    props are objects 
    props can have children
    props are read-only
  */

  return (
    <div className="card">
      <img
        src={props.thumbnailUrl}
        className="card-img-top"
        alt={props.title}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.children}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.category}</li>
        <li className="list-group-item">published {props.publishedOn}</li>
      </ul>
      <div className="card-body">
        <a href="#" className="btn btn-primary">
          Watch Now
        </a>
      </div>
    </div>
  );
};

export default LatestShow;
