import express from "express"
import connection from "./database/db.js";
 import cors from 'cors'
 import Routes from './routes/routes.js'

const app = express();
app.use(cors()); 
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/',Routes); 

connection();
app.listen(PORT,()=>{console.log(`Your server is running on PORT ${PORT}`)})