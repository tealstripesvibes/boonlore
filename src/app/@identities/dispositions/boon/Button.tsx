import React from 'react';
import classNames from 'classnames';
import {SiteLogoSvg} from '@core/util/SiteLogoSvg';

interface ButtonParams {
  onClick: () => void;
}

export function Button({onClick}: ButtonParams) {
  return (
    <button onClick={onClick} className={classNames(['boon-button'])}>
      <figure className={classNames([])}>
        <SiteLogoSvg siteName="boon"/>
        <figcaption>[The BoonButton]</figcaption>
      </figure>
    </button>
  );
}
