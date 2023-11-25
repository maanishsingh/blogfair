import { Helmet } from "react-helmet"

const PageTitle = ({ children }) => {
    return (
        <Helmet>
            <title>{children} | BlogFair</title>
        </Helmet>
    )
}
export default PageTitle