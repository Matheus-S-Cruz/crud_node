async function connect(){
    const {Pool} = require("pg")
    const pool = new Pool({
        //connectionString: texto contém informações do banco de dados
        connectionString: process.env.CONNECT_STRING
    });
    
    const client = await pool.connect(); //await:pausar a execução assincrona
    console.log("Criou o pool de conexão");

    const res = await client.query("select now()");
    console.log(res.rows[0])
    client.release(); //o sistema está com os requisitos predefinidos

    global.connection = pool;
    return pool.connect();
}
connect();

async function selectCustomers(){
    const client = await connect();
    const res = await client.query("SELECT * FROM clientes");
    return res.rows;
}

module.exports = {
    selectCustomers
}