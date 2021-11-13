// requires
import express  from 'express'
import mongoose  from 'mongoose'
import router  from './routes/index.js'
import cors from 'cors'

//connection mongodb
mongoose.connect('mongodb://localhost:27017/wpu', {
    useNewUrlParser : true,
    useUnifiedTopology : true})
    .then((result) => {
        console.info('mongodb is connected')
    }).catch((err) => {
        console.info('cant connect to mongodb', err.message)
    })

// set express
const app = express()

// middleware
app.use(cors())
app.use(express.json()) // menerima data dari body dengan format json 

// route end point
app.use('/product', router)




app.listen(3000, () => {
    console.info('server running at http://localhost:3000')
})
