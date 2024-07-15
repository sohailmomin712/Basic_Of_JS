
export const getTodos = ({titleSortBy,page})=>{

    return fetch(`http://localhost:4000/tasks?_sort=title&_order=${titleSortBy}&_page=${page}&_limit=3`)
    .then(res=>res.json())
 
}

export const addTodoToServer = (item)=>{

  return fetch(`http://localhost:4000/tasks`,{
    method : "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify(item)
  })
  .then(res=>res.json())

}

export  const deletTodosServer = (id) =>{

  return fetch(`http://localhost:4000/tasks/${id}`,{
    method : "DELETE",
    headers : {
      "Content-Type" : "application/json"
    },
  })
  .then(res=>res.json())

 }


export const toggleTodoServer = (id, newStatus) =>{

  return fetch(`http://localhost:4000/tasks/${id}`,{
    method : "PATCH",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify({status: newStatus})
  })
  .then(res=>res.json())

}



export const EditTodoServer = (newText, id)=>{

  return fetch(`http://localhost:4000/tasks/${id}`,{
    method : "PATCH",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify({title: newText})
  })
  .then(res=>res.json())

}


