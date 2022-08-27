import { StringFilter } from "../../util/StringFilter";
import { MahasiswaListRelationFilter } from "../mahasiswa/MahasiswaListRelationFilter";

export type DosenWhereInput = {
  id?: StringFilter;
  nidn?: MahasiswaListRelationFilter;
};
