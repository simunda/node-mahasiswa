import { Mahasiswa as TMahasiswa } from "../api/mahasiswa/Mahasiswa";

export const MAHASISWA_TITLE_FIELD = "namaMahasiswa";

export const MahasiswaTitle = (record: TMahasiswa): string => {
  return record.namaMahasiswa || record.id;
};
