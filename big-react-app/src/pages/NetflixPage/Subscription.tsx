/*
  Styling in React JS 
  ----
    0. global styles in index.css
    1. External Style for components [NOT Recommended]
    2. Internal Style 
    3. Inline Style
    4. CSS Modules [RECOMMENDED] [TODO]
    5. styled-components or @emotion [TRY IT OUT]
*/
import React from 'react';
import './Subscription.css'; // importing external css

const Subscription: React.FC = React.memo(() => {
  console.log('Is it Re-Rendering');
  const subscriptionStyles = {
    renewStyles: {
      backgroundColor: "yellow",
      color: "#000",
      padding: "20px",
      border: "solid 7px green",
      borderRadius: "10px",
    },
    renewBtnStyles: {
      backgroundColor: "#c4c",
      color: "#fff",
      padding: '10px 25px'
    }
  }

  return (
    // using external css class from bootstrap
    <div className="text-center">
      {/* External Styles -- WILL MAKE IMPACT APP WIDE */}
      <h3 className="subscription-info">
        You are an Active Subscriber of Netflix Pro
      </h3>
      {/* Inline styles --NEVER EVER TRY THIS IN LISTS & KEYS */}
      <p
        style={{
          backgroundColor: "red",
          color: "#fff",
          padding: "20px",
          border: "solid 7px darkred",
          borderRadius: "10px",
        }}
      >
        Your Subscription Ends in 2 Weeks
      </p>
      {/* Internal Styles */}
      <p style={subscriptionStyles.renewStyles}>
        Renew Now to get 50% discount. Use Coupon Code: OFFER50 during checkout
      </p>
      <button style={subscriptionStyles.renewBtnStyles}>RENEW NOW</button>
    </div>
  );
})

export default Subscription