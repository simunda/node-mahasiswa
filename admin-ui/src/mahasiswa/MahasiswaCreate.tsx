import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { DosenTitle } from "../dosen/DosenTitle";

export const MahasiswaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="dosen.id" reference="Dosen" label="dosenpa">
          <SelectInput optionText={DosenTitle} />
        </ReferenceInput>
        <TextInput label="Nama" source="nama" />
        <TextInput label="npm" source="npm" />
      </SimpleForm>
    </Create>
  );
};
