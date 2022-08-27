import { MahasiswaUpdateManyWithoutDosensInput } from "./MahasiswaUpdateManyWithoutDosensInput";
import { MatakuliahUpdateManyWithoutDosensInput } from "./MatakuliahUpdateManyWithoutDosensInput";

export type DosenUpdateInput = {
  mahasiswas?: MahasiswaUpdateManyWithoutDosensInput;
  matakuliahs?: MatakuliahUpdateManyWithoutDosensInput;
  nama?: string | null;
  nidn?: string;
};
