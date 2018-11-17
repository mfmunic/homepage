import * as actionTypes from "../actionTypes";

export function menu(menuItem, color) {
  return {
    type: actionTypes.DISPLAY_ITEM,
    payload: { menuItem, color }
  };
}
