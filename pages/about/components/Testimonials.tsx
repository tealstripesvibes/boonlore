import { intrinsicRoutes } from "@identities/routes";

export function Testimonials() {
  return (
    <>
      <figure>
        <blockquote>
          it would certainly make sense to use a real quote
        </blockquote>
        <figcaption>
          <a href={intrinsicRoutes.about.href}>quote author</a>
        </figcaption>
      </figure>
    </>
  );
}
