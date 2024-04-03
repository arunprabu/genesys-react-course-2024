import React from 'react'
import Localized from './Localized'

const AboutPage: React.FC = (props) => {
  console.log(props);

  return (
    <div>
      <h1>Demo of i18n and l10n</h1>
      {/* uncomment the following line if you want to see error boundary */}
      {/* <h2>{props.x()}</h2> */}
      <Localized />
    </div>
  );
}

export default AboutPage