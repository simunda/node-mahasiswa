import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { MatakuliahResolverBase } from "./base/matakuliah.resolver.base";
import { Matakuliah } from "./base/Matakuliah";
import { MatakuliahService } from "./matakuliah.service";

@graphql.Resolver(() => Matakuliah)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MatakuliahResolver extends MatakuliahResolverBase {
  constructor(
    protected readonly service: MatakuliahService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
