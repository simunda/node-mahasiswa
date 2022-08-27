import { Dosen } from "../dosen/Dosen";

export type Mahasiswa = {
  createdAt: Date;
  id: string;
  nama: string | null;
  nidns?: Dosen | null;
  npm: string;
  updatedAt: Date;
};
