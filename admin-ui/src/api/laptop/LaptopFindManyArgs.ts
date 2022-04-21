import { LaptopWhereInput } from "./LaptopWhereInput";
import { LaptopOrderByInput } from "./LaptopOrderByInput";

export type LaptopFindManyArgs = {
  where?: LaptopWhereInput;
  orderBy?: Array<LaptopOrderByInput>;
  skip?: number;
  take?: number;
};
