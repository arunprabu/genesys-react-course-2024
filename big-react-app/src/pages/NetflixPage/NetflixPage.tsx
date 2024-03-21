import LatestShow from "./LatestShow";
import TrendingShowList from "./TrendingShowList";

const NetflixPage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Netflix App!</h1>
      <h2>Latest Shows | Props Demo</h2>

      <div className="row">
        <div className="col-md-3">
          <LatestShow
            title="Money Heist"
            thumbnailUrl="https://placehold.co/400x300/ffff00/000?text=Money-Heist"
            category="Series"
            publishedOn="a day ago"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </LatestShow>
        </div>
        <div className="col-md-3">
          <LatestShow
            title="IPL 2024 - Match #1"
            thumbnailUrl="https://placehold.co/400x300/ff0000/000?text=IPL2024-Match"
            category="Sports"
            publishedOn="a day ago"
          >
            Aperiam praesentium repellendus enim.
          </LatestShow>
        </div>
        <div className="col-md-3">
          <LatestShow
            title="The Elephant Whisperer"
            thumbnailUrl="https://placehold.co/400x300/0000ff/fff?text=The+Elephant"
            category="Documentary"
            publishedOn="2 days ago"
          >
            Oscar award winning Documentary of 2023
          </LatestShow>
        </div>
        <div className="col-md-3">
          <LatestShow
            title="The Avatar"
            thumbnailUrl="https://placehold.co/400x300/00ff00/000?text=The+Avatar"
            category="Movies"
            publishedOn="2 days ago"
          >
            magni commodi asperiores quas ipsum
          </LatestShow>
        </div>
      </div>

      <hr/>
      <h2>Trending Shows | Props, States and Events Demo</h2>
      <TrendingShowList />
    </div>
  );
};

export default NetflixPage;
