import { getCurrentUserDetail } from "../auth"
import { myAxios, privateAxios } from "./helper"

export const doAddPost=(post)=>{
    const userId= getCurrentUserDetail().id
    const url = `api/user/${userId}/category/${post.categoryId}/posts`
    return privateAxios.post(url,post).then(response=>response.data)
}

export const loadAllPosts=(pageNumber=0,pageSize=5)=>{
    const url = `/api/posts?pageNumber=${pageNumber}&pageSize=${pageSize}`
    return myAxios.get(url).then(response=>response.data)
}

export const loadSinglePost=(postId)=>{
    const url = `/api/posts/${postId}`
    return myAxios.get(url).then(response=>response.data)
}