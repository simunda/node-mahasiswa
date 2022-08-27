import { MahasiswaCreateNestedManyWithoutDosensInput } from "./MahasiswaCreateNestedManyWithoutDosensInput";
import { MatakuliahCreateNestedManyWithoutDosensInput } from "./MatakuliahCreateNestedManyWithoutDosensInput";

export type DosenCreateInput = {
  mahasiswas?: MahasiswaCreateNestedManyWithoutDosensInput;
  matakuliahs?: MatakuliahCreateNestedManyWithoutDosensInput;
  nama?: string | null;
  nidn: string;
};
