import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import homeRoutes from './Routes/home.js'
const app = express();

app.use('/home', homeRoutes)
app.use(cors()) //initialised cors for cross-origin-resource-sharing
app.use(bodyParser.json({
    // send parameters for body parser
}))
// app.use(bodyParser.urlencoded({
//     // send parameters for body parser
// }))

const mongoSRV = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox.guehj.mongodb.net/test' //paste your mongodb srv here
const PORT = process.env.PORT || 8000 //using server provided port else using 5000 for localhost

mongoose
    .connect(mongoSRV, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server running at port ${PORT}`)))
    .catch((err) => console.log(err.message))

mongoose.set('useFindAndModify', false)