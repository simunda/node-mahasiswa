import { Dosen as TDosen } from "../api/dosen/Dosen";

export const DOSEN_TITLE_FIELD = "mahasiswa";

export const DosenTitle = (record: TDosen): string => {
  return record.mahasiswa || record.id;
};
