import { Mahasiswa } from "../mahasiswa/Mahasiswa";

export type Dosen = {
  createdAt: Date;
  id: string;
  mahasiswa: string | null;
  namaDosen: string | null;
  nidn?: Array<Mahasiswa>;
  updatedAt: Date;
};
