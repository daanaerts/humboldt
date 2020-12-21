import React, { useState, useEffect } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import Box from "@material-ui/core/Box";

export default function login() {
  const [redirectUri, setRedirectUri] = useState("");
  useEffect(() => {
    setRedirectUri(window.location.origin);
  });

  return (
    <Box>
      <h1>Hello</h1>
      <Auth0Provider
        domain="hackyourfuture.eu.auth0.com"
        clientId="tB63aAp5E5yUtpDzDCSTO1HaEitl61mn"
        redirectUri={redirectUri}
      ></Auth0Provider>
    </Box>
  );
}
