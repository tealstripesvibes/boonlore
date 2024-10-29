// https://vike.dev/onPageTransitionEnd
import { appClassnames } from "@core/styles/classNames";
import type { OnPageTransitionEndAsync } from "vike/types";
export { onPageTransitionEnd };

const onPageTransitionEnd: OnPageTransitionEndAsync = async (
  pageContext,
): ReturnType<OnPageTransitionEndAsync> => {
  setTimeout(() => {
    console.log(
      "Page transition end",
      { pageContext },
      pageContext.urlParsed.pathname,
    );
    document
      .querySelector("#application-container")!
      .classList.remove(appClassnames.ui.page.transitioning);
  }, 500);
};
