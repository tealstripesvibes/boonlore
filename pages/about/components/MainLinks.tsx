import { intrinsicRoutes } from "@identities/routes";
import { internalRoutes } from "@identities/routes/domains/intrinsicRoutes";
import { extrinsicRoutes } from "@identities/routes/domains/extrinsicRoutes";

export function MainLinks() {
  return (
    <>
      <ul>
        {Object.entries(extrinsicRoutes).map(([title, object]) => {
          return (
            <li>
              <a href={object.absolutePath}>{object.title}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
