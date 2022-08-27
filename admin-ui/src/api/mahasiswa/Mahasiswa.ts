import { Dosen } from "../dosen/Dosen";

export type Mahasiswa = {
  createdAt: Date;
  dosenpa?: Dosen | null;
  id: string;
  nama: string | null;
  npm: string;
  updatedAt: Date;
};
