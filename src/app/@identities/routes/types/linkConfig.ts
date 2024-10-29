export type AppFocalPoint =
  | "welcome"
  | "*";

const daySchedule = {
  Sunday: ["welcome"],
  Monday: ["welcome"],
  Tuesday: ["welcome"],
  Wednesday: ["welcome"],
  Thursday: ["welcome"],
  Friday: ["welcome"],
  Saturday: ["welcome"],
} satisfies { [key: string]: AppFocalPoint[] };

export function useCurrentIntent() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ] as (keyof typeof daySchedule)[];
  return daySchedule[daysOfWeek[new Date().getDay()]];
}

export function useRouteSubset(routes: AppRouteDict) {
  const currentIntent = useCurrentIntent();
  return Object.values(routes).filter(
    getRouteIntentFilterSync("*", ...currentIntent),
  );
}

/**
 * Return a boolean filter based on a set of intents
 * @param foci
 */
export function getRouteIntentFilterSync(...foci: AppFocalPoint[]) {
  return (route: AppRoute) => {
    for (let routeIntent of route.intent || []) {
      if (foci.includes(routeIntent)) return true;
    }
    return false;
  };
}

export type AppRoute = {
  id: string;
  href: string;
  title?: string;
  intent?: AppFocalPoint[];
  absolutePath: string;
  subConfigMap: AppRouteDict;
};

export type AppRouteDict = { [key: string]: AppRoute };
