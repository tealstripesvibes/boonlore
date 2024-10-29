import { RouteProps } from "react-router";

type IRouteConfig = { prefix: string; path: RouteProps["path"] };
export type IRouteConfigMap = { [key: string]: IRouteConfig };
