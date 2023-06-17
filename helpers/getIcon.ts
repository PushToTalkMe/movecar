export const getIcon = (category: string) => {
  if (category === "Пассажирский") {
    return require("../assets/car_sedan.png");
  } else if (category === "Грузовой") {
    return require("../assets/car_truck.png");
  } else {
    return require("../assets/car_camping.png");
  }
};
