import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";

import { ROUTES } from "routes";

export default () => (
  <div>
    This should be good enough to start working. There is a{" "}
    <LinkContainer to={ROUTES.EXAMPLE}>
      <Button variant="link">reference page</Button>
    </LinkContainer>{" "}
    with a all the components for RIF but not using "react-bootstrap".
  </div>
);
