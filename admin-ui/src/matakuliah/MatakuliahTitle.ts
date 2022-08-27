import { Matakuliah as TMatakuliah } from "../api/matakuliah/Matakuliah";

export const MATAKULIAH_TITLE_FIELD = "kodemk";

export const MatakuliahTitle = (record: TMatakuliah): string => {
  return record.kodemk || record.id;
};
