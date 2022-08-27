import { DosenWhereUniqueInput } from "../dosen/DosenWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MatakuliahWhereInput = {
  dosenpengampu?: DosenWhereUniqueInput;
  id?: StringFilter;
  kodemk?: StringFilter;
  namaMatakuliah?: StringNullableFilter;
};
