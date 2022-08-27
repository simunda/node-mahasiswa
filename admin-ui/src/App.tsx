import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { MahasiswaList } from "./mahasiswa/MahasiswaList";
import { MahasiswaCreate } from "./mahasiswa/MahasiswaCreate";
import { MahasiswaEdit } from "./mahasiswa/MahasiswaEdit";
import { MahasiswaShow } from "./mahasiswa/MahasiswaShow";
import { DosenList } from "./dosen/DosenList";
import { DosenCreate } from "./dosen/DosenCreate";
import { DosenEdit } from "./dosen/DosenEdit";
import { DosenShow } from "./dosen/DosenShow";
import { MatakuliahList } from "./matakuliah/MatakuliahList";
import { MatakuliahCreate } from "./matakuliah/MatakuliahCreate";
import { MatakuliahEdit } from "./matakuliah/MatakuliahEdit";
import { MatakuliahShow } from "./matakuliah/MatakuliahShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"node Mahasiswa"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Mahasiswa"
          list={MahasiswaList}
          edit={MahasiswaEdit}
          create={MahasiswaCreate}
          show={MahasiswaShow}
        />
        <Resource
          name="Dosen"
          list={DosenList}
          edit={DosenEdit}
          create={DosenCreate}
          show={DosenShow}
        />
        <Resource
          name="Matakuliah"
          list={MatakuliahList}
          edit={MatakuliahEdit}
          create={MatakuliahCreate}
          show={MatakuliahShow}
        />
      </Admin>
    </div>
  );
};

export default App;
