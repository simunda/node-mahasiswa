import { Module } from "@nestjs/common";
import { DosenModuleBase } from "./base/dosen.module.base";
import { DosenService } from "./dosen.service";
import { DosenController } from "./dosen.controller";
import { DosenResolver } from "./dosen.resolver";

@Module({
  imports: [DosenModuleBase],
  controllers: [DosenController],
  providers: [DosenService, DosenResolver],
  exports: [DosenService],
})
export class DosenModule {}
