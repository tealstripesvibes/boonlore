export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export const GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_URL;
export const IS_AUTHENTICATED_URL =
  BACKEND_URL + "/current/user/is_authenticated";
