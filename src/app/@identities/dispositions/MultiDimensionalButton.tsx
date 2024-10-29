import { IDispositionName } from "@identities/dispositions/types";

import { Button as BoonButton } from "@identities/dispositions/boon/Button";
import { Button as BaneButton } from "@identities/dispositions/bane/Button";
import { Button as BoneButton } from "@identities/dispositions/bone/Button";
import { Button as BonkButton } from "@identities/dispositions/bonk/Button";
import { Button as HonkButton } from "@identities/dispositions/honk/Button";
import { Button as BoofButton } from "@identities/dispositions/boof/Button";
import { Button as LoreButton } from "@identities/dispositions/lore/Button";

interface MultiDimensionalButtonParams {
  site: IDispositionName;
  onClick: () => void;
}
export function MultiDimensionalButton({
  site,
  onClick,
}: MultiDimensionalButtonParams) {
  switch (site) {
    case "boon":
      return <BoonButton onClick={onClick} />;
    case "bane":
      return <BaneButton onClick={onClick} />;
    case "bone":
      return <BoneButton onClick={onClick} />;
    case "bonk":
      return <BonkButton onClick={onClick} />;
    case "honk":
      return <HonkButton onClick={onClick} />;
    case "lore":
      return <LoreButton onClick={onClick} />;
    case "boof":
      return <BoofButton onClick={onClick} />;
  }
}
