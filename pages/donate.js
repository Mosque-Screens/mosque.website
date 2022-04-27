import React, { useEffect } from "react"
import Head from 'next/head'
import mosques from '../data/mosques.yml'

function Donate(props) {
  useEffect(() => {
    if (props.data.donation) window.location.href = props.data.donation.link;
  }, []);

  return (
    <>
      <Head>
        <title>Donate to {props.data.name}</title>
      </Head>
      <div className="mx-auto py-10 px-4 max-w-7xl sm:px-6 lg:px-8 items-center">
        <img
          className="h-16 w-auto mx-auto"
          src={props.data.branding.logo_url}
        />
        <h1 class="mx-auto w-auto text-lg text-center my-5">Redirecting you to the donation page...</h1>
      </div>
    </>
  );
}

Donate.getInitialProps = async ({ req }) => {
  const data = mosques[ req.headers.host ] ?? mosques[ "default" ]

  return { data: data }
}

export default Donate
