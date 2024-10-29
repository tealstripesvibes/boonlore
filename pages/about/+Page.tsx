import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import "./_about.scss";
import "react-multi-carousel/lib/styles.css";
import { Helmet } from "react-helmet-async";
import { Testimonials } from "./components/Testimonials";
import { Timeline } from "./components/Timeline";
import { MoreLinks } from "./components/MoreLinks";
import { MainLinks } from "./components/MainLinks";
import { Hero } from "./components/Hero";
import { MainFooter } from "@core/components/layout/components/footer/MainFooter";
import { VideoCarousel } from "./components/VideoCarousel";
import { SocialMediaLinks } from "@features/social-media/SocialMedia";

export { Page };

function Page() {
  return (
    <main id="page__about">
      <Helmet>
        <title>About</title>
      </Helmet>
      <MainHeader />
      <article>
        <h1>About</h1>

        <Hero />

        <section>
          <h2>Art</h2>

          <section>
            <h3>Stop-Motion Animation</h3>
            <VideoCarousel />
          </section>
        </section>

        <section>
          <h2>Links</h2>

          <section>
            <h3>Social Media</h3>
            <SocialMediaLinks />
          </section>

          <section>
            <h3>Portfolio Links</h3>
            <MainLinks />
          </section>

          <section>
            <h3>More Links</h3>
            <MoreLinks />
          </section>
        </section>

        <section>
          <h2>About</h2>

          <section>
            <h3>Timeline</h3>
            <Timeline />
          </section>

          <section>
            <h3>Testimonials</h3>
            <Testimonials />
          </section>
        </section>
      </article>
      <MainFooter />
    </main>
  );
}
