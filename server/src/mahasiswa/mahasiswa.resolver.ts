import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { MahasiswaResolverBase } from "./base/mahasiswa.resolver.base";
import { Mahasiswa } from "./base/Mahasiswa";
import { MahasiswaService } from "./mahasiswa.service";

@graphql.Resolver(() => Mahasiswa)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MahasiswaResolver extends MahasiswaResolverBase {
  constructor(
    protected readonly service: MahasiswaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
