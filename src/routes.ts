/**
 *  Constants for routes in the app
 *
 * Use:
 * import { ROUTES, history } from "routes"
 * import { LinkContainer } from "react-router-bootstrap";
 *
 * <LinkContainer to={ROUTES.EXAMPLE}><a>Link to example</a></LinkContainer>
 * <button onClick={() => history.push(ROUTES.EXAMPLE)}>Example button</button>
 */
import { createBrowserHistory } from "history";

export const ROUTES = {
  HOME: "/",
  DOWNLOAD: "/download",
  UPLOAD: "/upload",
  UPLOADING: "/uploading",
  SETTINGS: "/settings",
  PROFILE: "/profile",
  EXAMPLE: "/example",
};

export const history = createBrowserHistory();
