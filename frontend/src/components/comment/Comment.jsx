import { SendOutlined } from "@ant-design/icons"
import { Button, Col, Row } from "antd"
import TextArea from "antd/es/input/TextArea"
import { useState } from "react"
import { commentOnBlog } from "../../services/comment-service"
import { toast } from "react-toastify"

const Comment = ({ blogId }) => {
    const [commentText, setCommentText] = useState()

    const commentHandler = () => {
        commentOnBlog(blogId, { content: commentText }).then(data => {
            toast.success("your comment added successfully")
        }).catch(error => console.log(error))
    }

    return (
        <div>
            <Row gutter={[10, 0]}>
                <Col span={23}>
                    <TextArea
                        showCount
                        onChange={(event) => setCommentText(event.target.value)}
                        maxLength={100}
                        placeholder="Write your comment"
                        style={{ height: 50 }}
                    />
                </Col>
                <Col span={1}>
                    <Button onClick={() => commentHandler()}>
                        <SendOutlined />
                    </Button>
                </Col>
            </Row>
        </div>
    )
}
export default Comment