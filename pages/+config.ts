import vikeReact from "vike-react/config";
import { Config } from "vike/types";
import Layout from "../src/layouts/Layout";
import Head from "../src/layouts/Head";

export default {
  Layout,
  Head,
  extends: vikeReact,
  passToClient: ["routeParams"],
} satisfies Config;
