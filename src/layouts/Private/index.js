import { useContext } from "react";
import {UserContext} from "../../context/UserContext"
import {Navigate, Outlet} from "react-router-dom"

const Private = () => {
    const {user} = useContext(UserContext);

    //estamos validando si el usuario no existe entonces hacemos
    //que automaticamente la pagina lo redirijira al login
    if (!user) {
        return <Navigate yo="/login" />
    }

    return <Outlet/>
}

export default Private
