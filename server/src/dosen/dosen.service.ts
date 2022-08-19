import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DosenServiceBase } from "./base/dosen.service.base";

@Injectable()
export class DosenService extends DosenServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
