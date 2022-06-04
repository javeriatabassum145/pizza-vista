const express = require('express');
const morgan = require('morgan');
require('colors');
const dotenv = require('dotenv');
const path = require('path')
const connectDB = require('./config/config');

//config dotenv
dotenv.config()

//connection mongodb
connectDB()

const app = express();

//middlewares
app.use(express.json())
app.use(morgan('dev'))


//route
app.use('/api/pizzas', require('./routes/pizzaRoute'))
app.use('/api/users', require('./routes/userRoute'))
app.use('/api/orders', require('./routes/orderRoute'))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/frontend/build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend","build","index.html"))
    })
}else{
    app.get("/", (req,res) => {
        res.send("<h1>Hello From Node Server Nodemon</h1>")
    })
}

app.get('/',(req,res)=>{
    res.send("<h1>Hello From Node Server</h1>")
})

const port = process.env.PORT || 8080

app.listen(port, ()=>{
    console.log(`Server is running on ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`.bgMagenta.white)
})
