//knex connection
const knex = require('knex') ({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'Demo_Project'
    }
});
knex.raw("select 1").then(()=>{
    console.log('db connect')
})
.catch((err) => { console.log( err); });

module.exports=knex;