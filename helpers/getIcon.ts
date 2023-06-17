//Функция, возвращающая значок в соответствии с типом ТС

export const getIcon = (category: string) => {
  if (category === "Пассажирский" || category === "Passenger") {
    return require("../assets/car_sedan.png");
  } else if (category === "Грузовой" || category === "Freight") {
    return require("../assets/car_truck.png");
  } else {
    return require("../assets/car_camping.png");
  }
};
