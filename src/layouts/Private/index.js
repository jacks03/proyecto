import { useContext } from "react";
import {UserContext} from "../../context/UserContext"
import {Navigate, Outlet,Link} from "react-router-dom"
import {Button} from "@mui/material"

const Private = () => {
    const {user} = useContext(UserContext);

    //estamos validando si el usuario no existe entonces hacemos
    //que automaticamente la pagina lo redirijira al login
    if (!user) {
        return <Navigate yo="/login" />
    }

    return (
        <>
          <Link to="/perfil">   
            <Button variant="outlined">Perfil</Button>
          </Link>
          <Outlet />
        </>
      );
}

export default Private
