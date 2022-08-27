import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DOSEN_TITLE_FIELD } from "../dosen/DosenTitle";

export const MahasiswaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"mahasiswas"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Nama" source="nama" />
        <ReferenceField label="nidns" source="dosen.id" reference="Dosen">
          <TextField source={DOSEN_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="npm" source="npm" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
