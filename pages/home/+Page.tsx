import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import "./_styles/_page.scss";
import { IDispositionName } from "@identities/dispositions/types";
import { useDisposition } from "@widgets/disposition/Disposition";
import { Helmet } from "react-helmet-async";
import { extrinsicRoutes } from "@identities/routes/domains/extrinsicRoutes";
import { MainFooter } from "@core/components/layout/components/footer/MainFooter";

export { Page };

function ActionButton({
  text = import.meta.env.VITE_PROJECT_NAME,
  site = "lore",
}: {
  text?: string;
  site?: IDispositionName;
}) {
  const [disposition, setDisposition] = useDisposition();
  return (
    <button
      onClick={() => {
        setDisposition(site);
      }}
      className="action-button"
    >
      {text}
    </button>
  );
}

function Page() {
  return (
    <main id="page__home">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <MainHeader />
      <article>
        <h1>Hello</h1>

        <section>
          <h3>
            <ActionButton site="bone" text="Links" />
          </h3>
          <ul>
            <li>
              <a href={extrinsicRoutes.lore_land.href}>lore.land</a>
            </li>
          </ul>
        </section>

        <section>
          <h3>
            <ActionButton site="boon" text="Emphasis" />
          </h3>
          <ul>
            <li>Software Architecture</li>
            <li>UI/UX Design</li>
            <li>Brand Management</li>
          </ul>
          <h4>
            <ActionButton site="honk" text="Honk" />
          </h4>
        </section>
      </article>
      <MainFooter />
    </main>
  );
}
