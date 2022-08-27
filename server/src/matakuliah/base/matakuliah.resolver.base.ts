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
import { CreateMatakuliahArgs } from "./CreateMatakuliahArgs";
import { UpdateMatakuliahArgs } from "./UpdateMatakuliahArgs";
import { DeleteMatakuliahArgs } from "./DeleteMatakuliahArgs";
import { MatakuliahFindManyArgs } from "./MatakuliahFindManyArgs";
import { MatakuliahFindUniqueArgs } from "./MatakuliahFindUniqueArgs";
import { Matakuliah } from "./Matakuliah";
import { Dosen } from "../../dosen/base/Dosen";
import { MatakuliahService } from "../matakuliah.service";

@graphql.Resolver(() => Matakuliah)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MatakuliahResolverBase {
  constructor(
    protected readonly service: MatakuliahService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Matakuliah",
    action: "read",
    possession: "any",
  })
  async _matakuliahsMeta(
    @graphql.Args() args: MatakuliahFindManyArgs
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
  @graphql.Query(() => [Matakuliah])
  @nestAccessControl.UseRoles({
    resource: "Matakuliah",
    action: "read",
    possession: "any",
  })
  async matakuliahs(
    @graphql.Args() args: MatakuliahFindManyArgs
  ): Promise<Matakuliah[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Matakuliah, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Matakuliah",
    action: "read",
    possession: "own",
  })
  async matakuliah(
    @graphql.Args() args: MatakuliahFindUniqueArgs
  ): Promise<Matakuliah | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Matakuliah)
  @nestAccessControl.UseRoles({
    resource: "Matakuliah",
    action: "create",
    possession: "any",
  })
  async createMatakuliah(
    @graphql.Args() args: CreateMatakuliahArgs
  ): Promise<Matakuliah> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        dosenpengampu: args.data.dosenpengampu
          ? {
              connect: args.data.dosenpengampu,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Matakuliah)
  @nestAccessControl.UseRoles({
    resource: "Matakuliah",
    action: "update",
    possession: "any",
  })
  async updateMatakuliah(
    @graphql.Args() args: UpdateMatakuliahArgs
  ): Promise<Matakuliah | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          dosenpengampu: args.data.dosenpengampu
            ? {
                connect: args.data.dosenpengampu,
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

  @graphql.Mutation(() => Matakuliah)
  @nestAccessControl.UseRoles({
    resource: "Matakuliah",
    action: "delete",
    possession: "any",
  })
  async deleteMatakuliah(
    @graphql.Args() args: DeleteMatakuliahArgs
  ): Promise<Matakuliah | null> {
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
  async dosenpengampu(
    @graphql.Parent() parent: Matakuliah
  ): Promise<Dosen | null> {
    const result = await this.service.getDosenpengampu(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
