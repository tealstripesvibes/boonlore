import React from 'react';
import classNames from 'classnames';
import {SiteLogoSvg} from '@core/util/SiteLogoSvg';

interface ButtonParams {
  onClick: () => void;
}

export function Button({onClick}: ButtonParams) {
  return (
    <button onClick={onClick} className={classNames(['bane-button'])}>
      <figure className={classNames([])}>
        <SiteLogoSvg siteName="bane"/>
        <figcaption>[The BaneButton]</figcaption>
      </figure>
    </button>
  );
}
