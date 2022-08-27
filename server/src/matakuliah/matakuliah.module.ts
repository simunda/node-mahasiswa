import { Module } from "@nestjs/common";
import { MatakuliahModuleBase } from "./base/matakuliah.module.base";
import { MatakuliahService } from "./matakuliah.service";
import { MatakuliahController } from "./matakuliah.controller";
import { MatakuliahResolver } from "./matakuliah.resolver";

@Module({
  imports: [MatakuliahModuleBase],
  controllers: [MatakuliahController],
  providers: [MatakuliahService, MatakuliahResolver],
  exports: [MatakuliahService],
})
export class MatakuliahModule {}
