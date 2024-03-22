// import TrendingShow from "./TrendingShow";
import { useState } from "react"; // importing hook
import TrendingShow from "./TrendingShow";

const TrendingShowList: React.FC = () => {
  // state -- a component-wide updatable data
  // whenever state is updated UI will re-render to show the updates in JSX
  console.log("1. Program Started");

  const [resolution, setResolution] = useState("HD");
  const [shows] = useState([
    {
      id: 13245,
      trendingRank: 1,
      title: "PlanetEarth",
      thumbnailUrl: "https://placehold.co/400x300/00ffff/000?text=PlanetEarth",
      category: "Infotainment",
      publishedOn: "3 days ago",
      description: "BBC Earth's documentary lorem ipsum something ...."
    },
    {
      id: 4567856978,
      trendingRank: 2,
      title: "Man Vs Wild",
      thumbnailUrl: "https://placehold.co/400x300/ff00ff/000?text=ManVsWild",
      category: "Infotainment",
      publishedOn: "4 days ago",
      description: "Adventure show ipsum something sdg s sd...."
    },
    {
      id: 7897654,
      trendingRank: 3,
      title: "Money Heist",
      thumbnailUrl: "https://placehold.co/400x300/cfcfcf/000?text=MoneyHeist",
      category: "Series",
      publishedOn: "2 weeks ago",
      description: "entertainment series that most people watched...."
    },
  ]);

  // event handle function
  const handleSwitchResolution = () => {
    console.log("Clicked");
    // Here I am updating the state using setResolution
    setResolution('4K');
  };

  console.log("2. Program Ended");
  return (
    <div className="row">
      <h3>
        Enjoy watching the shows in {resolution} |{" "}
        <button
          className="btn btn-sm btn-warning"
          onClick={handleSwitchResolution}
        >
          Switch to 4K
        </button>
      </h3>
      <div className="col-md-3">
        <TrendingShow
          title={shows[0].title}
          trendingRank={shows[0].trendingRank}
          thumbnailUrl={shows[0].thumbnailUrl}
          category={shows[0].category}
          publishedOn={shows[0].publishedOn}
        >
          {shows[0].description}
        </TrendingShow>
      </div>
      <div className="col-md-3">
        <TrendingShow
          title={shows[1].title}
          trendingRank={shows[1].trendingRank}
          thumbnailUrl={shows[1].thumbnailUrl}
          category={shows[1].category}
          publishedOn={shows[1].publishedOn}
        >
          {shows[1].description}
        </TrendingShow>
      </div>
      <div className="col-md-3">
        <TrendingShow
          title={shows[2].title}
          trendingRank={shows[2].trendingRank}
          thumbnailUrl={shows[2].thumbnailUrl}
          category={shows[2].category}
          publishedOn={shows[2].publishedOn}
        >
          {shows[2].description}
        </TrendingShow>
      </div>
      <div className="col-md-3">{/* <TrendingShow /> */}</div>
    </div>
  );
};

export default TrendingShowList;
