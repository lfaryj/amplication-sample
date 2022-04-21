import { Laptop as TLaptop } from "../api/laptop/Laptop";

export const LAPTOP_TITLE_FIELD = "name";

export const LaptopTitle = (record: TLaptop): string => {
  return record.name || record.id;
};
