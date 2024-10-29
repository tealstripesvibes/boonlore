import "./_styles/_page.scss";
import { Helmet } from "react-helmet-async";
import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import { BoonberryPie } from "./components/BoonberryPie";
import { DispositionSwitch } from "@widgets/disposition/Disposition";
import { BaneberryPie } from "./components/BaneberryPie";
import { BoneMarrowPotPie } from "./components/BoneMarrowPotPie";
import { BonkTartlets } from "./components/BonkTartlets";
import { HonkPudding } from "./components/HonkPudding";
import { DispositionEmblem } from "@core/components/layout/components/logo/DispositionEmblem";

export { Page };

function selectHonkOrientation() {
  const day = new Date().getDay();
  return day % 2 === 0 ? "bread pudding" : "savory gratin";
}

function Page() {
  const honk = selectHonkOrientation();
  return (
    <main id="page__recipes">
      <Helmet>
        <title>Recipes</title>
      </Helmet>
      <MainHeader />
      <article>
        <h1>Recipes</h1>
        <nav>
          <ul>
            <li>
              <a href="/recipes/by">Home</a>
            </li>
          </ul>
        </nav>
        <DispositionEmblem />
        <DispositionSwitch
          boon={<BoonberryPie />}
          bane={<BaneberryPie />}
          bone={<BoneMarrowPotPie />}
          bonk={<BonkTartlets />}
          honk={<HonkPudding variation={honk} />}
        />
      </article>
    </main>
  );
}
