import React from 'react';
import classNames from 'classnames';
import {SiteLogoSvg} from '@core/util/SiteLogoSvg';

interface ButtonParams {
  onClick: () => void;
}

export function Button({onClick}: ButtonParams) {
  return (
    <button onClick={onClick} className={classNames(['honk-button'])}>
      <figure className={classNames([])}>
        <SiteLogoSvg siteName="honk"/>
        <figcaption>[The HonkButton]</figcaption>
      </figure>
    </button>
  );
}
