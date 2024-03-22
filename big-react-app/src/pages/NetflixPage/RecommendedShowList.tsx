import { useState } from "react";

interface IShow {
  id: number;
  title: string;
  thumbnailUrl: string;
  category: string;
  publishedOn: string;
  description: string;
  isInWatchlist: boolean;
}

const RecommendedShowList: React.FC = () => {
  const [shows, setShows] = useState<IShow[]>([
    {
      id: 66456364,
      title: "PlanetEarth II",
      thumbnailUrl:
        "https://placehold.co/400x300/00ffff/000?text=PlanetEarth-II",
      category: "Infotainment",
      publishedOn: "1 day ago",
      description: "BBC Earth's documentary lorem ipsum something ....",
      isInWatchlist: true,
    },
    {
      id: 6547456756,
      title: "Random Movie",
      thumbnailUrl: "https://placehold.co/400x300/ff00ff/000?text=RandomMovie",
      category: "Infotainment",
      publishedOn: "4 days ago",
      description: "Random show ipsum something sdg s sd....",
      isInWatchlist: false,
    },
    {
      id: 3452354,
      title: "Ronaldo - The Legend",
      thumbnailUrl:
        "https://placehold.co/400x300/cfcfcf/000?text=Ronaldo-TheLegend",
      category: "Sports",
      publishedOn: "1 year ago",
      description: "a show on legendary footballer Ronaldo...",
      isInWatchlist: false,
    },
  ]);

  // Conditional Rendering outside JSX
  if(shows && shows.length == 0) {
    return (
      <div className="alert alert-warning" role="alert">
        No Recommended Videos Found! Try watching more vidoes to recommend based on your interest!
      </div>
    );
  }

  const handleManageWatchlist = (index: number) => {
    console.log(index);
    console.log("Inside handleManageWatchlist");
    // Never Directly mutate state -- use setter 
    // Updating the state immutably
    const duplicateShows = [...shows]; 
    duplicateShows[index].isInWatchlist = !duplicateShows[index].isInWatchlist; 
    console.log(duplicateShows);
    setShows(duplicateShows);
  }

  return (
    <div className="row">
      {/* lists a.k.a looping */} 
      {shows.map((show, index) => {
        return (
          // Make the following as child comp -- RecommendedShow
          <div
            className="col-md-3"
            key={show.id}
            callback={handleManageWatchlist}
          >
            <div className="card">
              <img
                src={show.thumbnailUrl}
                className="card-img-top"
                alt={show.title}
              />
              <div className="card-body">
                <h5 className="card-title">{show.title}</h5>
                <p className="card-text">{show.description}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{show.category}</li>
                <li className="list-group-item">
                  published {show.publishedOn}
                </li>
              </ul>
              <div className="card-body">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    handleManageWatchlist(index); // passing param to event handler
                  }}
                >
                  {/* Conditional Rendering inside JSX */}
                  {show.isInWatchlist ? "In Watchlist" : "Add to Watchlist"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
      
    </div>
  );
};

export default RecommendedShowList;
