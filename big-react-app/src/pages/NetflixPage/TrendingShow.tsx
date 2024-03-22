interface TrendingShowProps {
  id?: number; // id is optional
  trendingRank: number;
  title: string;
  thumbnailUrl: string;
  category: string;
  publishedOn: string;
  children: string;
}

const TrendingShow: React.FC<TrendingShowProps> = ({
  title,
  trendingRank,
  thumbnailUrl,
  category,
  publishedOn,
  children,
}) => {
  return (
    <div className="card">
      <img src={thumbnailUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <span className="badge rounded-pill text-bg-dark">
          Trending at #{trendingRank}
        </span>
        <p className="card-text">{children}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{category}</li>
        <li className="list-group-item">published {publishedOn}</li>
      </ul>
      <div className="card-body">
        <button className="btn btn-success">Add to Watchlist -- N/A</button>
      </div>
    </div>
  );
};

export default TrendingShow;
