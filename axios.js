//axios
const { default: axios } = require('axios');
let express=require('express');
let app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/api/v1/api-call/',async (req,res)=>{
    let url='http://localhost:4001/api/v1/user/get';
    let fetch=await axios.get(url).catch((err)=>console.log(err));
    console.log(fetch.data);

    return res.send(fetch.data);

})

app.post('/api/v1/api-call/insert/',async (req,res)=>{
    let data=req.body;
    console.log(data);
    let url='http://localhost:4001/api/v1/user/create/';
    let fetch=await axios.post(url,data).catch((err)=>console.log(err));
    console.log(fetch);
    return res.send(fetch.data);

})



app.listen(3021,()=>console.log("server connect.. running on port on 3021"));
