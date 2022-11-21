const express=require("express")

const axios=require("axios")



const app=express()



app.listen(5000,()=>{

    console.log("Server is running on port 5000")

})



async function getRequest() {

    const config={

        method:"get",

        url:"https://reqres.in/api/users"

    }

    const res=await new axios(config)

    console.log(res.data)

}



// getRequest()



app.get('/async',async(request,response)=>{

    const config={

        method:"get",

        url:"https://reqres.in/api/users"

    }

    const res=await new axios(config)

    response.status(200).json(res.data.data)

})
