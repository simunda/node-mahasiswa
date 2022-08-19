import { DosenWhereInput } from "./DosenWhereInput";
import { DosenOrderByInput } from "./DosenOrderByInput";

export type DosenFindManyArgs = {
  where?: DosenWhereInput;
  orderBy?: Array<DosenOrderByInput>;
  skip?: number;
  take?: number;
};
