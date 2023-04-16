//imports
const express = require('express')
const { Sequelize } = require('sequelize');
const cors = require('cors');
const userRouter = require('./routes/userRoutes')
const cartRouter = require('./routes/cartRoutes');
const homeRouter = require('./routes/homeRoutes')
const categoryRouter = require('./routes/categoryRoutes');
const productRouter = require('./routes/productRoutes');

//express
const app = express();
app.use(express.json())
app.use(cors())

//sequelize connection
const sequelize = new Sequelize(
    "miniprojectt",
    "root",
    "Apples123mysql",
    {
        host : "localhost",
        dialect : "mysql"
    }
)
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

//Routes 
app.use('/user', userRouter)
app.use('/cart', cartRouter)
app.use('/', homeRouter)
app.use('/category', categoryRouter )
app.use('/product', productRouter)

app.listen(4000)