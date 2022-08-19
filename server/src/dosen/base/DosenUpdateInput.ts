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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { MahasiswaUpdateManyWithoutDosensInput } from "./MahasiswaUpdateManyWithoutDosensInput";
import { Type } from "class-transformer";
@InputType()
class DosenUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  mahasiswa?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  namaDosen?: string | null;

  @ApiProperty({
    required: false,
    type: () => MahasiswaUpdateManyWithoutDosensInput,
  })
  @ValidateNested()
  @Type(() => MahasiswaUpdateManyWithoutDosensInput)
  @IsOptional()
  @Field(() => MahasiswaUpdateManyWithoutDosensInput, {
    nullable: true,
  })
  nidn?: MahasiswaUpdateManyWithoutDosensInput;
}
export { DosenUpdateInput };
