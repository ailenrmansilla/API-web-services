const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

let _db;

const initDb = (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  } // else {
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      _db = client;
      callback(null, _db);
    }).catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

module.exports = {initDb, getDb};

// const MongoClient = require('mongodb').MongoClient;

// async function main(){
//     const uri = "";
//     const client = new MongoClient(uri);
//     try{
//         await client.connect();}
//     catch(e){
//         console.error(e);
//     } finally{
//         await client.close();
//     }
// };

// main().catch(console.error);

