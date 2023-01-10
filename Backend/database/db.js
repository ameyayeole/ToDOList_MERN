import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();
const USERNAME = process.env.DB_username;
const PASSWORD  = process.env.DB_password;


const connection = ()=>{
    const mongoose_URL = `mongodb://${USERNAME}:${PASSWORD}@ac-hafinow-shard-00-00.emhp2g9.mongodb.net:27017,ac-hafinow-shard-00-01.emhp2g9.mongodb.net:27017,ac-hafinow-shard-00-02.emhp2g9.mongodb.net:27017/?ssl=true&replicaSet=atlas-frsjrx-shard-0&authSource=admin&retryWrites=true&w=majority`;
    mongoose.connect(mongoose_URL,{useNewUrlParser:true});
    mongoose.connection.on('connected',()=>{
        console.log('Database connected successfulyy');
    })
    mongoose.connection.on('disconnected',()=>{
        console.log('Database disconnected  ');
    })
    mongoose.connection.on('error',()=>{
        console.log('error while connection database',error.message);
    })
}

export default connection; 




