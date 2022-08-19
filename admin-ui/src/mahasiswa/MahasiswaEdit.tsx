import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DosenTitle } from "../dosen/DosenTitle";

export const MahasiswaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
