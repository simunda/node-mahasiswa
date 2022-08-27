import { Mahasiswa } from "../mahasiswa/Mahasiswa";

export type Dosen = {
  createdAt: Date;
  id: string;
  nidn?: Array<Mahasiswa>;
  updatedAt: Date;
};
