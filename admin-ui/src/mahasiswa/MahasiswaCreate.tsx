import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DosenTitle } from "../dosen/DosenTitle";

export const MahasiswaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Nama" source="nama" />
        <ReferenceInput source="dosen.id" reference="Dosen" label="nidns">
          <SelectInput optionText={DosenTitle} />
        </ReferenceInput>
        <TextInput label="npm" source="npm" />
      </SimpleForm>
    </Create>
  );
};
