import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MahasiswaListRelationFilter } from "../mahasiswa/MahasiswaListRelationFilter";

export type DosenWhereInput = {
  id?: StringFilter;
  mahasiswa?: StringNullableFilter;
  namaDosen?: StringNullableFilter;
  nidn?: MahasiswaListRelationFilter;
};
