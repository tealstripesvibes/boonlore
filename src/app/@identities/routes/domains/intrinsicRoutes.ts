import { AppRoute } from "../types/linkConfig";

const mainRootRoute: AppRoute = <const>{
  id: "scene__root",
  title: import.meta.env.VITE_PROJECT_NAME || "..",
  href: "/",
  absolutePath: "/*",
  subConfigMap: {},
  intent: ["welcome"],
};
const mainHomeRoute: AppRoute = <const>{
  id: "scene__home",
  href: "/home",
  title: "Home",
  absolutePath: "/home",
  subConfigMap: {},
  intent: ["welcome"],
};
const mainAboutRoute: AppRoute = <const>{
  id: "scene__about",
  href: "/about",
  title: "About",
  absolutePath: "/about",
  subConfigMap: {},
  intent: ["welcome"],
};
const mainContactRoute: AppRoute = <const>{
  id: "scene__contact",
  href: "/contact",
  title: "Contact",
  absolutePath: "/contact",
  subConfigMap: {},
  intent: ["welcome"],
};
const mainCoursesRoute: AppRoute = <const>{
  id: "scene__courses",
  href: "/courses",
  title: "Courses",
  absolutePath: "/courses",
  subConfigMap: {},
  intent: ["welcome"],
};
const mainRecipesRoute: AppRoute = <const>{
  id: "scene__recipes",
  href: "/recipes",
  title: "Recipes",
  absolutePath: "/recipes",
  subConfigMap: {},
  intent: ["welcome"],
};
const mainServicesRoute: AppRoute = <const>{
  id: "scene__services",
  href: "/services",
  title: "Services",
  absolutePath: "/services",
  subConfigMap: {},
  intent: ["welcome"],
};
const mainShopRoute: AppRoute = <const>{
  id: "scene__shop",
  href: "/shop",
  title: "Shop",
  absolutePath: "/shop",
  subConfigMap: {},
  intent: ["welcome"],
};
const mainArticlesRoute: AppRoute = <const>{
  id: "scene__articles",
  href: "/articles",
  title: "Articles",
  absolutePath: "/articles",
  subConfigMap: {
    learning: {
      id: "scene__articles--learning",
      href: "/articles/learning",
      absolutePath: "/articles/learning",
      title: "Learning",
      subConfigMap: {},
      intent: ["welcome"],
    } satisfies AppRoute,
  },
  intent: ["welcome"],
};
const mainTutorialsRoute: AppRoute = <const>{
  id: "scene__tutorials",
  href: "/tutorials",
  title: "Tutorials",
  absolutePath: "/tutorials",
  subConfigMap: {},
  intent: ["welcome"],
};
const mainDemosRoute: AppRoute = <const>{
  id: "scene__demos",
  href: "/demos",
  title: "Demos",
  absolutePath: "/demos",
  subConfigMap: {},
  intent: ["welcome"],
};
const mainTipsRoute: AppRoute = <const>{
  id: "scene__tips",
  href: "/tips",
  title: "Tips",
  absolutePath: "/tips",
  subConfigMap: {},
  intent: ["welcome"],
};

export const mainOnRoute = (<const>{
  id: "scene__on",
  href: "/on",
  title: "On",
  absolutePath: "/on",
  subConfigMap: {},
}) satisfies AppRoute;

export const intrinsicRoutes = {
  index: mainRootRoute,
  about: mainAboutRoute,
  articles: mainArticlesRoute,
  contact: mainContactRoute,
  courses: mainCoursesRoute,
  demos: mainDemosRoute,
  home: mainHomeRoute,
  recipes: mainRecipesRoute,
  services: mainServicesRoute,
  shop: mainShopRoute,
  tips: mainTipsRoute,
  tutorials: mainTutorialsRoute,
};

export const internalRoutes = {
  on_: mainOnRoute,
  fantasyTitleGenerator: {
    id: "scene__fantasyTitleGenerator",
    href: "/play/generators/title/fantasy/",
    title: "Fantasy Title Generator",
    absolutePath: "/play/generators/title/fantasy/",
    subConfigMap: {},
  } as AppRoute,
};
