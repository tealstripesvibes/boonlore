// Import the API key from environment variables
const VITE_SNIPCART_API_KEY = import.meta.env.VITE_SNIPCART_API_KEY;

// Validate that the API key is provided
if (!VITE_SNIPCART_API_KEY) {
  throw new Error(
    "VITE_SNIPCART_API_KEY is not defined in environment variables.",
  );
}

// Configuration settings defined within the file
const SNIPCART_VERSION = "3.7.1";
const SNIPCART_MODAL_STYLE = "side";
const SNIPCART_LOAD_CSS = false;
const SNIPCART_ADD_PRODUCT_BEHAVIOR = "none";
const SNIPCART_DOMAIN = "cdn.snipcart.com";
const SNIPCART_PROTOCOL = "https";
const SNIPCART_TIMEOUT_DURATION = 2750;
const SNIPCART_LOAD_STRATEGY = "default"; // Options: "default" or "on-user-interaction"

// Type declarations for global window object
declare global {
  interface Window {
    SnipcartSettings: SnipcartSettings;
    LoadSnipcart: () => void;
    Snipcart: any;
  }
}

// Define the SnipcartSettings interface for better type safety
interface SnipcartSettings {
  publicApiKey: string;
  modalStyle: string;
  loadCSS: boolean;
  addProductBehavior: string;
  version: string;
  timeoutDuration: number;
  domain: string;
  protocol: string;
  loadStrategy?: string;
  currency?: string;
  templatesUrl?: string;
}

export function initShoppingExperience() {
  // Initialize Snipcart settings with environment variable and internal configurations
  window.SnipcartSettings = {
    publicApiKey: VITE_SNIPCART_API_KEY,
    modalStyle: SNIPCART_MODAL_STYLE,
    loadCSS: SNIPCART_LOAD_CSS,
    addProductBehavior: SNIPCART_ADD_PRODUCT_BEHAVIOR,
    version: SNIPCART_VERSION,
    timeoutDuration: SNIPCART_TIMEOUT_DURATION,
    domain: SNIPCART_DOMAIN,
    protocol: SNIPCART_PROTOCOL,
    loadStrategy: SNIPCART_LOAD_STRATEGY, // Optional: Remove if not needed
  };

  initSnipcart();

  function initSnipcart() {
    const settings = window.SnipcartSettings;

    // Set default version if not provided
    settings.version ||= "3.0";

    // Initialize LoadSnipcart
    window.LoadSnipcart = loadSnipcartScript;

    const loadEvents = ["focus", "mouseover", "touchmove", "scroll", "keydown"];
    let isLoaded = false;

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", handleLoad);
    } else {
      handleLoad();
    }

    function handleLoad() {
      if (settings.loadStrategy === "on-user-interaction") {
        loadEvents.forEach((event) =>
          document.addEventListener(event, loadSnipcartScript),
        );
        setTimeout(loadSnipcartScript, settings.timeoutDuration);
      } else {
        loadSnipcartScript();
      }
    }

    function loadSnipcartScript() {
      if (isLoaded) return;
      isLoaded = true;

      const head = document.head;
      let snipcartDiv = document.getElementById(
        "snipcart",
      ) as HTMLElement | null;
      let snipcartScript = document.querySelector<HTMLScriptElement>(
        `script[src^="${settings.protocol}://${settings.domain}"][src$="snipcart.js"]`,
      );
      let snipcartCSS = document.querySelector<HTMLLinkElement>(
        `link[href^="${settings.protocol}://${settings.domain}"][href$="snipcart.css"]`,
      );

      // Create Snipcart div if it doesn't exist
      if (!snipcartDiv) {
        snipcartDiv = document.createElement("div");
        snipcartDiv.id = "snipcart";
        snipcartDiv.setAttribute("hidden", "true");
        document.body.appendChild(snipcartDiv);
      }

      // Set dataset attributes
      setSnipcartDataAttributes(snipcartDiv);

      // Load Snipcart JS
      if (!snipcartScript) {
        snipcartScript = document.createElement("script");
        snipcartScript.src = `${settings.protocol}://${settings.domain}/themes/v${settings.version}/default/snipcart.js`;
        snipcartScript.async = true;
        head.appendChild(snipcartScript);
      }

      // Load Snipcart CSS
      if (!snipcartCSS) {
        snipcartCSS = document.createElement("link");
        snipcartCSS.rel = "stylesheet";
        snipcartCSS.type = "text/css";
        snipcartCSS.href = `${settings.protocol}://${settings.domain}/themes/v${settings.version}/default/snipcart.css`;
        head.prepend(snipcartCSS);
      }

      // Remove event listeners after loading
      loadEvents.forEach((event) =>
        document.removeEventListener(event, loadSnipcartScript),
      );
    }

    function setSnipcartDataAttributes(element: HTMLElement) {
      const settings = window.SnipcartSettings;
      element.dataset.apiKey = settings.publicApiKey;

      if (settings.addProductBehavior) {
        element.dataset.configAddProductBehavior = settings.addProductBehavior;
      }
      if (settings.modalStyle) {
        element.dataset.configModalStyle = settings.modalStyle;
      }
      if (settings.currency) {
        element.dataset.currency = settings.currency;
      }
      if (settings.templatesUrl) {
        element.dataset.templatesUrl = settings.templatesUrl;
      }
    }
  }
}

// Listen for Snipcart ready event
document.addEventListener("snipcart.ready", () => {
  document.body.classList.add("snipcart-ready");
});
