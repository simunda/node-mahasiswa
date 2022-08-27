import { DosenWhereUniqueInput } from "../dosen/DosenWhereUniqueInput";

export type MahasiswaCreateInput = {
  nama?: string | null;
  nidns?: DosenWhereUniqueInput | null;
  npm: string;
};
