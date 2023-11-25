import { NavLink } from "react-router-dom"

const CategoryMenu = () => {
    return (
        <div className="category-menu flex space-x-5 items-center justify-center">
            <NavLink to="/" >Home</NavLink>


            <NavLink to="/about" >About</NavLink>


            <NavLink to="/contactus" >Contact Us</NavLink>
        </div>
    )
}
export default CategoryMenu