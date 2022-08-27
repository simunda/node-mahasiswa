import { Dosen as TDosen } from "../api/dosen/Dosen";

export const DOSEN_TITLE_FIELD = "nama";

export const DosenTitle = (record: TDosen): string => {
  return record.nama || record.id;
};
