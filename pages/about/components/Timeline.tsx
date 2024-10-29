import { intrinsicRoutes } from "@identities/routes";

export function Timeline() {
  return (
    <>
      <ul id="timeline">
        <li data-year="2015">
          <a href={intrinsicRoutes.about.href}>2015</a>
          <div>first event</div>
        </li>
        <li data-year="2017">
          <a href={intrinsicRoutes.about.href}>2017</a>
          <div>second event</div>
        </li>
        <li data-year="2023">
          <a href={intrinsicRoutes.about.href}>2023</a>
          <div>third event</div>
        </li>
        <li data-year="2024">
          <a href={intrinsicRoutes.about.href}>2024</a>
          <div>fourth event</div>
        </li>
      </ul>
    </>
  );
}
