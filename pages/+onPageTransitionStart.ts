// https://vike.dev/onPageTransitionStart
import { appClassnames } from "@core/styles/classNames";
import type { OnPageTransitionStartAsync } from "vike/types";
import { PageContext } from "vike/dist/esm/shared/types";
export { onPageTransitionStart };

const onPageTransitionStart: OnPageTransitionStartAsync = async (
  pageContext: PageContext,
): ReturnType<OnPageTransitionStartAsync> => {
  const pageContainer = document.querySelector(
    "#application-container",
  ) as HTMLElement;
  if (!pageContainer) return;

  const nextPathname = pageContext.urlParsed.pathname;
  const currTransitionTo = pageContainer.dataset.transitionTo || "*";

  if (currTransitionTo === nextPathname) return;

  console.log("Page transition start", { pageContext }, nextPathname);

  pageContainer.dataset.transitionFrom = currTransitionTo || "*";
  pageContainer.classList.add(appClassnames.ui.page.transitioning);
  pageContainer.dataset.transitionTo = nextPathname;
};
