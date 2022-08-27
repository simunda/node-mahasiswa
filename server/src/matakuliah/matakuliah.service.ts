import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MatakuliahServiceBase } from "./base/matakuliah.service.base";

@Injectable()
export class MatakuliahService extends MatakuliahServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
