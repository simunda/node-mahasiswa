import { Dosen as TDosen } from "../api/dosen/Dosen";

export const DOSEN_TITLE_FIELD = "id";

export const DosenTitle = (record: TDosen): string => {
  return record.id || record.id;
};
