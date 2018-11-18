import * as actionTypes from "../actionTypes";
// import _ from "lodash";

const initialState = { location: "Homepage", color: "blue" };

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case `${actionTypes.DISPLAY_ITEM}`:
      return {
        ...state,
        location: action.payload.menuItem,
        color: action.payload.color
      };

    default:
      return state;
  }
}
