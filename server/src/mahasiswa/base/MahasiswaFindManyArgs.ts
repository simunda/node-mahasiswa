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
import { MahasiswaWhereInput } from "./MahasiswaWhereInput";
import { Type } from "class-transformer";
import { MahasiswaOrderByInput } from "./MahasiswaOrderByInput";

@ArgsType()
class MahasiswaFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MahasiswaWhereInput,
  })
  @Field(() => MahasiswaWhereInput, { nullable: true })
  @Type(() => MahasiswaWhereInput)
  where?: MahasiswaWhereInput;

  @ApiProperty({
    required: false,
    type: [MahasiswaOrderByInput],
  })
  @Field(() => [MahasiswaOrderByInput], { nullable: true })
  @Type(() => MahasiswaOrderByInput)
  orderBy?: Array<MahasiswaOrderByInput>;

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

export { MahasiswaFindManyArgs };
