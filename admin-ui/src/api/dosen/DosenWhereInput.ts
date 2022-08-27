import { StringFilter } from "../../util/StringFilter";
import { MahasiswaListRelationFilter } from "../mahasiswa/MahasiswaListRelationFilter";
import { MatakuliahListRelationFilter } from "../matakuliah/MatakuliahListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DosenWhereInput = {
  id?: StringFilter;
  mahasiswas?: MahasiswaListRelationFilter;
  matakuliahs?: MatakuliahListRelationFilter;
  nama?: StringNullableFilter;
  nidn?: StringFilter;
};
