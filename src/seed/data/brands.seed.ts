import { Brand } from "src/brands/entities/brand.entity";
import { v4 as uuid } from "uuid";

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: "Toyota",
    createdAt: new Date().getTime(),
    updatedAt: 0,
  },
  {
    id: uuid(),
    name: "Ford",
    createdAt: new Date().getTime(),
    updatedAt: 0,
  },
  {
    id: uuid(),
    name: "Chevrolet",
    createdAt: new Date().getTime(),
    updatedAt: 0,
  },
  {
    id: uuid(),
    name: "Nissan",
    createdAt: new Date().getTime(),
    updatedAt: 0,
  },
  {
    id: uuid(),
    name: "Volkswagen",
    createdAt: new Date().getTime(),
    updatedAt: 0,
  },
];
