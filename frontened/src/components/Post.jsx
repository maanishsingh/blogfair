import { Link } from "react-router-dom"
import { Card, CardBody, CardText } from "reactstrap"
const Post=({post={postTitle:"This is post title",postContent:"This is post content"}})=>{
    return(
        <Card>
        <CardBody>
            <h1>{post.postTitle}</h1>
            <CardText>
            <span dangerouslySetInnerHTML={{__html:post.postContent.substring(0,30)+"... "}} ></span>
            <Link to={'/post/'+post.postId} className="text-dark">
            <b>read more</b>
            </Link>
            </CardText>
        </CardBody>
    </Card>
    )
}

export default Post