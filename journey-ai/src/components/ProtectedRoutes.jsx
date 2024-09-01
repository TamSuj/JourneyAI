import { Navigate } from "react-router-dom"


//Proctected route prevents user who haven't login from access to some specific routes
export const ProtectedrRoutes = ({children, user}) => {
    return user ? children : <Navigate to='/'></Navigate>
}
