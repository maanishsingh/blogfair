import { useEffect, useState } from "react"
import { Container, Pagination, PaginationItem, PaginationLink } from "reactstrap"

import { loadAllPosts } from "../services/post-service"
import Post from "./Post"

const NewsFeed=()=>{
    const [data,setData] = useState({
        content:[],
        lastpage:false,
        pageNumber:'',
        pageSize:'',
        totalElements:'',
        totalPages:''

    })
    useEffect(()=>{
       changePage()
        
    },[])

    const changePage=(pageNumber=0,pageSize=5)=>{
        // console.log(pageNumber,pageSize)
        loadAllPosts(pageNumber).then(content=>{
            setData(content)
        }).catch(error=>{
            console.log(error)
        })
    }

    return(
        <Container>
            <h2 className="my-2">Total Posts ({data.totalElements})</h2>
            {data.content.map(post=>(
                    <Post post={post} key={post.postId} />
            ))}


            <Pagination className="mt-3" size="lg">
                <PaginationItem disabled={data.pageNumber==0} onClick={()=>changePage(data.pageNumber-1)}>
                    <PaginationLink  previous>Previous</PaginationLink>
                </PaginationItem >
                {[...Array(data.totalPages)].map((value,index)=>(
                    <PaginationItem onClick={()=>changePage(index)} active={data.pageNumber==index}>
                    <PaginationLink>{index+1}</PaginationLink>
                </PaginationItem>
                ))}
                <PaginationItem disabled={data.lastpage} onClick={()=>changePage(data.pageNumber+1)}>
                    <PaginationLink  next>Next</PaginationLink>
                </PaginationItem>
            </Pagination>
            
        </Container>
    )
}
export default NewsFeed