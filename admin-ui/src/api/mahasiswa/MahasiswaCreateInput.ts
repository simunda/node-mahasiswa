import { DosenCreateNestedManyWithoutMahasiswasInput } from "./DosenCreateNestedManyWithoutMahasiswasInput";

export type MahasiswaCreateInput = {
  namaMahasiswa: string;
  nidnDosen?: DosenCreateNestedManyWithoutMahasiswasInput;
  npm: string;
};
