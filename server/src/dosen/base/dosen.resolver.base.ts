/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateDosenArgs } from "./CreateDosenArgs";
import { UpdateDosenArgs } from "./UpdateDosenArgs";
import { DeleteDosenArgs } from "./DeleteDosenArgs";
import { DosenFindManyArgs } from "./DosenFindManyArgs";
import { DosenFindUniqueArgs } from "./DosenFindUniqueArgs";
import { Dosen } from "./Dosen";
import { MahasiswaFindManyArgs } from "../../mahasiswa/base/MahasiswaFindManyArgs";
import { Mahasiswa } from "../../mahasiswa/base/Mahasiswa";
import { MatakuliahFindManyArgs } from "../../matakuliah/base/MatakuliahFindManyArgs";
import { Matakuliah } from "../../matakuliah/base/Matakuliah";
import { DosenService } from "../dosen.service";

@graphql.Resolver(() => Dosen)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DosenResolverBase {
  constructor(
    protected readonly service: DosenService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Dosen",
    action: "read",
    possession: "any",
  })
  async _dosensMeta(
    @graphql.Args() args: DosenFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Dosen])
  @nestAccessControl.UseRoles({
    resource: "Dosen",
    action: "read",
    possession: "any",
  })
  async dosens(@graphql.Args() args: DosenFindManyArgs): Promise<Dosen[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Dosen, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Dosen",
    action: "read",
    possession: "own",
  })
  async dosen(
    @graphql.Args() args: DosenFindUniqueArgs
  ): Promise<Dosen | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Dosen)
  @nestAccessControl.UseRoles({
    resource: "Dosen",
    action: "create",
    possession: "any",
  })
  async createDosen(@graphql.Args() args: CreateDosenArgs): Promise<Dosen> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Dosen)
  @nestAccessControl.UseRoles({
    resource: "Dosen",
    action: "update",
    possession: "any",
  })
  async updateDosen(
    @graphql.Args() args: UpdateDosenArgs
  ): Promise<Dosen | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Dosen)
  @nestAccessControl.UseRoles({
    resource: "Dosen",
    action: "delete",
    possession: "any",
  })
  async deleteDosen(
    @graphql.Args() args: DeleteDosenArgs
  ): Promise<Dosen | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Mahasiswa])
  @nestAccessControl.UseRoles({
    resource: "Mahasiswa",
    action: "read",
    possession: "any",
  })
  async mahasiswas(
    @graphql.Parent() parent: Dosen,
    @graphql.Args() args: MahasiswaFindManyArgs
  ): Promise<Mahasiswa[]> {
    const results = await this.service.findMahasiswas(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Matakuliah])
  @nestAccessControl.UseRoles({
    resource: "Matakuliah",
    action: "read",
    possession: "any",
  })
  async matakuliahs(
    @graphql.Parent() parent: Dosen,
    @graphql.Args() args: MatakuliahFindManyArgs
  ): Promise<Matakuliah[]> {
    const results = await this.service.findMatakuliahs(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
