const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('colors')
const Pizza = require('./models/pizzaModel')
const PizzaData = require('./data/pizza-data')
const connectDB = require('./config/config')

//config dotenv and mongodb conn file

dotenv.config()
connectDB()

//import data
const importData = async() => {
    try {
        await Pizza.deleteMany()
        const sampleData = PizzaData.map(pizza => {
            return {...pizza}
        })
        await Pizza.insertMany(sampleData)
        console.log("Data Imported".bgGreen.white)
        process.exit()
    } catch (error) {
        console.log(`Error : ${error}`.bgRed.white)
        process.exit(1)
    }
}

const dataDestroy = () => {}

if(process.argv[2] === "-d"){
    dataDestroy()
}
else{
    importData()
}
