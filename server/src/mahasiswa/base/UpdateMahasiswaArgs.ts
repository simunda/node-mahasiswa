/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { MahasiswaWhereUniqueInput } from "./MahasiswaWhereUniqueInput";
import { MahasiswaUpdateInput } from "./MahasiswaUpdateInput";

@ArgsType()
class UpdateMahasiswaArgs {
  @Field(() => MahasiswaWhereUniqueInput, { nullable: false })
  where!: MahasiswaWhereUniqueInput;
  @Field(() => MahasiswaUpdateInput, { nullable: false })
  data!: MahasiswaUpdateInput;
}

export { UpdateMahasiswaArgs };