import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MatakuliahService } from "./matakuliah.service";
import { MatakuliahControllerBase } from "./base/matakuliah.controller.base";

@swagger.ApiTags("matakuliahs")
@common.Controller("matakuliahs")
export class MatakuliahController extends MatakuliahControllerBase {
  constructor(
    protected readonly service: MatakuliahService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
