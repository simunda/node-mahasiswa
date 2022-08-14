import { Module } from "@nestjs/common";
import { MahasiswaModuleBase } from "./base/mahasiswa.module.base";
import { MahasiswaService } from "./mahasiswa.service";
import { MahasiswaController } from "./mahasiswa.controller";
import { MahasiswaResolver } from "./mahasiswa.resolver";

@Module({
  imports: [MahasiswaModuleBase],
  controllers: [MahasiswaController],
  providers: [MahasiswaService, MahasiswaResolver],
  exports: [MahasiswaService],
})
export class MahasiswaModule {}
