import { StringFilter } from "../../util/StringFilter";
import { DosenListRelationFilter } from "../dosen/DosenListRelationFilter";

export type MahasiswaWhereInput = {
  id?: StringFilter;
  namaMahasiswa?: StringFilter;
  nidnDosen?: DosenListRelationFilter;
  npm?: StringFilter;
};
