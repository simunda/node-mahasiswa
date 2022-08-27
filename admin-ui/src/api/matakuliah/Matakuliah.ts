import { Dosen } from "../dosen/Dosen";

export type Matakuliah = {
  createdAt: Date;
  dosenpengampu?: Dosen | null;
  id: string;
  kodemk: string;
  namaMatakuliah: string | null;
  updatedAt: Date;
};
