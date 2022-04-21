import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { LaptopServiceBase } from "./base/laptop.service.base";

@Injectable()
export class LaptopService extends LaptopServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
