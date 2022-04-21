import { Module } from "@nestjs/common";
import { LaptopModuleBase } from "./base/laptop.module.base";
import { LaptopService } from "./laptop.service";
import { LaptopController } from "./laptop.controller";
import { LaptopResolver } from "./laptop.resolver";

@Module({
  imports: [LaptopModuleBase],
  controllers: [LaptopController],
  providers: [LaptopService, LaptopResolver],
  exports: [LaptopService],
})
export class LaptopModule {}
