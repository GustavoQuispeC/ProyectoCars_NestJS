import { Car } from "./../../cars/interfaces/car.interface";
import { v4 as uuid } from "uuid";

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: "Toyota",
    model: "Corolla",
  },
  {
    id: uuid(),
    brand: "Ford",
    model: "Fiesta",
  },
  {
    id: uuid(),
    brand: "Chevrolet",
    model: "Camaro",
  },
  {
    id: uuid(),
    brand: "Nissan",
    model: "Sentra",
  },
  {
    id: uuid(),
    brand: "Volkswagen",
    model: "Jetta",
  },
];
