import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { MahasiswaTitle } from "../mahasiswa/MahasiswaTitle";

export const DosenCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Mahasiswa" source="mahasiswa" />
        <TextInput label="nama_dosen" source="namaDosen" />
        <ReferenceArrayInput
          source="nidn"
          reference="Mahasiswa"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MahasiswaTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
