import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { DOSEN_TITLE_FIELD } from "../dosen/DosenTitle";

export const MatakuliahShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="dosenpengampu"
          source="dosen.id"
          reference="Dosen"
        >
          <TextField source={DOSEN_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="kodemk" source="kodemk" />
        <TextField label="nama_matakuliah" source="namaMatakuliah" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
