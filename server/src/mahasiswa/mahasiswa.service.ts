import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MahasiswaServiceBase } from "./base/mahasiswa.service.base";

@Injectable()
export class MahasiswaService extends MahasiswaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
