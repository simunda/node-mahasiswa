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

export const MatakuliahEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
