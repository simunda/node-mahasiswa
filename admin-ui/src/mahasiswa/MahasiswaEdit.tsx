import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MahasiswaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="nama" source="nama" />
        <TextInput label="npm" source="npm" />
      </SimpleForm>
    </Edit>
  );
};
