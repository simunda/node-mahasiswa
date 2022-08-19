import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DosenService } from "./dosen.service";
import { DosenControllerBase } from "./base/dosen.controller.base";

@swagger.ApiTags("dosens")
@common.Controller("dosens")
export class DosenController extends DosenControllerBase {
  constructor(
    protected readonly service: DosenService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
