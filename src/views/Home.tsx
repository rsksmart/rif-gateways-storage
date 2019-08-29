import React from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "routes";

export default () => (
  <div>
    This should be good enough to start working. There is a{" "}
    <Link to={ROUTES.EXAMPLE}>reference page</Link> with a all the components
    for RIF but not using{" "}
    <a href="https://react-bootstrap.github.io/components/alerts/">
      "react-bootstrap"
    </a>
    .
  </div>
);
