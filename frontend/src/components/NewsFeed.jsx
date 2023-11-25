import { useEffect, useState } from "react"
import { Container, Pagination, PaginationItem, PaginationLink } from "reactstrap"

import { loadAllPosts } from "../services/post-service"
import Post from "./Post"
import PIC from "./../assets/images/cover.jpeg"
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, MinusOutlined, ShareAltOutlined } from "@ant-design/icons"
import { Avatar } from "antd"
import { useNavigate } from "react-router-dom"

const NewsFeed = () => {
    let navigate = useNavigate()
    const [data, setData] = useState({
        content: [],
        lastpage: false,
        pageNumber: '',
        pageSize: '',
        totalElements: '',
        totalPages: ''

    })
    useEffect(() => {
        changePage()

    }, [])

    const changePage = (pageNumber = 0, pageSize = 5) => {
        // console.log(pageNumber,pageSize)
        loadAllPosts(pageNumber).then(content => {
            setData(content)
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className=" w-full px-[80px]">
            <div className="flex justify-end items-center">
                <div className="flex space-x-3">
                    <button className="flex items-center" ><FacebookOutlined /> facebook</button>
                    <button className="flex items-center"><InstagramOutlined /> instagram</button>
                    <button className="flex items-center"><LinkedinOutlined /> linkedin</button>
                </div>
            </div>
            <div className=" mt-5 grid grid-cols-3 gap-4">
                {data.content.map(post => (


                    <div className="w-2/3">
                        <img className="w-[560px]" src={PIC} alt="post image" />
                        <h2 className="text-xs]" >{post?.postTitle}</h2>
                        <div className="flex justify-between">
                            <div className="flex items-center">


                                <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${1}`}  ></Avatar>
                                <small>{post?.user?.name}</small>
                            </div>
                            <div className="flex space-x-1 items-center">
                                <MinusOutlined />
                                <small>25 JUne</small>
                            </div>
                            <div className="flex space-x-1 items-center">
                                <ShareAltOutlined />
                                <small>1K Share</small>
                            </div>

                        </div>
                        <div style={{ cursor: "pointer", textAlign: "justify" }} onClick={() => navigate("post/" + post.postId)} className="mt-2 pointer">
                            <div dangerouslySetInnerHTML={{ __html: post.postContent.substring(0, 140) }}></div>
                        </div>
                    </div>
                ))}



            </div>




            <Pagination className="mt-3" size="lg">
                <PaginationItem disabled={data.pageNumber == 0} onClick={() => changePage(data.pageNumber - 1)}>
                    <PaginationLink previous>Previous</PaginationLink>
                </PaginationItem >
                {[...Array(data.totalPages)].map((value, index) => (
                    <PaginationItem onClick={() => changePage(index)} active={data.pageNumber == index}>
                        <PaginationLink>{index + 1}</PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem disabled={data.lastpage} onClick={() => changePage(data.pageNumber + 1)}>
                    <PaginationLink next>Next</PaginationLink>
                </PaginationItem>
            </Pagination>
        </div>

        // </Container>
    )
}
export default NewsFeed