async function makeRequest(){
    let res=await fetch("http://example.org/")
    let data=await res.json()
    console.log(data.data)
}
makeRequest()