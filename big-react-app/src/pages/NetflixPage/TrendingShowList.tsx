// import TrendingShow from "./TrendingShow";
import { useState } from "react"; // importing hook

const TrendingShowList: React.FC = () => {
  // state -- a component-wide updatable data
  // whenever state is updated UI will re-render to show the updates in JSX
  console.log('1. Program Started');

  const [ resolution, setResolution ] = useState('HD');
  // console.log(resolution); // getter 
  // console.log(setResolution); // setter to update the data of the getter

  // event handle function
  const handleSwitchResolution = () => {
    console.log("Clicked");
    // Here I am updating the state using setResolution
    setResolution("4K");
  }

  console.log("2. Program Ended");
  return (
    <div className="row">
      <h3>
        Enjoy watching the shows in {resolution} |{" "}
        <button 
          className="btn btn-sm btn-warning" 
          onClick={handleSwitchResolution}
        >Switch to 4K</button>
      </h3>
      <div className="col-md-3">{/* <TrendingShow /> */}</div>
      <div className="col-md-3">{/* <TrendingShow /> */}</div>
      <div className="col-md-3">{/* <TrendingShow /> */}</div>
      <div className="col-md-3">{/* <TrendingShow /> */}</div>
    </div>
  );
};

export default TrendingShowList;
