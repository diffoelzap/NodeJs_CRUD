import express from "express"
import cors from "cors"
import UserRoute from "./routes/userroute.js"


const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(8000,()=> console.log('Server up and running...'));