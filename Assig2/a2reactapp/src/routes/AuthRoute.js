import { useOutletContext, Navigate } from 'react-router-dom'

function AuthRoute({ route }) {
    const { user } = useOutletContext();

    if (!user) {
        return <Navigate to="/Login"></Navigate>;
    }
    return route;
}

export default AuthRoute;