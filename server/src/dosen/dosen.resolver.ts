import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DosenResolverBase } from "./base/dosen.resolver.base";
import { Dosen } from "./base/Dosen";
import { DosenService } from "./dosen.service";

@graphql.Resolver(() => Dosen)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DosenResolver extends DosenResolverBase {
  constructor(
    protected readonly service: DosenService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
