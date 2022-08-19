/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Mahasiswa, Dosen } from "@prisma/client";

export class MahasiswaServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MahasiswaFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MahasiswaFindManyArgs>
  ): Promise<number> {
    return this.prisma.mahasiswa.count(args);
  }

  async findMany<T extends Prisma.MahasiswaFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MahasiswaFindManyArgs>
  ): Promise<Mahasiswa[]> {
    return this.prisma.mahasiswa.findMany(args);
  }
  async findOne<T extends Prisma.MahasiswaFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MahasiswaFindUniqueArgs>
  ): Promise<Mahasiswa | null> {
    return this.prisma.mahasiswa.findUnique(args);
  }
  async create<T extends Prisma.MahasiswaCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MahasiswaCreateArgs>
  ): Promise<Mahasiswa> {
    return this.prisma.mahasiswa.create<T>(args);
  }
  async update<T extends Prisma.MahasiswaUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MahasiswaUpdateArgs>
  ): Promise<Mahasiswa> {
    return this.prisma.mahasiswa.update<T>(args);
  }
  async delete<T extends Prisma.MahasiswaDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MahasiswaDeleteArgs>
  ): Promise<Mahasiswa> {
    return this.prisma.mahasiswa.delete(args);
  }

  async findNidnDosen(
    parentId: string,
    args: Prisma.DosenFindManyArgs
  ): Promise<Dosen[]> {
    return this.prisma.mahasiswa
      .findUnique({
        where: { id: parentId },
      })
      .nidnDosen(args);
  }
}
