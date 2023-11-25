import { myAxios } from "./helper"

export const getAllCategories=()=>{
    return myAxios.get('api/categories/').then(category=>category.data)
}