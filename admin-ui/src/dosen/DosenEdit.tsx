import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { MahasiswaTitle } from "../mahasiswa/MahasiswaTitle";

export const DosenEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="nidn"
          reference="Mahasiswa"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MahasiswaTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
