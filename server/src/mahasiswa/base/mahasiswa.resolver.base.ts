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
import { CreateMahasiswaArgs } from "./CreateMahasiswaArgs";
import { UpdateMahasiswaArgs } from "./UpdateMahasiswaArgs";
import { DeleteMahasiswaArgs } from "./DeleteMahasiswaArgs";
import { MahasiswaFindManyArgs } from "./MahasiswaFindManyArgs";
import { MahasiswaFindUniqueArgs } from "./MahasiswaFindUniqueArgs";
import { Mahasiswa } from "./Mahasiswa";
import { Dosen } from "../../dosen/base/Dosen";
import { MahasiswaService } from "../mahasiswa.service";

@graphql.Resolver(() => Mahasiswa)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MahasiswaResolverBase {
  constructor(
    protected readonly service: MahasiswaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Mahasiswa",
    action: "read",
    possession: "any",
  })
  async _mahasiswasMeta(
    @graphql.Args() args: MahasiswaFindManyArgs
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
  @graphql.Query(() => [Mahasiswa])
  @nestAccessControl.UseRoles({
    resource: "Mahasiswa",
    action: "read",
    possession: "any",
  })
  async mahasiswas(
    @graphql.Args() args: MahasiswaFindManyArgs
  ): Promise<Mahasiswa[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Mahasiswa, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Mahasiswa",
    action: "read",
    possession: "own",
  })
  async mahasiswa(
    @graphql.Args() args: MahasiswaFindUniqueArgs
  ): Promise<Mahasiswa | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Mahasiswa)
  @nestAccessControl.UseRoles({
    resource: "Mahasiswa",
    action: "create",
    possession: "any",
  })
  async createMahasiswa(
    @graphql.Args() args: CreateMahasiswaArgs
  ): Promise<Mahasiswa> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        nidns: args.data.nidns
          ? {
              connect: args.data.nidns,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Mahasiswa)
  @nestAccessControl.UseRoles({
    resource: "Mahasiswa",
    action: "update",
    possession: "any",
  })
  async updateMahasiswa(
    @graphql.Args() args: UpdateMahasiswaArgs
  ): Promise<Mahasiswa | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          nidns: args.data.nidns
            ? {
                connect: args.data.nidns,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Mahasiswa)
  @nestAccessControl.UseRoles({
    resource: "Mahasiswa",
    action: "delete",
    possession: "any",
  })
  async deleteMahasiswa(
    @graphql.Args() args: DeleteMahasiswaArgs
  ): Promise<Mahasiswa | null> {
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
  @graphql.ResolveField(() => Dosen, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Dosen",
    action: "read",
    possession: "any",
  })
  async nidns(@graphql.Parent() parent: Mahasiswa): Promise<Dosen | null> {
    const result = await this.service.getNidns(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
