import express from "express"
import dotenv from "dotenv"
import connectDB from "./confing/db.js"
import cors from "cors"
import userRoute from "./routes/user.route.js";
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 3005
// DataBase Connection 
connectDB();

// user routes 

app.use("/api/user", userRoute);

// home route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})