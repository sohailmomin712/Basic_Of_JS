

export const fetchData = ({page,limit})=>{

    return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=${limit}&orderBy=asc`)
    .then(res=>res.json()) 
     
} 