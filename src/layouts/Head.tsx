const appVersionKey = import.meta.env.VITE_APP_VERSION_KEY || "v0.0.1";

const logoPath = `/sites/${appVersionKey}/logo/logo.webp`;
const themeColor = import.meta.env.VITE_THEME_COLOR
  ? `#${import.meta.env.VITE_THEME_COLOR}`
  : "#11abab";
const maskIconColor = import.meta.env.VITE_MASK_ICON_COLOR
  ? `#${import.meta.env.VITE_MASK_ICON_COLOR}`
  : "#11abab";

const isProd = import.meta.env.MODE !== "development";

export default function HeadDefault() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      {isProd && <link rel="icon" href={logoPath} />}
      <link rel="apple-touch-icon" href={logoPath} sizes="180x180" />
      <link rel="mask-icon" href={logoPath} color={maskIconColor} />
      <meta name="theme-color" content={themeColor} />
    </>
  );
}
