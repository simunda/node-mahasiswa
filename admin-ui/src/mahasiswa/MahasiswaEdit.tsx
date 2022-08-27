import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { DosenTitle } from "../dosen/DosenTitle";

export const MahasiswaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="dosen.id" reference="Dosen" label="dosenpa">
          <SelectInput optionText={DosenTitle} />
        </ReferenceInput>
        <TextInput label="Nama" source="nama" />
        <TextInput label="npm" source="npm" />
      </SimpleForm>
    </Edit>
  );
};
