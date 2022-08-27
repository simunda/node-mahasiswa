import { Mahasiswa } from "../mahasiswa/Mahasiswa";
import { Matakuliah } from "../matakuliah/Matakuliah";

export type Dosen = {
  createdAt: Date;
  id: string;
  mahasiswas?: Array<Mahasiswa>;
  matakuliahs?: Array<Matakuliah>;
  nama: string | null;
  nidn: string;
  updatedAt: Date;
};
