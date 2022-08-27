import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DOSEN_TITLE_FIELD } from "../dosen/DosenTitle";

export const MatakuliahList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"matakuliahs"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
