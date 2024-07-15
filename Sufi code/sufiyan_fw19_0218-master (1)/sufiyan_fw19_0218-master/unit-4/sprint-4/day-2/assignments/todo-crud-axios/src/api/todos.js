import axios from "axios"

export const getTodos = ( params = {} ) =>{
    
    return axios.get(`http://localhost:3000/tasks`,{
        params : {
            _page: params.page,
            _limit: params.limit,
            _sort: params.sort,
            _order: params.titleSortBy
        }
    })
   
}
   
export const addTodos = (item) =>{

    return axios.post("http://localhost:3000/tasks",{
        title:item.title,
        status:item.status
    })
   
}


export const toggleTodo = (id, newStatus) =>{

    return fetch(`http://localhost:3000/tasks/${id}`,{
        method : "PATCH",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({status: newStatus})
    })
    .then(res=>res.json())
}

export const deletTodos = (id) =>{

    return axios({
        method: "DELETE",
        baseURL : "http://localhost:3000",
        url: `/tasks/${id}`
    }) 
    .then(res=>res.json())
}



