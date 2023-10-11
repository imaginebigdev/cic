import React, { useState } from "react";

import Logueo from "../logeo/Logueo";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import blogApp from "../../fb";
import HomeAdmin from "../home-admin/Home-admin";

const auth = getAuth(blogApp);

const HomeAdminRicky = () => {
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

  onAuthStateChanged(auth, (usuraioAdmin) => {
    if (usuraioAdmin) {
      setUsuarioGlobal(usuraioAdmin);
    } else {
      setUsuarioGlobal(null);
    }
  });
  return (
    <>
      {usuarioGlobal ? (
        <HomeAdmin correoUsuario={usuarioGlobal.email} />
      ) : (
        <Logueo />
      )}
    </>
  );
};

export default HomeAdminRicky;
