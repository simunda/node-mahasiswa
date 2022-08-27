import { DosenWhereUniqueInput } from "../dosen/DosenWhereUniqueInput";

export type MahasiswaUpdateInput = {
  nama?: string | null;
  nidns?: DosenWhereUniqueInput | null;
  npm?: string;
};
