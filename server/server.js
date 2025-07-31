import express from "express";
import cors from "cors"
import sequelize  from "./config/db.js";
import routes from "./routes/urlRoutes.js";
import dotenv from "dotenv"

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());

app.use('/',routes)

const port = process.env.PORT;

sequelize.sync().then(()=>{
        console.log("db connected");
        app.listen(port,()=>{
                console.log("started");
        })
        
})