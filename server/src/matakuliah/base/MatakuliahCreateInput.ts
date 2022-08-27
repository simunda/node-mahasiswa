/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DosenWhereUniqueInput } from "../../dosen/base/DosenWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class MatakuliahCreateInput {
  @ApiProperty({
    required: false,
    type: () => DosenWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DosenWhereUniqueInput)
  @IsOptional()
  @Field(() => DosenWhereUniqueInput, {
    nullable: true,
  })
  dosenpengampu?: DosenWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  kodemk!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  namaMatakuliah?: string | null;
}
export { MatakuliahCreateInput };