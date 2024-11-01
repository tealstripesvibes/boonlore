interface ImportMetaEnv {
  readonly VITE_PROJECT_NAME: string;
  readonly VITE_DISPOSITION: string;
  readonly VITE_THEME_COLOR: string;
  readonly VITE_MASK_ICON_COLOR: string;
  readonly VITE_SOCIAL_HANDLE_1: string;
  readonly VITE_DOMAIN: string;
  readonly VITE_CHAT_URL: string;
  readonly VITE_SHOP_URL: string;
  readonly VITE_BACKEND_URL: string;
  readonly VITE_APP_VERSION_KEY: string;
  readonly VITE_CACHE_VERSION_KEY: string;
  readonly VITE_SNIPCART_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
