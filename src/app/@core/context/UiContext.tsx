import {
  UiClearPopupsAction,
  UiClosePopupAction,
  UiOpenPopupAction,
  UiPopup,
} from "@core/components/popup/UiPopup";
import { createContext, ReactElement } from "react";

// Define the UiContext state shape
export type UiContextState = {
  dispatch: (action: UiAction) => void;
  popups: UiPopup[];
  openPopup: (popup: UiPopup) => void;
};

// Default context value
export const uiContextDefault: UiContextState = {
  popups: [],
  dispatch: () => {}, // Default to a no-op function
  openPopup: () => {}, // Default to a no-op function
};

// Create the context
export const UiContext = createContext<UiContextState>(uiContextDefault);

// Define the action types
type UiAction = UiOpenPopupAction | UiClosePopupAction | UiClearPopupsAction;

// Reducer function for handling popup-related actions
export function uiReducer(
  state: UiContextState,
  action: UiAction,
): UiContextState {
  switch (action.type) {
    case "open-ui-popup":
      return {
        ...state,
        popups: [
          ...state.popups.filter((popup) => popup.title !== action.popup.title),
          action.popup,
        ],
      };
    case "close-ui-popup":
      return {
        ...state,
        popups: state.popups.filter((popup) => popup.id !== action.id),
      };
    case "clear-ui-popups":
      return {
        ...state,
        popups: [],
      };
    default:
      return state;
  }
}
