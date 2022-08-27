import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DOSEN_TITLE_FIELD } from "./DosenTitle";

export const DosenShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="nama" source="nama" />
        <TextField label="nidn" source="nidn" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Mahasiswa"
          target="DosenId"
          label="mahasiswas"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="dosenpa" source="dosen.id" reference="Dosen">
              <TextField source={DOSEN_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Nama" source="nama" />
            <TextField label="npm" source="npm" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Matakuliah"
          target="DosenId"
          label="matakuliahs"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
