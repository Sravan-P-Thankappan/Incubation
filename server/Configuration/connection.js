const MongoClient = require('mongodb').MongoClient

const state = {
    db:null
}

const connect = ()=>{
     
    let url = 'mongodb://localhost:27017'

    let dataBase = 'incub'
    
    MongoClient.connect(url).then((data)=>{

        state.db = data.db(dataBase)
        console.log('database connected');

    }).catch((err)=>{
        console.log(err);
    })

}

const get =()=>{
    return state.db
}

module.exports = {
    connect,get
}