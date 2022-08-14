import { MahasiswaWhereInput } from "./MahasiswaWhereInput";
import { MahasiswaOrderByInput } from "./MahasiswaOrderByInput";

export type MahasiswaFindManyArgs = {
  where?: MahasiswaWhereInput;
  orderBy?: Array<MahasiswaOrderByInput>;
  skip?: number;
  take?: number;
};
