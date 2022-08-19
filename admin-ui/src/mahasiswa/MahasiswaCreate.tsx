import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DosenTitle } from "../dosen/DosenTitle";

export const MahasiswaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="nama_mahasiswa" source="namaMahasiswa" />
        <ReferenceArrayInput
          source="nidnDosen"
          reference="Dosen"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DosenTitle} />
        </ReferenceArrayInput>
        <TextInput label="npm" source="npm" />
      </SimpleForm>
    </Create>
  );
};
