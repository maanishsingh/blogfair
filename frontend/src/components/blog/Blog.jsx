import { ShareAltOutlined } from "@ant-design/icons"
import LatestBlogs from "./LatestBlogs"
import "./blog.css"
import Comments from "../comment/Comments"
import Comment from "../comment/Comment"
const Blog = ({ blog }) => {
    return (
        <div className="flex pt-3 w-full">
            <div className="w-1/12 flex flex-row justify-center items-top">
                <button>
                    <ShareAltOutlined />
                    <br />
                    <small>Share</small>
                </button>


            </div>
            <div className="w-8/12">
                <div className="my-5" dangerouslySetInnerHTML={{ __html: blog.postContent }}></div>
                <Comment blogId={blog.postId} />
                <Comments comments={blog.comments} />
            </div>
            <div className="w-3/12 px-3 flex flex-row justify-end">

                <LatestBlogs />
            </div>

        </div>
    )
}
export default Blog