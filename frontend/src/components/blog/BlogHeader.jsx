import { ClockCircleOutlined, MinusOutlined } from "@ant-design/icons"
import "./blog-header.css"
const BlogHeader = ({ blog }) => {
    return (
        <div className="blog-header w-full flex">
            <div className="w-1/12"></div>
            <div className="w-8/12">
                <h1 className="uppercase">{blog?.postTitle} </h1>
                <div className="flex space-x-4 items-center">
                    <small>{blog?.user?.name}  </small>
                    <MinusOutlined />
                    <ClockCircleOutlined />
                    <small>2 minutes read</small>
                </div>

            </div>
        </div>
    )
}
export default BlogHeader