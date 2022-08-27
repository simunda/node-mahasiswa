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

export const MatakuliahCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="dosen.id"
          reference="Dosen"
          label="dosenpengampu"
        >
          <SelectInput optionText={DosenTitle} />
        </ReferenceInput>
        <TextInput label="kodemk" source="kodemk" />
        <TextInput label="nama_matakuliah" source="namaMatakuliah" />
      </SimpleForm>
    </Create>
  );
};
