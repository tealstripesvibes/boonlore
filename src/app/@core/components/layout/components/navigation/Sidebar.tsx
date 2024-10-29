import React, { useState, useEffect } from "react";
import logoUrl from "@identities/dispositions/assets/logo/lore/lore-logo.svg";
import { intrinsicRoutes } from "@identities/routes";
import { usePageContext } from "vike-react/usePageContext";
import { Link } from "@core/components/Link";
import {
  getRouteIntentFilterSync,
  useRouteSubset,
} from "@identities/routes/types/linkConfig";
import {extrinsicRoutes} from "@identities/routes/domains/extrinsicRoutes";

function Logo() {
  const size = 70;
  return (
    <div id="logo">
      <a href={extrinsicRoutes.lore_land.href}>
        <img alt="logo" src={logoUrl} height={size} width={size} />
      </a>
    </div>
  );
}

export function Sidebar() {
  const { urlPathname } = usePageContext(); // Get the current URL path from Vike's page context
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsiveness on the client side
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    handleResize(); // Initialize on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredRoutes = useRouteSubset(intrinsicRoutes);

  return (
    <ToggleableMenu isMobile={isMobile}>
      <Logo />
      <nav>
        {Object.entries(filteredRoutes).map(([key, config]) => (
          <Link
            key={key}
            href={config.href}
            className={urlPathname === config.href ? "active" : ""}
          >
            {config.title}
          </Link>
        ))}
      </nav>
    </ToggleableMenu>
  );
}

type ToggleableMenuProps = {
  children: React.ReactNode;
  isMobile: boolean;
};

function ToggleableMenu({ children, isMobile }: ToggleableMenuProps) {
  const [open, setOpen] = useState(!isMobile);

  useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div id="sidebar" className={`sidebar ${open ? "open" : "closed"}`}>
      {children}
      <button
        onClick={toggleSidebar}
        aria-expanded={open}
        aria-label="Toggle menu"
        className="menu-toggle"
      >
        {open ? "Close Menu" : "Open Menu"}
      </button>
    </div>
  );
}
