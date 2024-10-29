import "./_styles/_page.scss";
import { Helmet } from "react-helmet-async";
import { LogoAnimation } from "@widgets/logo/LogoAnimation";
import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import { MainFooter } from "@core/components/layout/components/footer/MainFooter";
import { SocialMediaLinks } from "@features/social-media/SocialMedia";

export { Page };

function Page() {
  return (
    <main id="page__index">
      <Helmet>
        <title>Hello</title>
      </Helmet>
      <MainHeader />
      <section className="hero">
        <article>
          <h1>Hello.</h1>
          <LogoAnimation />
          <h3>{`{{ tagline }}`}</h3>
        </article>
      </section>
      <section className="overview">
        <SocialMediaLinks />
      </section>
      <MainFooter />
    </main>
  );
}
