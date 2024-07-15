

export const getData = ({FilterByGender,FilterBy,titleSortBy,page,setTotalProduct,limit}) =>{


    if(FilterBy !== null){
        return fetch(`http://localhost:4000/employee?department=${FilterBy}&_sort=name&_order=${titleSortBy}&_page=${page}&_limit=${limit}`)
        .then(res=>{
            setTotalProduct(Number(res.headers.get("X-Total-Count")))
            return res.json()
        })

    }

    if(FilterByGender !== null){
        return fetch(`http://localhost:4000/employee?gender=${FilterByGender}&_sort=name&_order=${titleSortBy}&_page=${page}&_limit=${limit}`)
        .then(res=>{
            setTotalProduct(Number(res.headers.get("X-Total-Count")))
            return res.json()
        })
    }


    return fetch(`http://localhost:4000/employee?_sort=name&_order=${titleSortBy}&_page=${page}&_limit=${limit}`)
    .then(res=>{
        setTotalProduct(Number(res.headers.get("X-Total-Count")))
        return res.json()
    })

}

//fetch(`http://localhost:4000/employee?department=Back_End&_sort=name&_order=${titleSortBy}&_page=${page}&_limit=${limit}`
// http://localhost:4000/employee?gender=Female

export const addDataToJson = (userData) =>{

    return fetch("http://localhost:4000/employee",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(userData)
    })
    .then(res=>res.json())
}

export const DeletDataFromJson = (id) =>{

    return fetch(`http://localhost:4000/employee/${id}`,{
        method : "DELETE",
        headers : {
            "Content-Type" : "application/json"
        },
  
    }) 
    .then(res=>res.json())
}


export const UpdateDataToJson = (id, newData) =>{

    return fetch(`http://localhost:4000/employee/${id}`,{
        method : "PATCH",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(newData)
    })
    .then(res=>res.json())
}

// json-server --watch db.json --port 4000 

// https://www.whatsappimages.in/wp-content/uploads/2022/03/Sweet-Cute-Girl-Pics-Images-Download.jpg

