import { DosenWhereUniqueInput } from "../dosen/DosenWhereUniqueInput";

export type MatakuliahUpdateInput = {
  dosenpengampu?: DosenWhereUniqueInput | null;
  kodemk?: string;
  namaMatakuliah?: string | null;
};
