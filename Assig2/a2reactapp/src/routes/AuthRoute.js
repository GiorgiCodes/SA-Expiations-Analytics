import { useOutletContext, Navigate } from 'react-router-dom'

function AuthRoute({ children }) {
    const { user } = useOutletContext();    

    if (!user) {
        return <Navigate to="/Login"></Navigate>;
    }
    return children;
}

export default AuthRoute;