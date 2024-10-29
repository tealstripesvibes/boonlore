export const siteDomain = import.meta.env.VITE_DOMAIN;

function isDev() {
  return import.meta.env.MODE !== "development";
}

export default function HeadDefault() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      {isDev() ? <link rel="icon" href={`/sites/v0.0.1/logo/logo.webp`} /> : ""}
      <link
        rel="apple-touch-icon"
        href={`/sites/v0.0.1/logo/logo.webp`}
        sizes="180x180"
      />
      <link
        rel="mask-icon"
        href={`/sites/v0.0.1/logo/logo.webp`}
        color="#FFFFFF"
      />
      <meta name="theme-color" content="#11abab" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://${siteDomain}`} />
      <meta property="og:image" content={`/sites/v0.0.1/og/og-image.png`} />
      <meta property="og:title" content={`${siteDomain}`} />
      <meta property="og:description" content={`welcome to ${siteDomain}`} />
      <meta name="description" content={`welcome to ${siteDomain}`} />
    </>
  );
}
