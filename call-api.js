//insert data into db
let express=require('express');
let app=express();
let knex=require('./connection');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

async function get_user(){
   let a= await knex('cust').select('*');
   console.log(a)
   return a;
}

async function my_user(param){
    console.log(param)
    let a= await knex('cust').insert(param)
    console.log(a)
    return a;
 }

 async function get_cust(req,res){
   let create=await get_user()
     if(!create){
         return res.send({error:'error'})
     }
     console.log(create)
     return res.send({data:create})
 }
async function create_cust(req,res){
    console.log(req.body)
  let create=await my_user(req.body)
    if(!create){
        return res.send({error:'error'})
    }
    console.log(create)
    return res.send({data:create})
}

app.get('/api/v1/user/get',get_cust);
app.post('/api/v1/user/create',create_cust);

app.listen(4001,()=>console.log('server running on port 3006'));