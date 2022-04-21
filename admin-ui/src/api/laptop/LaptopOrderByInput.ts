import { SortOrder } from "../../util/SortOrder";

export type LaptopOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};
