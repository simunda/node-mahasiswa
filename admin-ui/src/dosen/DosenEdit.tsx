import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { MahasiswaTitle } from "../mahasiswa/MahasiswaTitle";
import { MatakuliahTitle } from "../matakuliah/MatakuliahTitle";

export const DosenEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="mahasiswas"
          reference="Mahasiswa"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MahasiswaTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="matakuliahs"
          reference="Matakuliah"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MatakuliahTitle} />
        </ReferenceArrayInput>
        <TextInput label="nama" source="nama" />
        <TextInput label="nidn" source="nidn" />
      </SimpleForm>
    </Edit>
  );
};
