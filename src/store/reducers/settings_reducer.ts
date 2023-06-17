import { ISettings } from "../../../interfaces/settings.interface";

const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

const initialState = <ISettings>{
  language: "ru",
};

export const settingsReducer = (
  state = initialState,
  action: { payload: string; type: string }
) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return (state = Object.assign({}, state, {
        language: action.payload,
      }));
    default:
      return state;
  }
};
