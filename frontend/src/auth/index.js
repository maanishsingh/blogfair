//
export const isLogedIn=()=>{
    let data =localStorage.getItem("data")
    if(data != null){
        return true
    }else{
        return false
    }
}


// do login
export const doLogin=(data,next)=>{
    localStorage.setItem("data",JSON.stringify(data))
    next();
}

export const doLogout=(next)=>{
    localStorage.removeItem("data")
    next()
}

export const getCurrentUserDetail=()=>{
    if(isLogedIn()){
        return JSON.parse(localStorage.getItem("data"))?.user;
    }else{
        return undefined
    }
}

export const getToken=()=>{
    if(isLogedIn){
        return JSON.parse(localStorage.getItem("data")).token
    }else{
        return undefined
    }
}