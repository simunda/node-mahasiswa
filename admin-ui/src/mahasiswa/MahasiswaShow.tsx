import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { DOSEN_TITLE_FIELD } from "../dosen/DosenTitle";

export const MahasiswaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Nama" source="nama" />
        <ReferenceField label="nidns" source="dosen.id" reference="Dosen">
          <TextField source={DOSEN_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="npm" source="npm" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
