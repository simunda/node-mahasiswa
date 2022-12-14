/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Matakuliah, Dosen } from "@prisma/client";

export class MatakuliahServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MatakuliahFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MatakuliahFindManyArgs>
  ): Promise<number> {
    return this.prisma.matakuliah.count(args);
  }

  async findMany<T extends Prisma.MatakuliahFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MatakuliahFindManyArgs>
  ): Promise<Matakuliah[]> {
    return this.prisma.matakuliah.findMany(args);
  }
  async findOne<T extends Prisma.MatakuliahFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MatakuliahFindUniqueArgs>
  ): Promise<Matakuliah | null> {
    return this.prisma.matakuliah.findUnique(args);
  }
  async create<T extends Prisma.MatakuliahCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MatakuliahCreateArgs>
  ): Promise<Matakuliah> {
    return this.prisma.matakuliah.create<T>(args);
  }
  async update<T extends Prisma.MatakuliahUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MatakuliahUpdateArgs>
  ): Promise<Matakuliah> {
    return this.prisma.matakuliah.update<T>(args);
  }
  async delete<T extends Prisma.MatakuliahDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MatakuliahDeleteArgs>
  ): Promise<Matakuliah> {
    return this.prisma.matakuliah.delete(args);
  }

  async getDosenpengampu(parentId: string): Promise<Dosen | null> {
    return this.prisma.matakuliah
      .findUnique({
        where: { id: parentId },
      })
      .dosenpengampu();
  }
}
