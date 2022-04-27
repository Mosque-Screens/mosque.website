import React, { useEffect } from "react";
import mosques from '../data/mosques.yml'

function Donate(props) {
  useEffect(() => {
    if (props.data.donation) window.location.href = props.data.donation.link;
  }, []);

  return (
    <div>
      <h1>Redirecting you to the donation page</h1>
    </div>
  );
}

Donate.getInitialProps = async ({ req }) => {
  const data = mosques[ req.headers.host ] ?? mosques[ "default" ]

  return { data: data }
}

export default Donate
