import { useState } from "react";

interface SocialMediaProps {
  name: string;
  followersCount: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ name, followersCount }) => {
  const [countryName, setCountryName] = useState("India");

  return (
    <div>
      <h2>Social Media Info!!</h2>
      <h3 className="text-center">
        Demo of Testing Props, States, Events, JSX, Styles, Snapshot Testing
      </h3>

      <p>Top Social Media Platform of Genesys</p>
      <p data-testid="followersDetails" style={{ backgroundColor: "#ffff00" }}>
        {name} with {followersCount} followers
      </p>

      <input
        type="text"
        placeholder="Enter Country Name"
        value={countryName}
        onChange={(event) => {
          setCountryName(event.target.value);
        }}
      />
      <p data-testid="websiteInfo">Visit Genesys {countryName} Website</p>
    </div>
  );
};

export default SocialMedia;
