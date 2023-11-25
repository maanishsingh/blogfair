import CustomNavbar from "./CustomNavbar";
import PageTitle from "./common/PageTitle";
import TopNavbar from "./common/header/TopNavbar";
import Hero from "./common/hero/Hero";

const Base = ({ title = "welcome to our website", children }) => {
    return (
        <div className="container-fluid p-0 m-0">
            <PageTitle>{title}</PageTitle>
            <TopNavbar />

            {/* <CustomNavbar></CustomNavbar> */}
            {children}

        </div>
    )
}

export default Base;