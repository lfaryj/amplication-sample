import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { LaptopResolverBase } from "./base/laptop.resolver.base";
import { Laptop } from "./base/Laptop";
import { LaptopService } from "./laptop.service";

@graphql.Resolver(() => Laptop)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class LaptopResolver extends LaptopResolverBase {
  constructor(
    protected readonly service: LaptopService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
