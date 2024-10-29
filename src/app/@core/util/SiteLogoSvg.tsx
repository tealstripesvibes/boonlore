import { IDispositionName } from "@identities/dispositions/types";
import BoonSvg from "@identities/dispositions/assets/logo/boon/boon-logo.svg?react";
import BaneSvg from "@identities/dispositions/assets/logo/bane/bane-logo.svg?react";
import BoneSvg from "@identities/dispositions/assets/logo/bone/bone-logo.svg?react";
import BonkSvg from "@identities/dispositions/assets/logo/bonk/bonk-logo.svg?react";
import HonkSvg from "@identities/dispositions/assets/logo/honk/honk-logo.svg?react";
import BoofSvg from "@identities/dispositions/assets/logo/boof/boof-logo.svg?react";
import LoreSvg from "@identities/dispositions/assets/logo/lore/lore-logo.svg?react";

interface SiteLogoSvgParams {
  siteName: IDispositionName;
}

export function SiteLogoSvg({ siteName }: SiteLogoSvgParams) {
  switch (siteName || import.meta.env.VITE_SITE_NAME) {
    case "boof":
      return (
        <a href="https://boof.land">
          <BoofSvg />
        </a>
      );
    case "lore":
      return (
        <a href="https://lore.land">
          <LoreSvg />
        </a>
      );
    case "honk":
      return (
        <a href="https://honk.land">
          <HonkSvg />
        </a>
      );
    case "bonk":
      return (
        <a href="https://bonk.land">
          <BonkSvg />
        </a>
      );
    case "bone":
      return (
        <a href="https://bone.land">
          <BoneSvg />
        </a>
      );
    case "bane":
      return (
        <a href="https://bane.land">
          <BaneSvg />
        </a>
      );
    default:
    case "boon":
      return (
        <a href="https://boon.land">
          <BoonSvg />
        </a>
      );
  }
}
