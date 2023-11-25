import { useEffect, useState } from "react"
import { doLogout, getCurrentUserDetail, isLogedIn } from "../../../auth"
import { NavLink, useNavigate } from "react-router-dom"

const LoginMenu = () => {
    let navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    const [login, setLogin] = useState(false)
    const [user, setUser] = useState(undefined)



    useEffect(() => {
        setLogin(isLogedIn())
        setUser(getCurrentUserDetail())
    }, [login])

    const logOut = () => {
        doLogout(() => {
            setLogin(false)
            navigate("/")
        })
    }

    return (
        <nav className="flex space-x-5">
            {!login && (
                <>

                    <NavLink to="/login">
                        Login
                    </NavLink>


                    <NavLink to="/signup">
                        Signup
                    </NavLink>

                </>
            )}

            {
                login && (
                    <>

                        <NavLink to="/user/userdashboard">
                            {user?.email}
                        </NavLink>


                        <NavLink onClick={logOut} to={"#"} >
                            Logout
                        </NavLink>

                    </>
                )
            }

        </nav>
    )
}

export default LoginMenu