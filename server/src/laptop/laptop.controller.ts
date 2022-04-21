import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LaptopService } from "./laptop.service";
import { LaptopControllerBase } from "./base/laptop.controller.base";

@swagger.ApiTags("laptops")
@common.Controller("laptops")
export class LaptopController extends LaptopControllerBase {
  constructor(
    protected readonly service: LaptopService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
