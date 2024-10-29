import { loggerClassnames } from "./dev";

export const appClassnames = {
  states: {
    active: "active",
    inactive: "inactive",
    userLoggedIn: "user-logged-in",
    isWidget: "widget",
  },
  ui: {
    page:         {
      active:        'page-active',
      inactive:      'page-inactive',
      transitioning: 'page-transitioning',
    },
  },
  requirements: {
    feature: "feature-requirements",
    login: "must-login",
  },
  widgets: {
    dev: {
      logger: loggerClassnames,
    },
    user: {
      logout: "logout-button",
    },
  },
  permissions: {
    viewSite: "can-view-site",
  },
  services: {
    features: {
      component: "feature",
    },
  },
};
