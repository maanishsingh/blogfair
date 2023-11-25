import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Card, CardBody, CardText, Container } from "reactstrap"
import Base from "../components/Base"
import { loadSinglePost } from "../services/post-service"
import BlogHeader from "../components/blog/BlogHeader"
import Blog from "../components/blog/Blog"

const BlogPage = () => {
    const { postId } = useParams()

    const [post, setPost] = useState({})

    useEffect(() => {
        getPost()
    }, [])

    const getPost = () => {
        loadSinglePost(postId).then(post => {
            setPost(post);
            console.log(post)
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <Base>
            <BlogHeader blog={post} />
            <Blog blog={post} />
            {/* <div className="w-full">

            </div>
            <Container>
                <div className="my-3"><h4>Home / {post.postTitle}</h4></div>
                <Card>
                    <CardBody>

                        <div className="mb-3">
                            <p className="my-0">Posted by <b>{post?.user?.name}</b></p>
                            <small>Posted on {"2/5/22"}</small>
                        </div>

                        <h1>{post.postTitle}</h1>
                        <hr />

                        <CardText dangerouslySetInnerHTML={{ __html: post.postContent }}></CardText>
                    </CardBody>
                </Card>
            </Container>

            <Container className="mt-3">
                <h3>Comments({post?.comments?.length})</h3>
                {post?.comments?.map(comment => (
                    <Card color="light" className="mt-1 rounded-0" key={comment.id}>
                        <CardBody>
                            <p className="my-0">{comment.user.name}</p>
                            <small>{comment.date}</small>
                            <h3>{comment.content}</h3>
                        </CardBody>
                    </Card>
                ))}
            </Container> */}
        </Base>
    )
}

export default BlogPage