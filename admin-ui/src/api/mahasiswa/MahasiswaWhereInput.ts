import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DosenWhereUniqueInput } from "../dosen/DosenWhereUniqueInput";

export type MahasiswaWhereInput = {
  id?: StringFilter;
  nama?: StringNullableFilter;
  nidns?: DosenWhereUniqueInput;
  npm?: StringFilter;
};
