import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    
    return(
        window.localStorage.getItem("token") ? children : <Navigate to="/Login"/>
    )
}

export default PrivateRoutes