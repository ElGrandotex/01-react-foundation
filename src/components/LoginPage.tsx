import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store"

export const LoginPage = () => {

    const authStatus = useAuthStore(state => state.status);
    const user = useAuthStore(state => state.user);
    const login = useAuthStore(state => state.login);
    const logout = useAuthStore(state => state.logout);

    useEffect(() => {
        setTimeout(() => {
            logout();
        }, 1500);
    }, [])

    if (authStatus === 'checking') {
        return <h1>Cargando...</h1>
    }

    return (
        <>
            <h3>Login Page</h3>
            {
                (authStatus === 'authenticated')
                    ? <div>Autenticado como: <pre>{JSON.stringify(user, null, 2)}</pre></div>
                    : <div>No autenticado</div>
            }

            {
                (authStatus === 'authenticated')
                ? (
                    <button onClick={logout}>Logout</button>
                )

                :(
                    <button onClick={ () => login('jose@gmail.com', '1234')}>Login</button>
                )
            }
        </>
    )
}
