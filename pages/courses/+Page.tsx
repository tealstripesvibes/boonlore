import "./_styles/_page.scss";
import { Head } from "vike-react/Head";
import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import { useMemo } from "react";

export { Page };

function LanguageTitle({ children }: { children: string }) {
  return <a>{children}</a>;
}

function CourseDirection({ children }: { children: string }) {
  return <a>{children}</a>;
}

function Preposition(props: { word: string }) {
  return <>{props.word}</>;
}

function Page() {
  const curricula = useMemo(() => {
    const courseLevel100 = [
      {
        title: "HTML for Agentic Systems",
      },
      {
        title: "CSS for Ebook Formatting",
      },
      {
        title: "JS for DOM Crafting",
      },
      {
        title: "PHP for Form Processing",
      },
    ];
    const courseLevel200 = [
      {
        title: "Data Structures and Algorithms",
      },
      {
        title: "Designing for Clients",
      },
      {
        title: "Organizing Abstraction",
      },
    ];
    const courseLevel300 = [
      {
        title: "Storytelling for Family Occasion",
      },
      {
        title: "Designing Applications for Extended Support",
      },
    ];
    const courseLevel400 = [
      {
        title: "Rust Programming",
      },
      {
        title: "Deno Applications",
      },
    ];
    return {
      100: courseLevel100,
      200: courseLevel200,
      300: courseLevel300,
      400: courseLevel400,
    };
  }, []);
  return (
    <main id="page__courses">
      <Head>
        <title>Courses</title>
      </Head>
      <MainHeader />
      <article>
        <h1>Courses</h1>
        {Object.entries(curricula).map(([level, courses]) => {
          return (
            <section key={level}>
              <header>
                <h3>{level} Level Courses</h3>
              </header>
              <ul>
                {courses.map(({ title }) => {
                  return <li key={title}>{title}</li>;
                })}
              </ul>
            </section>
          );
        })}
      </article>
    </main>
  );
}
