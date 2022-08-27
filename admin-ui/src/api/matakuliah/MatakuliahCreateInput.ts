import { DosenWhereUniqueInput } from "../dosen/DosenWhereUniqueInput";

export type MatakuliahCreateInput = {
  dosenpengampu?: DosenWhereUniqueInput | null;
  kodemk: string;
  namaMatakuliah?: string | null;
};
