import { DosenWhereUniqueInput } from "../dosen/DosenWhereUniqueInput";

export type MahasiswaCreateInput = {
  dosenpa?: DosenWhereUniqueInput | null;
  nama?: string | null;
  npm: string;
};
