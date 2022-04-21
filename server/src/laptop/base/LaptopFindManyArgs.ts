/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LaptopWhereInput } from "./LaptopWhereInput";
import { Type } from "class-transformer";
import { LaptopOrderByInput } from "./LaptopOrderByInput";

@ArgsType()
class LaptopFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LaptopWhereInput,
  })
  @Field(() => LaptopWhereInput, { nullable: true })
  @Type(() => LaptopWhereInput)
  where?: LaptopWhereInput;

  @ApiProperty({
    required: false,
    type: [LaptopOrderByInput],
  })
  @Field(() => [LaptopOrderByInput], { nullable: true })
  @Type(() => LaptopOrderByInput)
  orderBy?: Array<LaptopOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { LaptopFindManyArgs };
