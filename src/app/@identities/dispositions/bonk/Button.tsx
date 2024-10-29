import React from 'react';
import classNames from 'classnames';
import {SiteLogoSvg} from '@core/util/SiteLogoSvg';

interface ButtonParams {
  onClick: () => void;
}

export function Button({onClick}: ButtonParams) {
  return (
    <button onClick={onClick} className={classNames(['bonk-button'])}>
      <figure className={classNames([])}>
        <SiteLogoSvg siteName="bonk"/>
        <figcaption>[The BonkButton]</figcaption>
      </figure>
    </button>
  );
}
