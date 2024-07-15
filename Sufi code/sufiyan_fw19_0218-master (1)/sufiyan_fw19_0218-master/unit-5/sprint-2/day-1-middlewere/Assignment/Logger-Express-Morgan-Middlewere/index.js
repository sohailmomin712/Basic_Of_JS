const express=require('express')

const port=8080

const morgan=require('morgan')
 app=express()

app.use(express.json())
app.use(morgan(':date[iso]:method:url:http-version:user-agent:status(:response-time ms)'))


app.get('/health',(req,res)=>{
    const healthResponse={
        statusCode:200,
        message:'OK'
    }
    res.json(healthResponse)
})




app.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
})