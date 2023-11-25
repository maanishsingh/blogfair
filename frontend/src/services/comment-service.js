import { getCurrentUserDetail } from "../auth"
import { myAxios, privateAxios } from "./helper"

export const getAllComments = (postId) => {
    return myAxios.get("comments/post/" + postId).then(res => res.data)
}

export const commentOnBlog = (postId, commentDto) => {
    const userId = getCurrentUserDetail().id;
    return privateAxios.post(`api/post/${postId}/comment/user/${userId}`, commentDto).then(res => res.data)
}