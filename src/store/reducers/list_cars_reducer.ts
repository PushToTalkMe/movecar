import cars from "../../data/data_list_cars.json";
import { IListCars } from "../../../interfaces/list_cars.interface";

const FILTER_CATEGORY = "FILTER_CATEGORY";
const ADD_CATEGORY = "FILTER_CATEGORY";

const initialState = <IListCars>{
  listCars: cars,
  currentCars: [],
  currentCategory: "",
  filterCategory() {
    return {
      ...this,
      currentCars: this.listCars.filter((film: any) =>
        film.category.includes(this.currentCategory)
      ),
    };
  },
};

export const listCarsReducer = (
  state = initialState,
  action: { payload: string; type: string }
) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return (state = Object.assign({}, state, {
        currentCategory: action.payload,
      }));
    case FILTER_CATEGORY:
      return state.filterCategory();
    default:
      return state;
  }
};
