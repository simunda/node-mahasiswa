import { DosenWhereUniqueInput } from "../dosen/DosenWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MahasiswaWhereInput = {
  dosenpa?: DosenWhereUniqueInput;
  id?: StringFilter;
  nama?: StringNullableFilter;
  npm?: StringFilter;
};
