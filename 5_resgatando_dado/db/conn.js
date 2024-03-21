const {MongoClient} = require('mongodb')

const uri = "mongodb+srv://weslleywbarros:UniBli123@cluster0.va50zjx.mongodb.net/" // cria a uri que é o protocolo mongo + IP do servidor

// uri do curso: mongodb://localhost:27017/testemongodb2
const client = new MongoClient(uri)

async function run() {
    try {
        await client.connect()
    console.log("Conectadno com o MongoDB")
    } catch(err) {
        console.log(err)
    }
}

run() //Primeiro executo a função. O await vai esperar a conexão para prosseguir

module.exports = client