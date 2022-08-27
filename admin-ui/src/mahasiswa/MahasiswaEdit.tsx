import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DosenTitle } from "../dosen/DosenTitle";

export const MahasiswaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Nama" source="nama" />
        <ReferenceInput source="dosen.id" reference="Dosen" label="nidns">
          <SelectInput optionText={DosenTitle} />
        </ReferenceInput>
        <TextInput label="npm" source="npm" />
      </SimpleForm>
    </Edit>
  );
};
