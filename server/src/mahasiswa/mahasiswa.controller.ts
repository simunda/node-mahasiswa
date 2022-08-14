import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MahasiswaService } from "./mahasiswa.service";
import { MahasiswaControllerBase } from "./base/mahasiswa.controller.base";

@swagger.ApiTags("mahasiswas")
@common.Controller("mahasiswas")
export class MahasiswaController extends MahasiswaControllerBase {
  constructor(
    protected readonly service: MahasiswaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
