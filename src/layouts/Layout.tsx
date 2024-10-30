import React from "react";
import { Analytics } from "@features/analytics/initAnalytics";
import { UiStage } from "@core/components/ui/UiStage";
import "../app/@core/styles/app.scss";
import { Sidebar } from "@core/components/layout/components/navigation/Sidebar";
import { DispositionProvider } from "@widgets/disposition/Disposition";
import { Today } from "@widgets/portal/display/Today";

export default LayoutDefault;

function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <DispositionProvider>
      <div id="application-container">
        <UiStage>
          <Analytics />
          <Sidebar />
          <Content>{children}</Content>
          <Today />
        </UiStage>
      </div>
    </DispositionProvider>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-container">
      <div id="page-content">{children}</div>
    </div>
  );
}
