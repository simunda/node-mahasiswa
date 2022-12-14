import { Mahasiswa as TMahasiswa } from "../api/mahasiswa/Mahasiswa";

export const MAHASISWA_TITLE_FIELD = "nama";

export const MahasiswaTitle = (record: TMahasiswa): string => {
  return record.nama || record.id;
};
