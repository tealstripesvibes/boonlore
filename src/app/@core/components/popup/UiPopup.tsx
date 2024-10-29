import React, { ReactElement, useContext, useEffect, useRef } from "react";
import "./_styles/_popup.scss";
import { UiContext } from "@core/context/UiContext";
import { usePageContext } from "vike-react/usePageContext";

export interface UiPopup {
  id: string;
  title: string;
  Component: () => ReactElement;
}

export type UiOpenPopupAction = {
  type: "open-ui-popup";
  popup: UiPopup;
  id: string;
};

export type UiClosePopupAction = { type: "close-ui-popup"; id: string };
export type UiClearPopupsAction = { type: "clear-ui-popups" };

interface UiPopupsParams {
  popups: UiPopup[];
}

interface PopupProps extends UiPopup {
  forId?: string;
  openImmediately?: boolean;
}

export function Popup({ openImmediately = false, ...popup }: PopupProps) {
  const pageContext = usePageContext();
  const { dispatch } = useContext(UiContext);

  // Open popup if the URL hash matches the popup's forId or if openImmediately is true
  useEffect(() => {
    const currentHash = pageContext.urlParsed.hash;
    if (openImmediately || currentHash === `${popup.forId}`) {
      openPopup();
    }

    // Hash change listener for dynamic route sensitivity
    const onHashChange = () => {
      const newHash = window.location.hash;
      if (newHash === `#${popup.forId}`) {
        openPopup();
      }
    };

    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [pageContext.urlParsed.hash]);

  const openPopup = () => {
    // Update URL hash for popup if needed
    if (popup.forId) {
      window.location.hash = popup.forId;
    }
    dispatch({
      type: "open-ui-popup",
      id: popup.id,
      popup,
    });
  };

  return (
    !openImmediately && (
      <button onClick={openPopup} aria-label={`Open ${popup.title} popup`}>
        {popup.title}
      </button>
    )
  );
}

export function PopupActionLink({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children?: React.ReactNode;
}) {
  const { dispatch } = useContext(UiContext);

  const clearPopups = () => dispatch({ type: "clear-ui-popups" });

  return (
    <a href={href} onClick={clearPopups} aria-label={`Navigate to ${title}`}>
      {title}
      {children}
    </a>
  );
}

export function UiPopups({ popups }: UiPopupsParams) {
  const { dispatch } = useContext(UiContext);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const clearPopups = () => {
    window.location.hash = "";
    dispatch({ type: "clear-ui-popups" });
  };

  useEffect(() => {
    if (stageRef.current) stageRef.current.focus();
  }, [popups.length]);

  if (!popups.length) return null;

  return (
    <section
      className="ui--popup__stage"
      tabIndex={-1}
      ref={stageRef}
      aria-hidden={popups.length === 0}
    >
      <div className="ui--popup__wrapper" tabIndex={-1}>
        <ul className="ui--popup__container" aria-live="polite">
          {popups.map((popup: UiPopup) => (
            <li
              key={popup.id}
              className="ui--popup__item"
              aria-labelledby={`popup-title-${popup.id}`}
            >
              <article>
                <header id={`popup-title-${popup.id}`}>{popup.title}</header>
                <div>{popup.Component()}</div>
              </article>
            </li>
          ))}
        </ul>
        <div className="button__container">
          <button onClick={clearPopups} aria-label="Close all popups">
            Close
          </button>
        </div>
      </div>
    </section>
  );
}
