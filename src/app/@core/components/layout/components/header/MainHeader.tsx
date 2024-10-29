import "./styles/_header.scss";
import { DispositionEmblem } from "@core/components/layout/components/logo/DispositionEmblem";
import { MainNavigation } from "@core/components/layout/components/navigation/MainNavigation";
import React from "react";

export function MainHeader() {
  return (
    <header className="main-header">
      <DispositionEmblem />
      <MainNavigation />
    </header>
  );
}
