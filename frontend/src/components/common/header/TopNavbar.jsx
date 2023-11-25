import { NavLink } from 'react-router-dom'
import CategoryMenu from './CategoryMenu'
import './topnavbar.css'
import LoginMenu from './LoginMenu'
const TopNavbar = () => {
    return (
        <div className="top-navbar w-full flex px-5 justify-between items-center">
            <h3>BlogFair</h3>
            <CategoryMenu />
            <LoginMenu />
            {/* <div className='flex space-x-5'>
                <NavLink to={'/login'} >Login</NavLink>
                <NavLink to={'/signup'}>Sign up</NavLink>
            </div> */}
        </div>
    )
}

export default TopNavbar