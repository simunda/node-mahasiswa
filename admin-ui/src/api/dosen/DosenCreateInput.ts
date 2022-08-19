import { MahasiswaCreateNestedManyWithoutDosensInput } from "./MahasiswaCreateNestedManyWithoutDosensInput";

export type DosenCreateInput = {
  mahasiswa?: string | null;
  namaDosen?: string | null;
  nidn?: MahasiswaCreateNestedManyWithoutDosensInput;
};
