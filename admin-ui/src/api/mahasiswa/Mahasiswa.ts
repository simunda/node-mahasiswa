import { Dosen } from "../dosen/Dosen";

export type Mahasiswa = {
  createdAt: Date;
  id: string;
  namaMahasiswa: string;
  nidnDosen?: Array<Dosen>;
  npm: string;
  updatedAt: Date;
};
